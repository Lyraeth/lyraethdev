"use client";

import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

const ProjectItem = [
    {
        name: "MyAirdrop",
        tag: "Fullstack web",
        url: "https://github.com/Lyraeth/myairdrop",
        date: "February, 2025",
        statusDeploy: "online",
    },
    {
        name: "Aprelestore",
        tag: "Fullstack web",
        url: "https://github.com/Lyraeth/aprelestore",
        date: "January, 2025",
        statusDeploy: "online",
    },
    {
        name: "FoundYou",
        tag: "Frontend web",
        url: "https://github.com/Lyraeth/foundyou",
        date: "February, 2025",
        statusDeploy: "online",
    },
    {
        name: "CariLawan-API",
        tag: "API",
        url: "https://github.com/Lyraeth/BE-CariLawan",
        date: "May, 2024",
        statusDeploy: "online",
    },
    {
        name: "Br4der-Sneakers-API",
        tag: "API",
        url: "https://github.com/Lyraeth/BE-Br4der-Sneakers",
        date: "Maret, 2024",
        statusDeploy: "offline",
    },
];

const sentenceVariants = (delay: number) => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { delay, duration: 0.3, ease: "easeOut" },
    },
});

const list = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 1,
        },
    },
};

const item = (index: number) => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: index * 0.5,
            duration: 0.3,
            ease: "easeOut",
        },
    },
});

export default function Project() {
    return (
        <section className="max-w-screen-md mx-auto max-sm:px-4 items-center min-h-screen py-8 font-poppins">
            <div className="flex flex-col mt-20">
                <article className="prose prose-md md:prose-xl prose-h6:dark:text-yellow-400 prose-p:dark:text-slate-200 prose-h3:dark:text-yellow-400">
                    <motion.h3
                        initial="hidden"
                        animate="visible"
                        variants={sentenceVariants(0.1)}
                    >
                        My Project
                    </motion.h3>
                    <motion.ol
                        initial="hidden"
                        whileInView="visible"
                        variants={list}
                    >
                        {ProjectItem.map((project, index) => (
                            <motion.li key={project.url} variants={item(index)}>
                                <Link
                                    href={project.url}
                                    target="_blank"
                                    className="no-underline"
                                >
                                    <Card className="hover:bg-accent my-3">
                                        <CardHeader>
                                            <CardTitle>
                                                <div className="flex flex-row gap-2 items-center">
                                                    <h6>{project.name}</h6>
                                                    <p>|</p>
                                                    <p className="text-slate-400 text-sm">
                                                        {project.tag}
                                                    </p>
                                                </div>
                                            </CardTitle>
                                        </CardHeader>
                                        <CardFooter className="flex flex-row w-full justify-between text-sm">
                                            <p>{project.date}</p>
                                            <div className="flex flex-row gap-6">
                                                <div className="flex items-center gap-2">
                                                    <p>Status : </p>
                                                    <span className="relative flex size-3">
                                                        <span
                                                            className={cn(
                                                                "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
                                                                project.statusDeploy ===
                                                                    "online"
                                                                    ? "bg-green-400"
                                                                    : "bg-red-400"
                                                            )}
                                                        >
                                                            <span
                                                                className={cn(
                                                                    "relative inline-flex size-3 rounded-full",
                                                                    project.statusDeploy ===
                                                                        "online"
                                                                        ? "bg-green-500"
                                                                        : "bg-red-500"
                                                                )}
                                                            ></span>
                                                        </span>
                                                    </span>
                                                    <p>
                                                        {project.statusDeploy}
                                                    </p>
                                                </div>
                                            </div>
                                        </CardFooter>
                                    </Card>
                                </Link>
                            </motion.li>
                        ))}
                    </motion.ol>
                </article>
            </div>
        </section>
    );
}
