"use client"; 
import { createContext, useState, useContext, useEffect } from "react";
import messages from "@/app/locales"; // locales/index.ts へのパス

type LanguageType = "en" | "jp";

type LanguageContextType = {
    language: LanguageType;
    toggleLanguage: () => void;
    messages: typeof messages["en"] | typeof messages["jp"];
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<LanguageType>(() => {
        if (typeof window !== "undefined") {
        return localStorage.getItem("language") === "jp" ? "jp" : "en";
        }
        return "en";
    });

    useEffect(() => {
        localStorage.setItem("language", language);
    }, [language]);

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "en" ? "jp" : "en"));
    };

    // 選択されている言語の翻訳メッセージを取得
    const currentMessages = messages[language];

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, messages: currentMessages }}>
        {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
