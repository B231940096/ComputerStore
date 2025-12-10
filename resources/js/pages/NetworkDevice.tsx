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

