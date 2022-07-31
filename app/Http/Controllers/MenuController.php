<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MenuController extends Controller
{
    // Start
    public function home()
    {
        return view('index');
    }
    public function dashboard()
    {
        $this->middleware(['auth', 'verified']);
        return view('dashboard');
    }
    public function top_global_to()
    {
        return view('top');
    }
    public function to()
    {
        return view('to');
        /*to.to1*/ 
    }
    public function index()
    {
        return view('to');
    }
   
  
}
