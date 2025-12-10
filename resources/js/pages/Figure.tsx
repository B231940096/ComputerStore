import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { figure } from '@/routes/index';
import { type BreadcrumbItem } from '@/types';

interface Product {
    title: string;
    value: string;
    image?: string;
    isfreedelivery?: boolean;
    stock?: number;
    badge?: string;
}

const products: Product[] = [
    {
        title: "Demon Slayer - Tamashii Nations 3.5\" Figuarts Mini Figure - Kamado Tanjiro",
        value: "120,000",
        isfreedelivery: false,
        stock: 3,
        badge: "Шинэ",
        image: "/banner/figure/figure-1.png",
    },
    {
        title: "Agatsuma Zenitsu Demon Slayer Figure",
        value: "120,000",
        isfreedelivery: false,
        stock: 3,
        badge: "Шинэ",
        image: "/banner/figure/figure-2.png",
    },
    {
        title: "TAMASHII NATIONS - Demon Slayer - Tomioka Giyu-Mizubashira 3.5 Figuarts Mini",
        value: "120,000",
        isfreedelivery: false,
        stock: 3,
        badge: "Шинэ",
        image: "/banner/figure/figure-3.png",
    },
    {
        title: "Tamashi Nations - Demon Slayer - Himejima Gyomei, Bandai SpiritsFiguarts Mini 3.9",
        value: "120,000",
        isfreedelivery: false,
        stock: 3,
        badge: "Шинэ",
        image: "/banner/figure/figure-4.png",
    },
    {
        title: "TAMASHII NATIONS - Demon Slayer - Hashibira Inosuke, Bandai TamashiiI Nations Figuarts Mini 3.5",
        value: "120,000",
        isfreedelivery: false,
        stock: 3,
        badge: "Шинэ",
        image: "/banner/figure/figure-5.png",
    },
    {
        title: "TAMASHII NATIONS Tamashi Nations - Demon Slayer: Kimetsu no Yaiba - Kagaya Ubuyashiki, Bandai Spirits Figuarts Mini 3.5",
        value: "120,000",
        isfreedelivery: false,
        stock: 3,
        badge: "Шинэ",
        image: "/banner/figure/figure-6.png",
    },
    {
        title: "Tamashi Nations - Demon Slayer - Kanao Tsuyuri, Bandai Spirits Figuarts Mini 3.54",
        value: "120,000",
        isfreedelivery: false,
        stock: 3,
        badge: "Шинэ",
        image: "/banner/figure/figure-7.png",
    },
    {
        title: "Bandai TAMASHII Nations Demon Slayer Mugen Train KYOJURO RENGOKU FIGUARTS Mini AF",
        value: "120,000",
        isfreedelivery: false,
        stock: 3,
        badge: "Шинэ",
        image: "/banner/figure/figure-8.png",
    },
    {
        title: "Tamashi Nations - Demon Slayer - Littl Nezuko, Bandai Spirits Figuarts Mini 2.95",
        value: "120,000",
        isfreedelivery: false,
        stock: 2,
        badge: "Шинэ",
        image: "/banner/figure/figure-9.png",
    },
    {
        title: "Tamashi Nations - Demon Slayer - Kanroji Mitsuri, Bandai SpiritsFiguarts Mini 3.54",
        value: "120,000",
        isfreedelivery: false,
        badge: "Шинэ",
        stock: 3,
        image: "/banner/figure/figure-10.png",
    },
    {
        title: "TAMASHII NATIONS Tamashi Nations - Demon Slayer: Kimetsu no Yaiba - Muzan Kibutsuji, Bandai Spirits Figuarts Mini 3.5",
        value: "120,000",
        isfreedelivery: false,
        stock: 3,
        badge: "Шинэ",
        image: "/banner/figure/figure-11.png",
    },
    {
        title: "TAMASHII NATIONS Iguro Obanai Demon Slayer, Bandai Spirits Figuarts Mini 3.54(Goat Ver.)",
        value: "120,000,000,000",
        isfreedelivery: false,
        stock: 3,
        badge: "Шинэ",
        image: "/banner/figure/figure-12.png",
    },
    {
        title: "TAMASHII NATIONS Shinasugawa Sanemi Demon Slayer, Bandai Spirits Figuarts Mini 3.54",
        value: "120,000",
        isfreedelivery: false,
        stock: 3,
        badge: "Шинэ",
        image: "/banner/figure/figure-13.png",
    },
    {
        title: "Roll over image to zoom in TAMASHII NATIONS Tamashi Nations - Demon Slayer - Kocho Shinobo, Bandai SpiritsFiguarts Mini 3.54",
        value: "120,000",
        isfreedelivery: false,
        stock: 3,
        badge: "Шинэ",
        image: "/banner/figure/figure-14.png",
    },
    {
        title: "TAMASHII NATIONS Uzui Tengen Demon Slayer, Bandai Spirits Figuarts Mini 4.00",
        value: "120,000",
        isfreedelivery: false,
        stock: 3,
        badge: "Шинэ",
        image: "/banner/figure/figure-15.png",
    },
    {
        title: "BANDAI - Demon Slayer: - Yushiro - Figuarts Mini 3.5",
        value: "120,000",
        isfreedelivery: false,
        stock: 3,
        badge: "Шинэ",
        image: "/banner/figure/figure-16.png",
    },
    {
        title: "Demon slayer: kimetsu no yaiba figuartz mini action figure Nezuko Kamado (Demon form) 3.5",
        value: "120,000",
        isfreedelivery: false,
        stock: 3,
        badge: "Шинэ",
        image: "/banner/figure/figure-17.png",
    },
    {
        title: "Tamashii Nations Figuarts Mini Sakonji Urokodaki Statue, Demon Slayer 3.5(GOD)",
        value: "120,000,000,000,000",
        isfreedelivery: false,
        stock: 3,
        badge: "Шинэ",
        image: "/banner/figure/figure-18.png",
    },
];

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Фигур / Сувинер',
        href: figure().url,
    },
];

export default function Figure() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="w-full h-32 md:h-36 mb-6 relative">
                <img
                    src="/banner/figure/wallpaper.jpg"
                    alt="Бэлэн компьютерууд"
                    className="w-full h-full object-cover rounded-lg shadow-md"
                />
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 px-8">
                {products.map((product, index) => (
                    <Card
                        key={index}
                        className="border border-gray-800 bg-sidebar rounded-xl overflow-hidden hover:bg-[#363234] transition-all"
                    >
                        {product.image && (
                            <div className="relative w-full h-64 md:h-80 lg:h-80">
                                <img
                                    src={product.image}
                                    className="w-full h-full object-center"
                                />
                            </div>
                        )}
                        <CardContent className="p-4 flex flex-col justify-between">
                            <h3 className="text-white font-medium mb-2">{product.title}</h3>
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
        </AppLayout>
    );
}
