<?php

namespace App\Http\Controllers\ApiDash;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index() {
        $clients = [
            [
                'id' => 1,
                'name' => 'José Ricardo',
                'email' => 'jose@gmail.com'
            ]
        ];

        $products = [
            [
                'id' => 1,
                'name' => 'Video game',
                'email' => '10.50'
            ]
        ];

        return response()->json([
            'clients' => $clients,
            'products' => $products,
        ]);
    }
}
