"use client";
import { create } from "zustand";
import axios from "axios";
import { GET_REFRESH_TOKEN, GET_USER_ROUTE } from "@/utils/apiRoutes";

interface User {
    id: number;
    username: string;
    email: string | null;
    first_name: string;
    last_name: string;
    full_name: string;
    role: "admin" | "user" | "manager";
    phone_number: string | null;
    bio: string | null;
    avatar: string | null;
    is_active: boolean;
    is_staff: boolean;
    is_email_verified: boolean;
    date_joined: string;
    updated_at: string;
    last_login: string | null;
    last_activity: string | null;

    user_language?: string;
}


interface UserStoreState {
    isAuth: boolean;
    errorState: boolean;
    userChangedLanguage: boolean;
    initAuthState: boolean;
    accessToken: string | null;
    refreshToken: string | null;
    user: User;

    clearUser: () => void;
    changeUser: (user: User) => void;
    changeUserLanguage: (language: string) => void;
    changeAuthState: (isAuth: boolean) => void;
    changeInitAuth: (initAuthState: boolean) => void;
    changeLanguageState: (userChangedLanguage: boolean) => void;

    clearToken: () => void;
    setToken: (accessToken: string, refreshToken: string) => void;
    refreshAccessToken: () => Promise<void>;

    logout: () => Promise<void>;
    getUser: () => Promise<void>;
    initialize: () => Promise<void>;
}

const useUserStore = create<UserStoreState>((set, get) => ({
    accessToken: typeof window !== "undefined" ? localStorage.getItem("_access_token") : null,
    refreshToken: typeof window !== "undefined" ? localStorage.getItem("_refresh_token") : null,
    isAuth: false,
    userChangedLanguage: false,
    initAuthState: false,
    errorState: false,

    user: {
        id: 0,
        username: "",
        email: null,
        first_name: "",
        last_name: "",
        full_name: "",
        role: "user",
        phone_number: null,
        bio: null,
        avatar: null,
        is_active: false,
        is_staff: false,
        is_email_verified: false,
        date_joined: "",
        updated_at: "",
        last_login: null,
        last_activity: null,
    },


    clearUser: () =>
        set({
            user: {
                id: 0,
                username: "",
                email: null,
                first_name: "",
                last_name: "",
                full_name: "",
                role: "user",
                phone_number: null,
                bio: null,
                avatar: null,
                is_active: false,
                is_staff: false,
                is_email_verified: false,
                date_joined: "",
                updated_at: "",
                last_login: null,
                last_activity: null,
            },
        }),


    changeUser: (user: User) => set({ user }),

    changeUserLanguage: (language: string) =>
        set((state) => ({
            user: { ...state.user, user_language: language },
        })),

    changeAuthState: (isAuth: boolean) => set({ isAuth }),

    changeInitAuth: (initAuthState: boolean) => set({ initAuthState }),

    changeLanguageState: (userChangedLanguage: boolean) => set({ userChangedLanguage }),

    clearToken: () => {
        if (typeof window !== "undefined") {
            localStorage.removeItem("_access_token");
            localStorage.removeItem("_refresh_token");
        }
        set({ accessToken: null, refreshToken: null });
        set({ initAuthState: true });
    },

    setToken: (accessToken: string, refreshToken: string) => {
        if (typeof window !== "undefined") {
            localStorage.setItem("_access_token", accessToken);
            localStorage.setItem("_refresh_token", refreshToken);
        }
        set({ accessToken, refreshToken });
        set({ initAuthState: true });
    },

    refreshAccessToken: async () => {
        const refreshToken = get().refreshToken;
        if (!refreshToken) {
            await get().logout();
            return;
        }

        try {
            const { data } = await axios.post(GET_REFRESH_TOKEN, {
                refresh: refreshToken,
            });

            get().setToken(data.access, refreshToken);
        } catch (error) {
            console.error("Refresh token failed", error);
            await get().logout();
        }
    },

    logout: async () => {
        get().clearUser();
        get().changeAuthState(false);
        get().changeInitAuth(true);
        get().clearToken();
    },

    getUser: async () => {
        const token = get().accessToken;
        if (!token) {
            set({
                isAuth: false,
                initAuthState: true,
                errorState: false,
            });
            return;
        }

        try {
            const { data } = await axios.get(GET_USER_ROUTE, {
                headers: { Authorization: `Bearer ${token}` },
            });
            set({
                user: data.data,
                isAuth: true,
                initAuthState: true,
                errorState: false,
            });
        } catch (error: any) {
            if (axios.isAxiosError(error) && error.response?.status === 401) {
                try {
                    await get().refreshAccessToken();
                    return await get().getUser(); // دوباره تلاش کن
                } catch {
                    // داخل refreshAccessToken هندل میشه
                }
            }

            set({
                isAuth: false,
                initAuthState: true,
                errorState: true,
            });
        }
    },

    initialize: async () => {
        const token = get().accessToken;
        if (!token) {
            get().clearUser();
            get().changeAuthState(false);
            get().changeInitAuth(true);
            get().changeLanguageState(false);
            return;
        }

        await get().getUser();
    },
}));

export default useUserStore;
