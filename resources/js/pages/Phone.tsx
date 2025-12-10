import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { phone } from '@/routes/index';
import { type BreadcrumbItem } from '@/types';
import {Smartphone,
  Tablet,
  Watch,
  Package,
  Headphones,
  Cable,} from "lucide-react";
import { useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface Product {
  id: number;
  name: string;
  price: number;
  image?: string;
  badge?: string;
  isfreedelivery?: boolean;
}

const categories = [
  {
    id: "iPhone",
    label: "iPhone",
    icon: <Smartphone className="w-5 h-5" />,
  },
  {
    id: "tablet",
    label: "Таблет",
    icon: <Tablet className="w-5 h-5" />,
  },
  {
    id: "smartwatch",
    label: "Ухаалаг цаг",
    icon: <Watch className="w-5 h-5" />,
  },
  {
    id: "accessories",
    label: "Дагалдах хэрэгсэл",
    icon: <Package className="w-5 h-5" />,
  },
  {
    id: "earbuds",
    label: "Earbuds",
    icon: <Headphones className="w-5 h-5" />,
  },
  {
    id: "cables",
    label: "Кабель / Адаптер",
    icon: <Cable className="w-5 h-5" />,
  },
] as const;

type PhoneCategoryId = (typeof categories)[number]['id'];
interface PhoneProps {
  products: Record<PhoneCategoryId, Product[]>
}
// const products: Record<string, Product[]> = {
//   iPhone: [
//     {
//       title: "iPhone 17 Pro max",
//       value: "6,650,000",
//       isfreedelivery: true,
//       stock: 5,
//       badge: "Шинэ",
//       image: "/banner/phone/iphone/ip-1.png",
//     },
//     {
//       title: "iPhone 17 Pro",
//       value: "6,200,000",
//       isfreedelivery: true,
//       stock: 8,
//       badge: "Шинэ",
//       image: "/banner/phone/iphone/ip-2.png",
//     },
//         {
//       title: "iPhone Air",
//       value: "5,570,000",
//       isfreedelivery: true,
//       stock: 5,
//       badge: "Шинэ",
//       image: "/banner/phone/iphone/ip-3.png",
//     },
//     {
//       title: "iPhone 17",
//       value: "4,200,000",
//       isfreedelivery: true,
//       stock: 8,
//       image: "/banner/phone/iphone/ip-4.png",
//     },
//         {
//       title: "iPhone 14",
//       value: "2,850,000",
//       isfreedelivery: true,
//       stock: 5,
//       badge: "Шинэ",
//       image: "/banner/phone/iphone/ip-5.png",
//     },
//     {
//       title: "iPhone 16 ",
//       value: "3,900,000",
//       isfreedelivery: true,
//       stock: 8,
//       image: "/banner/phone/iphone/ip-6.png",
//     },
//         {
//       title: "iPhone 15",
//       value: "3,300,000",
//       isfreedelivery: true,
//       stock: 5,
//       badge: "Шинэ",
//       image: "/banner/phone/iphone/ip-7.png",
//     },
//     {
//       title: "iPhone 16e ",
//       value: "3,500,000",
//       isfreedelivery: true,
//       stock: 8,
//       image: "/banner/phone/iphone/ip-8.png",
//     },
//         {
//       title: "iPhone 12",
//       value: "1,500,000",
//       isfreedelivery: true,
//       stock: 5,
//       badge: "Шинэ",
//       image: "/banner/phone/iphone/ip-9.png",
//     },
//   ],
//   tablet: [
//     {
//       title: "Apple iPad Air (5th Gen) M1 chip, 10.9-inch, 64GB, Wi-Fi 6, 12MP – Pink",
//       value: "1,850,000",
//       isfreedelivery: true,
//       stock: 8,
//       badge: "Шинэ",
//       image: "/banner/phone/tablet/tab-1.png",
//     },
//     {
//       title: "Apple iPad Pro 13-Inch (M4) 256GB WIFI / Space Black",
//       value: "5,000,000",
//       isfreedelivery: true,
//       stock: 6,
//       badge: "Шинэ",
//       image: "/banner/phone/tablet/tab-2.png",
//     },
//     {
//       title: "Apple iPad Pro 13-Inch (M4) 256GB WIFI / Silver",
//       value: "5,000,000",
//       isfreedelivery: true,
//       stock: 10,
//       badge: "Хит бараа",
//       image: "/banner/phone/tablet/tab-3.png",
//     },
//     {
//       title: "Apple iPad (9th Generation) - 64gb, Wi-Fi, Space Gray",
//       value: "1,300,000",
//       isfreedelivery: false,
//       stock: 12,
//       badge: "Шинэ",
//       image: "/banner/phone/tablet/tab-4.png",
//     },
//     {
//       title: "Apple iPad (9th Generation) - 64GB, Wi-Fi, Silver",
//       value: "1,150,000",
//       isfreedelivery: false,
//       stock: 18,
//       badge: "Шинэ",
//       image: "/banner/phone/tablet/tab-5.png",
//     },
//     {
//       title: "Apple iPad 64GB Wifi (10th Gen) - Blue",
//       value: "1,500,000",
//       isfreedelivery: false,
//       stock: 15,
//       badge: "Шинэ",
//       image: "/banner/phone/tablet/tab-6.png",
//     },
 
//     {
//       title: "Apple iPad 64GB Wifi (10th Gen) - Silver",
//       value: "1,500,000",
//       isfreedelivery: false,
//       stock: 9,
//       badge: "Шинэ",
//       image: "/banner/phone/tablet/tab-7.png",
//     },
//         {
//       title: "Apple iPad 64GB Wifi (10th Gen) - Yellow",
//       value: "1,500,000",
//       isfreedelivery: false,
//       stock: 14,
//       badge: "Шинэ",
//       image: "/banner/phone/tablet/tab-8.png",
//     },
//     {
//       title: "Apple iPad Air (5th Gen) M1 chip, 10.9-inch, 256GB, Wi-Fi 6, 12MP – Purple",
//       value: "2,250,000",
//       isfreedelivery: false,
//       stock: 9,
//       badge: "Шинэ",
//       image: "/banner/phone/tablet/tab-9.png",
//     },
//   ],
//   smartwatch: [
//     {
//       title: "Apple Watch Series 9 GPS 41mm - Midnight",
//       value: "1,450,000",
//       isfreedelivery: true,
//       stock: 8,
//       badge: "Шинэ",
//       image: "/banner/phone/smartwatch/watch-1.png",
//     },
//     {
//       title: "Apple Watch Series 9 GPS 41mm - Pink",
//       value: "1,350,000",
//       isfreedelivery: true,
//       stock: 6,
//       badge: "Шинэ",
//       image: "/banner/phone/smartwatch/watch-2.png",
//     },
//         {
//       title: "Apple Watch Series 9 GPS 41mm - Starlight",
//       value: "1,350,000",
//       isfreedelivery: true,
//       stock: 8,
//       badge: "Шинэ",
//       image: "/banner/phone/smartwatch/watch-3.png",
//     },
//     {
//       title: "Apple Watch Series 9 GPS 41mm - Silver",
//       value: "1,450,000",
//       isfreedelivery: true,
//       stock: 6,
//       badge: "Шинэ",
//       image: "/banner/phone/smartwatch/watch-4.png",
//     },
//         {
//       title: "Apple Watch Series 9 GPS 41mm - Red",
//       value: "1,450,000",
//       isfreedelivery: true,
//       stock: 8,
//       badge: "Шинэ",
//       image: "/banner/phone/smartwatch/watch-5.png",
//     },
//     {
//       title: "Apple Watch Series 9 GPS 45mm - Midnight",
//       value: "1,450,000",
//       isfreedelivery: true,
//       stock: 6,
//       badge: "Шинэ",
//       image: "/banner/phone/smartwatch/watch-6.png",
//     },
//         {
//       title: "Apple - Watch SE Gen 2 40mm / Starlight",
//       value: "950,000",
//       isfreedelivery: true,
//       stock: 8,
//       badge: "Шинэ",
//       image: "/banner/phone/smartwatch/watch-7.png",
//     },
//     {
//       title: "Apple - Watch SE Gen 2 40mm / Midnight",
//       value: "950,000",
//       isfreedelivery: true,
//       stock: 6,
//       badge: "Шинэ",
//       image: "/banner/phone/smartwatch/watch-8.png",
//     },
//   ],
//   accessories: [
//     {
//       title: "Orico - Type-C to Lightning Fast Charge & Data Cable (C2L-10-BK)",
//       value: "40,000",
//       isfreedelivery: true,
//       stock: 8,
//       badge: "Шинэ",
//       image: "/banner/phone/accessories/acc-1.png",
//     },
//     {
//       title: "Apple Smart Folio Case (for 12.9-inch iPad Pro 3rd and 4th Generation)",
//       value: "130,000",
//       isfreedelivery: true,
//       stock: 6,
//       badge: "Шинэ",
//       image: "/banner/phone/accessories/acc-2.png",
//     },
//     {
//       title: "Apple Smart Keyboard Folio: iPad Keyboard case for iPad Pro 12.9‑inch (3rd, 4th, 5th, 6th Generation)",
//       value: "550,000",
//       isfreedelivery: true,
//       stock: 10,
//       badge: "Хит бараа",
//       image: "/banner/phone/accessories/acc-3.png",
//     },
//         {
//       title: "Apple Pencil (2nd Generation)",
//       value: "395,000",
//       isfreedelivery: true,
//       stock: 10,
//       badge: "Хит бараа",
//       image: "/banner/phone/accessories/acc-4.png",
//     },
//   ],
//     earbuds: [
//     {
//       title: "Moondrop x Singer 40mm White Dynamic Driver Portable Wireless Headphone",
//       value: "270,000",
//       isfreedelivery: true,
//       stock: 8,
//       badge: "Шинэ",
//       image: "/banner/phone/earbuds/ear-1.png",
//     },
//     {
//       title: "Moondrop JOKER 50mm Black Dynamic Driver Full-Size Headphone",
//       value: "120,000",
//       isfreedelivery: true,
//       stock: 6,
//       badge: "Шинэ",
//       image: "/banner/phone/earbuds/ear-2.png",
//     },
//     {
//       title: "Moondrop Block Black True Wireless Headphone (TWS)",
//       value: "95,000",
//       isfreedelivery: true,
//       stock: 10,
//       badge: "Хит бараа",
//       image: "/banner/phone/earbuds/ear-3.png",
//     },
//         {
//       title: "Moondrop Block Pink True Wireless Headphone (TWS)",
//       value: "95,000",
//       isfreedelivery: true,
//       stock: 8,
//       badge: "Шинэ",
//       image: "/banner/phone/earbuds/ear-4.png",
//     },
//     {
//       title: "Moondrop Block White True Wireless Headphone (TWS)",
//       value: "95,000",
//       isfreedelivery: true,
//       stock: 6,
//       badge: "Шинэ",
//       image: "/banner/phone/earbuds/ear-5.png",
//     },
//     {
//       title: "HyperX Cloud Buds TWS - White",
//       value: "135,000",
//       isfreedelivery: true,
//       stock: 10,
//       badge: "Хит бараа",
//       image: "/banner/phone/earbuds/ear-6.png",
//     },
//         {
//       title: "Razer Hammerhead True Wireless X",
//       value: "180,000",
//       isfreedelivery: true,
//       stock: 8,
//       badge: "Шинэ",
//       image: "/banner/phone/earbuds/ear-7.png",
//     },
//     {
//       title: "Apple - Airpods 4 with Active Noise Cancellation",
//       value: "720,000",
//       isfreedelivery: true,
//       stock: 6,
//       badge: "Шинэ",
//       image: "/banner/phone/earbuds/ear-8.png",
//     },
//     {
//       title: "Moondrop Chu 2 DSP Type-C In-ear Headphone",
//       value: "100,000",
//       isfreedelivery: true,
//       stock: 10,
//       badge: "Хит бараа",
//       image: "/banner/phone/earbuds/ear-9.png",
//     },
//         {
//       title: "Moondrop Ultrasonic 1BA+1DD True Wireless Headphone (TWS)",
//       value: "250,000",
//       isfreedelivery: true,
//       stock: 10,
//       badge: "Хит бараа",
//       image: "/banner/phone/earbuds/ear-10.png",
//     },
//   ],
//     cables: [
//     {
//       title: "Apple 20W USB-C Power Adapter",
//       value: "40,000",
//       isfreedelivery: true,
//       stock: 8,
//       badge: "Шинэ",
//       image: "/banner/phone/cables/cable-1.png",
//     },
//   ],
// };

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Гар утас',
    href: phone().url,
  },
];

export default function Phone({ products = {} as PhoneProps['products'] }: PhoneProps) {
  const [active, setActive] = useState<PhoneCategoryId>("iPhone");
console.log('PHONE PRODUCTS', products);

 return (
  <AppLayout breadcrumbs={breadcrumbs}>
    <Tabs value={active} onValueChange={(value) => setActive(value as PhoneCategoryId)} className="w-full">

      {/* ===== Tabs Header ===== */}
      <TabsList className="flex gap-3 mt-5 px-5 py-5 bg-transparent mx-auto">
        {categories.map((btn) => (
          <TabsTrigger
            key={btn.id}
            value={btn.id}
            className="
              flex items-center gap-2 px-5 py-5
              rounded-lg border border-border
              bg-card text-foreground
              data-[state=active]:bg-primary
              data-[state=active]:text-primary-foreground
              hover:bg-muted
              transition-all
            "
          >
            {btn.icon}
            <span className="text-sm">{btn.label}</span>
          </TabsTrigger>
        ))}
      </TabsList>

      {/* ===== Content ===== */}
      {Object.entries(products).map(([key, items]) => (
        <TabsContent key={key} value={key} className="mt-20">

          <div className="mb-4 flex items-center justify-between px-8">
            <div>
              <h2 className="text-foreground text-lg font-semibold">
                {categories.find((c) => c.id === key)?.label}
              </h2>
              <p className="text-muted-foreground">
                {items.length} бүтээгдэхүүн
              </p>
            </div>

            <div className="flex gap-2">
              <Button variant="outline">Үнээр</Button>
              <Button variant="outline">Нэрээр</Button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 px-8">
            {items.map((product, index) => (
              <Card
                key={index}
                className="
                  border border-border
                  bg-card rounded-xl
                  hover:bg-muted
                  transition-all
                "
              >
                {product.image && (
                  <div className="relative w-full h-64 md:h-80">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-center"
                    />
                  </div>
                )}

                <CardContent className="p-4">
                  <h3 className="text-foreground font-medium mb-2">
                    {product.name}
                  </h3>

                  <div className="flex gap-2 mt-2 flex-wrap">
                    {product.badge && (
                      <Badge variant="destructive">
                        {product.badge}
                      </Badge>
                    )}
                    {product.isfreedelivery && (
                      <Badge variant="outline">
                        Хүргэлт үнэгүй
                      </Badge>
                    )}
                  </div>
                </CardContent>

                <CardFooter className="flex justify-between">
                  <Button variant="outline">
                    Сагсанд нэмэх
                  </Button>
                  <span className="text-muted-foreground">
                    {product.price}₮
                  </span>
                </CardFooter>
              </Card>
            ))}
          </div>

        </TabsContent>
      ))}
    </Tabs>
  </AppLayout>
)
}
