"use client";

import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface ServiceCardProps {
    title: string;
    description: string;
    status: "active" | "pending" | "inactive" | "development";
    icon: LucideIcon;
    onClick?: () => void;
}

const statusConfig = {
    active: {
        label: "فعال",
        className: "bg-green-500/10 text-green-400 border-green-500/20",
    },
    pending: {
        label: "در حال راه‌اندازی",
        className: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    },
    inactive: {
        label: "غیرفعال",
        className: "bg-slate-500/10 text-slate-400 border-slate-500/20",
    },
    development: {
        label: "در حال توسعه",
        className: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    },
};

export function ServiceCard({ title, description, status, icon: Icon, onClick }: ServiceCardProps) {
    const statusInfo = statusConfig[status];

    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative"
        >
            <Card
                onClick={onClick}
                className="group relative overflow-hidden bg-card/50 border-border/50 backdrop-blur-md cursor-pointer hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300"
            >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300" />

                <CardContent className="relative p-6 space-y-4">
                    {/* Icon + Status */}
                    <div className="flex items-start justify-between">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-xl border border-orange-500/20 transition-transform duration-300"
                        >
                            <Icon className="w-7 h-7 text-orange-400" />
                        </motion.div>

                        <Badge className={statusInfo.className}>{statusInfo.label}</Badge>
                    </div>

                    {/* Title + Description */}
                    <div className="space-y-1">
                        <h3 className="text-foreground font-semibold text-lg">{title}</h3>
                        <p className="text-muted-foreground text-sm">{description}</p>
                    </div>

                    {/* Hover indicator */}
                    <motion.div
                        transition={{ duration: 0.3 }}
                        className="flex items-center gap-2 text-blue-400 text-sm font-medium"
                    >
                        <span>مشاهده و ورود</span>
                        <span>→</span>
                    </motion.div>
                </CardContent>
            </Card>
        </motion.div>
    );
}
