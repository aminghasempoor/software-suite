import { Calendar, Inbox, WalletCards, Settings,
    GitBranch,
    CheckSquare,
    FileText,
    Activity,
    Database,
    GitPullRequest,
    Layers,} from "lucide-react";

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


export const services = [
    {
        title: "GitLab",
        description: "مدیریت کد و مخزن گیت",
        status: "active" as const,
        icon: GitBranch,
    },
    {
        title: "Jira",
        description: "مدیریت پروژه و تسک",
        status: "active" as const,
        icon: CheckSquare,
    },
    {
        title: "Confluence",
        description: "مستندات و همکاری تیمی",
        status: "pending" as const,
        icon: FileText,
    },
    {
        title: "Monitoring (Grafana)",
        description: "نظارت و مانیتورینگ سرویس‌ها",
        status: "development" as const,
        icon: Activity,
    },
    {
        title: "Database as a Service",
        description: "سرویس پایگاه داده مدیریت شده",
        status: "pending" as const,
        icon: Database,
    },
    {
        title: "CI/CD",
        description: "پایپ‌لاین یکپارچه‌سازی و استقرار",
        status: "active" as const,
        icon: GitPullRequest,
    },
    {
        title: "Kafka as a Service",
        description: "سرویس پیام‌رسانی کافکا",
        status: "development" as const,
        icon: Layers,
    },
];
