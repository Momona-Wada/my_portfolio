/* Projects section with shadcn carousel – fixed TypeScript casting */

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
import clsx from "clsx";

/**
 * プロジェクト型定義
 */
interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  images: string[];
}

export const Projects = () => {
  const { messages } = useLanguage();

  // ロケールから読み込む items 型（id プロパティはキーとして追加）
  type LocalItem = Omit<Project, "id">;
  const items = messages.common.projects.items as Record<string, LocalItem>;

  // entries を配列化し、id を付与
  const projects: Project[] = Object.entries(items).map(([id, data]) => ({
    id,
    title: data.title,
    description: data.description,
    tags: data.tags,
    images: data.images,
  }));

  // タグカラーの型を柔軟に
  const tagColors =
    (messages.common.projects.tagColors as Record<string, string>) || {};

  return (
    <section className="py-10 px-4 md:px-10 bg-light-beige text-deep-pink">
      <h2 className={`text-3xl md:text-4xl ${kottaOne.className}`}>
        {messages.common.projects.heading}
      </h2>

      <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((project) => (
          <Card key={project.id} className="w-full shadow-lg">
            <CardHeader className="p-0 relative overflow-hidden">
              <Carousel className="w-full">
                <CarouselContent>
                  {project.images.map((src, idx) => (
                    <CarouselItem key={idx} className="min-w-full">
                      <div className="px-6 pt-6 flex justify-center">
                        <Image
                          src={src}
                          alt={`${project.title} image ${idx + 1}`}
                          width={400}
                          height={250}
                          className="h-48 w-full object-cover rounded-md"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                {project.images.length > 1 && (
                  <>
                    <CarouselPrevious className="absolute top-1/2 left-6 -translate-y-1/2" />
                    <CarouselNext className="absolute top-1/2 right-6 -translate-y-1/2" />
                  </>
                )}
              </Carousel>
            </CardHeader>

            <CardContent className="space-y-3 py-4">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className={clsx(
                      "rounded-full px-3 py-0.5 text-xs font-medium",
                      tagColors[t] || "bg-rose-100 text-rose-700"
                    )}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="text-sm leading-relaxed text-deep-pink/80">
                {project.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
