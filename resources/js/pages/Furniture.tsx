import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { furniture } from '@/routes/index';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import Autoplay from "embla-carousel-autoplay";
import { Dock, LampDesk, Armchair, Import } from "lucide-react";
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
    { id: "table", label: "Ширээ", icon: <Dock className="w-5 h-5" /> },
    { id: "chair", label: "Сандал", icon: <Armchair className="w-5 h-5" /> },
    { id: "screen_saver", label: "Дэлгэц тогтоогч", icon: <Import className="w-5 h-5" /> },
]

const products: Record<string, Product[]> = {
    table: [
        {
            title: "Adjustable Desk Single Motor 1600x670mm Grey",
            value: "500,000",
            isfreedelivery: true,
            stock: 8,
            badge: "Шинэ",
            image: "/banner/parts/table/adjusttable-desk.png",
        },
        {
            title: "Adjustable Desk Single Motor 1600x670mm Vintage",
            value: "500,000",
            isfreedelivery: true,
            stock: 8,
            image: "/banner/parts/table/adjustable-desk-1.png",
        },
        {
            title: "Adjustable Desk Single Motor 1600x670mm White",
            value: "500,000",
            isfreedelivery: true,
            stock: 12,
            badge: "Хит бараа",
            image: "/banner/parts/table/adjustable-desk-2.png",
        },
        {
            title: "Adjustable Desk Single Motor 1600x670mm Dark gray",
            value: "500,000",
            isfreedelivery: true,
            stock: 6,
            badge: "Шинэ",
            image: "/banner/parts/table/adjustable-desk-3.png",
        },
        {
            title: "Adjustable Desk Single Motor 1600x670mm Alby Blue",
            value: "500,000",
            isfreedelivery: false,
            stock: 7,
            image: "/banner/parts/table/adjustable-desk-4.png",
        },
        {
            title: "Adjustable Desk Single Motor 1600x640mm Chocolate Hudson oak",
            value: "500,000",
            isfreedelivery: false,
            stock: 2,
            image: "/banner/parts/table/adjustable-desk-5.png",
        },
        {
            title: "Hitech Adjustable Desk Single Motor 1600x670mm Hazel Silverjack oak",
            value: "500,000",
            isfreedelivery: false,
            stock: 3,
            image: "/banner/parts/table/adjustable-desk-6.png",
        },
    ],
    chair: [
        {
            title: "Gaming Chair V4 - Red",
            value: "700,000",
            isfreedelivery: true,
            stock: 7,
            badge: "Шинэ",
            image: "/banner/parts/chair/chair-1.png",
        },
        {
            title: "Gaming Chair V4 - Black White",
            value: "700,000",
            isfreedelivery: true,
            stock: 15,
            image: "/banner/parts/chair/chair-2.png",
        },
        {
            title: "DXRACER - CRAFT Koi EPU Leather",
            value: "650,000",
            isfreedelivery: true,
            stock: 2,
            badge: "Хит бараа",
            image: "/banner/parts/chair/chair-3.png",
        },
        {
            title: "DXRACER - CRAFT Dark Gray Woven Fabric",
            value: "650,000",
            isfreedelivery: false,
            stock: 25,
            image: "/banner/parts/chair/chair-4.png",
        },
        {
            title: "Hitech Gaming Chair V4 - White",
            value: "700,000",
            isfreedelivery: false,
            stock: 40,
            image: "/banner/parts/chair/chair-5.png",
        },
        {
            title: "Anda Seat - God of war gaming chair",
            value: "480,000",
            isfreedelivery: false,
            stock: 50,
            badge: "Хямдрал",
            image: "/banner/parts/chair/chair-6.png",
        },
        {
            title: "DXRACER - CRAFT Black EPU Leather",
            value: "700,000",
            isfreedelivery: false,
            stock: 30,
            image: "/banner/parts/chair/chair-7.png",
        },
        {
            title: "Anda Seat Gaming chair / Black Yellow",
            value: "500,000",
            isfreedelivery: false,
            stock: 35,
            image: "/banner/parts/chair/chair-8.png",
        },

    ],
    screen_saver: [
        {
            title: "North Bayou - F160 Dual Monitor Mount / White",
            value: "120,000",
            isfreedelivery: true,
            stock: 12,
            badge: "Шинэ",
            image: "/banner/parts/screen saver/screen-saver-1.png",
        },
        {
            title: "North Bayou - F80 Monitor Desk Mount Black",
            value: "75,000",
            isfreedelivery: true,
            stock: 15,
            image: "/banner/parts/screen saver/screen-saver-2.png",
        },
        {
            title: "North Bayou - F160 Dual Monitor Mount Black",
            value: "120,000",
            isfreedelivery: true,
            stock: 25,
            badge: "Хямдрал",
            image: "/banner/parts/screen saver/screen-saver-3.png",
        },
        {
            title: "North Bayou - F80 Monitor Desk Mount / White",
            value: "75,000",
            isfreedelivery: false,
            stock: 30,
            image: "/banner/parts/screen saver/screen-saver-4.png",
        },
        {
            title: "North Bayou - MB32 Monitor Mount Gas Strut Sit & Stand Monitor Wall Mount",
            value: "300,000",
            isfreedelivery: false,
            stock: 20,
            image: "/banner/parts/screen saver/screen-saver-5.png",
        },
        {
            title: "North Bayou - F150 Wall Mount",
            value: "100,000₮",
            isfreedelivery: false,
            stock: 40,
            badge: "Хямдрал",
            image: "/banner/parts/screen saver/screen-saver-6.png",
        },
        {
            title: "North Bayou - H180 Dual Monitor Desk Mount Stand Full Motion",
            value: "140,000",
            isfreedelivery: false,
            stock: 35,
            image: "/banner/parts/screen saver/screen-saver-7.png",
        },
        {
            title: "North Bayou - H180 Dual Monitor Desk Mount / White",
            value: "140,000",
            isfreedelivery: false,
            stock: 15,
            image: "/banner/parts/screen saver/screen-saver-8.png",
        },
    ],
};

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Ширээ / Сандал / Гэрэл',
        href: furniture().url,

    },
];

export default function Furniture() {
    const [active, setActive] = useState<string>("table");

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="mt-6">
                <Tabs value={active} onValueChange={setActive} defaultValue="table" className="w-full">
                    {/* ===== Tabs Header (Category Buttons) ===== */}
                    <TabsList className="mt-5
            flex gap-3  whitespace-nowrap scrollbar-none ml-auto mr-auto
            px-4 py-1 bg-transparent
          ">
                        {categories.map((btn) => (
                            <TabsTrigger
                                key={btn.id}
                                value={btn.id}
                                className="flex items-center gap-2 px-5 py-5
                rounded-lg border border-border
                bg-card text-foreground
                whitespace-nowrap
        data-[state=active]:bg-primary data-[state=active]:text-primary-foreground
                hover:bg-muted
                transition-all
              "
                            >
                                {btn.icon}
                                <span className="text-sm ">{btn.label}</span>
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
                  className="border-border bg-card text-muted-foreground hover:bg-muted hover:text-foreground"
                                    >
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
                                            <div className="flex gap-2 mt-2 flex-wrap">
                                                {product.badge && <Badge variant="destructive">{product.badge}</Badge>}
                                                {product.isfreedelivery && <Badge variant="outline">Хүргэлт үнэгүй</Badge>}
                                            </div>
                                        </CardContent>
                                        <CardFooter className="flex justify-between">
                    <Button variant="outline" className="border-gray-700 bg-gray-900 text-gray-300 hover:bg-gray-800 hover:text-white">
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
            </div>
        </AppLayout>

    );
}

