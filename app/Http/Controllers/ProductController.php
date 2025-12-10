<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Category;
use Inertia\Inertia;

class ProductController extends Controller
{
    // Dashboard хуудас
    public function dashboard()
    {
        // Шинэ бүтээгдэхүүн
        $newProducts = Product::where('badge', 'Шинэ')
            ->with('category')
            ->limit(4)
            ->get();

        // Онцлох бүтээгдэхүүн (featured product)
        $featuredProduct = Product::where('badge', 'Шинэ')
            ->inRandomOrder()
            ->first();

        // Бэлэн компьютер
        $prebuiltPCs = Product::where('category_id', 'pc')
            ->with('category')
            ->limit(4)
            ->get();

        // Monitors
        $monitors = Product::where('category_id', 'monitor')
            ->with('category')
            ->limit(4)
            ->get();

        // Laptops
        $laptops = Product::whereIn('category_id', ['laptop', 'macbook'])
            ->with('category')
            ->limit(4)
            ->get();

        return Inertia::render('dashboard', [
            'newProducts' => $newProducts,
            'prebuiltPCs' => $prebuiltPCs,
            'monitors' => $monitors,
            'laptops' => $laptops,
            'featuredProduct' => $featuredProduct,
        ]);
    }

    // Laptop хуудас
    public function laptop()
    {
        $products = [
            'laptop' => Product::where('category_id', 'laptop')->get(),
            'macbook' => Product::where('category_id', 'macbook')->get(),
            'bags' => Product::where('category_id', 'bags')->get(),
            'accessories' => Product::where('category_id', 'accessories_laptop')->get(),
        ];

        return Inertia::render('Laptop', [
            'products' => $products
        ]);
    }

    // Computer Parts хуудас
    public function computerParts()
    {
        $products = [
            'cpu' => Product::where('category_id', 'cpu')->get(),
            'gpu' => Product::where('category_id', 'gpu')->get(),
            'ram' => Product::where('category_id', 'ram')->get(),
            'storage' => Product::where('category_id', 'storage')->get(),
            'motherboard' => Product::where('category_id', 'motherboard')->get(),
            'power_supply' => Product::where('category_id', 'power_supply')->get(),
            'fan' => Product::where('category_id', 'fan')->get(),
            'cpu_cooler' => Product::where('category_id', 'cpu_cooler')->get(),
            'case' => Product::where('category_id', 'case')->get(),
        ];

        return Inertia::render('ComputerParts', [
            'products' => $products
        ]);
    }

    // Peripherals хуудас
    public function peripherals()
    {
        $products = [
            'monitor' => Product::where('category_id', 'monitor')->get(),
            'mouse' => Product::where('category_id', 'mouse')->get(),
            'keyboard' => Product::where('category_id', 'keyboard')->get(),
            'headset' => Product::where('category_id', 'headset')->get(),
            'mouse_pad' => Product::where('category_id', 'mouse_pad')->get(),
            'mic' => Product::where('category_id', 'mic')->get(),
            'webcam' => Product::where('category_id', 'webcam')->get(),
            'accessories' => Product::where('category_id', 'accessories_peripherals')->get(),
            'speaker' => Product::where('category_id', 'speaker')->get(),
        ];

        return Inertia::render('Peripherals', [
            'products' => $products
        ]);
    }

    // Phone хуудас
    public function phone()
    {
        $products = [
            'iPhone' => Product::where('category_id', 'iPhone')->get(),
            'tablet' => Product::where('category_id', 'tablet')->get(),
            'smartwatch' => Product::where('category_id', 'smartwatch')->get(),
            'accessories' => Product::where('category_id', 'accessories_phone')->get(),
            'earbuds' => Product::where('category_id', 'earbuds')->get(),
            'cables' => Product::where('category_id', 'cables')->get(),
        ];

        return Inertia::render('Phone', [
            'products' => $products
        ]);
    }

    // Furniture хуудас
    public function furniture()
    {
        $products = [
            'table' => Product::where('category_id', 'table')->get(),
            'chair' => Product::where('category_id', 'chair')->get(),
            'screen_saver' => Product::where('category_id', 'screen_saver')->get(),
        ];

        return Inertia::render('Furniture', [
            'products' => $products
        ]);
    }

    // Network Device хуудас
    public function networkDevice()
    {
        $products = [
            'cable' => Product::where('category_id', 'cable')->get(),
            'server' => Product::where('category_id', 'server')->get(),
            'networkdevice' => Product::where('category_id', 'networkdevice')->get(),
        ];

        return Inertia::render('NetworkDevice', [
            'products' => $products
        ]);
    }

    // Console хуудас
    public function console()
    {
        $products = [
            'pl5' => Product::where('category_id', 'pl5')->get(),
            'pl5games' => Product::where('category_id', 'pl5games')->get(),
            'accessories_console' => Product::where('category_id', 'accessories_console')->get(),
        ];

        return Inertia::render('Console', [
            'products' => $products
        ]);
    }

    // Figure хуудас
    public function figure()
    {
        $products = Product::where('category_id', 'figure')->get();

        return Inertia::render('Figure', [
            'products' => $products
        ]);
    }

    // Pre-built PC хуудас
    public function preBuiltPc()
    {
        $products = Product::where('category_id', 'pc')->get();

        return Inertia::render('PreBuiltPC', [
            'products' => $products
        ]);
    }
}