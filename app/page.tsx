"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const sentenceVariants = (delay: number) => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { delay, duration: 0.3, ease: "easeOut" },
    },
});

export default function Home() {
    return (
        <section className="max-w-screen-md mx-auto max-sm:px-4 items-center min-h-screen py-8 font-poppins">
            <div className="flex flex-col mt-20">
                <article className="prose prose-md prose-p:dark:text-slate-200 prose-h3:dark:text-yellow-400">
                    <motion.h3
                        initial="hidden"
                        animate="visible"
                        variants={sentenceVariants(0.5)}
                    >
                        {`Hi, I'm Mahsa Nurfarhan Hidayat!`}
                    </motion.h3>
                    <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={sentenceVariants(0.7)}
                    >
                        Welcome to my Portfolio Website!
                    </motion.p>
                    <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={sentenceVariants(0.9)}
                    >
                        {`Here, I’ll share more about myself, the exciting
                            experiences I’ve had and the cool projects I’ve
                            worked on—complete with case studies. Let’s connect
                            and explore my journey in the digital world
                            together!`}
                    </motion.p>
                    <motion.blockquote
                        initial="hidden"
                        animate="visible"
                        variants={sentenceVariants(1.1)}
                    >
                        <p>
                            This website is still under development, so stay
                            tuned for more updates!
                        </p>
                    </motion.blockquote>
                    <motion.h3
                        initial="hidden"
                        animate="visible"
                        variants={sentenceVariants(1.3)}
                    >
                        Who I Am?
                    </motion.h3>
                    <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={sentenceVariants(1.5)}
                    >
                        {`I'm just a self-taught web developer who loves
                            exploring the world of technology and creativity. I
                            have a deep passion for Fullstack Development,
                            especially with JavaScript, TypeScript, and
                            frameworks like Next.js.`}
                    </motion.p>
                    <motion.blockquote
                        initial="hidden"
                        animate="visible"
                        variants={sentenceVariants(1.7)}
                    >
                        <p>
                            So, if you have any insights or feedback, feel free
                            to{" "}
                            <Link
                                href="mailto:nurfarhan52.jobs@gmail.com"
                                className="dark:text-white"
                            >
                                reach out.
                            </Link>{" "}
                            Lets build something amazing together.
                        </p>
                    </motion.blockquote>
                </article>
            </div>
        </section>
    );
}
