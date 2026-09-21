import type { Metadata } from "next";
import { geistSans, geistMono } from "@/utilities/fonts";

import "@/styles/main.css";

export const instant = false;

export const metadata: Metadata = {
    title: "Songbird",
    description: "Food Ordering System for a Digital Malaysia",
};

type TLayoutProps = Readonly<{ children: React.ReactNode }>;

const Layout = ({ children }: TLayoutProps) => (
    <html
        lang="en"
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
        <body className="min-h-full flex flex-col">{children}</body>
    </html>
);

export default Layout;
