/* Projects section with shadcn carousel – hide peek slides until active */

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
import { kottaOne } from "@/app/fonts";
import clsx from "clsx";

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  images: string[];
}

const projects: Project[] = [
  {
    id: "my_body_buddy",
    title: "My Project 1",
    description: "description",
    tech: ["JavaScript", "TailwindCSS"],
    images: [
      "/images/my_body_buddy_logo.png",
      "/images/momo_punta.jpeg",
    ],
  },
  {
    id: "my_project2",
    title: "My Project 2",
    description: "description",
    tech: ["React", "TailwindCSS"],
    images: ["/images/momo_punta.jpeg"],
  },
  {
    id: "my_project3",
    title: "My Project 3",
    description: "description",
    tech: ["Python", "Bootstrap"],
    images: [
      "/images/my_body_buddy_logo.png",
      "/images/momo_punta.jpeg",
    ],
  },
  {
    id: "my_project4",
    title: "My Project 4",
    description: "description",
    tech: ["JavaScript", "TailwindCSS"],
    images: [
      "/images/my_body_buddy_logo.png",
      "/images/momo_punta.jpeg",
    ],
  },
];

const badgeColors: Record<string, string> = {
  JavaScript: "bg-rose-200 text-rose-700",
  React: "bg-rose-200 text-rose-700",
  TailwindCSS: "bg-rose-100 text-rose-700",
  Python: "bg-rose-300 text-rose-800",
  Bootstrap: "bg-rose-100 text-rose-700",
};

export const Projects = () => {
  // const { messages } = useLanguage();

  return (
    <section className="py-10 px-4 md:px-10 bg-light-beige text-deep-pink">
      <h2 className={`text-3xl md:text-4xl ${kottaOne.className}`}>My Projects</h2>

      {/* Responsive grid */}
      <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((project) => (
          <Card key={project.id} className="w-full shadow-lg">
            {/* Carousel wrapper: relative + overflow-hidden */}
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

                {/* Show arrows only if multiple images */}
                {project.images.length > 1 && (
                  <>  
                    <CarouselPrevious className="absolute top-1/2 left-6 -translate-y-1/2" />
                    <CarouselNext className="absolute top-1/2 right-6 -translate-y-1/2" />
                  </>
                )}
              </Carousel>
            </CardHeader>

            {/* Content */}
            <CardContent className="space-y-3 py-4">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className={clsx(
                      "rounded-full px-3 py-0.5 text-xs font-medium",
                      badgeColors[t] || "bg-rose-100 text-rose-700"
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
