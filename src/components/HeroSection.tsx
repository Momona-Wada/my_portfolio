"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "@/app/context/LanguageContext"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

const HeroSection = () => {
    const { messages } = useLanguage()

    return (
        <section className="relative w-full flex flex-col items-center justify-center bg-light-beige overflow-hidden py-16 md:py-0">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                className="absolute inset-0"
                style={{
                    backgroundImage:
                    "radial-gradient(circle at 25px 25px, black 2%, transparent 0%), radial-gradient(circle at 75px 75px, black 2%, transparent 0%)",
                    backgroundSize: "100px 100px",
                }}
                />
            </div>

                <div className="w-full z-10 py-12 md:py-20 px-4 md:px-10">
                    {/* Header with name only */}
                    <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8"
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-deep-pink mb-3"
                        >
                            {messages.common.hero.name}
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="text-xl md:text-2xl font-medium text-deep-pink/80"
                        >
                            {messages.common.hero.title}
                        </motion.div>
                    </motion.div>

                    {/* Divider */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="w-full h-px bg-deep-pink/20 mb-12"
                    />

                    {/* Main content */}
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                        {/* Left column - Description */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                        >
                            <h2 className="text-2xl font-semibold text-deep-pink mb-4">{messages.common.hero.about_me}</h2>
                            <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.9 }}
                            className="text-lg text-gray-700 mb-6"
                            >
                            {messages.common.hero.description}
                            </motion.p>

                            {/* Stats or highlights */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1.0 }}
                                className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
                            >
                                <div className="bg-white/50 p-4 rounded-lg shadow-sm border border-deep-pink/10">
                                    <div className="text-deep-pink font-bold text-2xl">{messages.common.hero.technolories_num}</div>
                                    <div className="text-gray-600 text-sm">{messages.common.hero.technologies_learned}</div>
                                </div>
                                <div className="bg-white/50 p-4 rounded-lg shadow-sm border border-deep-pink/10">
                                    <div className="text-deep-pink font-bold text-2xl">{messages.common.hero.projects_num}</div>
                                    <div className="text-gray-600 text-sm">
                                    {messages.common.hero.projects_label || "Projects Completed"}
                                    </div>
                                </div>
                                <div className="bg-white/50 p-4 rounded-lg shadow-sm border border-deep-pink/10">
                                    <div className="text-deep-pink font-bold text-2xl">{messages.common.hero.star || "30+"}</div>
                                    <div className="text-gray-600 text-sm">
                                    {messages.common.hero.team_collaboration || "Happy Clients"}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Right column - Let's Connect with Profile Image */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
                        >
                            <div className="bg-white/40 p-6 md:p-8 rounded-xl border border-deep-pink/15 shadow-md">
                            {/* Profile Image inside Let's Connect section */}
                            <div className="flex flex-col items-center mb-6">
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-deep-pink shadow-lg mb-4"
                                    style={{
                                        boxShadow: "0 0 0 4px rgba(255, 255, 255, 0.8), 0 10px 20px rgba(0, 0, 0, 0.1)",
                                    }}
                                >
                                    <Image
                                        src="/images/ichiran.JPG"
                                        alt="Profile Picture"
                                        fill
                                        style={{ objectFit: "cover", objectPosition: "center" }}
                                        priority
                                        className="transition-transform hover:scale-105 duration-700"
                                    />
                                </motion.div>

                                <h3 className="text-xl font-semibold text-deep-pink">{messages.common.hero.contact_title}</h3>

                                <div className="w-16 h-1 bg-deep-pink/30 rounded-full mt-2 mb-6"></div>
                            </div>

                            {/* Contact Links */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 1.1 }}
                                    className="space-y-4"
                                >
                                    {/* Email */}
                                    <Link
                                        href="mailto:momona.9410@gmail.com"
                                        className="group flex items-center gap-4 bg-white/60 p-4 rounded-lg shadow-sm border border-deep-pink/10 hover:border-deep-pink/30 hover:shadow-md transition-all duration-300"
                                        >
                                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-deep-pink/10 text-deep-pink group-hover:bg-deep-pink/20 transition-colors">
                                            <Mail size={20} />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-deep-pink font-medium">momona.9410@gmail.com</span>
                                            <span className="text-gray-500 text-xs">Email</span>
                                        </div>
                                    </Link>

                                    {/* GitHub */}
                                    <Link
                                    href="https://github.com/Momona-Wada"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-4 bg-white/60 p-4 rounded-lg shadow-sm border border-deep-pink/10 hover:border-deep-pink/30 hover:shadow-md transition-all duration-300"
                                    >
                                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-deep-pink/10 text-deep-pink group-hover:bg-deep-pink/20 transition-colors">
                                            <Github size={20} />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-deep-pink font-medium">Momona-Wada</span>
                                            <span className="text-gray-500 text-xs">GitHub</span>
                                        </div>
                                    </Link>

                                    {/* LinkedIn */}
                                    <Link
                                        href="https://www.linkedin.com/in/YOUR_LINKEDIN_HERE"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-4 bg-white/60 p-4 rounded-lg shadow-sm border border-deep-pink/10 hover:border-deep-pink/30 hover:shadow-md transition-all duration-300"
                                    >
                                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-deep-pink/10 text-deep-pink group-hover:bg-deep-pink/20 transition-colors">
                                            <Linkedin size={20} />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-deep-pink font-medium">LinkedIn Profile</span>
                                            <span className="text-gray-500 text-xs">LinkedIn</span>
                                        </div>
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
        </section>
    )
}

export default HeroSection
