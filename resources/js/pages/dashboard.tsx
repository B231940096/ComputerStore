import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes/index';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import Autoplay from "embla-carousel-autoplay";
import { Heart, Star, ShoppingCart } from 'lucide-react';
import { Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Дээр хуудас',
    href: dashboard().url,
  },
];

// Brand logos for the banner section
const brandLogos = [
  { image: "/banner/brand_logo/rzr1.png", color: "" },
  { image: "/banner/brand_logo/logitech.png", color: "" },
  { image: "/banner/brand_logo/hyperx.png", color: "" },
  { image: "/banner/brand_logo/alienware.png", color: "" },
  { image: "/banner/brand_logo/zowie.png", color: "" },
  { image: "/banner/brand_logo/wooting.webp", color: "" },
];

// Special Featured Product
const featuredProduct = {
  title: "Sony - PULSE Explore Wireless Earbuds",
  rating: 5.0,
  badge: "Шинэ",
  value: "800,000",
  image: "/banner/console/earbuds.png",
  isfreedelivery: true,
};

// Newly Added Products
const newProducts = [
  {
    title: "Asrock - Aspire Vero 16 Laptop - Ultra 7 155U , 16GB , 1 TB SSD",
    value: "3,150,000",
    rating: 5.0,
    badge: "Шинэ",
    isfreedelivery: true,
    stock: 5,
    image: "/banner/laptop/notebook/lt-1.png",
  },
  {
    title: "Logitech - G Pro Superlight 2C / White",
    value: "540,000",
    rating: 5.0,
    badge: "Шинэ",
    isfreedelivery: true,
    stock: 5,
    image: "/products/mouse-1.png",
  },
  {
    title: "Logitech - G Pro Superlight 2C / Black",
    value: "540,000",
    rating: 5.0,
    badge: "Шинэ",
    isfreedelivery: true,
    stock: 6,
    image: "/products/mouse-2.png",
  },
  {
    title: "ATK A87 PRO Tri-Mode Wireless Mechanical Keyboard - Shadow Black",
    value: "200,000",
    rating: 5.0,
    badge: "Шинэ",
    isfreedelivery: true,
    stock: 2,
    image: "/products/keyboard-1.png",
  },
];

// Prebuilt PC Section
const prebuiltPCs = [
  {
    title: "Intel Core i5-14490F , PNY - RTX 5050 Dual Fan Graphics Card , AIGO W60 Micro-ATX Chassis -Black",
    value: "3,105,000",
    rating: 5.0,
    badge: "Шинэ",
    isfreedelivery: true,
    stock: 1,
    image: "/products/pc-1.png",
  },
  {
    title: "Intel - Core i7 14700F , Reaper - RX 9060 XT 8GB , Corsair - 3000D AIRFLOW Mid-Tower Case",
    value: "4,635,000",
    rating: 5.0,
    badge: "Шинэ",
    isfreedelivery: true,
    stock: 3,
    image: "/products/pc-2.png",
  },
  {
    title: "AMD Ryzen 5 7500F , PNY - RTX 5060 Overclocked Dual Fan , ASUS Prime AP202 - Black",
    value: "3,725,000",
    rating: 5.0,
    badge: "Шинэ",
    isfreedelivery: true,
    stock: 2,
    image: "/products/pc-3.png",
  },
  {
    title: "AMD - Ryzen 9 9950X3D , PNY - GeForce RTX 5080 ARGB EPIC-X RGB, Asus ROG Strix Helios GX601 RGB Mid-Tower Black",
    value: "14,000,000",
    rating: 5.0,
    badge: "Шинэ",
    isfreedelivery: true,
    stock: 2,
    image: "/products/pc-4.png",
  },
];

// Monitor Section
const monitors = [
  {
    title: "Asus - Rog Strix XG27ACMES 27 inch 255Hz 2K OC",
    value: "950,000",
    rating: 5.0,
    badge: "Шинэ",
    isfreedelivery: true,
    stock: 2,
    image: "/monitor/1-17.webp",
  },
  {
    title: "Asus - Rog Strix XG27ACMS 27-inch HDR (2560 x 1440) 320Hz (OC).",
    value: "1,500,000",
    rating: 5.0,
    badge: "Шинэ",
    isfreedelivery: true,
    stock: 3,
    image: "/monitor/monitor-2.png",
  },
  {
    title: "Asus - Rog Strix OLED XG27AQDNG Gaming monitor – 27-inch 1440p QD-OLED, 360 Hz, 0.03ms",
    value: "2,700,000",
    rating: 5.0,
    badge: "Дууссан",
    isfreedelivery: false,
    stock: 0,
    image: "/monitor/monitor-3.png",
  },
  {
    title: "Asus - TUF Gaming VG27AQM1.5A Gaming Monitor - 27-inch QHD Fast-IPS panel, 300Hz",
    value: "880,000",
    rating: 5.0,
    badge: "Дууссан",
    isfreedelivery: false,
    stock: 0,
    image: "/monitor/4-67.webp",
  },
];

// Laptop & Apple Section
const laptopsAndApple = [
  {
    title: "MSI Stealth 18 Mercedes-AMG - 18\" - Ultra 9 185H - RTX 4080 - 64 GB D5- 2 TB PCIe SSD",
    value: "12,000,000",
    rating: 5.0,
    badge: "Шинэ",
    isfreedelivery: true,
    stock: 1,
    image: "/products/laptop-1.png",
  },
  {
    title: "Apple iPad Pro 13-Inch (M4) 256GB WIFI / Silver",
    value: "5,000,000",
    rating: 5.0,
    badge: "Шинэ",
    isfreedelivery: true,
    stock: 2,
    image: "/products/ipad-1.png",
  },
  {
    title: "Aorus 15 Series -15\" 165Hz IPS - Ultra 7 155H - RTX 4060 Laptop GPU - 16GB DDR5 - 1TB PCIe SSD - (15 BKG-13US754SH )",
    value: "6,000,000",
    rating: 5.0,
    badge: "Дууссан",
    isfreedelivery: false,
    stock: 0,
    image: "/products/laptop-2.png",
  },
  {
    title: "Apple - Airpods 4 with Active Noise Cancellation",
    value: "720,000",
    rating: 5.0,
    badge: "Дууссан",
    isfreedelivery: false,
    stock: 0,
    image: "/products/airpods.png",
  },
];

export default function Dashboard() {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Dashboard" />
      <div className="flex h-full flex-1 flex-col gap-8 overflow-x-auto p-4 md:p-6">

        {/* Hero Carousel */}
        <Carousel
          plugins={[Autoplay({ delay: 3000 })]}
          className="w-full flex justify-center rounded-xl"
        >
          <CarouselContent className="max-w-[1400px] w-full rounded-xl">
            {Array.from({ length: 3 }).map((_, index) => (
              <CarouselItem key={index} className="basis-full flex justify-center">
                <div className="w-full h-[270px] sm:h-[300px] md:h-[350px]">
                  <Card className="w-full h-full p-0 border-0">
                    <CardContent className="flex items-center justify-center p-0">
                      <img
                        src={`/banner/carousel/slideshow${index + 1}.webp`}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>

        {/* Brand Banner Grid */}
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {brandLogos.map((brand, i) => (
            <Card key={i} className={`p-0 overflow-hidden ${brand.color} rounded-2xl border-0`}>
              <div className="relative w-full aspect-[2/1] flex items-center justify-center p-6">
                <img
                  src={brand.image}
                  alt={`brand-${i}`}
                  className="object-contain w-full h-full"
                />
              </div>
            </Card>
          ))}
        </div>

        {/* Special Featured Section */}
        <section className="relative">
          <h2 className="text-3xl font-bold mb-6">Онцлох Бүтээгдэхүүн</h2>
          <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-6">
            {/* Featured Product Card */}
            <Card className="border border-gray-800 bg-sidebar rounded-xl overflow-hidden hover:bg-[#363234] transition-all">
              <div className="relative w-full h-64 md:h-80 lg:h-80">
                <img
                  src={featuredProduct.image}
                  alt={featuredProduct.title}
                  className="w-full h-full object-center"
                />
                <Heart className="absolute top-2 right-2 h-6 w-6 cursor-pointer hover:fill-red-500 hover:text-red-500 transition-colors" />
              </div>
              <CardContent className="p-4 flex flex-col justify-between">
                <h3 className="text-white font-medium mb-2">{featuredProduct.title}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-white font-medium">{featuredProduct.rating}</span>
                </div>
                <div className="flex gap-2 mt-2 flex-wrap">
                  {featuredProduct.badge && <Badge variant="destructive">{featuredProduct.badge}</Badge>}
                  {featuredProduct.isfreedelivery && <Badge variant="outline">Хүргэлт үнэгүй</Badge>}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center p-4">
                <Button variant="outline" className="border-gray-700 bg-gray-900 text-gray-300 hover:bg-gray-800 hover:text-white">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Сагсанд нэмэх
                </Button>
                <span className="text-gray-400">{featuredProduct.value}₮</span>
              </CardFooter>
            </Card>

            {/* Large Banner Image */}
            <div className="overflow-hidden rounded-xl bg-gradient-to-r from-gray-800 to-gray-900">
              <div className="relative w-full h-full min-h-[400px]">
                <img
                  src="/banner/bar_img.webp"
                  alt="Featured Banner"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Newly Added Products */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold">Шинээр Нэмэгдсэн Бүтээгдэхүүн</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {newProducts.map((product, i) => (
              <Card key={i} className="border border-gray-800 bg-sidebar rounded-xl overflow-hidden hover:bg-[#363234] transition-all">
                <div className="relative w-full h-64 md:h-80 lg:h-80">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-center"
                  />
                  <Heart className="absolute top-2 right-2 h-5 w-5 cursor-pointer hover:fill-red-500 hover:text-red-500 transition-colors z-10" />
                </div>
                <CardContent className="p-4 flex flex-col justify-between">
                  <h3 className="text-white font-medium mb-2">{product.title}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-white font-medium">{product.rating}</span>
                  </div>
                  <div className="flex gap-2 mt-2 flex-wrap">
                    {product.badge && <Badge variant="destructive">{product.badge}</Badge>}
                    {product.isfreedelivery && <Badge variant="outline">Хүргэлт үнэгүй</Badge>}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center p-4">
                  <Button variant="outline" className="border-gray-700 bg-gray-900 text-gray-300 hover:bg-gray-800 hover:text-white">
                    Сагсанд нэмэх
                  </Button>
                  <span className="text-gray-400">{product.value}₮</span>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Prebuilt PC Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold">Бэлэн Компьютер</h2>
            <Link href="/pre-built-pc" className="text-blue-400 hover:text-blue-300">
              Бүгдийг үзэх →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {prebuiltPCs.map((pc, i) => (
              <Card key={i} className="border border-gray-800 bg-sidebar rounded-xl overflow-hidden hover:bg-[#363234] transition-all">
                <div className="relative w-full h-64 md:h-80 lg:h-80">
                  <img
                    src={pc.image}
                    alt={pc.title}
                    className="w-full h-full object-center"
                  />
                  <Heart className="absolute top-2 right-2 h-5 w-5 cursor-pointer hover:fill-red-500 hover:text-red-500 transition-colors z-10" />
                </div>
                <CardContent className="p-4 flex flex-col justify-between">
                  <h3 className="text-white font-medium mb-2">{pc.title}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-white font-medium">{pc.rating}</span>
                  </div>
                  <div className="flex gap-2 mt-2 flex-wrap">
                    {pc.badge && <Badge variant="destructive">{pc.badge}</Badge>}
                    {pc.isfreedelivery && <Badge variant="outline">Хүргэлт үнэгүй</Badge>}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center p-4">
                  <Button variant="outline" className="border-gray-700 bg-gray-900 text-gray-300 hover:bg-gray-800 hover:text-white">
                    Сагсанд нэмэх
                  </Button>
                  <span className="text-gray-400">{pc.value}₮</span>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Monitor Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold">Компьютерын Дэлгэц</h2>
            <Link href="/peripherals" className="text-blue-400 hover:text-blue-300">
              Бүгдийг үзэх →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {monitors.map((monitor, i) => (
              <Card key={i} className={`border border-gray-800 bg-sidebar rounded-xl overflow-hidden hover:bg-[#363234] transition-all ${monitor.badge === 'Дууссан' ? 'opacity-75' : ''}`}>
                <div className="relative w-full h-64 md:h-80 lg:h-80">
                  <img
                    src={monitor.image}
                    alt={monitor.title}
                    className="w-full h-full object-center"
                  />
                  <Heart className="absolute top-2 right-2 h-5 w-5 cursor-pointer hover:fill-red-500 hover:text-red-500 transition-colors z-10" />
                </div>
                <CardContent className="p-4 flex flex-col justify-between">
                  <h3 className="text-white font-medium mb-2">{monitor.title}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-white font-medium">{monitor.rating}</span>
                  </div>
                  <div className="flex gap-2 mt-2 flex-wrap">
                    {monitor.badge && <Badge variant={monitor.badge === 'Дууссан' ? 'destructive' : 'secondary'}>{monitor.badge}</Badge>}
                    {monitor.isfreedelivery && <Badge variant="outline">Хүргэлт үнэгүй</Badge>}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center p-4">
                  <Button 
                    variant="outline" 
                    className="border-gray-700 bg-gray-900 text-gray-300 hover:bg-gray-800 hover:text-white"
                    disabled={monitor.badge === 'Дууссан'}
                  >
                    Сагсанд нэмэх
                  </Button>
                  <span className="text-gray-400">{monitor.value}₮</span>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Laptop & Apple Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold">Зөөврийн Компьютер</h2>
            <Link href="/laptop" className="text-blue-400 hover:text-blue-300">
              Бүгдийг үзэх →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {laptopsAndApple.map((item, i) => (
              <Card key={i} className={`border border-gray-800 bg-sidebar rounded-xl overflow-hidden hover:bg-[#363234] transition-all ${item.badge === 'Дууссан' ? 'opacity-75' : ''}`}>
                <div className="relative w-full h-64 md:h-80 lg:h-80">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-center"
                  />
                  <Heart className="absolute top-2 right-2 h-5 w-5 cursor-pointer hover:fill-red-500 hover:text-red-500 transition-colors z-10" />
                </div>
                <CardContent className="p-4 flex flex-col justify-between">
                  <h3 className="text-white font-medium mb-2">{item.title}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-white font-medium">{item.rating}</span>
                  </div>
                  <div className="flex gap-2 mt-2 flex-wrap">
                    {item.badge && <Badge variant={item.badge === 'Дууссан' ? 'destructive' : 'secondary'}>{item.badge}</Badge>}
                    {item.isfreedelivery && <Badge variant="outline">Хүргэлт үнэгүй</Badge>}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center p-4">
                  <Button 
                    variant="outline" 
                    className="border-gray-700 bg-gray-900 text-gray-300 hover:bg-gray-800 hover:text-white"
                    disabled={item.badge === 'Дууссан'}
                  >
                    Сагсанд нэмэх
                  </Button>
                  <span className="text-gray-400">{item.value}₮</span>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

      </div>
    </AppLayout>
  );
}