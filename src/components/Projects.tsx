"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";
import { kottaOne } from "@/app/fonts";

const Projects = () => {
    const { messages } = useLanguage();
    return (
        <section className="py-5 px-10 bg-light-beige text-deep-pink">
            <h2 className={`text-4xl ${kottaOne.className}`}>My Projects</h2>

            <div>
                <Card>
                    <CardHeader>
                        <Image
                            src="/public/images/my_body_buddy_logo.png"
                            alt={messages.common.projects.title}
                            width={300}
                            height={200}
                            className="w-full rounded-lg object-cover"
                        />
                    </CardHeader>
                    <CardContent>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
export default Projects;