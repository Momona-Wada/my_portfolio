"use client"

import { useState } from "react"
import { Menubar } from "@/components/ui/menubar"
import { Switch } from "@/components/ui/switch"
import Link from "next/link"
import { useLanguage } from "@/app/context/LanguageContext"
import { motion } from "framer-motion"
import { Globe } from "lucide-react"

const Header = () => {
    const { toggleLanguage, language } = useLanguage()

    return (
        <header className="fixed top-0 left-0 w-full z-50">

        <Menubar className="rounded-none border-none border-b border-deep-pink/10 text-light-beige bg-soft-pink shadow-md py-3 px-4 md:px-8 flex items-center justify-between">
            {/* Logo/Brand */}
            <Link href="/" className="mr-8 font-semibold text-xl tracking-tight">
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="hidden md:inline"
            >
                Momona's portfolio
            </motion.span>
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="md:hidden"
            >
                P
            </motion.span>
            </Link>

            {/* Navigation Menus */}
            <div className="flex items-center space-x-1 md:space-x-2">
                {/* 今後何かを足したくなったらここに */}
            </div>

            {/* Language Switcher */}
            <div className="ml-auto flex items-center gap-3 px-2 py-1 rounded-full bg-deep-pink/10">
            <Globe size={16} className="text-light-beige opacity-80" />
            <span className="text-sm font-medium hidden md:inline">{language === "jp" ? "日本語" : "English"}</span>
            <Switch
                checked={language === "jp"}
                onCheckedChange={toggleLanguage}
                className="data-[state=checked]:bg-deep-pink/50 data-[state=unchecked]:bg-light-beige/30"
            />
            </div>
        </Menubar>
        </header>
    )
}

export default Header
