"use client";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export default function CertificatesCarousel() {
    return (
        <Carousel className="w-100 md:w-300" opts={
            {
                align: "start",
                loop: true,
            }
        }>
            <CarouselContent >
                <CarouselItem>
                    <div className="p-2 bg-white rounded-xl shadow pl-2">
                        <img className="" src="src\assets\certif.png"></img>
                    </div>
                </CarouselItem>
        
                {/* <CarouselItem>
                    <div className="p-2 bg-white rounded-xl shadow pl-2">
                        <img className="" src="src\assets\certif.png"></img>
                    </div>
                </CarouselItem> */}
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
