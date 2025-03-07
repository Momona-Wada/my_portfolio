"use client";

import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar";
import { Switch } from "@/components/ui/switch";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";

const Header = () => {
    const { toggleLanguage, language } = useLanguage()

    return (
        <Menubar className="fixed top-0 left-0 w-full z-50 text-light-beige bg-soft-pink flex justify-between shadow-md p-3">
            {/* Projects メニュー */}
            <div className="flex">
                <MenubarMenu>
                    <MenubarTrigger>Projects</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem asChild>
                            <Link href="/projects/web">Web Development</Link>
                        </MenubarItem>
                        <MenubarItem asChild>
                            <Link href="/projects/mobile">Mobile Apps</Link>
                        </MenubarItem>
                        <MenubarItem asChild>
                            <Link href="/projects/other">Other</Link>
                        </MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
                {/* Fun Fact メニュー */}
                <MenubarMenu>
                    <MenubarTrigger>Fun Fact</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem asChild>
                            <Link href="#">Random Fact</Link>
                        </MenubarItem>
                        <MenubarItem asChild>
                            <Link href="#">About Me</Link>
                        </MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
            </div>

            {/*言語切り替えスイッチ */}
            <div className="ml-auto flex items-center gap-2 p-3">
                <span className="text-sm">{language === "jp" ? "日本語" : "English"}</span>
                <Switch checked={language === "jp"} onCheckedChange={toggleLanguage}/>
            </div>
        </Menubar>
    );
};

export default Header;
