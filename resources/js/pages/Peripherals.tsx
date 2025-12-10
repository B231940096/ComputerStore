import { useState } from "react";
import AppLayout from "@/layouts/app-layout";
import { peripherals } from "@/routes";
import { type BreadcrumbItem } from "@/types";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

import {
  Monitor,
  Keyboard,
  Mouse,
  Headset,
  Square,
  Mic,
  Webcam,
  Candy,
  Speaker,
} from "lucide-react";

/* ---------------------------------- */
/* Types */
/* ---------------------------------- */

export interface Product {
  id?: number
  title: string
  price: number
  image?: string
  badge?: string
  isfreedelivery?: boolean
  stock?: number
}

const categories = [
  { id: "monitor", label: "Дэлгэц", icon: Monitor },
  { id: "mouse", label: "Хулгана", icon: Mouse },
  { id: "keyboard", label: "Гар", icon: Keyboard },
  { id: "headset", label: "Чихэвч", icon: Headset },
  { id: "mouse_pad", label: "Хулганы пад", icon: Square },
  { id: "mic", label: "Микрофон", icon: Mic },
  { id: "webcam", label: "Вэб камер", icon: Webcam },
  { id: "accessories", label: "Дагалдах хэрэгсэл", icon: Candy },
  { id: "speaker", label: "Чанга яригч", icon: Speaker },
] as const;

type PeripheralCategoryId = (typeof categories)[number]["id"];

interface PeripheralsProps {
  products: Record<PeripheralCategoryId, Product[]>;
}

/* ---------------------------------- */
/* Breadcrumb */
/* ---------------------------------- */

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: "Компьютерын хэрэгсэл",
    href: peripherals().url,
  },
];

/* ---------------------------------- */
/* Component */
/* ---------------------------------- */

export default function Peripherals({ products }: PeripheralsProps) {
  const [active, setActive] = useState<PeripheralCategoryId>("monitor");

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Tabs
        value={active}
        onValueChange={(v) => setActive(v as PeripheralCategoryId)}
        className="w-full"
      >
        {/* ---------- Tabs Header ---------- */}
        <TabsList className="flex gap-2  bg-transparent px-4 py-2">
          {categories.map(({ id, label, icon: Icon }) => (
            <TabsTrigger
              key={id}
              value={id}
              className="
              mt-5
             ml-auto mr-auto
                flex items-center gap-2 px-3 py-5
                rounded-lg border
                bg-card text-foreground
                data-[state=active]:bg-primary
                data-[state=active]:text-primary-foreground
                hover:bg-muted
                transition
              "
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm">{label}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {/* ---------- Tabs Content ---------- */}
        {Object.entries(products).map(([key, items]) => (
          <TabsContent key={key} value={key} className="mt-10">
            {/* Header */}
            <div className="mb-6 flex items-center justify-between px-6">
              <div>
                <h2 className="text-lg font-semibold text-foreground">
                  {categories.find((c) => c.id === key)?.label}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {items.length} бүтээгдэхүүн
                </p>
              </div>

              <div className="flex gap-2">
                <Button variant="outline">Үнээр</Button>
                <Button variant="outline">Нэрээр</Button>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 gap-4 px-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
              {items.map((product) => (
                <Card
                  key={product.id}
                  className="
                    bg-card border
                    rounded-xl overflow-hidden
                    hover:bg-muted transition
                  "
                >
                  {product.image && (
                    <div className="relative h-64">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  )}

                  <CardContent className="p-4">
                    <h3 className="font-medium text-foreground mb-2">
                      {product.title}
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {product.badge && (
                        <Badge variant="destructive">{product.badge}</Badge>
                      )}
                      {product.isfreedelivery && (
                        <Badge variant="outline">Хүргэлт үнэгүй</Badge>
                      )}
                    </div>
                  </CardContent>

                  <CardFooter className="flex items-center justify-between">
                    <Button variant="outline">Сагсанд нэмэх</Button>
                    <span className="text-sm text-muted-foreground">
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
  );
}
