import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { peripherals } from '@/routes/index';
import { type BreadcrumbItem } from '@/types';
import {Monitor, Keyboard, Mouse, Headset, Square, Mic, Webcam, Candy, Speaker } from "lucide-react";
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
  { id: "monitor", label: "Дэлгэц", icon: <Monitor className="w-5 h-5" /> }, 
  { id: "mouse", label: "Хулгана", icon: <Mouse className="w-5 h-5" /> },
  { id: "keyboard", label: "Гар", icon: <Keyboard className="w-5 h-5" /> },
  { id: "headset", label: "Чихэвч", icon: <Headset className="w-5 h-5" /> },
  { id: "mouse_pad", label: "Хулганы пад", icon: <Square className="w-5 h-5" /> },
  { id: "mic", label: "Микрофон", icon: <Mic className="w-5 h-5" /> },
  { id: "webcam", label: "Вэб камер", icon: <Webcam className="w-5 h-5" /> },
  { id: "accessories", label: "Дагалдах хэрэгсэл", icon: <Candy className="w-5 h-5" /> },
  { id: "speaker", label: "Спикер / Чанга яригч", icon: <Speaker className="w-5 h-5" /> },
]

const products: Record<string, Product[]> = {
  monitor: [
    {
      title: "ASUS TUF Gaming VG27AQML1A 27 inch 260Hz 2K",
      value: "1,200,000",
      isfreedelivery: true,
      stock: 5,
      badge: "Шинэ",
      image: "/banner/parts/monitor/asus-tuf-vg27aqml1a.png",
    },
    {
      title: "ASUS TUF Gaming VG27AQL3A 27 inch 180Hz 2K",
      value: "750,000",
      isfreedelivery: true,
      stock: 8,
      image: "/banner/parts/monitor/asus-tuf-vg27aqml1a.png",
    },
    {
      title: "Asus Rog Strix XG27ACS 27 inch 180Hz 2K",
      value: "900,000",
      isfreedelivery: true,
      stock: 6,
      badge: "Хит бараа",
      image: "/banner/parts/monitor/asus-strix-xg27acs.png",
    },
    {
      title: "Asus - VA24EHFR 23.8-inch, 1920x1080, 100Hz",
      value: "300,000",
      isfreedelivery: false,
      stock: 15,
      image: "/banner/parts/monitor/asus-va24ehfr.webp",
    },
    {
      title: "Samsung Odyssey G7 32 inch 240Hz 2K Curved",
      value: "1,450,000",
      isfreedelivery: true,
      stock: 4,
      badge: "Шинэ",
      image: "/banner/parts/monitor/samsung-g7.webp",
    },
    {
      title: "LG UltraGear 27 inch 144Hz 1080p IPS",
      value: "550,000",
      isfreedelivery: false,
      stock: 12,
      image: "/banner/parts/monitor/lg-ultragear.png",
    },
    {
      title: "Dell S2721DGF 27 inch 165Hz 2K IPS",
      value: "780,000",
      isfreedelivery: true,
      stock: 7,
      image: "/banner/parts/monitor/dell-s2721dgf.png",
    },
    {
      title: "AOC 24G2 24 inch 144Hz 1080p IPS",
      value: "380,000",
      isfreedelivery: false,
      stock: 20,
      badge: "Хямдрал",
      image: "/banner/parts/monitor/AOC_24G2.png",
    },
  ],
  keyboard: [
    {
      title: "Corsair K100 RGB Mechanical Gaming Keyboard",
      value: "450,000",
      isfreedelivery: true,
      stock: 8,
      badge: "Шинэ",
      image: "/banner/parts/keyboard/corsair-k100.avif",
    },
    {
      title: "Logitech G915 TKL Wireless Mechanical",
      value: "550,000",
      isfreedelivery: true,
      stock: 6,
      badge: "Шинэ",
      image: "/banner/parts/keyboard/logitech-g915.png",
    },
    {
      title: "Razer BlackWidow V3 Pro Wireless",
      value: "480,000",
      isfreedelivery: true,
      stock: 10,
      badge: "Хит бараа",
      image: "/banner/parts/keyboard/razer-blackwidow.png",
    },
    {
      title: "SteelSeries Apex Pro TKL Mechanical",
      value: "420,000",
      isfreedelivery: false,
      stock: 12,
      badge: "Шинэ",
      image: "/banner/parts/keyboard/steelseries-apex-pro.png",
    },
    {
      title: "HyperX Alloy Origins Core RGB Mechanical",
      value: "220,000",
      isfreedelivery: false,
      stock: 18,
      badge: "Шинэ",
      image: "/banner/parts/keyboard/hyperx-alloy-origins.webp",
    },
    {
      title: "Keychron K8 Wireless Mechanical",
      value: "280,000",
      isfreedelivery: false,
      stock: 15,
      badge: "Шинэ",
      image: "/banner/parts/keyboard/keychron-kk8.png",
    },
    {
      title: "Ducky One 3 TKL Mechanical RGB",
      value: "320,000",
      isfreedelivery: false,
      stock: 14,
      badge: "Шинэ",
      image: "/banner/parts/keyboard/duckyone-3.png",
    },
    {
      title: "ASUS ROG Strix Scope RX TKL Wireless",
      value: "380,000",
      isfreedelivery: false,
      stock: 9,
      badge: "Шинэ",
      image: "/banner/parts/keyboard/asus-rog-strix-scope.png",
    },
  ],
   mouse: [
    {
      title: "Razer Basilisk V3 Pro 35K Wireless Gaming Mouse",
      value: "700,000",
      isfreedelivery: true,
      stock: 8,
      badge: "Шинэ",
      image: "/banner/parts/mouse/mouse-1.png",
    },
    {
      title: "Razer Naga V2 Pro MMO Wireless Gaming Mouse",
      value: "650,000",
      isfreedelivery: true,
      stock: 6,
      badge: "Шинэ",
      image: "/banner/parts/mouse/mouse-2.png",
    },
    {
      title: "RAZER - VIPER V3 PRO Wireless Esports Gaming Mouse / White",
      value: "630,000",
      isfreedelivery: true,
      stock: 10,
      badge: "Хит бараа",
      image: "/banner/parts/mouse/mouse-3.png",
    },
    {
      title: "Logitech - G PRO X Superlight 2 Dex Black",
      value: "530,000",
      isfreedelivery: false,
      stock: 12,
      badge: "Шинэ",
      image: "/banner/parts/mouse/mouse-4.png",
    },
    {
      title: "Logitech - G PRO X Superlight 2 Dex White",
      value: "530,000",
      isfreedelivery: false,
      stock: 18,
      badge: "Шинэ",
      image: "/banner/parts/mouse/mouse-5.png",
    },
    {
      title: "Logitech - G PRO X Superlight 2 Dex Magenta",
      value: "530,000",
      isfreedelivery: false,
      stock: 15,
      badge: "Шинэ",
      image: "/banner/parts/mouse/mouse-6.png",
    },
    {
      title: "Razer - Basilisk V3 Pro Black",
      value: "470,000",
      isfreedelivery: false,
      stock: 14,
      badge: "Шинэ",
      image: "/banner/parts/mouse/mouse-7.png",
    },
    {
      title: "Razer - Basilisk V3 Pro White",
      value: "470,000",
      isfreedelivery: false,
      stock: 9,
      badge: "Шинэ",
      image: "/banner/parts/mouse/mouse-8.png",
    },
  ],
  headset: [
    {
      title: "Razer - Kraken V4 Pro Wireless Gaming Headset: OLED Control Hub",
      value: "1,580,000",
      isfreedelivery: true,
      stock: 4,
      badge: "Шинэ",
      image: "/banner/parts/headset/headset-1.png",
    },
    {
      title: "HyperX Cloud Alpha 2 – Wireless Gaming Headset",
      value: "1,110,000",
      isfreedelivery: true,
      stock: 6,
      badge: "Шинэ",
      image: "/banner/parts/headset/headset-2.png",
    },
    {
      title: "Razer - Kraken V4 Wireless Gaming Headset: 2.4GHz, Bluetooth, USB",
      value: "800,000",
      isfreedelivery: true,
      stock: 10,
      badge: "Хит бараа",
      image: "/banner/parts/headset/headset-3.png",
    },
    {
      title: "Razer BlackShark V2 Pro Wireless Gaming Headset / Black",
      value: "750,000",
      isfreedelivery: false,
      stock: 12,
      badge: "Шинэ",
      image: "/banner/parts/headset/headset-4.png",
    },
    {
      title: "Logitech G PRO X 2 Lightspeed - White",
      value: "700,000",
      isfreedelivery: false,
      stock: 18,
      badge: "Шинэ",
      image: "/banner/parts/headset/headset-5.png",
    },
    {
      title: "HyperX - Cloud 3 S Wireless - Gaming Headset / Red",
      value: "530,000",
      isfreedelivery: false,
      stock: 15,
      badge: "Шинэ",
      image: "/banner/parts/headset/headset-6.png",
    },
    {
      title: "HyperX Cloud 3 - Pink",
      value: "350,000",
      isfreedelivery: false,
      stock: 14,
      badge: "Шинэ",
      image: "/banner/parts/headset/headset-7.png",
    },
    {
      title: "ATK - Mercury 1 Black eSports Wireless Tri-mode Headset",
      value: "150,000",
      isfreedelivery: false,
      stock: 9,
      badge: "Шинэ",
      image: "/banner/parts/headset/headset-8.png",
    },
  ],
    mouse_pad: [
    {
      title: "Benq - Zowie G-SR-SE ROUGE II Large Esports Gaming Mouse Pad",
      value: "160,000",
      isfreedelivery: true,
      stock: 10,
      badge: "Шинэ",
      image: "/banner/parts/mouse_pad/pad-1.png",
    },
    {
      title: "Benq - Zowie G-SR-SE Bi II Large Esports Gaming Mouse Pad",
      value: "160,000",
      isfreedelivery: true,
      stock: 6,
      badge: "Шинэ",
      image: "/banner/parts/mouse_pad/pad-2.png",
    },
    {
      title: "X-Raypad Aqua Control Pro - Black",
      value: "150,000",
      isfreedelivery: true,
      stock: 10,
      badge: "Хит бараа",
      image: "/banner/parts/mouse_pad/pad-3.png",
    },
    {
      title: "CHERRY XTRFY GP5 VITALITY YELLOW LARGE",
      value: "140,000",
      isfreedelivery: false,
      stock: 12,
      badge: "Шинэ",
      image: "/banner/parts/mouse_pad/pad-4.png",
    },
    {
      title: "ATK 99G Pro - XSoft eSport Gaming Mouse Pad",
      value: "130,000",
      isfreedelivery: false,
      stock: 18,
      badge: "Шинэ",
      image: "/banner/parts/mouse_pad/pad-5.png",
    },
    {
      title: "Pulsar - ParaControl V2 Mouse Pad XL/ 490x420mm / Black",
      value: "95,000",
      isfreedelivery: false,
      stock: 15,
      badge: "Шинэ",
      image: "/banner/parts/mouse_pad/pad-6.png",
    },
    {
      title: "Pulsar - ParaControl V2 Mouse Pad XL / 490x420mm / Red",
      value: "95,000",
      isfreedelivery: false,
      stock: 14,
      badge: "Шинэ",
      image: "/banner/parts/mouse_pad/pad-7.png",
    },
    {
      title: "BenQ GTF-X Large Gaming Mouse Pad - Black",
      value: "120,000",
      isfreedelivery: false,
      stock: 9,
      badge: "Шинэ",
      image: "/banner/parts/mouse_pad/pad-8.png",
    },
  ],
      mic: [
    {
      title: "HyperX QuadCast 2 S - USB Microphone - Black",
      value: "650,000",
      isfreedelivery: true,
      stock: 10,
      badge: "Шинэ",
      image: "/banner/parts/mic/mic-1.png",
    },
    {
      title: "RAZER - SEIREN V3 CHROMA / Black",
      value: "520,000",
      isfreedelivery: true,
      stock: 6,
      badge: "Шинэ",
      image: "/banner/parts/mic/mic-2.png",
    },
    {
      title: "RAZER - SEIREN V3 CHROMA / Mercury",
      value: "520,000",
      isfreedelivery: true,
      stock: 10,
      badge: "Хит бараа",
      image: "/banner/parts/mic/mic-3.png",
    },
    {
      title: "HyperX ProCast Microphone",
      value: "900,000",
      isfreedelivery: false,
      stock: 12,
      badge: "Шинэ",
      image: "/banner/parts/mic/mic-4.png",
    },
    {
      title: "Blue Snowball iCE USB Mic for Recording and Streaming on PC and Mac",
      value: "160,000",
      isfreedelivery: false,
      stock: 18,
      badge: "Шинэ",
      image: "/banner/parts/mic/mic-5.png",
    },
    {
      title: "Logitech - Blue YETI Premium Multi-Pattern USB Microphone with Blue VO!CE / Silver",
      value: "460,000",
      isfreedelivery: false,
      stock: 15,
      badge: "Шинэ",
      image: "/banner/parts/mic/mic-6.png",
    },
    {
      title: "RAZER - SEIREN V2 PRO Microphone for Streaming",
      value: "500,000",
      isfreedelivery: false,
      stock: 14,
      badge: "Шинэ",
      image: "/banner/parts/mic/mic-7.png",
    },
    {
      title: "Elgato - Wave 3 Black",
      value: "600,000",
      isfreedelivery: false,
      stock: 9,
      badge: "Шинэ",
      image: "/banner/parts/mic/mic-8.png",
    },
  ],
     webcam: [
    {
      title: "Logitech - StreamCam",
      value: "400,000",
      isfreedelivery: true,
      stock: 10,
      badge: "Шинэ",
      image: "/banner/parts/webcam/webcam-1.png",
    },
  ],
   accessories: [
    {
      title: "Creation Space - Electric Screwdriver CS03D",
      value: "100,000",
      isfreedelivery: true,
      stock: 10,
      badge: "Шинэ",
      image: "/banner/parts/accessories/accer-1.png",
    },
    {
      title: "Orico - Multifunction USB External Sound Card (SC2)",
      value: "35,000",
      isfreedelivery: true,
      stock: 6,
      badge: "Шинэ",
      image: "/banner/parts/accessories/accer-2.png",
    },
    {
      title: "HyperX - 7.1 Surround Sound Card",
      value: "100,000",
      isfreedelivery: true,
      stock: 10,
      badge: "Хит бараа",
      image: "/banner/parts/accessories/accer-3.png",
    },
    {
      title: "Turzx IPS Panel Smart Screen 3.5 Inch",
      value: "80,000",
      isfreedelivery: false,
      stock: 12,
      badge: "Шинэ",
      image: "/banner/parts/accessories/accer-4.png",
    },
    {
      title: "Phanteks - Premium Vertical GPU Bracket Black",
      value: "220,000",
      isfreedelivery: false,
      stock: 18,
      badge: "Шинэ",
      image: "/banner/parts/accessories/accer-5.png",
    },
    {
      title: "Razer - Ripsaw X USB Capture Card w/ Camera Connection: 4K 30FPS",
      value: "550,000",
      isfreedelivery: false,
      stock: 15,
      badge: "Шинэ",
      image: "/banner/parts/mic/mic-6.png",
    },
    {
      title: "Intel Ethernet Converged X710-DA4 Network Adapter (X710DA4FH) - Black, Green",
      value: "1,000,000",
      isfreedelivery: false,
      stock: 14,
      badge: "Шинэ",
      image: "/banner/parts/accessories/accer-7.png",
    },
    {
      title: "Razer - Base Station V2 Chroma Headphone Headset Stand Holder: Chroma RGB Lighting",
      value: "280,000",
      isfreedelivery: false,
      stock: 9,
      badge: "Шинэ",
      image: "/banner/parts/accessories/accer-8.png",
    },
],
    speaker: [
    {
      title: "Logitech - G560 Black",
      value: "600,000",
      isfreedelivery: true,
      stock: 10,
      badge: "Шинэ",
      image: "/banner/parts/speaker/speaker-1.png",
    },
    {
      title: "JBL Xtreme 4 Portable waterproof speaker",
      value: "1,150,000",
      isfreedelivery: true,
      stock: 6,
      badge: "Шинэ",
      image: "/banner/parts/speaker/speaker-2.png",
    },
    {
      title: "Home Theater Soundbar RTS-60 Black",
      value: "360,000",
      isfreedelivery: true,
      stock: 10,
      badge: "Хит бараа",
      image: "/banner/parts/speaker/speaker-3.png",
    },
    {
      title: "RAZER - NOMMO V2 X Full-Range 2.0 PC Gaming Speakers / Wireless Control Pod",
      value: "450,000",
      isfreedelivery: false,
      stock: 12,
      badge: "Шинэ",
      image: "/banner/parts/speaker/speaker-4.png",
    },
    {
      title: "RAZER LEVIATHAN V2 Multi-Driver PC Gaming Soundbar with Subwoofer",
      value: "900,000",
      isfreedelivery: false,
      stock: 18,
      badge: "Шинэ",
      image: "/banner/parts/speaker/speaker-5.png",
    },
    {
      title: "RAZER LEVIATHAN V2 X PC Soundbar with Full-Range Drivers - Compact Design",
      value: "500,000",
      isfreedelivery: false,
      stock: 15,
      badge: "Шинэ",
      image: "/banner/parts/speaker/speaker-6.png",
    },
  ],
};

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Компьютерын хэрэгсэл',
    href: peripherals().url,
  },
];

export default function Peripherals() {
  const [active, setActive] = useState<string>("monitor");
  

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

