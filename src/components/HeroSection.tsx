"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "@/app/context/LanguageContext"
import { Github, Linkedin, Mail, ExternalLink, Copy, Youtube } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const HeroSection = () => {
    const { messages } = useLanguage()
    const [copiedEmail, setCopiedEmail] = useState(false)

    const handleCopyEmail = async () => {
        try {
        await navigator.clipboard.writeText("momona.9410@gmail.com")
        setCopiedEmail(true)
        setTimeout(() => setCopiedEmail(false), 2000)
        } catch (err) {
        console.error("Failed to copy email:", err)
        }
    }

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
                className="flex flex-col justify-between h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
                <h2 className="text-2xl font-semibold text-deep-pink mb-4">{messages.common.hero.about_me}</h2>
                <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="text-lg text-gray-700 mb-6"
                >
                {messages.common.hero.description.split("\n").map((line, idx) => (
                    <p key={idx}>{line}</p>
                ))}
                </motion.div>

                {/* Stats or highlights */}
                <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4"
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
                <div className="bg-white/50 p-8 rounded-2xl border border-deep-pink/20 shadow-lg backdrop-blur-sm">
                {/* Profile Image inside Let's Connect section */}
                <div className="flex flex-col items-center mb-8">
                    <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative w-28 h-28 rounded-full overflow-hidden border-3 border-deep-pink shadow-lg mb-4"
                    style={{
                        boxShadow: "0 0 0 3px rgba(255, 255, 255, 0.8), 0 8px 25px rgba(0, 0, 0, 0.1)",
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

                    <h3 className="text-xl font-semibold text-deep-pink mb-2">{messages.common.hero.contact_title}</h3>
                    <p className="text-gray-600 text-sm text-center mb-4">
                    {messages.common.hero.contact_description}
                    </p>
                    <div className="w-12 h-0.5 bg-deep-pink/40 rounded-full"></div>
                </div>

                {/* Professional Contact Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                    className="space-y-3"
                >
                    {/* Email */}
                    <div className="group relative bg-white/70 rounded-xl border border-deep-pink/15 p-4 hover:border-deep-pink/30 hover:shadow-md transition-all duration-300">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-deep-pink/10 text-deep-pink group-hover:bg-deep-pink/20 transition-colors">
                            <Mail size={18} />
                        </div>
                        <div>
                            <div className="text-deep-pink font-medium text-sm">Email</div>
                            <div className="text-gray-600 text-xs">momona.9410@gmail.com</div>
                        </div>
                        </div>
                        <div className="flex gap-2">
                        <button
                            onClick={handleCopyEmail}
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-deep-pink/10 text-deep-pink hover:bg-deep-pink/20 transition-colors"
                            title="Copy email"
                        >
                            <Copy size={14} />
                        </button>
                        <Link
                            href="mailto:momona.9410@gmail.com"
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-deep-pink text-white hover:bg-deep-pink/90 transition-colors"
                            title="Send email"
                        >
                            <ExternalLink size={14} />
                        </Link>
                        </div>
                    </div>
                    {copiedEmail && (
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-deep-pink text-white text-xs px-2 py-1 rounded">
                        Copied!
                        </div>
                    )}
                    </div>

                    {/* GitHub */}
                    <div className="group bg-white/70 rounded-xl border border-deep-pink/15 p-4 hover:border-deep-pink/30 hover:shadow-md transition-all duration-300">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-deep-pink/10 text-deep-pink group-hover:bg-deep-pink/20 transition-colors">
                            <Github size={18} />
                        </div>
                        <div>
                            <div className="text-deep-pink font-medium text-sm">GitHub</div>
                            <div className="text-gray-600 text-xs">@Momona-Wada</div>
                        </div>
                        </div>
                        <Link
                        href="https://github.com/Momona-Wada"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-deep-pink text-white hover:bg-deep-pink/90 transition-colors"
                        title="Visit GitHub"
                        >
                        <ExternalLink size={14} />
                        </Link>
                    </div>
                    </div>

                    {/* LinkedIn */}
                    <div className="group bg-white/70 rounded-xl border border-deep-pink/15 p-4 hover:border-deep-pink/30 hover:shadow-md transition-all duration-300">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-deep-pink/10 text-deep-pink group-hover:bg-deep-pink/20 transition-colors">
                            <Linkedin size={18} />
                        </div>
                        <div>
                            <div className="text-deep-pink font-medium text-sm">{messages.common.hero.linkedin}</div>
                            <div className="text-gray-600 text-xs">https://www.linkedin.com/in/momona-wada/</div>
                        </div>
                        </div>
                        <Link
                        href="https://www.linkedin.com/in/momona-wada/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-deep-pink text-white hover:bg-deep-pink/90 transition-colors"
                        title="Visit LinkedIn"
                        >
                        <ExternalLink size={14} />
                        </Link>
                    </div>
                    </div>
                </motion.div>

                {/* YouTube  */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        className="mt-6 pt-6 border-t border-deep-pink/10"
                    >
                        <Link
                        href="https://www.youtube.com/@kuroshibapunta"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 bg-deep-pink text-white py-3 px-4 rounded-xl font-medium hover:bg-deep-pink/90 transition-colors shadow-sm hover:shadow-md"
                        >
                        <Youtube size={18} />
                        {messages.common.hero.youtube}
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
