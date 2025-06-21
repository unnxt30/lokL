"use client";

import { ArrowLeft, ArrowRight, MapPin, Clock } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  price?: string;
  location?: string;
  duration?: string;
  rating?: number;
  tag?: string;
  href: string;
  image: string;
}

export interface Gallery4Props {
  title?: string;
  description?: string;
  items: Gallery4Item[];
}

const Gallery4 = ({
  title = "Events",
  description,
  items,
}: Gallery4Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="mb-12">
      <div className="container mx-auto">
        <div className="mb-8 flex items-end justify-between px-4 md:px-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              {title}
            </h2>
            {description && (
              <p className="max-w-lg text-white/70">{description}</p>
            )}
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto bg-white/10 hover:bg-white/20 text-white border-white/20"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto bg-white/10 hover:bg-white/20 text-white border-white/20"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full overflow-hidden px-4 md:px-8">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="ml-0">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="max-w-[320px] pl-[20px] lg:max-w-[320px]"
              >
                <a href={item.href} className="group rounded-xl block h-full">
                  <div className="group relative h-full min-h-[400px] max-w-full overflow-hidden rounded-xl bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      {/* Text placeholder instead of image */}
                      <div className="absolute h-full w-full bg-black flex items-center justify-center">
                        <span className="text-white text-4xl font-bold">
                          {getInitials(item.title)}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      {item.tag && (
                        <Badge className="absolute top-3 left-3 bg-red-500 hover:bg-red-600 text-white border-0 text-xs">
                          {item.tag}
                        </Badge>
                      )}
                      {item.rating && (
                        <div className="absolute top-3 right-3 bg-black/60 rounded-full px-2 py-1 text-white text-xs font-medium">
                          ★ {item.rating}
                        </div>
                      )}
                    </div>
                    <div className="p-4 flex-1 flex flex-col justify-between bg-white">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-red-600 transition-colors">
                          {item.title}
                        </h3>
                        {item.location && (
                          <div className="flex items-center text-sm text-gray-600 mb-2">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span>{item.location}</span>
                          </div>
                        )}
                        {item.description && (
                          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                            {item.description}
                          </p>
                        )}
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        {item.duration && (
                          <div className="flex items-center text-gray-600">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{item.duration}</span>
                          </div>
                        )}
                        {item.price && (
                          <span className="font-semibold text-red-600">{item.price}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-8 flex justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                currentSlide === index ? "bg-red-500" : "bg-white/30"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Helper function to get first letters of first two words
const getInitials = (title: string): string => {
  const words = title.split(' ').filter(word => word.length > 0);
  if (words.length >= 2) {
    return (words[0][0] + words[1][0]).toUpperCase();
  } else if (words.length === 1) {
    return words[0].substring(0, 2).toUpperCase();
  }
  return 'EV'; // fallback
};

export { Gallery4 };
