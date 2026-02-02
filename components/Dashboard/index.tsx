"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ServiceCard } from "./ShowSoftware";
import { services } from "@/utils/data";

export function DashboardComponent() {
    return (
        <div dir="rtl" className="relative min-h-screen  overflow-hidden">
            {/* Decorative Background Lights */}
            <div className="pointer-events-none fixed inset-0 overflow-hidden">
                <div className="absolute top-40 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-40 left-32 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
            </div>

            <main className="relative z-10 container mx-auto px-6 py-12">
                {/* Page Header */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <h1 className="text-3xl font-semibold text-foreground mb-2">داشبورد سرویس‌ها</h1>
                    <p className="text-muted-foreground mb-8">
                        به پلتفرم مدیریت نرم‌افزار خوش آمدید. لطفاً سرویس مورد نظر خود را انتخاب کنید.
                    </p>
                </motion.div>

                {/* Services */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            <ServiceCard
                                title={service.title}
                                href={service.href as string}
                                description={service.description}
                                status={service.status}
                                icon={service.icon}
                                onClick={() => console.log(`Navigate to ${service.title}`)}
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    <Card className="bg-card/50 backdrop-blur-md border-border/50 shadow-md">
                        <CardContent className="flex items-center justify-between p-6">
                            <div>
                                <p className="text-muted-foreground">سرویس‌های فعال</p>
                                <p className="text-foreground text-lg font-semibold mt-1">5 سرویس</p>
                            </div>
                            <div className="w-12 h-12 bg-green-500/15 rounded-xl flex items-center justify-center">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-card/50 backdrop-blur-md border-border/50 shadow-md">
                        <CardContent className="flex items-center justify-between p-6">
                            <div>
                                <p className="text-muted-foreground">در حال راه‌اندازی</p>
                                <p className="text-foreground text-lg font-semibold mt-1">0 سرویس</p>
                            </div>
                            <div className="w-12 h-12 bg-yellow-500/15 rounded-xl flex items-center justify-center">
                                <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-card/50 backdrop-blur-md border-border/50 shadow-md">
                        <CardContent className="flex items-center justify-between p-6">
                            <div>
                                <p className="text-muted-foreground">در حال توسعه</p>
                                <p className="text-foreground text-lg font-semibold mt-1">0 سرویس</p>
                            </div>
                            <div className="w-12 h-12 bg-blue-500/15 rounded-xl flex items-center justify-center">
                                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </main>

            {/* Footer */}
            <footer className="relative z-10 border-t border-border/40 mt-14">
                <div className="container mx-auto px-6 py-6">
                    <p className="text-center text-muted-foreground">
                        © 2025 سامانه Software Suite — تمامی حقوق محفوظ است.
                    </p>
                </div>
            </footer>
        </div>
    );
}
