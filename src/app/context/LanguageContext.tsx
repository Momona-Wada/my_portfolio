"use client";
import { createContext, useState, useContext, useEffect } from "react";
import messages from "@/app/locales";

type Lang = "en" | "jp";
type Ctx = {
    language: Lang;
    toggleLanguage: () => void;
    messages: typeof messages["en"] | typeof messages["jp"];
    ready: boolean;
};

const LanguageContext = createContext<Ctx | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    // ❶ 常に "en" で SSR し、CSR で上書き
    const [language, setLanguage] = useState<Lang>("en");
    const [ready, setReady] = useState(false);

    // ❷ CSR 後に localStorage を読み込む
    useEffect(() => {
        const stored = localStorage.getItem("language") as Lang | null;
        if (stored === "jp") setLanguage("jp");
        setReady(true);
    }, []);

    // ❸ 言語切替時に保存
    const toggleLanguage = () => {
        setLanguage((prev) => {
        const next = prev === "en" ? "jp" : "en";
        localStorage.setItem("language", next);
        return next;
        });
    };

    const value: Ctx = {
        language,
        toggleLanguage,
        messages: messages[language],
        ready,
    };

    // ❹ Hydration 完了前は何も描画しない（最も安全）
    if (!ready) return null;

    return (
        <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
    );
}

export function useLanguage() {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
    return ctx;
}
