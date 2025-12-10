<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            ["id" => "cpu", "name" => "Процессор"],
            ["id" => "gpu", "name" => "График карт"],
            ["id" => "ram", "name" => "Шуурхай санах ой / RAM"],
            ["id" => "storage", "name" => "Хадгалах төхөөрөмж"],
            ["id" => "motherboard", "name" => "Эх хавтан"],
            ["id" => "power_supply", "name" => "Тэжээлийн блок"],
            ["id" => "case", "name" => "Кейс"],
            ["id" => "fan", "name" => "Сэнс / Дагалдах хэрэгсэл"],
            ["id" => "cpu_cooler", "name" => "Хөргүүр /CPU/"],
            ["id" => "pl5", "name" => "PlayStation 5"],
            ["id" => "pl5games", "name" => "PlayStation 5-ын тоглоомууд"],
            ["id" => "accessories_console", "name" => "Дагалдах хэрэгсэл"],
            ["id" => "figure", "name" => "Фигур"],
            ["id" => "table", "name" => "Ширээ"],
            ["id" => "chair", "name" => "Сандал"],
            ["id" => "screen_saver", "name" => "Дэлгэц тогтоогч"],
            ["id" => "laptop", "name" => "Зөөврийн компьютер"], 
            ["id" => "macbook", "name" => "MacBook"],
            ["id" => "bags", "name" => "Цүнх / Үүргэвч"],
            ["id" => "accessories_laptop", "name" => "Дагалдах хэрэгсэл"],
            ["id" => "cable", "name" => "Кабел залгуур"],
            ["id" => "server", "name" => "Сервер, Рак, Кабинет"],
            ["id" => "networkdevice", "name" => "Сүлжээний төхөөрөмж"],
            ["id" => "monitor", "name" => "Дэлгэц"],
            ["id" => "mouse", "name" => "Хулгана"],
            ["id" => "keyboard", "name" => "Гар"],
            ["id" => "headset", "name" => "Чихэвч"],
            ["id" => "mouse_pad", "name" => "Хулганы пад"],
            ["id" => "mic", "name" => "Микрофон"],
            ["id" => "webcam", "name" => "Вэб камер"],
            ["id" => "accessories_peripherals", "name" => "Дагалдах хэрэгсэл"],
            ["id" => "speaker", "name" => "Спикер / Чанга яригч"],
            ["id" => "iPhone", "name" => "iPhone"],
            ["id" => "tablet", "name" => "Таблет"],
            ["id" => "smartwatch", "name" => "Ухаалаг цаг"],
            ["id" => "accessories_phone", "name" => "Дагалдах хэрэгсэл"],
            ["id" => "earbuds", "name" => "Гар утасны чихэвч / Earbuds"],
            ["id" => "cables", "name" => "Гар утасны кабел / Адаптер"],
            ["id" => "pc", "name" => "Компьютер"],
        ];

        foreach ($categories as $category) {
            DB::table('categories')->insert([
                "id" => $category["id"],
                "name" => $category["name"],
                "slug" => Str::slug($category["name"], '-'),
                "created_at" => now(),
                "updated_at" => now(),
            ]);
        }
    }
}
