import {
    Inbox,
    GitBranch,
    CheckSquare,
    FileText,
    Activity,
    Database,
    GitPullRequest,
    Layers,
    NotepadText,
} from "lucide-react";

export function getDashboardSidebarItems(t: (key: string) => string) {
    return [
        {
            title: t("profile"),
            url: "/dashboard",
            icon: Inbox,
        },
        {
            title: t("guid"),
            url: "/dashboard/guid",
            icon: NotepadText,
        },
    ];
}

interface Service {
    title: string;
    description: string;
    status: "active" | "inactive" | "development" | "pending";
    href: string | undefined;
    icon: React.ComponentType<{ className?: string }>;
}
const GitLabIcon = ({ className }: { className?: string }) => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
        <title>GitLab</title>
        <path
            d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .41.29l2.44 7.51h8.66l2.44-7.51A.43.43 0 0 1 19.18 2a.42.42 0 0 1 .41.29l2.44 7.51 1.22 3.78a.84.84 0 0 1-.3.94z"
            fill="#FC6D26"
        />
        <path d="M12 22.13l-5.33-16.33h10.66z" fill="#E24329" />
        <path d="M12 22.13l5.33-16.33h4.85l-5.33 16.33z" fill="#FCA326" />
        <path d="M12 22.13L6.67 5.8H1.82l5.33 16.33z" fill="#FCA326" />
    </svg>
);

const JiraIcon = ({ className }: { className?: string }) => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
        <title>Jira</title>
        <path d="M11.57 11.57L0 23.14h11.57l5.71-5.71-5.71-5.86z" fill="#0052CC" />
        <path d="M23.14 0L11.57 11.57l5.71 5.86 5.86-5.71V0z" fill="#2684FF" />
        <path d="M11.57 11.57L5.86 17.28l5.71 5.86h11.57l-5.71-5.86-5.86-5.71z" fill="#0052CC" />
    </svg>
);

const ConfluenceIcon = ({ className }: { className?: string }) => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
        <title>Confluence</title>
        <path
            d="M12.002 0c-2.262 0-4.525.864-6.25 2.588a8.834 8.834 0 0 0-2.57 6.25c0 2.262.864 4.525 2.588 6.25l6.232 6.232 6.232-6.232a8.834 8.834 0 0 0 2.57-6.25c0-2.262-.864-4.525-2.588-6.25A8.834 8.834 0 0 0 12.002 0z"
            fill="#0052CC"
        />
        <path d="M12.002 4.8a4.2 4.2 0 1 0 0 8.4 4.2 4.2 0 0 0 0-8.4z" fill="#fff" />
    </svg>
);

const GrafanaIcon = ({ className }: { className?: string }) => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
        <title>Grafana</title>
        <path
            d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.182c5.418 0 9.818 4.4 9.818 9.818 0 5.418-4.4 9.818-9.818 9.818-5.418 0-9.818-4.4-9.818-9.818 0-5.418 4.4-9.818 9.818-9.818z"
            fill="#F46800"
        />
        <path d="M12 5.455c-3.608 0-6.545 2.937-6.545 6.545h6.545V5.455z" fill="#F46800" />
    </svg>
);

const NexusIcon = ({ className }: { className?: string }) => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
        <title>Sonatype Nexus</title>
        <path
            d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
            stroke="#03A9F4"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
        />
    </svg>
);

const ELKIcon = ({ className }: { className?: string }) => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
        <title>ELK Stack</title>
        <path
            d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
            stroke="#FEC514"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
        />
    </svg>
);

export const services: Service[] = [
    {
        title: "GitLab",
        description: "مدیریت کد و مخزن گیت",
        status: "active" as const,
        href: process.env.NEXT_PUBLIC_GITLAB_URL,
        icon: GitLabIcon,
    },
    {
        title: "Jira",
        description: "مدیریت پروژه و تسک‌ها",
        status: "active" as const,
        href: process.env.NEXT_PUBLIC_JIRA_URL,
        icon: JiraIcon,
    },
    {
        title: "Confluence",
        description: "مستندات و ویکی تیمی",
        status: "active" as const,
        href: process.env.NEXT_PUBLIC_CONFLUENCE_URL,
        icon: ConfluenceIcon,
    },
    {
        title: "Monitoring",
        description: "نظارت و مانیتورینگ سرویس‌ها (Grafana)",
        status: "active" as const,
        href: process.env.NEXT_PUBLIC_GRAFANA_URL,
        icon: GrafanaIcon,
    },
    {
        title: "Sonatype Nexus",
        description: "مدیریت مخازن و آرتیفکت‌ها",
        status: "active" as const,
        href: process.env.NEXT_PUBLIC_NEXUS_URL,
        icon: NexusIcon,
    },
    {
        title: "ELK Stack",
        description: "تجمیع و تحلیل لاگ‌ها",
        status: "active" as const,
        href: process.env.NEXT_PUBLIC_ELK_URL,
        icon: ELKIcon,
    },
];
