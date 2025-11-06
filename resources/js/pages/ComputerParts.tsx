import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { computerparts } from '@/routes/index';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import Autoplay from "embla-carousel-autoplay";
import { Cpu, Monitor, Keyboard, HardDrive, MemoryStick, Microchip } from "lucide-react";
import { useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Card, CardContent } from '@/components/ui/card';

interface Product {
  title: string;
  value: string;
  image?: string;
  isfreedelivery?: boolean;
  stock?: number;
  badge?: string;
}

const categories = [
  { id: "cpu", label: "Процессор", icon: <Cpu className="w-5 h-5" /> },
  { id: "gpu", label: "Видео карт", icon: <Microchip className="w-5 h-5" /> },
  { id: "ram", label: "RAM санах ой", icon: <MemoryStick className="w-5 h-5" /> },
  { id: "storage", label: "Хадгалах төхөөрөмж", icon: <HardDrive className="w-5 h-5" /> },
  { id: "monitor", label: "Дэлгэц", icon: <Monitor className="w-5 h-5" /> },
  { id: "keyboard", label: "Гар", icon: <Keyboard className="w-5 h-5" /> },
]

const products: Record<string, Product[]> = {
  cpu: [
    {
      title: "Intel Core i9-14900K 24 Core 32 Thread 3.2GHz",
      value: "1,850,000₮",
      isfreedelivery: true,
      stock: 5,
      badge: "Шинэ",
      image: "/banner/parts/i9-14900k.png",
    },
    {
      title: "AMD Ryzen 9 7950X 16 Core 32 Thread 4.5GHz",
      value: "1,650,000₮",
      isfreedelivery: true,
      stock: 8,
      image: "/banner/parts/ryzen9-7950x.png",
    },
    {
      title: "Intel Core i7-14700K 20 Core 28 Thread 3.4GHz",
      value: "1,250,000₮",
      isfreedelivery: true,
      stock: 12,
      badge: "Хит бараа",
      image: "/banner/parts/i7-14700k.png",
    },
    {
      title: "AMD Ryzen 7 7800X3D 8 Core 16 Thread 4.2GHz",
      value: "1,100,000₮",
      isfreedelivery: true,
      stock: 6,
      badge: "Шинэ",
      image: "/banner/parts/ryzen7-7800x3d.png",
    },
    {
      title: "Intel Core i5-14600K 14 Core 20 Thread 3.5GHz",
      value: "850,000₮",
      isfreedelivery: false,
      stock: 15
    },
    {
      title: "AMD Ryzen 5 7600X 6 Core 12 Thread 4.7GHz",
      value: "650,000₮",
      isfreedelivery: false,
      stock: 20
    },
    {
      title: "Intel Core i5-13400F 10 Core 16 Thread 2.5GHz",
      value: "550,000₮",
      isfreedelivery: false,
      stock: 25
    },
    {
      title: "AMD Ryzen 5 5600X 6 Core 12 Thread 3.7GHz",
      value: "450,000₮",
      isfreedelivery: false,
      stock: 30,
      badge: "Хямдрал"
    },
  ],
  gpu: [
    {
      title: "NVIDIA GeForce RTX 4090 24GB GDDR6X",
      value: "5,500,000₮",
      isfreedelivery: true,
      stock: 2,
      badge: "Шинэ"
    },
    {
      title: "AMD Radeon RX 7900 XTX 24GB GDDR6",
      value: "3,200,000₮",
      isfreedelivery: true,
      stock: 4
    },
    {
      title: "NVIDIA GeForce RTX 4080 16GB GDDR6X",
      value: "3,800,000₮",
      isfreedelivery: true,
      stock: 3,
      badge: "Хит бараа"
    },
    {
      title: "NVIDIA GeForce RTX 4070 Ti 12GB GDDR6X",
      value: "2,400,000₮",
      isfreedelivery: true,
      stock: 7
    },
    {
      title: "AMD Radeon RX 7800 XT 16GB GDDR6",
      value: "1,850,000₮",
      isfreedelivery: true,
      stock: 9
    },
    {
      title: "NVIDIA GeForce RTX 4060 Ti 8GB GDDR6",
      value: "1,400,000₮",
      isfreedelivery: false,
      stock: 12
    },
    {
      title: "AMD Radeon RX 6750 XT 12GB GDDR6",
      value: "1,100,000₮",
      isfreedelivery: false,
      stock: 15,
      badge: "Хямдрал"
    },
    {
      title: "NVIDIA GeForce RTX 4060 8GB GDDR6",
      value: "950,000₮",
      isfreedelivery: false,
      stock: 18
    },
  ],
  ram: [
    {
      title: "G.SKILL Trident Z5 RGB 64GB (2x32GB) DDR5-6000",
      value: "850,000₮",
      isfreedelivery: true,
      stock: 10,
      badge: "Шинэ"
    },
    {
      title: "Corsair Dominator Platinum RGB 32GB DDR5-5600",
      value: "520,000₮",
      isfreedelivery: true,
      stock: 15
    },
    {
      title: "Kingston Fury Beast 32GB (2x16GB) DDR5-5200",
      value: "380,000₮",
      isfreedelivery: true,
      stock: 20,
      badge: "Хит бараа"
    },
    {
      title: "Corsair Vengeance RGB 32GB DDR4-3600",
      value: "280,000₮",
      isfreedelivery: false,
      stock: 25
    },
    {
      title: "G.SKILL Ripjaws V 16GB (2x8GB) DDR4-3200",
      value: "150,000₮",
      isfreedelivery: false,
      stock: 40
    },
    {
      title: "Kingston Fury Beast 16GB DDR4-3200",
      value: "120,000₮",
      isfreedelivery: false,
      stock: 50,
      badge: "Хямдрал"
    },
    {
      title: "Crucial Ballistix 32GB (2x16GB) DDR4-3600",
      value: "260,000₮",
      isfreedelivery: false,
      stock: 30
    },
    {
      title: "TeamGroup T-Force Delta RGB 16GB DDR4-3200",
      value: "140,000₮",
      isfreedelivery: false,
      stock: 35
    },
  ],
  storage: [
    {
      title: "Samsung 990 PRO 2TB NVMe SSD PCIe 4.0",
      value: "650,000₮",
      isfreedelivery: true,
      stock: 12,
      badge: "Шинэ"
    },
    {
      title: "WD Black SN850X 2TB NVMe SSD PCIe 4.0",
      value: "580,000₮",
      isfreedelivery: true,
      stock: 15
    },
    {
      title: "Crucial P5 Plus 1TB NVMe SSD PCIe 4.0",
      value: "280,000₮",
      isfreedelivery: true,
      stock: 25,
      badge: "Хи�� бараа"
    },
    {
      title: "Kingston NV2 1TB NVMe SSD PCIe 4.0",
      value: "220,000₮",
      isfreedelivery: false,
      stock: 30
    },
    {
      title: "Samsung 870 EVO 1TB SATA SSD",
      value: "180,000₮",
      isfreedelivery: false,
      stock: 20
    },
    {
      title: "WD Blue 500GB SATA SSD",
      value: "95,000₮",
      isfreedelivery: false,
      stock: 40,
      badge: "Хямдрал"
    },
    {
      title: "Seagate Barracuda 2TB HDD 7200RPM",
      value: "120,000₮",
      isfreedelivery: false,
      stock: 35
    },
    {
      title: "WD Black 4TB HDD 7200RPM",
      value: "240,000₮",
      isfreedelivery: false,
      stock: 15
    },
  ],
  monitor: [
    {
      title: "ASUS TUF Gaming VG27AQML1A 27 inch 260Hz 2K",
      value: "1,200,000₮",
      isfreedelivery: true,
      stock: 5,
      badge: "Шинэ"
    },
    {
      title: "ASUS TUF Gaming VG27AQL3A 27 inch 180Hz 2K",
      value: "750,000₮",
      isfreedelivery: true,
      stock: 8
    },
    {
      title: "Asus Rog Strix XG27ACS 27 inch 180Hz 2K",
      value: "900,000₮",
      isfreedelivery: true,
      stock: 6,
      badge: "Хит бараа"
    },
    {
      title: "Asus - VA24EHFR 23.8-inch, 1920x1080, 100Hz",
      value: "300,000₮",
      isfreedelivery: false,
      stock: 15
    },
    {
      title: "Samsung Odyssey G7 32 inch 240Hz 2K Curved",
      value: "1,450,000₮",
      isfreedelivery: true,
      stock: 4,
      badge: "Шинэ"
    },
    {
      title: "LG UltraGear 27 inch 144Hz 1080p IPS",
      value: "550,000₮",
      isfreedelivery: false,
      stock: 12
    },
    {
      title: "Dell S2721DGF 27 inch 165Hz 2K IPS",
      value: "780,000₮",
      isfreedelivery: true,
      stock: 7
    },
    {
      title: "AOC 24G2 24 inch 144Hz 1080p IPS",
      value: "380,000₮",
      isfreedelivery: false,
      stock: 20,
      badge: "Хямдрал"
    },
  ],
  keyboard: [
    {
      title: "Corsair K100 RGB Mechanical Gaming Keyboard",
      value: "450,000₮",
      isfreedelivery: true,
      stock: 8,
      badge: "Шинэ"
    },
    {
      title: "Logitech G915 TKL Wireless Mechanical",
      value: "550,000₮",
      isfreedelivery: true,
      stock: 6
    },
    {
      title: "Razer BlackWidow V3 Pro Wireless",
      value: "480,000₮",
      isfreedelivery: true,
      stock: 10,
      badge: "Хит бараа"
    },
    {
      title: "SteelSeries Apex Pro TKL Mechanical",
      value: "420,000₮",
      isfreedelivery: false,
      stock: 12
    },
    {
      title: "HyperX Alloy Origins Core RGB Mechanical",
      value: "220,000₮",
      isfreedelivery: false,
      stock: 18
    },
    {
      title: "Keychron K8 Wireless Mechanical",
      value: "280,000₮",
      isfreedelivery: false,
      stock: 15,
      badge: "Хямдрал"
    },
    {
      title: "Ducky One 3 TKL Mechanical RGB",
      value: "320,000₮",
      isfreedelivery: false,
      stock: 14
    },
    {
      title: "ASUS ROG Strix Scope RX TKL Wireless",
      value: "380,000₮",
      isfreedelivery: false,
      stock: 9
    },
  ],
};

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Компьютерын эд анги',
    href: computerparts().url,
  },
];

export default function Computerparts() {
  const [active, setActive] = useState<string>("cpu");

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Tabs defaultValue="cpu" className="w-full">
        {/* ===== Tabs Header (Category Buttons) ===== */}
        <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 gap-2 bg-transparent">
          {categories.map((btn) => (
            <TabsTrigger
              key={btn.id}
              value={btn.id}
              className="flex flex-col gap-0.5 py-2 h-20 justify-center items-center 
              bg-sidebar text-slate-300 border border-darkblue-900 
              data-[state=active]:bg-white data-[state=active]:text-black 
              hover:bg-[#363234] transition-all"
            >
              {btn.icon}
              <span className="text-sm mt-2">{btn.label}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {/* ===== Tabs Content (Products per Category) ===== */}
        {Object.entries(products).map(([key, items]) => (
          <TabsContent key={key} value={key} className="mt-20">
            <div className="mb-4 flex items-center justify-between">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
              {items.map((product, index) => (
                <Card
                  key={index}
                  className="border border-gray-800 bg-sidebar rounded-xl overflow-hidden hover:bg-[#363234] transition-all"
                >
                  {/* Image */}
                  {product.image && (
                    <div className="relative w-full h-64 md:h-72 lg:h-80">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-center"
                      />
                    </div>
                  )}

                  <CardContent className="p-4 flex flex-col justify-between">
                    <h3 className="text-white font-medium mb-2">{product.title}</h3>
                    <p className="text-gray-300">{product.value}</p>

                    {/* Badges */}
                    <div className="flex gap-2 mt-2 flex-wrap">
                      {product.badge && <Badge variant="destructive">{product.badge}</Badge>}
                      {product.isfreedelivery && <Badge variant="outline">Хүргэлт үнэгүй</Badge>}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>


          </TabsContent>
        ))}
      </Tabs>
    </AppLayout>
  );
}

