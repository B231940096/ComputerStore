import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { console } from '@/routes/index';
import { type BreadcrumbItem } from '@/types';
import {Gamepad, Gamepad2, Dices,} from "lucide-react";
import { useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface Product {
  title: string;
  value: string;
  image?: string;
  isfreedelivery?: boolean;
  stock?: number;
  badge?: string;
}

const categories = [
  { id: "pl5", label: "PlayStation 5", icon: <Gamepad className="w-5 h-5" /> }, 
  { id: "pl5games", label: "PlayStation 5-ын тоглоомууд", icon: <Dices className="w-5 h-5" /> },
  { id: "accessories", label: "Дагалдах хэрэгсэл", icon: <Gamepad2 className="w-5 h-5" /> },
]

const products: Record<string, Product[]> = {
  pl5: [
    {
      title: "Sony - PlayStation 5 - Slim Disc Edition",
      value: "1,950,000",
      isfreedelivery: true,
      stock: 5,
      badge: "Шинэ",
      image: "/banner/console/pl5-1.png",
    },
    {
      title: "Sony - Playstation 5 Pro Console",
      value: "2,900,000",
      isfreedelivery: true,
      stock: 8,
      image: "/banner/console/pl5-2.png",
    },
  ],
  pl5games: [
    {
      title: "BATTLEFIELD 6",
      value: "250,000",
      isfreedelivery: true,
      stock: 8,
      badge: "Шинэ",
      image: "/banner/console/game-1.png",
    },
    {
      title: "Marvels Spider-Man 2",
      value: "250,000",
      isfreedelivery: true,
      stock: 6,
      badge: "Шинэ",
      image: "/banner/console/game-2.png",
    },
    {
      title: "RUGBY 25",
      value: "180,000",
      isfreedelivery: true,
      stock: 10,
      badge: "Хит бараа",
      image: "/banner/console/game-3.png",
    },
    {
      title: "Nickelodeon Kart Racers 3: Slime Speedway",
      value: "100,000",
      isfreedelivery: false,
      stock: 12,
      badge: "Шинэ",
      image: "/banner/console/game-4.png",
    },
    {
      title: "Metal Gear Solid Delta: Snake Eater Deluxe Edition",
      value: "350,000",
      isfreedelivery: false,
      stock: 18,
      badge: "Шинэ",
      image: "/banner/console/game-5.png",
    },
    {
      title: "Call of Duty®: Black Ops 7",
      value: "280,000",
      isfreedelivery: false,
      stock: 15,
      badge: "Шинэ",
      image: "/banner/console/game-6.png",
    },
    {
      title: "Ghost Of Yotei",
      value: "280,000",
      isfreedelivery: false,
      stock: 14,
      badge: "Шинэ",
      image: "/banner/console/game-7.png",
    },
    {
      title: "Death Stranding 2: On The Beach",
      value: "280,000",
      isfreedelivery: false,
      stock: 9,
      badge: "Шинэ",
      image: "/banner/console/game-8.png",
    },
  ],
  accessories: [
    {
      title: "PlayStation DualSense Wireless Controller - White",
      value: "240,000",
      isfreedelivery: true,
      stock: 8,
      badge: "Шинэ",
      image: "/banner/console/controller-1.png",
    },
    {
      title: "PlayStation DualSense Wireless Controller - Nova Pink",
      value: "240,000",
      isfreedelivery: true,
      stock: 6,
      badge: "Шинэ",
      image: "/banner/console/controller-2.png",
    },
    {
      title: "PlayStation - DualSense Wireless Controller - Volcanic Red",
      value: "240,000",
      isfreedelivery: true,
      stock: 10,
      badge: "Хит бараа",
      image: "/banner/console/controller-3.png",
    },
    {
      title: "Sony - Playstation DualSense Charging Station",
      value: "150,000",
      isfreedelivery: false,
      stock: 12,
      badge: "Шинэ",
      image: "/banner/console/charging-station.png",
    },
    {
      title: "PlayStation DualSense Wireless Controller - Galactic Purple",
      value: "240,000",
      isfreedelivery: false,
      stock: 18,
      badge: "Шинэ",
      image: "/banner/console/controller-4.png",
    },
    {
      title: "PlayStation DualSense Wireless Controller - Gray Camouflage",
      value: "240,000",
      isfreedelivery: false,
      stock: 15,
      badge: "Шинэ",
      image: "/banner/console/controller-5.png",
    },
    {
      title: "PlayStation - DualSense Wireless Controller – Chroma Indigo",
      value: "350,000",
      isfreedelivery: false,
      stock: 14,
      badge: "Шинэ",
      image: "/banner/console/controller-6.png",
    },
    {
      title: "PlayStation - DualSense Wireless Controller - Cobalt Blue",
      value: "300,000",
      isfreedelivery: false,
      stock: 9,
      badge: "Шинэ",
      image: "/banner/console/controller-7.png",
    },
    {
      title: "Sony - PULSE Explore Wireless Earbuds",
      value: "800,000",
      isfreedelivery: true,
      stock: 8,
      badge: "Шинэ",
      image: "/banner/console/earbuds.png",
    },
    {
      title: "Sony - Pulse Elite wireless headset",
      value: "600,000",
      isfreedelivery: true,
      stock: 6,
      badge: "Шинэ",
      image: "/banner/console/headset.png",
    },
    {
      title: "PlayStation DualSense Wireless Controller - Starlight Blue",
      value: "300,000",
      isfreedelivery: true,
      stock: 10,
      badge: "Хит бараа",
      image: "/banner/console/controller-8.png",
    },
    {
      title: "PlayStation - DualSense Wireless Controller – Chroma Pearl",
      value: "350,000",
      isfreedelivery: false,
      stock: 12,
      badge: "Шинэ",
      image: "/banner/console/controller-9.png",
    },
    {
      title: "PlayStation DualSense Wireless Controller - Sterling Silver",
      value: "240,000",
      isfreedelivery: false,
      stock: 18,
      badge: "Шинэ",
      image: "/banner/console/controller-10.png",
    },
    {
      title: "PlayStation DualSense Wireless Controller - Cosmic Red",
      value: "240,000",
      isfreedelivery: false,
      stock: 15,
      badge: "Шинэ",
      image: "/banner/console/controller-11.png",
    },
    {
      title: "Disc Drive For PS5 Digital, PS5 Pro - Digital Edition Consoles",
      value: "480,000",
      isfreedelivery: false,
      stock: 14,
      badge: "Шинэ",
      image: "/banner/console/disc-drive.png",
    },
    {
      title: "PlayStation - DualSense Wireless Controller – Chroma Teal",
      value: "320,000",
      isfreedelivery: false,
      stock: 9,
      badge: "Шинэ",
      image: "/banner/console/controller-12.png",
    },
  ],
};

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Console',
    href: console().url,
  },
];

export default function Console() {
  const [active, setActive] = useState<string>("pl5");
  

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Tabs value={active} onValueChange={setActive} defaultValue="cpu" className="w-full">
        {/* ===== Tabs Header (Category Buttons) ===== */}
        <TabsList
          className="
    flex gap-3 overflow-x-auto whitespace-nowrap scrollbar-none
    px-4 py-2 bg-transparent
  "
        >
          {categories.map((btn) => (
            <TabsTrigger
              key={btn.id}
              value={btn.id}
              className="
        flex items-center gap-2 px-4 py-2
        rounded-lg border border-gray-800
        bg-sidebar text-gray-300
        whitespace-nowrap
        data-[state=active]:bg-white data-[state=active]:text-black
        hover:bg-[#363234]
        transition-all
      "
            >
              {btn.icon}
              <span className="text-sm">{btn.label}</span>
            </TabsTrigger>
          ))}
        </TabsList>


        {/* ===== Tabs Content (Products per Category) ===== */}
        {Object.entries(products).map(([key, items]) => (
          <TabsContent key={key} value={key} className="mt-20">
            <div className="mb-4 flex items-center justify-between px-8">
              <div>
                <h2 className="text-white text-lg font-semibold">
                  {categories.find((c) => c.id === key)?.label}
                </h2>
                <p className="text-gray-400">{items.length} бүтээгдэхүүн</p>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="border-gray-700 bg-gray-900 text-gray-300 hover:bg-gray-800 hover:text-white"
                >
                  Үнээр
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-700 bg-gray-900 text-gray-300 hover:bg-gray-800 hover:text-white"
                >
                  Нэрээр
                </Button>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 px-8">
              {items.map((product, index) => (
                <Card
                  key={index}
                  className="border border-gray-800 bg-sidebar rounded-xl overflow-hidden hover:bg-[#363234] transition-all"
                >
                  {/* Image */}
                  {product.image && (
                    <div className="relative w-full h-64 md:h-80 lg:h-80">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-center"
                      />
                    </div>
                  )}

                  <CardContent className="p-4 flex flex-col justify-between">
                    <h3 className="text-white font-medium mb-2">{product.title}</h3>

                    {/* Badges */}
                    <div className="flex gap-2 mt-2 flex-wrap">
                      {product.badge && <Badge variant="destructive">{product.badge}</Badge>}
                      {product.isfreedelivery && <Badge variant="outline">Хүргэлт үнэгүй</Badge>}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" className="border-gray-700 bg-gray-900 text-gray-300 hover:bg-gray-800 hover:text-white">
                      Сагсанд нэмэх
                    </Button>
                    <span className="text-gray-400">{product.value}₮</span>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </AppLayout>
  );
}

