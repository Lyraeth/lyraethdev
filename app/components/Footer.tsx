"use client";

import { Nunito } from "next/font/google";
import Link from "next/link";

const nunito = Nunito({
    weight: "400",
    subsets: ["latin"],
});

export default function Footer() {
    const date = new Date();
    return (
        <div className={nunito.className}>
            <footer className="max-w-screen-sm mx-auto max-sm:px-4 py-6">
                <div className="flex w-full justify-center">
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
                </div>
            </footer>
        </div>
    );
}
