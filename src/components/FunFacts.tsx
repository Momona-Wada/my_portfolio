"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader } from "./ui/card";
import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";
import { kottaOne } from "@/app/fonts";


interface Fact {
    id: string;
    title: string;
    description: string;
    image: string;
}

const FunFacts = () => {
    const { messages } = useLanguage();
    type LocalFact = Omit<Fact, "id">;
    const items = messages.common.funfacts.items as Record<string, LocalFact>;
    const facts: Fact[] = Object.entries(items).map(([id, d]) => ({ id, ...d }));

    return (
        <section className="py-10 px-4 md:px-10 bg-light-beige text-deep-pink">
        <h2 className={`text-3xl md:text-4xl ${kottaOne.className}`}>{messages.common.funfacts.heading}</h2>

        <div className="mt-8 relative max-w-full">
            <Carousel className="w-full">
            <CarouselContent className="-mx-3">
                {facts.map((fact) => (
                <CarouselItem key={fact.id} className="px-3 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                    {/* overflow-hidden で画像のはみ出し防止 */}
                    <Card className="w-full shadow-lg h-full overflow-hidden">
                    <CardHeader className="p-0 bg-deep-pink/20 h-60 flex items-center justify-center">
                        {fact.image ? (
                        <Image
                            src={fact.image}
                            alt={fact.title}
                            width={400}
                            height={240}
                            className="w-full h-auto max-h-60 object-contain rounded-md"
                        />
                        ) : (
                        <div className="h-44 w-full flex items-center justify-center bg-gray-100">
                            <span className="text-sm text-gray-400">image</span>
                        </div>
                        )}
                    </CardHeader>

                    <CardContent className="space-y-2 pb-6 px-6 pt-4">
                        <h3 className="text-lg font-semibold">{fact.title}</h3>
                        <p className="text-sm leading-relaxed text-deep-pink/80">
                        {fact.description}
                        </p>
                    </CardContent>
                    </Card>
                </CarouselItem>
                ))}
            </CarouselContent>

            {facts.length > 1 && (
                <>
                <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 -left-4" />
                <CarouselNext className="absolute top-1/2 -translate-y-1/2 -right-4" />
                </>
            )}
            </Carousel>
        </div>
        </section>
    );
};

export default FunFacts;
