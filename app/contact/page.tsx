"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const ContactItem = [
    {
        name: "Github",
        url: "https://github.com/lyraeth",
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mahsa-nurfarhan-hidayat/",
    },
    {
        name: "Email",
        url: "mailto:nurfarhan52.jobs@gmail.com",
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

export default function Contact() {
    return (
        <section className="max-w-screen-md mx-auto max-sm:px-4 items-center min-h-screen py-8 font-poppins">
            <div className="flex flex-col mt-20">
                <article className="prose prose-md md:prose-xl prose-h6:dark:text-yellow-400 prose-p:dark:text-slate-200 prose-h3:dark:text-yellow-400">
                    <motion.h3
                        initial="hidden"
                        animate="visible"
                        variants={sentenceVariants(0.5)}
                    >
                        Contact Me!
                    </motion.h3>
                    <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={sentenceVariants(0.8)}
                    >
                        If you want to get in touch with me about something or
                        just to say hi, reach out on social media or send me an
                        email.
                    </motion.p>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={sentenceVariants(1.1)}
                        className="flex flex-row gap-2"
                    >
                        {ContactItem.map((contact) => (
                            <Link
                                key={contact.url}
                                href={contact.url}
                                target="_blank"
                            >
                                <Button
                                    variant={"outline"}
                                    className="dark:bg-yellow-400"
                                >
                                    {contact.name}
                                    <span>
                                        <ArrowUpRight />
                                    </span>
                                </Button>
                            </Link>
                        ))}
                    </motion.div>
                </article>
            </div>
        </section>
    );
}
