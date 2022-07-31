@extends('layouts.to')

@section('content')


<section class="to" id="to">
<div class="text-center">
        <h3>TPS | Pemahaman Bacaan dan Menulis</h3>
    </div>
    <div class="row" id="row">
        <div class="row" id="pendorong">
            <div class="col-12 col-sm-2">

            </div> 
            <div class="col-12 col-sm-3">
                <span id="demo"></span>
            </div>

        </div> 
        <div class="col-12 col-sm-8">
            <div class="quiz-container">
            <div class="overflow-auto">
                <div id="quiz"></div>
                
            </div>
            </div>
        </div>
        <div class="col-12 col-sm-4">
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Nomor Soal
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <div class="row" id="indikasiSoal">
                        <div class="col-12 col-sm-2">
                            <button id="satu">01</button>
                        </div>
                        <div class="col-12 col-sm-2">
                            <button id="dua">02</button>
                        </div>
                        <div class="col-12 col-sm-2">
                            <button id="tiga">03</button>
                        </div>
                        <div class="col-12 col-sm-2">
                            <button id="empat">04</button>
                        </div>
                        <div class="col-12 col-sm-2">
                            <button id="lima">05</button>
                        </div>
                        <div class="col-12 col-sm-2">
                            <button id="enam">06</button>
                        </div>

                    </div>
                    <div class="row" id="indikasiSoal1">
                        <div class="col-12 col-sm-2">
                            <button id="tujuh">07</button>
                        </div>
                        <div class="col-12 col-sm-2">
                            <button id="delapan">08</button>
                        </div>
                        <div class="col-12 col-sm-2">
                            <button id="sembilan">09</button>
                        </div>
                        <div class="col-12 col-sm-2">
                            <button id="sepuluh">10</button>
                        </div>
                        <div class="col-12 col-sm-2">
                            <button id="sebelas">11</button>
                        </div>
                        <div class="col-12 col-sm-2">
                            <button id="duabelas">12</button>
                        </div>

                    </div>
                    <div class="row" id="indikasiSoal2">
                        <div class="col-12 col-sm-2">
                            <button id="tigabelas">13</button>
                        </div>
                        <div class="col-12 col-sm-2">
                            <button id="empatbelas">14</button>
                        </div>
                        <div class="col-12 col-sm-2">
                            <button id="limabelas">15</button>
                        </div>
                      <!--  <div class="col-12 col-sm-2">
                            <button id="enambelas">16</button>
                        </div>
                        <div class="col-12 col-sm-2">
                            <button id="tujuhbelas">17</button>
                        </div>
                        <div class="col-12 col-sm-2">
                            <button id="delapanbelas">18</button>
                        </div>-->
                    </div>
                 <!--   <div class="row" id="indikasiSoal3">
                        <div class="col-12 col-sm-2">
                            <button id="sembilanbelas">19</button>
                        </div>
                        <div class="col-12 col-sm-2">
                            <button id="duapuluh">20</button>
                        </div>
                        <div class="col-12 col-sm-2">
                            <button id="duasatu">21</button>
                        </div>
                        <div class="col-12 col-sm-2">
                            <button id="duadua">22</button>
                        </div>
                        <div class="col-12 col-sm-2">
                            <button id="duatiga">23</button>
                        </div>
                        <div class="col-12 col-sm-2">
                            <button id="duaempat">24</button>
                        </div>

                    </div>-->
                </div>
            </div>

        </div>
    </div>
    <div class="row" id="indikator">

        <div class="col-12 col-sm-2">
            <button id="previous">Soal Sebelumnya</button>
        </div>
      <!--  <div class="col-12 col-sm-2">
            <button id="done">Tandai Soal Selesai</button>
        </div>-->
        
        <div class="col-12 col-sm-2">
            <button id="next">Soal Selanjutnya</button>
        </div>
  
        
        
        <div class="col-12 col-sm-2"> 
         
            <form action="{{ route('pbm.store') }}" method="POST" >
                <!--WOIII Jangan lagi dah gk jelas!! Masa Elemen Button dengan
                 Type Submit di taruh di Luar form. Ya, gimana mau di kirim datanya-->
                <button type="submit" id="submit">Kumpulkan</button>
                @csrf
                <ul class="list-group">
                 <input type="text"  name="pbm" readonly>
                 <input type="text"  name="nama" value="{{ Auth::user()->name }}" readonly>
                </ul>
                
            </form> 
        
        </div>
       
    </div>

   <!-- <div id="results"></div>-->
  
</section>

<!--Alhamdulillah bisa
Jadi masalahnya itu awal, ketika user habis waktu, itu gk mencet 
tombol kan langsung menjalankan fungsi show result Tapi sekarang bisa
pake autoclick

masalah kedua, setelah ke submit ke database. dari laravel sendiri 
langsung ke redirect ke views('test'). Tapi itu bisa dirubah ke views 
to selanjutnya. Otomatis, bakal langsung ke redirect ke to selanjutnya
dan no problem

Tugas Besok :
1. Ganti Style Inputan dan tata letak nilai quiznya #Done
2. aplikasiin syntax js yang jadi solusi permasalahan di atas
   ke semua jenis to #Done
3. Buat masing-masing resource (CRUD) seperti to1pbmcontroller #done
4. OI SANN!!. Buat tabel to1pbm, to1pk, dsb. buat gantiin tabel nilai To1 (yang umum) dan 
hubungkan dengan masing masing controllernya karena gk bisa alias id auto increament #Done
5. Testing 8 jenis to #Done
6. DEPLOY! (Bikin Soalnya)
7. Ganti UI Dashboard ama Index
8. Production :)
-->

<script src="{{ asset('js/to/to1/tps/pbm.js') }}"></script>
@endsection