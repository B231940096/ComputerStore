import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { preBuiltPc } from '@/routes/index';
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
        title: "Intel Core i5-14490F, Asrock - Intel Arc B580 Challenger 12GB OC , Thermaltake View 270 TG Mid Tower Chassis - Black (No Fan Included)",
        value: "3,035,000",
        isfreedelivery: false,
        stock: 3,
        badge: "Шинэ",
        image: "/banner/pcs/pc-1.png",
    },
    {
        title: "Intel Core i5-14490F , Asrock - Intel Arc B580 Steel Legend 12GB OC, Thermaltake View 270 TG Mid Tower Chassis - White",
        value: "3,145,000",
        isfreedelivery: false,
        stock: 3,
        badge: "Шинэ",
        image: "/banner/pcs/pc-2.png",
    },
    {
        title: "Intel Core i5-14490F ,MSI - RTX 5060 8G SHADOW 2X OC , Thermaltake View 270 TG Mid Tower Chassis - White",
        value: "4,065,000",
        isfreedelivery: false,
        stock: 3,
        badge: "Шинэ",
        image: "/banner/pcs/pc-3.png",
    },
    {
        title: "AMD Ryzen 5 7500F Nobox ,MSI - RTX 5060 8G SHADOW 2X OC , Thermaltake View 270 TG Mid Tower Chassis - Black (No Fan Included)",
        value: "4,115,000",
        isfreedelivery: false,
        stock: 3,
        badge: "Шинэ",
        image: "/banner/pcs/pc-4.png",
    },
    {
        title: "ntel Core i5-14490F , Asrock - Intel Arc B580 Steel Legend 12GB OC , Corsair 3000D AIRFLOW Mid-Tower Case - White",
        value: "4,150,000",
        isfreedelivery: false,
        stock: 3,
        badge: "Шинэ",
        image: "/banner/pcs/pc-5.png",
    },
    {
        title: "Intel Core i5-14490F, MSI - RTX 5060 8G SHADOW 2X OC,1TB M2 SSD,Phanteks - XT M3 / Black",
        value: "4,200,000",
        isfreedelivery: false,
        stock: 3,
        badge: "Шинэ",
        image: "/banner/pcs/pc-6.png",
    },
    {
        title: "Intel Core i5-14490F / MSI - RTX 5060 8G SHADOW 2X OC / Phanteks - XT M3 / White",
        value: "4,205,000",
        isfreedelivery: false,
        stock: 3,
        badge: "Шинэ",
        image: "/banner/pcs/pc-7.png",
    },
    {
        title: "AMD Ryzen 5 9500F , Asus - Prime RTX 5060 Ti 8GB , Corsair 3000D AIRFLOW Mid-Tower Case Black",
        value: "4,770,000",
        isfreedelivery: false,
        stock: 3,
        badge: "Шинэ",
        image: "/banner/pcs/pc-8.png",
    },
    {
        title: "AMD - Ryzen 5 9600X ,Asus - Prime RTX 5060 Ti 8GB , ASUS A21 Case - Black",
        value: "5,010,000",
        isfreedelivery: false,
        stock: 2,
        badge: "Шинэ",
        image: "/banner/pcs/pc-9.png",
    },
    {
        title: "AMD - Ryzen 7 9700X NoBox, PNY - RTX 5070 12GB OC, ASUS A21 Case - Black",
        value: "6,080,000",
        isfreedelivery: false,
        badge: "Шинэ",
        stock: 3,
        image: "/banner/pcs/pc-10.png",
    },
    {
        title: "AMD - Ryzen 7 9800X3D , Asus - TUF Gaming RTX 4070 Ti 12GB /openbox/ , Coolermaster - Elite 502 Lite / Without Fan / Black",
        value: "7,440,000",
        isfreedelivery: false,
        stock: 3,
        badge: "Шинэ",
        image: "/banner/pcs/pc-11.png",
    },
];

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Бэлэн компьютерууд',
        href: preBuiltPc().url,
    },
];

export default function PreBuiltPC() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="w-full h-32 md:h-36 mb-6 relative">
                <img
                    src="/banner/pcs/image.webp" 
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
