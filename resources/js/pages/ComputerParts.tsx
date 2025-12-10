import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { computerparts } from '@/routes/index';
import { type BreadcrumbItem } from '@/types';
import { Cpu, Monitor, Keyboard, HardDrive, MemoryStick, Microchip, SquareSquare, Power, Fan, EqualApproximately, PcCase } from "lucide-react";
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
  { id: "cpu", label: "Процессор", icon: <Cpu className="w-5 h-5" /> },
  { id: "gpu", label: "График карт", icon: <Microchip className="w-5 h-5" /> },
  { id: "ram", label: "Шуурхай санах ой / RAM", icon: <MemoryStick className="w-5 h-5" /> },
  { id: "storage", label: "Хадгалах төхөөрөмж", icon: <HardDrive className="w-5 h-5" /> },
  { id: "motherboard", label: "Эх хавтан", icon: <SquareSquare className="w-5 h-5" /> },
  { id: "power_supply", label: "Тэжээлийн блок", icon: <Power className="w-5 h-5" /> },
  { id: "fan", label: "Сэнс / Дагах хэрэгсэл", icon: <Fan className="w-5 h-5" /> },
  { id: "cpu_cooler", label: "Хөргүүр /CPU/", icon: <EqualApproximately className="w-5 h-5" /> },
  { id: "case", label: "Кэйс", icon: <PcCase className="w-5 h-5" /> },
]

const products: Record<string, Product[]> = {
  cpu: [
    {
      title: "Intel Core i9-14900K 24 Core 32 Thread 3.2GHz",
      value: "1,850,000",
      isfreedelivery: true,
      stock: 5,
      badge: "Шинэ",
      image: "/banner/parts/cpu/i9-14900k.png",
    },
    {
      title: "AMD Ryzen 9 7950X 16 Core 32 Thread 4.5GHz",
      value: "1,650,000",
      isfreedelivery: true,
      stock: 8,
      image: "/banner/parts/cpu/ryzen9-7950x.png",
    },
    {
      title: "Intel Core i7-14700K 20 Core 28 Thread 3.4GHz",
      value: "1,250,000",
      isfreedelivery: true,
      stock: 12,
      badge: "Хит бараа",
      image: "/banner/parts/cpu/i7-14700k.png",
    },
    {
      title: "AMD Ryzen 7 7800X3D 8 Core 16 Thread 4.2GHz",
      value: "1,100,000",
      isfreedelivery: true,
      stock: 6,
      badge: "Шинэ",
      image: "/banner/parts/cpu/ryzen7-7800x3d.png",
    },
    {
      title: "Intel Core i5-14600K 14 Core 20 Thread 3.5GHz",
      value: "850,000",
      isfreedelivery: false,
      stock: 15,
      image: "/banner/parts/cpu/i5-14600k.png",
    },
    {
      title: "AMD Ryzen 5 7600X 6 Core 12 Thread 4.7GHz",
      value: "650,000",
      isfreedelivery: false,
      stock: 20,
      image: "/banner/parts/cpu/ryzen5-7600x.png",
    },
    {
      title: "Intel Core i5-13400F 10 Core 16 Thread 2.5GHz",
      value: "550,000",
      isfreedelivery: false,
      stock: 25,
      image: "/banner/parts/cpu/i5-13400f.png",
    },
    {
      title: "AMD Ryzen 5 5600X 6 Core 12 Thread 3.7GHz",
      value: "450,000",
      isfreedelivery: false,
      stock: 30,
      badge: "Хямдрал",
      image: "/banner/parts/cpu/ryzen5-5600x.png",
    },
  ],
  gpu: [
    {
      title: "NVIDIA GeForce RTX 4090 24GB GDDR6X",
      value: "5,500,000",
      isfreedelivery: true,
      stock: 2,
      badge: "Шинэ",
      image: "/banner/parts/gpu/rtx-4090.png",
    },
    {
      title: "AMD Radeon RX 7900 XTX 24GB GDDR6",
      value: "3,200,000",
      isfreedelivery: true,
      stock: 4,
      image: "/banner/parts/gpu/RX7900.png",
    },
    {
      title: "NVIDIA GeForce RTX 4080 16GB GDDR6X",
      value: "3,800,000",
      isfreedelivery: true,
      stock: 3,
      badge: "Хит бараа",
      image: "/banner/parts/gpu/rtx-4080.png",
    },
    {
      title: "NVIDIA GeForce RTX 4070 Ti 12GB GDDR6X",
      value: "2,400,000",
      isfreedelivery: true,
      stock: 7,
      image: "/banner/parts/gpu/rtx-4070ti.png",
    },
    {
      title: "AMD Radeon RX 7800 XT 16GB GDDR6",
      value: "1,850,000",
      isfreedelivery: true,
      stock: 9,
      image: "/banner/parts/gpu/RX7800.png",
    },
    {
      title: "NVIDIA GeForce RTX 4060 Ti 8GB GDDR6",
      value: "1,400,000",
      isfreedelivery: false,
      stock: 12,
      image: "/banner/parts/gpu/rtx-4060ti.png",
    },
    {
      title: "AMD Radeon RX 6750 XT 12GB GDDR6",
      value: "1,100,000",
      isfreedelivery: false,
      stock: 15,
      badge: "Хямдрал",
      image: "/banner/parts/gpu/RX6750.png",
    },
    {
      title: "NVIDIA GeForce RTX 4060 8GB GDDR6",
      value: "950,000",
      isfreedelivery: false,
      stock: 18,
      image: "/banner/parts/gpu/rtx-4060.png",
    },
  ],
  ram: [
    {
      title: "G.SKILL Trident Z5 RGB 64GB (2x32GB) DDR5-6000",
      value: "850,000",
      isfreedelivery: true,
      stock: 10,
      badge: "Шинэ",
      image: "/banner/parts/ram/z5-64.webp",
    },
    {
      title: "Corsair Dominator Platinum RGB 32GB DDR5-5600",
      value: "520,000",
      isfreedelivery: true,
      stock: 15,
      image: "/banner/parts/ram/platinum-32.avif",
    },
    {
      title: "Kingston Fury Beast 32GB (2x16GB) DDR5-5200",
      value: "380,000",
      isfreedelivery: true,
      stock: 20,
      badge: "Хит бараа",
      image: "/banner/parts/ram/beast-32.png",
    },
    {
      title: "Corsair Vengeance RGB 32GB DDR4-3600",
      value: "280,000",
      isfreedelivery: false,
      stock: 25,
      image: "/banner/parts/ram/vengeance-32.png",
    },
    {
      title: "G.SKILL Ripjaws V 16GB (2x8GB) DDR4-3200",
      value: "150,000",
      isfreedelivery: false,
      stock: 40,
        image: "/banner/parts/ram/ripjaws-v-16.webp",
      },
      {
      title: "Kingston Fury Beast 16GB DDR4-3200",
      value: "120,000",
      isfreedelivery: false,
      stock: 50,
      badge: "Хямдрал",
      image: "/banner/parts/ram/beast-16.png",
    },
    {
      title: "Crucial Ballistix 32GB (2x16GB) DDR4-3600",
      value: "260,000",
      isfreedelivery: false,
      stock: 30,
      image: "/banner/parts/ram/ballistix-32.png",
    },
    {
      title: "TeamGroup T-Force Delta RGB 16GB DDR4-3200",
      value: "140,000",
      isfreedelivery: false,
      stock: 35,
      image: "/banner/parts/ram/delta-16.png",
    },
  ],
  storage: [
    {
      title: "Samsung 990 PRO 2TB NVMe SSD PCIe 4.0",
      value: "650,000",
      isfreedelivery: true,
      stock: 12,
      badge: "Шинэ",
      image: "/banner/parts/ssd, hdd/samsung990-2tb.png",
    },
    {
      title: "WD Black SN850X 2TB NVMe SSD PCIe 4.0",
      value: "580,000",
      isfreedelivery: true,
      stock: 15,
      image: "/banner/parts/ssd, hdd/sn850x-2tb.png",
    },
    {
      title: "Crucial P5 Plus 1TB NVMe SSD PCIe 4.0",
      value: "280,000",
      isfreedelivery: true,
      stock: 25,
      badge: "Хямдрал",
      image: "/banner/parts/ssd, hdd/crucial-plus-1tb.png",
    },
    {
      title: "Kingston NV2 1TB NVMe SSD PCIe 4.0",
      value: "220,000",
      isfreedelivery: false,
      stock: 30,
      image: "/banner/parts/ssd, hdd/kingston-1tb.png",
    },
    {
      title: "Samsung 870 EVO 1TB SATA SSD",
      value: "180,000",
      isfreedelivery: false,
      stock: 20,
      image: "/banner/parts/ssd, hdd/samsung-870-1tb.png",
    },
    {
      title: "WD Blue 500GB SATA SSD",
      value: "95,000",
      isfreedelivery: false,
      stock: 40,
      badge: "Хямдрал",
      image: "/banner/parts/ssd, hdd/wdblue-500.png",
    },
    {
      title: "Seagate Barracuda 2TB HDD 7200RPM",
      value: "120,000",
      isfreedelivery: false,
      stock: 35,
      image: "/banner/parts/ssd, hdd/barracuda-2tb.png",
    },
    {
      title: "WD Black 4TB HDD 7200RPM",
      value: "240,000",
      isfreedelivery: false,
      stock: 15,
      image: "/banner/parts/ssd, hdd/wdblack-4tb.png",
    },
  ],
  motherboard: [
    {
      title: "Asus - Prime B760M-K DDR5",
      value: "400,000",
      isfreedelivery: true,
      stock: 10,
      badge: "Шинэ",
      image: "/banner/parts/motherboards/mb-1.png",
    },
    {
      title: "Asrock - B760M-H2/M.2",
      value: "300,000",
      isfreedelivery: true,
      stock: 15,
      badge: "Шинэ",
      image: "/banner/parts/motherboards/mb-2.png",
    },
    {
      title: "Asus - Prime Z790-P DDR5 Nobox",
      value: "600,000",
      isfreedelivery: true,
      stock: 25,
      badge: "Хямдрал",
      image: "/banner/parts/motherboards/mb-3.png",
    },
    {
      title: "Asus - PRIME X870-P",
      value: "1,000,000",
      isfreedelivery: false,
      stock: 30,
      badge: "Шинэ",
      image: "/banner/parts/motherboards/mb-4.png",
    },
    {
      title: "MSI - B760M GAMING Plus WIFI",
      value: "600,000",
      isfreedelivery: false,
      stock: 20,
      badge: "Шинэ",
      image: "/banner/parts/motherboards/mb-5.png",
    },
    {
      title: "MSI - Pro B650M-A D5 / AMD /",
      value: "550,000",
      isfreedelivery: false,
      stock: 40,
      badge: "Шинэ",
      image: "/banner/parts/motherboards/mb-6.png",
    },
    {
      title: "Asus - ProArt X870E-CREATOR WIFI",
      value: "1,900,000",
      isfreedelivery: false,
      stock: 35,
      badge: "Шинэ",
      image: "/banner/parts/motherboards/mb-7.png",
    },
    {
      title: "Asrock - X870E Taichi Wi-Fi /AMD/",
      value: "2,000,000",
      isfreedelivery: false,
      stock: 15,
      badge: "Шинэ",
      image: "/banner/parts/motherboards/mb-8.png",
    },
    {
      title: "Gigabyte - X870 Aorus Elite WiFi 7 /AMD/",
      value: "1,200,000",
      isfreedelivery: false,
      stock: 15,
      badge: "Шинэ",
      image: "/banner/parts/motherboards/mb-9.png",
    },
    {
      title: "Asus - Rog Strix X870E-E Gaming Wifi",
      value: "2,000,000",
      isfreedelivery: false,
      stock: 15,
      badge: "Шинэ",
      image: "/banner/parts/motherboards/mb-10.png",
    },
  ],
  power_supply: [
    {
      title: "ASUS ROG Thor 1600W Titanium Power Supply",
      value: "1,950,000",
      isfreedelivery: true,
      stock: 4,
      badge: "Шинэ",
      image: "/banner/parts/psu/psu-1.png",
    },
    {
      title: "Seasonic - Vertex PX 1200W 80 PLUS PLATINUM",
      value: "1,300,000",
      isfreedelivery: true,
      stock: 8,
      badge: "Шинэ",
      image: "/banner/parts/psu/psu-2.png",
    },
    {
      title: "Asus - ROG Thor 1000W Platinum II",
      value: "1,050,000",
      isfreedelivery: true,
      stock: 2,
      badge: "Хямдрал",
      image: "/banner/parts/psu/psu-3.png",
    },
    {
      title: "Adata - XPG 1300W Platinium",
      value: "750,000",
      isfreedelivery: false,
      stock: 1,
      badge: "Шинэ",
      image: "/banner/parts/psu/psu-4.png",
    },
    {
      title: "Seasonic FOCUS GX 1000W 80+ GOLD Certified",
      value: "750,000",
      isfreedelivery: false,
      stock: 6,
      badge: "Шинэ",
      image: "/banner/parts/psu/psu-5.png",
    },
    {
      title: "Seasonic - FOCUS GX 1000W 80+ GOLD Certified WHITE EDITION",
      value: "750,000",
      isfreedelivery: false,
      stock: 8,
      badge: "Шинэ",
      image: "/banner/parts/psu/psu-6.png",
    },
    {
      title: "Thermalright TPFX1000-W Platinum Full Module SFX Power Supply",
      value: "500,000",
      isfreedelivery: false,
      stock: 35,
      badge: "Шинэ",
      image: "/banner/parts/psu/psu-7.png",
    },
    {
      title: "DeepCool PL800D 800W 80 Plus Bronze Certified",
      value: "250,000",
      isfreedelivery: false,
      stock: 15,
      badge: "Шинэ",
      image: "/banner/parts/psu/psu-8.png",
    },
  ],
    fan : [
    {
      title: "Jonsbo - ZC360 Multi-Screen Fan / White",
      value: "300,000",
      isfreedelivery: true,
      stock: 4,
      badge: "Шинэ",
      image: "/banner/parts/fan/fan-1.png",
    },
    {
      title: "Jonsbo - ZC360 Multi-Screen Fan / Black",
      value: "300,000",
      isfreedelivery: true,
      stock: 8,
      badge: "Шинэ",
      image: "/banner/parts/fan/fan-2.png",
    },
    {
      title: "Phanteks - 140mmx3 M25 G2 Black",
      value: "100,000",
      isfreedelivery: true,
      stock: 2,
      badge: "Хямдрал",
      image: "/banner/parts/fan/fan-3.png",
    },
    {
      title: "Phanteks - 120mmx3 M25 G2 White",
      value: "80,000",
      isfreedelivery: false,
      stock: 1,
      badge: "Шинэ",
      image: "/banner/parts/fan/fan-4.png",
    },
    {
      title: "Valkyrie X12 120mm ARGB Fan - Black",
      value: "60,000",
      isfreedelivery: false,
      stock: 6,
      badge: "Шинэ",
      image: "/banner/parts/fan/fan-5.png",
    },
    {
      title: "Valkyrie X12 120mm ARGB Fan - White",
      value: "60,000",
      isfreedelivery: false,
      stock: 8,
      badge: "Шинэ",
      image: "/banner/parts/fan/fan-6.png",
    },
    {
      title: "JONSBO - ZA-120W PC Case Fan / Black",
      value: "30,000",
      isfreedelivery: false,
      stock: 35,
      badge: "Шинэ",
      image: "/banner/parts/fan/fan-7.png",
    },
    {
      title: "Phanteks - D30 120mm D-RGB Reversed Fan 3x Pack / White",
      value: "300,000",
      isfreedelivery: false,
      stock: 15,
      badge: "Шинэ",
      image: "/banner/parts/fan/fan-8.png",
    },
  ],
      cpu_cooler : [
    {
      title: "HYTE - THICC Q60 Digital Processor Cooling / 5” Ultraslim HD Display with 42 Pixel qRGB LEDs /OpenBox/",
      value: "1,400,000",
      isfreedelivery: true,
      stock: 4,
      badge: "Шинэ",
      image: "/banner/parts/cooler/cooler-1.png",
    },
    {
      title: "Asus - ROG RYUJIN III 360 ARGB Extreme / White",
      value: "1,350,000",
      isfreedelivery: true,
      stock: 8,
      badge: "Шинэ",
      image: "/banner/parts/cooler/cooler-2.png",
    },
    {
      title: "TRYX - PANORAMA SE ARGB 360 L-shaped AMOLED Screen Liquid Cooler / White",
      value: "840,000",
      isfreedelivery: true,
      stock: 2,
      badge: "Хямдрал",
      image: "/banner/parts/cooler/cooler-3.png",
    },
    {
      title: "TRYX - PANORAMA SE ARGB 360 L-shaped AMOLED Screen Liquid Cooler / Black",
      value: "840,000",
      isfreedelivery: false,
      stock: 1,
      badge: "Шинэ",
      image: "/banner/parts/cooler/cooler-4.png",
    },
    {
      title: "Thermalright - Wonder Vision 360 UB ARGB WHITE",
      value: "650,000",
      isfreedelivery: false,
      stock: 6,
      badge: "Шинэ",
      image: "/banner/parts/cooler/cooler-5.png",
    },
    {
      title: "DeepCool Assassin IV - White",
      value: "320,000",
      isfreedelivery: false,
      stock: 8,
      badge: "Шинэ",
      image: "/banner/parts/cooler/cooler-6.png",
    },
    {
      title: "Corsair - iCUE H100i RGB PRO XT Liquid CPU Cooler",
      value: "300,000",
      isfreedelivery: false,
      stock: 35,
      badge: "Шинэ",
      image: "/banner/parts/cooler/cooler-7.png",
    },
    {
      title: "Thermalright Peerless Assassin 120 SE ARGB - Black",
      value: "200,000",
      isfreedelivery: false,
      stock: 15,
      badge: "Шинэ",
      image: "/banner/parts/cooler/cooler-8.png",
    },
  ],
        case : [
    {
      title: "Asus ROG Strix Helios GX601 RGB Mid-Tower White",
      value: "1,100,000",
      isfreedelivery: true,
      stock: 8,
      badge: "Шинэ",
      image: "/banner/parts/case/case-1.png",
    },
    {
      title: "HYTE Y60 Modern Aesthetic Case - Black",
      value: "850,000",
      isfreedelivery: true,
      stock: 8,
      badge: "Шинэ",
      image: "/banner/parts/case/case-2.png",
    },
    {
      title: "Asus - ProArt PA602",
      value: "840,000",
      isfreedelivery: true,
      stock: 2,
      badge: "Хямдрал",
      image: "/banner/parts/case/case-3.png",
    },
    {
      title: "Phanteks - XT V3 Black",
      value: "140,000",
      isfreedelivery: false,
      stock: 1,
      badge: "Шинэ",
      image: "/banner/parts/case/case-4.png",
    },
    {
      title: "Phanteks - XT V3 White",
      value: "140,000",
      isfreedelivery: false,
      stock: 6,
      badge: "Шинэ",
      image: "/banner/parts/case/case-5.png",
    },
    {
      title: "Phanteks - XT View Black / No fan included /",
      value: "180,000",
      isfreedelivery: false,
      stock: 8,
      badge: "Шинэ",
      image: "/banner/parts/case/case-6.png",
    },
    {
      title: "Coolermaster - Elite 302 Lite White",
      value: "160,000", 
      isfreedelivery: false,
      stock: 35,
      badge: "Шинэ",
      image: "/banner/parts/case/case-7.png",
    },
    {
      title: "ASUS Prime AP202 - Black",
      value: "320,000",
      isfreedelivery: false,
      stock: 15,
      badge: "Шинэ",
      image: "/banner/parts/case/case-8.png",
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
      <Tabs value={active} onValueChange={setActive} defaultValue="cpu" className="w-full">
        {/* ===== Tabs Header (Category Buttons) ===== */}
        <TabsList
          className="
          mt-5
    flex gap-3  whitespace-nowrap scrollbar-none
    px-4 py-2 bg-transparent
  "
        >
          {categories.map((btn) => (
            <TabsTrigger
              key={btn.id}
              value={btn.id}
              className="
        flex items-center gap-2 px-5 py-5
        rounded-lg border border-border
        bg-card text-foreground
        whitespace-nowrap
data-[state=active]:bg-primary data-[state=active]:text-primary-foreground
        hover:bg-muted
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
                <h2 className="text-foreground text-lg font-semibold">
                  {categories.find((c) => c.id === key)?.label}
                </h2>
                <p className="text-muted-foreground">{items.length} бүтээгдэхүүн</p>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="border-border bg-card text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  Үнээр
                </Button>
                <Button
                  variant="outline"
                  className="border-border bg-card text-muted-foreground hover:bg-muted hover:text-foreground"
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
                  className="border border-border bg-card rounded-xl overflow-hidden hover:bg-muted transition-all"
                >
                  {/* Image */}
                  {product.image && (
                    <div className="relative w-full h-64 md:h-80 lg:h-80">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}

                  <CardContent className="p-4 flex flex-col justify-between">
                    <h3 className="text-foreground font-medium mb-2">{product.title}</h3>

                    {/* Badges */}
                    <div className="flex gap-2 mt-2 flex-wrap">
                      {product.badge && <Badge variant="destructive">{product.badge}</Badge>}
                      {product.isfreedelivery && <Badge variant="outline">Хүргэлт үнэгүй</Badge>}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" className="border-border bg-card text-muted-foreground hover:bg-muted hover:text-foreground">
                      Сагсанд нэмэх
                    </Button>
                    <span className="text-muted-foreground">{product.value}₮</span>
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

