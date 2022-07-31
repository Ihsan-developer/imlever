@extends('layouts.app')

@section('content')

<!-- start section hero -->

<section class="hero">
    <div class="h-100 d-flex align-items-center">
        <div class="container">
            <div class="row text-center text-lg-start">

                <!-- start left side -->
                <div class="
                col-12 col-sm-1  
                order-0 order-lg-0
                ">


                </div>
                <!-- end left side -->

                <!-- Start Mid Side -->
                <div class="
                col-12 col-sm-10  
                text-black
                align-self-center
                order-1 order-lg-1 my-5 my-lg-0
                ">
                    <div class="card" id="card">

                        <div class="card-body">
                            <form method="POST" action="#">
                                @csrf

                                <div class="form-group row mb-3 ">
                                    <!--Left-->
                                    <div class="col-12 col-sm-6">
                                        <label for="negara" class="col-md-4 col-form-label text-md-right text-start">{{ __('Negara') }}</label>

                                        <div class="#">
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected></option>
                                                <option value="1">Indonesia</option>

                                            </select>

                                            <!--@error('email')-->
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                            <!--@enderror-->
                                        </div>
                                    </div>
                                    <!--Right-->
                                    <div class="col-12 col-sm-6">

                                        <label for="sekolah" class="col-md-4 col-form-label text-md-right text-start">{{ __('Nama Sekolah') }}</label>

                                        <div class="#">
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected></option>
                                                <option value="1">Indonesia</option>

                                            </select>

                                            <!--@error('email')-->
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                            <!--@enderror-->
                                        </div>
                                    </div>
                                </div>


                                <div class="form-group row mb-3 ">
                                    <!--Left-->
                                    <div class="col-12 col-sm-6">
                                        <label for="province" class="col-md-4 col-form-label text-md-right text-start">{{ __('Provinsi') }}</label>

                                        <div class="#">
                                            <select class="form-select" id="province" name="province" aria-label="Default select example">
                                                <option selected></option>
                                                @foreach ($provinces as $id => $provinsi)
                                                <option value="{{ $id }}">{{ $provinsi }}</option>
                                                @endforeach

                                            </select>

                                        </div>
                                    </div>

                                    <!--Right-->
                                    <div class="col-12 col-sm-6">

                                        <label for="negara" class="col-md-4 col-form-label text-md-right text-start">{{ __('Negara') }}</label>

                                        <div class="#">
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected></option>
                                                <option value="1">Indonesia</option>

                                            </select>


                                        </div>
                                    </div>
                                </div>

                                <div class="form-group row mb-3 ">


                                    <!--Left-->
                                    <div class="col-12 col-sm-6">
                                        <label for="city" class="col-md-4 col-form-label text-md-right text-start">{{ __('Kota') }}</label>

                                        <div class="#">
                                            <select class="form-select" id="city" name="city" aria-label="Default select example">
                                                <option selected></option>

                                                @foreach ($cities as $province_id => $kota)
                                                if ($province_id == $id){

                                                <option value="{{ $province_id }}">{{ $kota }}</option>
                                                }
                                                @endforeach
                                            </select>


                                        </div>
                                    </div>
                                    <!--Right-->
                                    <div class="col-12 col-sm-6">

                                        <label for="negara" class="col-md-4 col-form-label text-md-right text-start">{{ __('Negara') }}</label>

                                        <div class="#">
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected></option>
                                                <option value="1">Indonesia</option>

                                            </select>


                                        </div>
                                    </div>
                                </div>


                            </form>
                        </div>
                    </div>
                </div>
                <!-- End of Mid Side -->

                <!-- start right side -->
                <div class="
                col-12 col-sm-1
                order-2 order-lg-2
                ">
                </div>
                <!-- end right side -->
            </div>
        </div>
    </div>
</section>
<!-- end section hero -->



@endsection