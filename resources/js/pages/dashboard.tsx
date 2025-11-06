import { Badge } from '@/components/ui/badge';
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
    title: 'Нүүр хуудас',
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
                          src={`/banner/carousel/slideshow${index + 1}.webp`}
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
      image: "/banner/brend-item1.webp"
    },
    { 
      image: "/banner/brend-item2.webp"
    },
    { 
      image: "/banner/brend-item3.webp"
    },

  ].map((item, i) => (
    <Card key={i} className="p-0 overflow-hidden shadow-lg">
      <div className="relative w-full ">
        <img
          src={item.image}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 "></div>
      </div>

    </Card>
  ))}
  </div>
 <h1 className="col-span-2 text-3xl font-semibold mt-3">Компьютерын дэлгэц</h1>
<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-1">
 
  {[
    { 
      title: "ASUS TUF Gaming VG27AQML1A 27 inch 260Hz 2K", 
      value: "1,200,000₮", 
      color: "",
      image: "/monitor/4-67.webp",
      isfreedelivery: true
    },
    { 
      title: "ASUS TUF Gaming VG27AQL3A 27 inch 180Hz 2K", 
      value: "750'000₮", 
      color: "",
      image: "/monitor/1-30(1).webp",
      isfreedelivery: true
    },
    { 
      title: "Asus Rog Strix XG27ACS 27 inch 180Hz 2K", 
      value: "900'000₮", 
      image: "/monitor/1-17.webp",
      isfreedelivery: true

    },
    { 
      title: "Asus - VA24EHFR 23.8-inch, 1920x1080, 100Hz", 
      value: "300'000₮", 
      image: "/monitor/1-13-ezgif.com-optijpeg3.webp",
      isfreedelivery: false

    },
  ].map((item, i) => (
    <Card key={i} className="overflow-hidden  py-0 shadow-lg">
      <div className="relative w-full">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 "></div>
      </div>
      <CardContent className={`${item.color}  text-black p-6`}>
        <h3 className="text-m font-normal">{item.title}</h3>
        <p className="text-3xl font-bold mt-2">{item.value}</p>
        {item.isfreedelivery && <Badge variant="destructive">Хүргэлт үнэгүй</Badge>}
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
