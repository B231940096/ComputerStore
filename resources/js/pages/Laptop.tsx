import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { laptop } from '@/routes/index';
import { type BreadcrumbItem } from '@/types';
import {LaptopMinimal, LaptopMinimalCheck, BriefcaseBusiness, Menu,} from "lucide-react";
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
  { id: "laptop", label: "Зөөврийн компьютер", icon: <LaptopMinimal className="w-5 h-5" /> }, 
  { id: "macbook", label: "MacBook", icon: <LaptopMinimalCheck className="w-5 h-5" /> },
  { id: "bags", label: "Цүнх / Үүргэвч", icon: <BriefcaseBusiness className="w-5 h-5" /> },
  { id: "accessories", label: "Дагалдах хэрэгсэл", icon: <Menu className="w-5 h-5" /> },
]

const products: Record<string, Product[]> = {
  laptop: [
    {
      title: "Asrock - Aspire Vero 16 Laptop - Ultra 7 155U , 16GB , 1 TB SSD",
      value: "3,150,000",
      isfreedelivery: true,
      stock: 5,
      badge: "Шинэ",
      image: "/banner/laptop/notebook/lt-1.png",
    },
    {
      title: "Gigabyte - Gaming A16 GA63H / AMD Ryzen 7 260 , RTX 5060 /",
      value: "5,200,000",
      isfreedelivery: true,
      stock: 8,
      badge: "Шинэ",
      image: "/banner/laptop/notebook/lt-2.png",
    },
        {
      title: "ACER - Shadow Knight 16 \"  i7 14650HX, 16GB DDR RAM, 1TB , RTX 4060/ SH16-72-7G41 165HZ",
      value: "3,570,000",
      isfreedelivery: true,
      stock: 5,
      badge: "Шинэ",
      image: "/banner/laptop/notebook/lt-3.png",
    },
    {
      title: "MSI Stealth 18 Mercedes-AMG - 18\" - Ultra 9 185H - RTX 4080 - 64 GB D5- 2 TB PCIe SSD",
      value: "12,900,000",
      isfreedelivery: true,
      stock: 8,
      image: "/banner/laptop/notebook/lt-4.png",
    },
        {
      title: "Acer- Predator Helios 16 Intel Core i7-13700HX RTX 4060",
      value: "4,850,000",
      isfreedelivery: true,
      stock: 5,
      badge: "Шинэ",
      image: "/banner/laptop/notebook/lt-5.png",
    },
    {
      title: "Asus - Vivobook S 14-inch OLED /Ultra 9 Processor ,16GB D5, 1TB Nvme/ Neutral Black",
      value: "3,900,000",
      isfreedelivery: true,
      stock: 8,
      image: "/banner/laptop/notebook/lt-6.png",
    },
        {
      title: "Acer Nitro V 15,6\" IPS /Intel i9-13900H, 16GB D5, RTX 4060, 512GB Nvme/ Obsidian Black",
      value: "4,000,000",
      isfreedelivery: true,
      stock: 5,
      badge: "Шинэ",
      image: "/banner/laptop/notebook/lt-7.png",
    },
    {
      title: "MSI Thin A15 AI B8V 15.6\" 144 Hz IPS - AMD R9 8945HS - RTX 4060 Laptop GPU - 16 GB DDR5 - 1 TB PCIe SSD -(Thin A15 AI B8VF-270US )",
      value: "4,500,000",
      isfreedelivery: true,
      stock: 8,
      image: "/banner/laptop/notebook/lt-8.png",
    },
        {
      title: "Aorus 15 Series -15'' 165Hz IPS - Ultra 7 155H - RTX 4060 Laptop GPU - 16GB DDR5 - 1TB PCIe SSD - (15 BKG-13US754SH )",
      value: "6,000,000",
      isfreedelivery: true,
      stock: 5,
      badge: "Шинэ",
      image: "/banner/laptop/notebook/lt-9.png",
    },
    {
      title: "MSI - Stealth 16 Studio i7-13620H / RTX 4070 / Star Blue",
      value: "5,000,000",
      isfreedelivery: true,
      stock: 8,
      image: "/banner/laptop/notebook/lt-10.png",
    },
        {
      title: "Asus - Vivobook S 14 Copilot 14” WUXGA OLED 60Hz / Intel Core Ultra 7 / Mist Blue",
      value: "3,800,000",
      isfreedelivery: true,
      stock: 5,
      badge: "Шинэ",
      image: "/banner/laptop/notebook/lt-11.png",
    },
    {
      title: "MSI - Prestige 16Evo i7-13700H - 32GB D5 - 1TB - 16\" QHD+ Ultra Thin / A13M-406US /",
      value: "3,800,000",
      isfreedelivery: true,
      stock: 8,
      image: "/banner/laptop/notebook/lt-12.png",
    },
  ],
  macbook: [
    {
      title: "Apple - MacBook Air M1 chip 256GB SSD, 8GB RAM, 13.3inch Space Grey(used)",
      value: "2,250,000",
      isfreedelivery: true,
      stock: 8,
      badge: "Шинэ",
      image: "/banner/laptop/macbook/mb-1.png",
    },
    {
      title: "Apple MacBook Pro M3 Chip 512GB 18GB 14.2 inches - Space Black",
      value: "7,250,000",
      isfreedelivery: true,
      stock: 6,
      badge: "Шинэ",
      image: "/banner/laptop/macbook/mb-2.png",
    },
    {
      title: "Apple MacBook Air M3 Chip 256GB 8GB RAM 15 inches - Midnight",
      value: "4,180,000",
      isfreedelivery: true,
      stock: 10,
      badge: "Хит бараа",
      image: "/banner/laptop/macbook/mb-3.png",
    },
    {
      title: "Apple MacBook Air M3 Chip 256GB 8GB RAM 15 inches - Starlight",
      value: "4,300,000",
      isfreedelivery: false,
      stock: 12,
      badge: "Шинэ",
      image: "/banner/laptop/macbook/mb-4.png",
    },
    {
      title: "Apple - MacBook Pro M3 chip 512GB SSD, 8GB RAM, 14inch Silver",
      value: "5,450,000",
      isfreedelivery: false,
      stock: 18,
      badge: "Шинэ",
      image: "/banner/laptop/macbook/mb-5.png",
    },
    {
      title: "Apple MacBook Pro M3 Chip 1TB 18GB 14.2 inches - Space black",
      value: "7,950,000",
      isfreedelivery: false,
      stock: 15,
      badge: "Шинэ",
      image: "/banner/laptop/macbook/mb-6.png",
    },
    {
      title: "Apple - MacBook Pro M3 Max chip 1TB SSD, 36GB RAM, 16.2inch Space Black",
      value: "12,500,000",
      isfreedelivery: false,
      stock: 14,
      badge: "Шинэ",
      image: "/banner/laptop/macbook/mb-7.png",
    },
    {
      title: "Apple - Macbook Air M3 15-inch ,256GB ,8GB / Space Gray",
      value: "4,300,000",
      isfreedelivery: false,
      stock: 9,
      badge: "Шинэ",
      image: "/banner/laptop/macbook/mb-8.png",
    },
        {
      title: "Apple - MacBook Air M4 chip, 256GB, 16GB, 13.6-inch - Midnight",
      value: "3,900,000",
      isfreedelivery: false,
      stock: 14,
      badge: "Шинэ",
      image: "/banner/laptop/macbook/mb-9.png",
    },
    {
      title: "Apple - MacBook Air M4 chip, 256GB, 16GB, 13.6-inch - Sky Blue",
      value: "3,900,000",
      isfreedelivery: false,
      stock: 9,
      badge: "Шинэ",
      image: "/banner/laptop/macbook/mb-10.png",
    },
        {
      title: "Apple - MacBook Air M4 chip, 256GB, 16GB, 13.6-inch - Starlight",
      value: "3,900,000",
      isfreedelivery: false,
      stock: 14,
      badge: "Шинэ",
      image: "/banner/laptop/macbook/mb-11.png",
    },
  ],
  bags: [
    {
      title: "HyperX Delta Backpack",
      value: "150,000",
      isfreedelivery: true,
      stock: 8,
      badge: "Шинэ",
      image: "/banner/laptop/bags/bag-1.png",
    },
    {
      title: "HyperX Knight Backpack",
      value: "250,000",
      isfreedelivery: true,
      stock: 6,
      badge: "Шинэ",
      image: "/banner/laptop/bags/bag-2.png",
    },
  ],
  accessories: [
    {
      title: "Apple 45W MagSafe Power Adapter (for MacBook Air)",
      value: "70,000",
      isfreedelivery: true,
      stock: 8,
      badge: "Шинэ",
      image: "/banner/laptop/accessories/acce-1.png",
    },
    {
      title: "Apple 61W USB-C Power Adapter",
      value: "120,000",
      isfreedelivery: true,
      stock: 6,
      badge: "Шинэ",
      image: "/banner/laptop/accessories/acce-2.png",
    },
    {
      title: "Apple 30W USB-C Power Adapter",
      value: "95,000",
      isfreedelivery: true,
      stock: 10,
      badge: "Хит бараа",
      image: "/banner/laptop/accessories/acce-3.png",
    },
  ],
};

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Зөөврийн компьютер',
    href: laptop().url,
  },
];

export default function Laptop() {
  const [active, setActive] = useState<string>("laptop");
  

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Tabs value={active} onValueChange={setActive} defaultValue="cpu" className="w-full">
        {/* ===== Tabs Header (Category Buttons) ===== */}
        <TabsList
          className="
     mt-5
            flex gap-3  whitespace-nowrap scrollbar-none ml-auto mr-auto
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
                <h2 className="text-white text-lg font-semibold">
                  {categories.find((c) => c.id === key)?.label}
                </h2>
                <p className="text-gray-400">{items.length} бүтээгдэхүүн</p>
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
                  className="border-border bg-card text-muted-foreground hover:bg-muted hover:text-foreground"
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
                    <Button variant="outline" className="border-border bg-card text-muted-foreground hover:bg-muted hover:text-muted-foreground">
                      Сагсанд нэмэх
                    </Button>
                    <span className="text-foreground">{product.value}₮</span>
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

