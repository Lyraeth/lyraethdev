"use client";

import { ThemeSelector } from "@/components/ThemeSelector";
import Link from "next/link";

export default function Footer() {
    const date = new Date();
    return (
        <footer className="max-w-screen-md mx-auto max-sm:px-4 py-6 font-nunito">
            <div className="flex flex-row w-full justify-between">
                <div className="p-1">
                    <div className="flex flex-row gap-2">
                        <p>&copy; {date.getFullYear()} </p>
                        <span>
                            <Link
                                href={"https://github.com/lyraeth"}
                                className="text-yellow-400"
                            >
                                Lyraeth
                            </Link>
                        </span>
                    </div>
                </div>
                <ThemeSelector />
            </div>
        </footer>
    );
}
