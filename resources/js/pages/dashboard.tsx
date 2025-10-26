import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import Autoplay from "embla-carousel-autoplay";

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Dashboard',
    href: dashboard().url,
  },
];

export default function Dashboard() {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Dashboard" />
      <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
          <Carousel
            plugins={[Autoplay({ delay: 3000 })]}
            className="w-full flex justify-center rounded-xl"
          >
            <CarouselContent className="max-w-[1200px] w-full rounded-xl">
              {Array.from({ length: 3 }).map((_, index) => (
                <CarouselItem key={index} className="basis-full flex justify-center">
                  <div className="w-full h-[270px] sm:h-[270px] md:h-[270px]">
                    <Card className="w-full h-[270px] sm:h-[270px] md:h-[270px] p-0">
                      <CardContent className="flex items-center justify-center p-0">
                        <img
                          src={`/build/carousel/slideshow${index + 1}.webp`}
                          alt={`Slide ${index + 1}`}
                          className="w-full h-full object-cover rounded-xl"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

<div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-3 mt-6"> {[
   { 
      image: "/build/brend-item1.webp"
    },
    { 
      image: "/build/brend-item2.webp"
    },
    { 
      image: "/build/brend-item3.webp"
    },

  ].map((item, i) => (
    <Card key={i} className="p-0 overflow-hidden shadow-lg">
      <div className="relative w-full h-40">
        <img
          src={item.image}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

    </Card>
  ))}
  </div>

<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-6">
  {[
    { 
      title: "Total Sales", 
      value: "$24,000", 
      color: "bg-gradient-to-r from-green-500 to-emerald-600",
      image: "/images/sales.jpg"
    },
    { 
      title: "Total Sales", 
      value: "$24,000", 
      color: "bg-gradient-to-r from-green-500 to-emerald-600",
      image: "/images/sales.jpg"
    },
    { 
      title: "Users", 
      value: "1,245", 
      color: "bg-gradient-to-r from-blue-500 to-indigo-600",
      image: "/images/users.jpg"
    },
    { 
      title: "Orders", 
      value: "320", 
      color: "bg-gradient-to-r from-orange-500 to-red-500",
      image: "/images/orders.jpg"
    },
  ].map((item, i) => (
    <Card key={i} className="overflow-hidden shadow-lg">
      <div className="relative w-full h-40">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      <CardContent className={`${item.color} text-white p-6`}>
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <p className="text-3xl font-bold mt-2">{item.value}</p>
      </CardContent>
    </Card>
  ))}
</div>

        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
            <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
          </div>

          <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
            <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
