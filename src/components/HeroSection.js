import { motion } from "framer-motion"
import CurvedPath from "./CurvedPath"
import FloatingAvatar from "./FloatingAvatar"
import { useEffect, useState } from "react";

const users = [
    {
        imageSrc: "https://www.gims.net.in/admission/img/stu/swati-mishra.jpg",
        title: "Info Edge India",
        position: { x: "20%", y: "30%" },
        delay: 3000,
    },
    {
        imageSrc: "https://www.gims.net.in/admission/img/stu/12.png",
        title: "Deloitte",
        position: { x: "80%", y: "20%" },
        delay: 3000,
    },
    {
        imageSrc: "https://www.gims.net.in/admission/img/stu/13.png",
        title: "Decathlon",
        position: { x: "50%", y: "70%" },
        delay: 3000,
    },
    {
        imageSrc: "https://www.gims.net.in/admission/img/stu/14.png",
        title: "Sonalika International",
        position: { x: "75%", y: "60%" },
        delay: 3000,
    },
    {
        imageSrc: "https://www.gims.net.in/admission/img/stu/15.png",
        title: "ITC Limited",
        position: { x: "75%", y: "60%" },
        delay: 3000,
    },
    {
        imageSrc: "https://www.gims.net.in/admission/img/stu/16.png",
        title: "Asian Paints Ltd",
        position: { x: "75%", y: "60%" },
        delay: 3000,
    },
    {
        imageSrc: "https://www.gims.net.in/admission/img/stu/17.png",
        title: "Bandhan Bank",
        position: { x: "75%", y: "60%" },
        delay: 3000,
    },
    {
        imageSrc: "https://www.gims.net.in/admission/img/stu/18.png",
        title: "Ujjivan Small Finance Bank",
        position: { x: "75%", y: "60%" },
        delay: 3000,
    },
    {
        imageSrc: "https://www.gims.net.in/admission/img/stu/19.png",
        title: "HCLTech",
        position: { x: "75%", y: "60%" },
        delay: 3000,
    },
]

export default function HeroSection() {
    const delayBetweenChanges = 4000;
    const [visibleUsers, setVisibleUsers] = useState(users.slice(0, 4));
    const [startIndex, setStartIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setStartIndex((prevIndex) => {
                const nextIndex = (prevIndex + 4) % users.length;
                const newVisibleUsers = Array(4)
                    .fill(0)
                    .map((_, i) => users[(nextIndex + i) % users.length]);
                setVisibleUsers(newVisibleUsers);
                return nextIndex;
            });
        }, delayBetweenChanges);

        return () => clearInterval(interval);
    }, [users, delayBetweenChanges]);

    return (
        <div className="relative min-h-screen w-full flex justify-end items-end overflow-hidden bg-background">
            <div className="absolute inset-0 -z-10">
                <CurvedPath />
            </div>
            <div className="container relative mx-auto px-4 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mx-auto max-w-3xl text-left"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                        THINK PGDM THINK GIMS
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="mb-8 text-lg text-muted-foreground sm:text-xl">
                        The Payoneer multi-currency account has everything your business needs to get paid and grow globally.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}>
                        <button size="lg" className="bg-[#6C5CE7] px-4 py-2 rounded-lg text-white hover:bg-[#5A4ED1]">
                            Apply Now
                        </button>
                    </motion.div>
                </motion.div>
                {visibleUsers.map((user, index) => (
                    <FloatingAvatar key={index} {...user} />
                ))}
            </div>
        </div>
    )
}