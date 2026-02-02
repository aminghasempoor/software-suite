"use client"
import React, { useEffect, useState } from "react";

interface GuideSection {
    id: number;
    title: string;
    text: string;
}
const Guid = () => {
    const [guideData, setGuideData] = useState<GuideSection[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/guide-data.json")
            .then((response) => response.json())
            .then((data) => {
                setGuideData(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("خطا در خواندن فایل راهنما:", error);
                setLoading(false);
            });
    }, []);
    if (loading) return <div className="text-center min-h-screen flex items-center justify-center">در حال بارگذاری راهنما...</div>;

    return (
        <div className="min-h-screen bg-background p-6 font-sans text-foreground dir-rtl">
            <div className="mx-auto max-w-3xl space-y-6">
                {/* هدر اصلی */}
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-foreground tracking-tight">راهنمای سیستم</h1>
                    <p className="mt-2 text-muted-foreground">
                        برای استفاده بهینه از سیستم، لطفاً راهنمای زیر را مطالعه فرمایید.
                    </p>
                </div>

                {/* لیست راهنما */}
                <div className="space-y-4">
                    {guideData.map((section) => (
                        <article
                            key={section.id}
                            className="overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-sm"
                        >
                            <div className="flex flex-col space-y-1.5 p-6">
                                <h3 className="text-xl font-semibold leading-none tracking-tight text-primary">
                                    {section.title}
                                </h3>
                            </div>
                            <div className="p-6 pt-0">
                                <p className="text-sm leading-7 text-muted-foreground not-first:mt-6">
                                    {section.text}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>

                {/* بخش دانلود */}
                <div className="mt-8 flex justify-center rounded-lg border border-dashed border-border bg-accent/50 p-8">
                    <div className="text-center">
                        <p className="mb-4 text-sm font-medium text-muted-foreground">
                            برای دسترسی به نسخه کامل و آفلاین راهنما، فایل زیر را دانلود کنید.
                        </p>
                        <a
                            href="/guide.pdf" // نام فایل را در پوشه public اینجا وارد کنید
                            download
                            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        >
                            دانلود فایل راهنما
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Guid;
