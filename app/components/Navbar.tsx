"use client";

import { cn } from "@/lib/utils";
import { Terminal } from "lucide-react";
import { motion } from "motion/react";
import { Nunito } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

const nunito = Nunito({
    weight: "400",
    subsets: ["latin"],
});

const MenuItems = [
    {
        name: "Home",
        url: "/",
    },
    {
        name: "Project",
        url: "/project",
    },
];

export default function Navbar() {
    const path = usePathname();
    return (
        <div className="fixed left-0 right-0">
            <div className={nunito.className}>
                <nav className="max-w-screen-sm mx-auto max-sm:px-4 py-6 backdrop-blur-md">
                    <div className="flex flex-row w-full justify-between">
                        <div className="p-1">
                            <div className="flex flex-row">
                                <p className="text-2xl font-bold">lyraeth</p>
                                <motion.div
                                    whileHover={{ translateY: 2 }}
                                    key="terminal-icon"
                                >
                                    <Terminal className="text-yellow-400 inline-block animate-pulse" />
                                </motion.div>
                            </div>
                        </div>
                        <div className="flex flex-row gap-2 p-1">
                            {MenuItems.map((menu) => (
                                <div key={menu.url} className="p-1">
                                    <Link
                                        href={menu.url}
                                        className={cn(
                                            path === menu.url
                                                ? "text-yellow-400"
                                                : ""
                                        )}
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            key={menu.url}
                                        >
                                            <span>{menu.name}</span>
                                        </motion.div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}
