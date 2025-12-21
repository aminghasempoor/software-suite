import { Inbox, GitBranch, CheckSquare, FileText, Activity, Database, GitPullRequest, Layers } from "lucide-react";

export function getDashboardSidebarItems(t: (key: string) => string) {
    return [
        {
            title: t("profile"),
            url: "/dashboard",
            icon: Inbox,
        },
    ];
}

export const services = [
    {
        title: "GitLab",
        description: "مدیریت کد و مخزن گیت",
        status: "active" as const,
        href: process.env.NEXT_PUBLIC_GITHUB_URL,
        icon: GitBranch,
    },
    {
        title: "Jira",
        description: "مدیریت پروژه و تسک",
        status: "active" as const,
        href: process.env.NEXT_PUBLIC_JIRA_URL,
        icon: CheckSquare,
    },
    {
        title: "Confluence",
        description: "مستندات و همکاری تیمی",
        status: "pending" as const,
        href: process.env.NEXT_PUBLIC_CONFLUENCE_URL,
        icon: FileText,
    },
    {
        title: "Monitoring (Grafana)",
        description: "نظارت و مانیتورینگ سرویس‌ها",
        status: "development" as const,
        href: process.env.NEXT_PUBLIC_GRAFANA_URL,
        icon: Activity,
    },
    {
        title: "Database as a Service",
        description: "سرویس پایگاه داده مدیریت شده",
        status: "pending" as const,
        href: process.env.NEXT_PUBLIC_DATABASE_URL,
        icon: Database,
    },
    {
        title: "CI/CD",
        description: "پایپ‌لاین یکپارچه‌سازی و استقرار",
        status: "active" as const,
        href: process.env.NEXT_PUBLIC_CICD_URL,
        icon: GitPullRequest,
    },
    {
        title: "Kafka as a Service",
        description: "سرویس پیام‌رسانی کافکا",
        status: "development" as const,
        href: process.env.NEXT_PUBLIC_KAFKA_URL,
        icon: Layers,
    },
];
