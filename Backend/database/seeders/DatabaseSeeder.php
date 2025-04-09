<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        DB::table('products')->insert([
            [
                'title' => 'Debugging Duck',
                'price' => 9.99,
                'description' => 'Your faithful rubber duck to talk to when code breaks. Doesn’t answer, but that’s the point.',
                'category' => 'tools',
                'image' => '/storage/images/Debugging-Duck.jpg',
                'rating' => json_encode(['rate' => 4.8, 'count' => 200]),
            ],
            [
                'title' => 'Dark Mode T-Shirt',
                'price' => 19.99,
                'description' => 'Black shirt with white code print – optimized for developers who live in dark mode.',
                'category' => 'apparel',
                'image' => '/storage/images/Dark-Mode-T-Shirt.jpg',
                'rating' => json_encode(['rate' => 4.5, 'count' => 150]),
            ],
            [
                'title' => 'Binary Coffee Mug',
                'price' => 12.49,
                'description' => 'Mug with “01001000 01101001” printed on it – which means "Hi" in binary. Geek fuel!',
                'category' => 'kitchen',
                'image' => '/storage/images/Binary-Coffee-Mug.jpg',
                'rating' => json_encode(['rate' => 4.9, 'count' => 180]),
            ],
            [
                'title' => 'Git Push Stress Ball',
                'price' => 6.95,
                'description' => 'For those times when your push gets rejected. Squeeze your way to inner peace.',
                'category' => 'tools',
                'image' => '/storage/images/Git-Push-Stress-Ball.jpg',
                'rating' => json_encode(['rate' => 4.4, 'count' => 76]),
            ],
            [
                'title' => 'Syntax Error Hoodie',
                'price' => 39.99,
                'description' => 'Stay cozy while fixing bugs. Comes with a kangaroo pocket for USB sticks and snacks.',
                'category' => 'apparel',
                'image' => '/storage/images/Syntax-Error-Hoodie.jpg',
                'rating' => json_encode(['rate' => 4.6, 'count' => 112]),
            ],
            [
                'title' => 'RGB Mechanical Keyboard',
                'price' => 89.99,
                'description' => 'Tactile clicks and vibrant lights to make your code look and sound cooler.',
                'category' => 'hardware',
                'image' => '/storage/images/RGB-Mechanical-Keyboard.jpg',
                'rating' => json_encode(['rate' => 4.9, 'count' => 320]),
            ],
            [
                'title' => 'JavaScript Candle',
                'price' => 14.99,
                'description' => 'Smells like confusion, hope, and eventual success. Burn it during those async nights.',
                'category' => 'home',
                'image' => '/storage/images/JavaScript-Candle.jpg',
                'rating' => json_encode(['rate' => 4.2, 'count' => 67]),
            ],
            [
                'title' => 'Stack Overflow Notebook',
                'price' => 7.99,
                'description' => 'For all your brilliant ideas before you copy/paste the solution anyway.',
                'category' => 'stationery',
                'image' => '/storage/images/Stack-Overflow-Notebook.jpg',
                'rating' => json_encode(['rate' => 4.5, 'count' => 143]),
            ]
        ]);

    }
}
