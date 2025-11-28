import { Calendar, Inbox, WalletCards, Settings} from "lucide-react";

export function getDashboardSidebarItems(t: (key: string) => string) {
    return [
        {
            title: t("profile"),
            url: "/dashboard",
            icon: Inbox,
        },
        {
            title: t("items"),
            url: "/dashboard/items",
            icon: Calendar,
        },
        {
            title: t("category"),
            url: "/dashboard/categories",
            icon: WalletCards,
        },
        {
            title: t("settings"),
            url: "/dashboard/settings",
            icon: Settings,
        },
    ];
}
