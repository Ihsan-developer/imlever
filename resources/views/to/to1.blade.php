@extends('layouts.to')

@section('content')


<section class="to" id="to">

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
                <div id="quiz"></div>
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
                            <button id="satu">1</button>
                        </div>
                        <div class="col-12 col-sm-2">
                            <button id="dua">2</button>
                        </div>
                        <div class="col-12 col-sm-2">
                            <button id="tiga">3</button>
                        </div>
                        <div class="col-12 col-sm-2">
                            <button id="tiga">3</button>
                        </div>
                        <div class="col-12 col-sm-2">
                            <button id="tiga">3</button>
                        </div>
                        <div class="col-12 col-sm-2">
                            <button id="tiga">3</button>
                        </div>

                    </div>
                    <div class="row" id="indikasiSoal1">
                        <div class="col-12 col-sm-2">
                            <button id="satu">1</button>
                        </div>
                        <div class="col-12 col-sm-2">
                            <button id="dua">2</button>
                        </div>
                        <div class="col-12 col-sm-2">
                            <button id="tiga">3</button>
                        </div>
                        <div class="col-12 col-sm-2">
                            <button id="tiga">3</button>
                        </div>
                        <div class="col-12 col-sm-2">
                            <button id="tiga">3</button>
                        </div>
                        <div class="col-12 col-sm-2">
                            <button id="tiga">3</button>
                        </div>

                    </div>
                    <div class="row" id="indikasiSoal2">
                        <div class="col-12 col-sm-2">
                            <button id="satu">1</button>
                        </div>
                        <div class="col-12 col-sm-2">
                            <button id="dua">2</button>
                        </div>
                        <div class="col-12 col-sm-2">
                            <button id="tiga">3</button>
                        </div>
                        <div class="col-12 col-sm-2">
                            <button id="tiga">3</button>
                        </div>
                        <div class="col-12 col-sm-2">
                            <button id="tiga">3</button>
                        </div>
                        <div class="col-12 col-sm-2">
                            <button id="tiga">3</button>
                        </div>

                    </div>
                    <div class="row" id="indikasiSoal3">
                        <div class="col-12 col-sm-2">
                            <button id="satu">1</button>
                        </div>
                        <div class="col-12 col-sm-2">
                            <button id="dua">2</button>
                        </div>
                        <div class="col-12 col-sm-2">
                            <button id="tiga">3</button>
                        </div>
                        <div class="col-12 col-sm-2">
                            <button id="tiga">3</button>
                        </div>
                        <div class="col-12 col-sm-2">
                            <button id="tiga">3</button>
                        </div>
                        <div class="col-12 col-sm-2">
                            <button id="tiga">3</button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </div>
    <div class="row" id="indikator">

        <div class="col-12 col-sm-2">
            <button id="previous">Soal Sebelumnya</button>
        </div>
        <div class="col-12 col-sm-2">
            <button id="done">Tandai Soal Selesai</button>
        </div>
        <div class="col-12 col-sm-2">
            <button id="next">Soal Selanjutnya</button>
        </div>
        <div class="col-12 col-sm-2">
            <button id="submit">Kumpulkan</button>
        </div>
    </div>
    
    <div id="results"></div>

</section>
@endsection