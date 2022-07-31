@extends('layouts.template')

@section('content')


<!-- start section hero -->
<section class="hero" id="hero">
    <div class="h-100 d-flex align-items-center">
        <div class="container" id="hero_" style="margin-top: -55px">
            <div class="row text-center text-lg-start">
                <!-- start left side -->
                <div class="
                col-12 col-sm-6
                text-white
                align-self-center
                order-1 order-lg-0
              " style="margin-top: -50px">
                    <h1 class="main-text fw-bold">
                        Raih PTN Impianmu<br />
                        Bersama Imlever <br />
                        
                    </h1>
                    <p class="fw-bold lh-lg mt-4">
                        Kami menyediakan try out berkualitas untuk  <br />
                        kamu agar lebih terlatih dan mahir dalam<br/>
                        mengerjakan soal utbk dan ujian mandiri
                    </p>
                 <!--   <form action="#"-->
                <div class="row g-3 align-items-center">
                  <div class="col-12 col-lg-auto">
                    <!--<input
                      type="email"
                      id="email"
                      class="form-control"
                      placeholder="Mulai"
                      readonly
                    />-->
                    <a href="#">
                    <button type="submit" class="btn btn-primary">
                      Daftar Try Out Gratis
                    </button>
                    </a>
                  </div>
                  <div class="col-12 col-lg-auto text-center">
                    <a href="{{ url('/login') }}"><button type="submit"  class="btn btn-primary">
                      Mulai Belajar
                    </button></a>
                  </div>
                </div>
             <!-- </form>-->
                </div>
                <!-- end left side -->

                <!-- start right side -->
                <div class="col-12 col-sm-6 order-0 order-lg-1 my-5 my-lg-0">
                    <img src="{{ asset('img/hero.png') }}" id="hero" alt="Hero illustration" class="img-fluid" heigth="1200px" width="1200px" />
                </div>
                <!-- end right side -->
            </div>
        </div>
    </div>
</section>
<!-- end section hero -->`

<!-- start section card feature -->
<section class="container" id="data">
    <div class="card shadow card-feature">
        <div class="card-body p-4 p-lg-5" style="margin-top: -50px">
            <div class="row gx-5 gy-5 gy-lg-0">
                <h2 class="text-center" id="judulbenefit">
                    Manfaat Belajar Bersama Imlever
                </h2>
                <!-- start column 1st -->
                <div class="col-12 col-sm-4 card-feature-body position-relative">
                    <figure class="text-center" style="height: 120px">
                        <a href="https://pngtree.com/so/arrow"><img src="images/illustration1.png" id="il1" alt="illustration 1" class="img-fluid" style="height: auto; width: 90%" /></a>
                    </figure>
                    <h2 class="fs-5 text-heading">Try Out Berkualitas</h2>
                    <p class="lh-lg" style="text-align: justify">
                        <!--Dengan mendapatkan source code yang kamu inginkan, kamu bisa
                        menambah fitur menarik dan bervariasi yang belum pernah ketahui
                        sebelumnya untuk projectmu-->
                    </p>
                   <!-- <a href="#" class="btn btn-outline-primary position-absolute bottom-0" id="tombol">Detail</a>-->
                </div>
                <!-- end column 1st -->

                <!-- start column 2nd -->
                <div class="col-12 col-sm-4 card-feature-body position-relative">
                    <figure class="text-center" style="height: 120px">
                        <img src="images/illustration2.svg" id="il2" alt="illustration 2" class="img-fluid" style="height: auto; width: 50%" />
                    </figure>
                    <h2 class="fs-5 text-heading test">Belajar dengan Bimbingan</h2>
                    <p class="lh-lg" style="text-align: justify">
                        Kamu dapat menghemat waktu dalam membangun sebuah project. Dan
                        hanya tinggal mengedit content dari source code kamu.
                    </p>
                   <!-- <a href="#" class="btn btn-outline-primary position-absolute bottom-0" id="tombol">Detail</a>-->
                </div>
                <!-- end column 2nd -->

                <!-- start column 3rd -->
                <div class="col-12 col-sm-4 card-feature-body position-relative">
                    <figure class="text-center" style="height: 120px">
                        <img src="images/illustration3.png" id="il3" alt="illustration 3" class="img-fluid" />
                    </figure>
                    <h2 class="fs-5 text-heading test">Analisa Peluang jurusan</h2>
                    <p class="lh-lg" style="text-align: justify">
                        Selain efektif dan efisien, kamu dapat mempelajari cara
                        mengaplikasikan teknologi software/framework sehingga dapat
                        menambah skill developermu.
                    </p>
                    <!--<a href="#" class="btn btn-outline-primary position-absolute bottom-0" id="tombol">Detail</a>-->
                </div>
                <!-- end column 3rd -->
            </div>
        </div>
    </div>
</section>
<!-- end section card feature -->

<!-- start section Our company -->
<section class="container section-taste-premium section-auto-flip" data-aos="fade-up">
    <div class="row">
        <div class="col-12 col-sm-6">
            <div class="canvas">
                <!--<div class="circle"></div>-->
                <div class="object">
                    <img src="images/logo_pt.png" alt="Pohon Jeruk" class="img-fluid" id="img-1" />
                </div>
            </div>
        </div>
        <div class="col-12 col-sm-6 text-center text-lg-start align-self-center">
            <h3 class="text-main-orange display-6.5" id="about">
                Apakah Ikut Try Out itu Penting?
            </h3>
            <!--<h4 class="text-blue-jeans fs-2">Try Out itu penting tauu</h4>-->
            <p class="lh-lg text-blue-jeans display-7" style="text-align: justify">
                Penting. Karena salah satu cara untuk meningkatkan kemampuan kamu 
                dalam menjawab soal Ujian Tulis Berbasis Komputer (UTBK) dan Ujian Mandiri 
                adalah dengan melakukan simulasi ujiannya langsung agar terbiasa dengan suasana ujian. 
                Nah, untuk kamu para pejuang UTBK boleh banget ikutan Try Out dari kami.
                
            </p>
        </div>
    </div>
</section>
<!-- end section taste premium -->

<!-- start section taste premium -->
<section data-aos="fade-up" data-aos-duration="2000" class="container section-taste-premium section-auto-flip" id="testimonial">
    <div class="row" id="product">
        <div class="col-12 col-sm-6">
            <div class="canvas">
                <!--<div class="circle"></div>-->
                <div class="object">
                    <img src="images/produk.png" alt="Pohon Jeruk" class="img-fluid" id="img-2" />
                </div>
            </div>
        </div>
        <div class="col-12 col-sm-6 text-center text-lg-end align-self-center">
            <h3 class="text-main-orange display-6.5" id="premium-1">
                Apakah Kamu Butuh Grup Belajar?
            </h3>
            <h4 class="text-blue-jeans fs-2" id="text-premium-1">
                
            </h4>
            <p class="lh-lg display-7" style="text-align: justify">
                Agar dapat memantau perkembangan kamu dalam Belajar,
                kami menyediakan grup telegram untuk keperluan try out
                belajar, dan sharing seputar Perguruan Tinggi Negeri.
                Di grup tersebut, kamu dapat bertemu dengan pesaingmu
                dan dapat meningkatkan semangat belajar kamu.
            </p>
        </div>
    </div>
</section>
<!-- end section taste premium -->


@endsection