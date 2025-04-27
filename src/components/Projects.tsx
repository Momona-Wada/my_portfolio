/* Projects section with shadcn carousel */

"use client";

import { Card, CardContent, CardHeader } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";
import { kottaOne } from "@/app/fonts";

// ① スライド表示したい画像パスを配列にまとめる
const projectImages = [
  "/images/my_body_buddy_logo.png",
];

const Projects = () => {
  const { messages } = useLanguage();

  return (
    <section className="py-5 px-10 bg-light-beige text-deep-pink">
      <h2 className={`text-4xl ${kottaOne.className}`}>My Projects</h2>

      {/* カードを中央寄せ・適切サイズに制限 */}
      <div className="mt-6 flex justify-center">
        <Card className="max-w-md w-full shadow-lg">
          <CardHeader className="p-0">
            {/* ② shadcn Carousel で画像をスライド表示 */}
            <Carousel className="w-full">
              <CarouselContent>
                {projectImages.map((src, idx) => (
                  <CarouselItem
                    key={idx}
                    className="flex items-center justify-center"
                  >
                    <Image
                      src={src}
                      alt={messages.common.projects.title}
                      width={400}
                      height={250}
                      className="h-48 w-full object-cover"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </CardHeader>

          {/* 必要に応じてプロジェクトの説明やリンクをここへ */}
          <CardContent className="text-sm py-4">
            {/* {messages.common.projects.description} */}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Projects;
