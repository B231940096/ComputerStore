import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Minus, Plus, Trash2, ShoppingCart, Package } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import AppLayout from "@/layouts/app-layout";
import { basket } from "@/routes/index";
import { type BreadcrumbItem } from "@/types";
import { Head } from "@inertiajs/react";

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: "Сагс",
    href: basket().url,
  },
];

type CartItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
  hasFreeDelivery: boolean;
  inStock: boolean;
};

export default function Basket() {
  const [cartItems, setCartItems] = React.useState<CartItem[]>([
    {
      id: "1",
      title: "ASUS TUF Gaming VG27AQML1A 27 inch 260Hz 2K",
      price: 1200000,
      quantity: 1,
      image: "/monitor/4-67.webp",
      hasFreeDelivery: false,
      inStock: true,
    },
    {
      id: "2",
      title: "ASUS TUF Gaming VG27AQL3A 27 inch 180Hz 2K",
      price: 1500000,
      quantity: 2,
      image: "/monitor/1-30(1).webp",
      hasFreeDelivery: true,
      inStock: true,
    },
    {
      id: "3",
      title: "Asus - VA24EHFR 23.8-inch, 1920x1080, 100Hz",
      price: 300000,
      quantity: 1,
      image: "/monitor/1-13-ezgif.com-optijpeg3.webp",
      hasFreeDelivery: true,
      inStock: true,
    },
  ]);

  const updateQuantity = (id: string, delta: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("mn-MN").format(price) + "₮";
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryFee = cartItems.some((item) => !item.hasFreeDelivery) ? 15000 : 0;
  const total = subtotal + deliveryFee;

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Сагс" />
      <div className="flex h-full flex-1 flex-col gap-6 p-4 md:p-6">
        {cartItems.length === 0 ? (
          <Card className="flex flex-col items-center justify-center py-16">
            <ShoppingCart className="h-24 w-24 text-muted-foreground mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Таны сагс хоосон байна</h2>
            <p className="text-muted-foreground mb-6">
              Дэлгүүрээс бүтээгдэхүүн сонгож сагсандаа нэмнэ үү
            </p>
            <Button size="lg">Дэлгүүр рүү очих</Button>
          </Card>
        ) : (
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold">
                  Сагс ({cartItems.length} бүтээгдэхүүн)
                </h1>
              </div>

              <div className="space-y-4">
                {cartItems.map((item) => (
                  <Card key={item.id} className="overflow-hidden">
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        {/* Product Image */}
                        <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-muted">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-full w-full object-cover"
                          />
                        </div>

                        {/* Product Details */}
                        <div className="flex flex-1 flex-col justify-between">
                          <div className="space-y-2">
                            <h3 className="font-medium leading-tight">
                              {item.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {item.hasFreeDelivery && (
                                <Badge variant="secondary" className="text-xs">
                                  <Package className="mr-1 h-3 w-3" />
                                  Хүргэлт үнэгүй
                                </Badge>
                              )}
                              {item.inStock ? (
                                <Badge className="text-xs bg-green-600 hover:bg-green-700">
                                  Бэлэн байгаа
                                </Badge>
                              ) : (
                                <Badge variant="destructive" className="text-xs">
                                  Дууссан
                                </Badge>
                              )}
                            </div>
                          </div>

                          <div className="flex items-center justify-between mt-2">
                            {/* Quantity Controls */}
                            <div className="flex items-center gap-2">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => updateQuantity(item.id, -1)}
                                disabled={item.quantity <= 1}
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                              <span className="w-12 text-center font-medium">
                                {item.quantity}
                              </span>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => updateQuantity(item.id, 1)}
                              >
                                <Plus className="h-4 w-4" />
                              </Button>
                            </div>

                            {/* Price and Remove */}
                            <div className="flex items-center gap-4">
                              <p className="text-lg font-bold">
                                {formatPrice(item.price * item.quantity)}
                              </p>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-destructive hover:bg-destructive/10"
                                onClick={() => removeItem(item.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4">
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-xl font-semibold">Захиалгын дүн</h2>
                  
                  <Separator />

                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        Бүтээгдэхүүний дүн:
                      </span>
                      <span className="font-medium">{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Хүргэлт:</span>
                      <span className="font-medium">
                        {deliveryFee === 0 ? (
                          <span className="text-green-600">Үнэгүй</span>
                        ) : (
                          formatPrice(deliveryFee)
                        )}
                      </span>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex justify-between text-lg font-bold">
                    <span>Нийт дүн:</span>
                    <span>{formatPrice(total)}</span>
                  </div>

                  <Button size="lg" className="w-full">
                    Захиалга баталгаажуулах
                  </Button>

                  <div className="space-y-2">
                    <p className="text-xs text-muted-foreground text-center">
                      Найдвартай төлбөрийн системээр хамгаалагдсан
                    </p>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <h3 className="font-medium text-sm">Промо код</h3>
                    <div className="flex gap-2">
                      <Input placeholder="Промо код оруулах" />
                      <Button variant="outline">Хэрэглэх</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </AppLayout>
  );
}