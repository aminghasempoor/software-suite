import React from "react";
import GuidComponent from "@/components/Dashboard/guid";
import { Metadata } from "next";
export const metadata : Metadata = {
    title: "سند راهنما",
};
export default function Settings() {
    return <GuidComponent />;
}
