import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

export const instant = false;

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Songbird",
    description: "Food Ordering System for a Digital Malaysia",
};

type TLayoutProps = Readonly<{children: React.ReactNode}>;

const Layout = ({
    children,
}: TLayoutProps) => (
    <html
        lang="en"
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
        <body className="min-h-full flex flex-col">
            {children}
        </body>
    </html>
)

export default Layout;