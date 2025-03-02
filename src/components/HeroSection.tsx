"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";

const HeroSection = () => {
    const { messages } = useLanguage();
    return (
        <section className="relative w-full h-screen flex items-center justify-center bg-light-beige">
      {/* 背景画像 */}
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full"
        >
            <Image
            src="/images/ichiran.JPG" 
            alt="Profile Picture"
            layout="fill"
            objectFit="cover"
            className="rounded-lg p-10"
            />
        </motion.div>

        {/* テキストオーバーレイ */}
        <div className="absolute flex flex-col items-center text-center p-6 bg-deep-pink/70 rounded-lg shadow-lg text-light-beige">
            <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="text-4xl font-bold"
            >
            {messages.common.hero.name}
            </motion.h1>
            <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
            className="text-lg mt-2"
            >
            {messages.common.hero.description}
            </motion.p>
        </div>
    </section>
    )
}

export default HeroSection