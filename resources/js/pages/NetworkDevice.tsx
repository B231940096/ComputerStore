import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { networkdevice } from '@/routes/index';
import { type BreadcrumbItem } from '@/types';
import {Cable, Router, ServerCog,} from "lucide-react";
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
  { id: "cable", label: "Кабел залгуур", icon: <Cable className="w-5 h-5" /> }, 
  { id: "server", label: "Сервер, Рак, Кабинет", icon: <Router className="w-5 h-5" /> },
  { id: "networkdevice", label: "Сүлжээний төхөөрөмж", icon: <ServerCog className="w-5 h-5" /> },
]

const products: Record<string, Product[]> = {
  cable: [
    {
      title: "APCE - RJ45 Lan Cat6a Unshielded, 3-piece Suite Connector",
      value: "1,500",
      isfreedelivery: true,
      stock: 5,
      badge: "Шинэ",
      image: "/banner/networkdevice/cable/cab-1.png",
    },
    {
      title: "TP-Link-WN8200ND 300Mbps High Power Wireless USB Adapter",
      value: "60,000",
      isfreedelivery: true,
      stock: 8,
      badge: "Шинэ",
      image: "/banner/networkdevice/cable/cab-2.png",
    },
  ],
  server: [
    {
      title: "WS3-6412 - 12U Wall Mount Rack",
      value: "250,000",
      isfreedelivery: true,
      stock: 8,
      badge: "Шинэ",
      image: "/banner/networkdevice/server/ser-1.png",
    },
    {
      title: "WS3-6409 - 9U Wall Mount Rack",
      value: "200,000",
      isfreedelivery: true,
      stock: 6,
      badge: "Шинэ",
      image: "/banner/networkdevice/server/ser-2.png",
    },
    {
      title: "WS3-6406 - 6U Wall Mount Rack",
      value: "150,000",
      isfreedelivery: true,
      stock: 10,
      badge: "Хит бараа",
      image: "/banner/networkdevice/server/ser-3.png",
    },
  ],
  networkdevice: [
    {
      title: "TP-link - T2UB Nano AC600 Wi-Fi Bluetooth 4.2 USB Adapter",
      value: "45,000",
      isfreedelivery: true,
      stock: 8,
      badge: "Шинэ",
      image: "/banner/networkdevice/network/net-1.png",
    },
    {
      title: "TP-Link Archer TX20E - AX1800 Wi-Fi 6 Bluetooth 5.2 PCIe Adapter",
      value: "80,000",
      isfreedelivery: true,
      stock: 6,
      badge: "Шинэ",
      image: "/banner/networkdevice/network/net-2.png",
    },
        {
      title: "TP-Link - Archer TX50E AX3000 Wi-Fi 6 Bluetooth 5.0 PCIe Adapter",
      value: "100,000",
      isfreedelivery: true,
      stock: 8,
      badge: "Шинэ",
      image: "/banner/networkdevice/network/net-3.png",
    },
    {
      title: "TP-Link TL-SG116E 16-Port Gigabit Easy Smart Switch",
      value: "220,000",
      isfreedelivery: true,
      stock: 6,
      badge: "Шинэ",
      image: "/banner/networkdevice/network/net-4.png",
    },
        {
      title: "TP-Link - Archer TX20U Nano Wi-Fi 6 Wireless USB Adapter",
      value: "100,000",
      isfreedelivery: true,
      stock: 8,
      badge: "Шинэ",
      image: "/banner/networkdevice/network/net-5.png",
    },
    {
      title: "TP-Link Omada SG3218XP-M2",
      value: "1,200,000",
      isfreedelivery: true,
      stock: 6,
      badge: "Шинэ",
      image: "/banner/networkdevice/network/net-6.png",
    },
        {
      title: "Apple - Watch SE Gen 2 40mm / Starlight",
      value: "950,000",
      isfreedelivery: true,
      stock: 8,
      badge: "Шинэ",
      image: "/banner/phone/smartwatch/watch-7.png",
    },
    {
      title: "Apple - Watch SE Gen 2 40mm / Midnight",
      value: "950,000",
      isfreedelivery: true,
      stock: 6,
      badge: "Шинэ",
      image: "/banner/phone/smartwatch/watch-8.png",
    },
  ],
};

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Гар утас',
    href: networkdevice().url,
  },
];

export default function NetworkDevice() {
  const [active, setActive] = useState<string>("cable");
  

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Tabs value={active} onValueChange={setActive} defaultValue="cpu" className="w-full">
        {/* ===== Tabs Header (Category Buttons) ===== */}
        <TabsList
          className="
          mt-5 ml-auto mr-auto
    flex gap-3 foreground whitespace-nowrap scrollbar-none
    px-5 py-5 bg-transparent
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
        data-[state=active]:bg-primary  data-[state=active]:text-primary-foreground
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
                <h2 className="text-foreground  text-lg font-semibold">
                  {categories.find((c) => c.id === key)?.label}
                </h2>
                <p className="text-muted-foreground">{items.length} бүтээгдэхүүн</p>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="border-border bg-card text-foreground hover:bg-muted"
                >
                  Үнээр
                </Button>
                <Button
                  variant="outline"
                  className="border-border bg-card text-foreground hover:bg-muted"
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
                    <h3 className="text-foreground  font-medium mb-2">{product.title}</h3>

                    {/* Badges */}
                    <div className="flex gap-2 mt-2 flex-wrap">
                      {product.badge && <Badge variant="destructive">{product.badge}</Badge>}
                      {product.isfreedelivery && <Badge variant="outline">Хүргэлт үнэгүй</Badge>}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" className="border-border bg-card text-foreground hover:bg-muted">
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

