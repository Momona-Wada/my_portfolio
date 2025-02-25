"use client";

import { useState } from "react";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar";
import { Switch } from "@/components/ui/switch";
import Link from "next/link";

const Header = () => {
    const [isJapanese, setIsJapanese] = useState(false)

    const toggleLanguage = () => {
        setIsJapanese((prev => !prev))
    }

    return (
        <Menubar className="text-light-beige bg-soft-pink flex justify-between">
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
                <span className="text-sm">{isJapanese ? "日本語" : "English"}</span>
                <Switch checked={isJapanese} onCheckedChange={toggleLanguage}/>
            </div>
        </Menubar>
    );
};

export default Header;
