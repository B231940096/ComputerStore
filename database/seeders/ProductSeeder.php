<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        $products = [
            "cpu" => [
                [
                    "title" => "Intel Core i9-14900K 24 Core 32 Thread 3.2GHz",
                    "price" => "1,850,000",
                    "rating" => 5.0,
                    "badge" => "Шинэ",
                    "is_free_delivery" => true,
                    "stock" => 5,
                    "image" => "/banner/parts/cpu/i9-14900k.png",
                ],
                [
                    "title" => "AMD Ryzen 9 7950X 16 Core 32 Thread 4.5GHz",
                    "price" => "1,650,000",
                    "rating" => 0,
                    "badge" => null,
                    "is_free_delivery" => true,
                    "stock" => 8,
                    "image" => "/banner/parts/cpu/ryzen9-7950x.png",
                ],
            ],

            "gpu" => [
                [
                    "title" => "NVIDIA GeForce RTX 4090 24GB GDDR6X",
                    "price" => "5,500,000",
                    "rating" => 4.8,
                    "badge" => "Шинэ",
                    "is_free_delivery" => true,
                    "stock" => 2,
                    "image" => "/banner/parts/gpu/rtx-4090.png",
                ],
                [
                    "title" => "AMD Radeon RX 7900 XTX 24GB GDDR6",
                    "price" => "3,200,000",
                    "rating" => 4,
                    "badge" => null,
                    "is_free_delivery" => true,
                    "stock" => 4,
                    "image" => "/banner/parts/gpu/RX7900.png",
                ],
            ],

            "ram" => [
                [
                    "title" => "G.SKILL Trident Z5 RGB 64GB (2x32GB) DDR5-6000",
                    "price" => "850,000",
                    "rating" => 4,
                    "badge" => "Шинэ",
                    "is_free_delivery" => true,
                    "stock" => 10,
                    "image" => "/banner/parts/ram/z5-64.webp",
                ],
                [
                    "title" => "Corsair Dominator Platinum RGB 32GB DDR5-5600",
                    "price" => "520,000",
                    "rating" => 4,
                    "badge" => null,
                    "is_free_delivery" => true,
                    "stock" => 14,
                    "image" => "/banner/parts/ram/platinum-32.avif",
                ],
            ],

            "storage" => [
                [
                    "title" => "Samsung 990 PRO 2TB NVMe SSD PCIe 4.0",
                    "price" => "650,000",
                    "rating" => 4.2,
                    "badge" => "Шинэ",
                    "is_free_delivery" => true,
                    "stock" => 10,
                    "image" => "/banner/parts/ssd, hdd/samsung990-2tb.png",
                ],
                [
                    "title" => "WD Black SN850X 2TB NVMe SSD PCIe 4.0",
                    "price" => "580,000",
                    "rating" => 4,
                    "badge" => null,
                    "is_free_delivery" => true,
                    "stock" => 14,
                    "image" => "/banner/parts/ssd, hdd/sn850x-2tb.png",
                ],
            ],

            "motherboard" => [
                [
                    "title" => "Asus - Prime B760M-K DDR5",
                    "price" => "400,000",
                    "rating" => 4.3,
                    "badge" => "Шинэ",
                    "is_free_delivery" => true,
                    "stock" => 10,
                    "image" => "/banner/parts/motherboards/mb-1.png",
                ],
                [
                    "title" => "Asrock - B760M-H2/M.2",
                    "price" => "300,000",
                    "rating" => 4,
                    "badge" => "Шинэ",
                    "is_free_delivery" => true,
                    "stock" => 14,
                    "image" => "/banner/parts/motherboards/mb-2.png",
                ],
            ],

            "power_supply" => [
                [
                    "title" => "ASUS ROG Thor 1600W Titanium Power Supply",
                    "price" => "1,950,000",
                    "rating" => 4,
                    "badge" => "Шинэ",
                    "is_free_delivery" => true,
                    "stock" => 10,
                    "image" => "/banner/parts/psu/psu-1.png",
                ],
                [
                    "title" => "Seasonic - Vertex PX 1200W 80 PLUS PLATINUM",
                    "price" => "1,300,000",
                    "rating" => 4,
                    "badge" => "Шинэ",
                    "is_free_delivery" => true,
                    "stock" => 14,
                    "image" => "/banner/parts/psu/psu-2.png",
                ],
            ],

            "fan" => [
                [
                    "title" => "Jonsbo - ZC360 Multi-Screen Fan / White",
                    "price" => "300,000",
                    "rating" => 4,
                    "badge" => "Шинэ",
                    "is_free_delivery" => true,
                    "stock" => 10,
                    "image" => "/banner/parts/fan/fan-1.png",
                ],
                [
                    "title" => "Jonsbo - ZC360 Multi-Screen Fan / Black",
                    "price" => "300,000",
                    "rating" => 4,
                    "badge" => "Шинэ",
                    "is_free_delivery" => true,
                    "stock" => 14,
                    "image" => "/banner/parts/fan/fan-2.png",
                ],
            ],

            "cpu_cooler" => [
                [
                    "title" => "HYTE - THICC Q60 Digital Processor Cooling / 5” Ultraslim HD Display with 42 Pixel qRGB LEDs /OpenBox/",
                    "price" => "1,400,000",
                    "rating" => 5,
                    "badge" => "Шинэ",
                    "is_free_delivery" => true,
                    "stock" => 10,
                    "image" => "/banner/parts/cooler/cooler-1.png",
                ],
                [
                    "title" => "Asus - ROG RYUJIN III 360 ARGB Extreme / White",
                    "price" => "1,350,000",
                    "rating" => 4,
                    "badge" => "Шинэ",
                    "is_free_delivery" => true,
                    "stock" => 14,
                    "image" => "/banner/parts/cooler/cooler-2.png",
                ],
            ],

            "case" => [
                [
                    "title" => "Asus ROG Strix Helios GX601 RGB Mid-Tower White",
                    "price" => "1,100,000",
                    "rating" => 5,
                    "badge" => "Шинэ",
                    "is_free_delivery" => true,
                    "stock" => 10,
                    "image" => "/banner/parts/case/case-1.png",
                ],
                [
                    "title" => "HYTE Y60 Modern Aesthetic Case - Black",
                    "price" => "850,000",
                    "rating" => 4,
                    "badge" => "Шинэ",
                    "is_free_delivery" => true,
                    "stock" => 14,
                    "image" => "/banner/parts/case/case-2.png",
                ],
            ],

            // --- Console & PS5 ---
            "pl5" => [
                [
                    "title" => "Sony - PlayStation 5 - Slim Disc Edition",
                    "price" => "1,950,000",
                    "rating" => 5,
                    "badge" => "Шинэ",
                    "is_free_delivery" => true,
                    "stock" => 10,
                    "image" => "/banner/console/pl5-1.png",
                ],
                [
                    "title" => "Sony - Playstation 5 Pro Console",
                    "price" => "2,900,000",
                    "rating" => 4,
                    "badge" => null,
                    "is_free_delivery" => true,
                    "stock" => 14,
                    "image" => "/banner/console/pl5-2.png",
                ],
            ],

            "pl5games" => [
                [
                    "title" => "BATTLEFIELD 6",
                    "price" => "250,000",
                    "rating" => 5,
                    "badge" => "Шинэ",
                    "is_free_delivery" => true,
                    "stock" => 10,
                    "image" => "/banner/console/game-1.png",
                ],
                [
                    "title" => "Ghost Of Yotei",
                    "price" => "280,000",
                    "rating" => 4,
                    "badge" => null,
                    "is_free_delivery" => true,
                    "stock" => 14,
                    "image" => "/banner/console/game-7.png",
                ],
            ],

            "accessories_console" => [
                [
                    "title" => "Controller PS5 - DualSense Wireless",
                    "price" => "350,000",
                    "rating" => 5,
                    "badge" => "Шинэ",
                    "is_free_delivery" => true,
                    "stock" => 10,
                    "image" => "/banner/console/accessories/acce-1.png",
                ],
                [
                    "title" => "Charging Dock PS5 DualSense",
                    "price" => "150,000",
                    "rating" => 4,
                    "badge" => null,
                    "is_free_delivery" => true,
                    "stock" => 14,
                    "image" => "/banner/console/accessories/acce-2.png",
                ],
            ],

            // --- Тавилга & peripherals ---
            "table" => [
                [
                    "title" => "Adjustable Desk Single Motor 1600x670mm Grey",
                    "price" => "500,000",
                    "rating" => 5,
                    "badge" => "Шинэ",
                    "is_free_delivery" => true,
                    "stock" => 10,
                    "image" => "/banner/parts/table/adjusttable-desk.png",
                ],
                [
                    "title" => "Adjustable Desk Single Motor 1600x670mm Vintage",
                    "price" => "500,000",
                    "rating" => 4,
                    "badge" => null,
                    "is_free_delivery" => true,
                    "stock" => 14,
                    "image" => "/banner/parts/table/adjustable-desk-1.png",
                ],
            ],

            "chair" => [
                [
                    "title" => "Gaming Chair V4 - Red",
                    "price" => "700,000",
                    "rating" => 5,
                    "badge" => "Шинэ",
                    "is_free_delivery" => true,
                    "stock" => 10,
                    "image" => "/banner/parts/chair/chair-1.png",
                ],
                [
                    "title" => "Gaming Chair V4 - Black White",
                    "price" => "700,000",
                    "rating" => 4,
                    "badge" => null,
                    "is_free_delivery" => true,
                    "stock" => 14,
                    "image" => "/banner/parts/chair/chair-2.png",
                ],
            ],

            "screen_saver" => [
                [
                    "title" => "North Bayou - F160 Dual Monitor Mount / White",
                    "price" => "120,000",
                    "rating" => 5,
                    "badge" => "Шинэ",
                    "is_free_delivery" => true,
                    "stock" => 10,
                    "image" => "/banner/parts/screen saver/screen-saver-1.png",
                ],
                [
                    "title" => "North Bayou - F80 Monitor Desk Mount Black",
                    "price" => "75,000",
                    "rating" => 4,
                    "badge" => null,
                    "is_free_delivery" => true,
                    "stock" => 14,
                    "image" => "/banner/parts/screen saver/screen-saver-2.png",
                ],
            ],

            // --- Laptop ---
            "laptop" => [
                [
                    "title" => "Asrock - Aspire Vero 16 Laptop - Ultra 7 155U , 16GB , 1 TB SSD",
                    "price" => "5,200,000",
                    "rating" => 5,
                    "badge" => "Шинэ",
                    "is_free_delivery" => true,
                    "stock" => 10,
                    "image" => "/banner/laptop/notebook/lt-1.png",
                ],
                [
                    "title" => "Gigabyte - Gaming A16 GA63H / AMD Ryzen 7 260 , RTX 5060 /",
                    "price" => "5,200,000",
                    "rating" => 4,
                    "badge" => null,
                    "is_free_delivery" => true,
                    "stock" => 14,
                    "image" => "/banner/laptop/notebook/lt-2.png",
                ],
            ],

            "macbook" => [
                [
                    "title" => "Apple - MacBook Air M1 chip 256GB SSD, 8GB RAM, 13.3inch Space Grey(used)",
                    "price" => "2,250,000",
                    "rating" => 5,
                    "badge" => "Шинэ",
                    "is_free_delivery" => true,
                    "stock" => 10,
                    "image" => "/banner/laptop/macbook/mb-1.png",
                ],
                [
                    "title" => "Apple MacBook Pro M3 Chip 512GB 18GB 14.2 inches - Space Black",
                    "price" => "7,250,000",
                    "rating" => 4,
                    "badge" => null,
                    "is_free_delivery" => true,
                    "stock" => 14,
                    "image" => "/banner/laptop/macbook/mb-2.png",
                ],
            ],

            // --- Laptop accessories ---
            "bags" => [
                [
                    "title" => "HyperX Delta Backpack",
                    "price" => "150,000",
                    "rating" => 5,
                    "badge" => "Шинэ",
                    "is_free_delivery" => true,
                    "stock" => 10,
                    "image" => "/banner/laptop/bags/bag-1.png",
                ],
                [
                    "title" => "HyperX Knight Backpack",
                    "price" => "250,000",
                    "rating" => 4,
                    "badge" => null,
                    "is_free_delivery" => true,
                    "stock" => 14,
                    "image" => "/banner/laptop/bags/bag-2.png",
                ],
            ],

            "accessories_laptop" => [
                [
                    "title" => "Apple 45W MagSafe Power Adapter (for MacBook Air)",
                    "price" => "70,000",
                    "rating" => 5,
                    "badge" => "Шинэ",
                    "is_free_delivery" => true,
                    "stock" => 10,
                    "image" => "/banner/laptop/accessories/acce-1.png",
                ],
                [
                    "title" => "Apple 61W USB-C Power Adapter",
                    "price" => "120,000",
                    "rating" => 4,
                    "badge" => null,
                    "is_free_delivery" => true,
                    "stock" => 14,
                    "image" => "/banner/laptop/accessories/acce-2.png",
                ],
            ],

            // --- Network devices ---
            "cable" => [
                [
                    "title" => "APCE - RJ45 Lan Cat6a Unshielded, 3-piece Suite Connector",
                    "price" => "1,500",
                    "rating" => 5,
                    "badge" => "Шинэ",
                    "is_free_delivery" => true,
                    "stock" => 10,
                    "image" => "/banner/networkdevice/cable/cab-1.png",
                ],
                [
                    "title" => "TP-Link-WN8200ND 300Mbps High Power Wireless USB Adapter",
                    "price" => "60,000",
                    "rating" => 4,
                    "badge" => null,
                    "is_free_delivery" => true,
                    "stock" => 14,
                    "image" => "/banner/networkdevice/cable/cab-2.png",
                ],
            ],

            "server" => [
                [
                    "title" => "WS3-6412 - 12U Wall Mount Rack",
                    "price" => "250,000",
                    "rating" => 5,
                    "badge" => "Шинэ",
                    "is_free_delivery" => true,
                    "stock" => 10,
                    "image" => "/banner/networkdevice/server/ser-1.png",
                ],
                [
                    "title" => "WS3-6409 - 9U Wall Mount Rack",
                    "price" => "200,000",
                    "rating" => 4,
                    "badge" => null,
                    "is_free_delivery" => true,
                    "stock" => 14,
                    "image" => "/banner/networkdevice/server/ser-2.png",
                ],
            ],

            "networkdevice" => [
                [
                    "title" => "TP-link - T2UB Nano AC600 Wi-Fi Bluetooth 4.2 USB Adapter",
                    "price" => "45,000",
                    "rating" => 5,
                    "badge" => "Шинэ",
                    "is_free_delivery" => true,
                    "stock" => 10,
                    "image" => "/banner/networkdevice/network/net-1.png",
                ],
                [
                    "title" => "TP-Link Archer TX20E - AX1800 Wi-Fi 6 Bluetooth 5.2 PCIe Adapter",
                    "price" => "60,000",
                    "rating" => 4,
                    "badge" => null,
                    "is_free_delivery" => true,
                    "stock" => 14,
                    "image" => "/banner/networkdevice/network/net-2.png",
                ],
            ],
            // RAM, Storage, Motherboard, Power Supply, Fan, CPU Cooler, Case гэх мэт бүгдийг ингэж нэмнэ
        ];

        foreach ($products as $category_id => $items) {
            foreach ($items as $product) {
                DB::table('products')->insert([
                    "category_id" => $category_id,
                    "title" => $product["title"],
                    "slug" => Str::slug($product["title"]),
                    "price" => $product["price"],
                    "rating" => $product["rating"],
                    "badge" => $product["badge"],
                    "is_free_delivery" => $product["is_free_delivery"],
                    "stock" => $product["stock"],
                    "image" => $product["image"],
                    "created_at" => now(),
                    "updated_at" => now(),
                ]);
            }
        }
    }
}
