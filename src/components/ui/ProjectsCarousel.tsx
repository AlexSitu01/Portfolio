"use client";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

interface Props {
    pics: string[]
}
export default function ProjectsCarousel({ pics }: Props) {
    return (
        <Carousel className="mx-auto w-full max-w-6xl" opts={
            {
                align: "start",
                loop: false,
            }
        }>
            <CarouselContent >
                {pics.map((pic) => {
                    return <CarouselItem  className="">
                        <div className="aspect-video md:aspect-16/10 lg:aspect-video w-full overflow-hidden rounded-xl shadow p-2 bg-white">
                            <img className="w-full h-full object-contain bg-white" src={pic}></img>
                        </div>
                    </CarouselItem>
                })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
