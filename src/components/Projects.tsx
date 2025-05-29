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
import { motion } from "framer-motion";

/**
 * プロジェクト型定義
 */
interface ExternalLink { label: string; url: string; }

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  images: string[];
  link?: string;
  links?: ExternalLink[];
}

export const Projects = () => {
  const { messages } = useLanguage();

  /* データ整形 */
  type LocalItem = Omit<Project, "id">;
  const items = messages.common.projects.items as Record<string, LocalItem>;
  const projects: Project[] = Object.entries(items).map(([id, data]) => ({
    id,
    title: data.title,
    description: data.description,
    tags: data.tags,
    images: data.images,
    links: data.links ?? [],
  }));

  const tagColors =
    (messages.common.projects.tagColors as Record<string, string>) || {};

  /* フェードアップ共通設定 */
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      {...fadeUp}
      viewport={{ once: true }}
      className="py-10 px-4 md:px-10 bg-light-beige text-deep-pink"
    >
      <h2 className={`text-3xl md:text-4xl ${kottaOne.className}`}>
        {messages.common.projects.heading}
      </h2>

      {/* auto-rows-fr で高さを均等化 */}
      <div className="mt-8 grid gap-6 auto-rows-fr grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 * idx }}
            viewport={{ once: true }}
            className="h-full"                     /* ← motion.div も伸ばす */
          >
            {/* flex & h-full でカードを引き伸ばす */}
            <Card className="w-full h-full flex flex-col shadow-lg">
              <CardHeader className="p-0 relative overflow-hidden bg-deep-pink/20 max-h-80">
                <Carousel className="w-full">
                  <CarouselContent>
                    {project.images.map((src, i) => (
                      <CarouselItem key={i} className="min-w-full">
                        <div className="p-6 flex items-center justify-center h-80">
                          <Image
                            src={src}
                            alt={`${project.title} image ${i + 1}`}
                            width={400}
                            height={400}
                            className="w-full h-auto max-h-80 object-contain rounded-md"
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

              {/* flex-grow で残りを埋める */}
              <CardContent className="space-y-3 py-4 flex-grow">
                <h3 className="text-xl font-semibold">{project.title}</h3>
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
                <p className="leading-relaxed text-deep-pink/80">
                  {project.description}
                </p>

                {!!project.links?.length && (
                  <div className="flex gap-3 flex-wrap">
                    {project.links.map((l) => (
                      <a
                        key={l.url}
                        href={l.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block font-medium text-deep-pink underline hover:text-pink-700"
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
