@extends('layouts.app')

@section('content')
<!-- start section hero -->

<section class="hero">
    <div class="h-100 d-flex align-items-center">
        <div class="container">
            <div class="row text-center text-lg-start">

                <!-- start right side --> 
                <div class="
                col-12 col-sm-6   
                text-black
                align-self-center
                order-1 order-lg-1 my-5 my-lg-0
                ">

                    <div class="card" id="card">

                        <div class="card-body">
                            <form method="POST" action="{{ route('login') }}">
                                @csrf

                                <div class="form-group row mb-3 ">
                                    <label for="email" class="col-md-4 col-form-label text-md-right text-start">{{ __('E-Mail Address') }}</label>

                                    <div class="#">
                                        <input placeholder="contoh@gmail.com" id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>

                                        @error('email')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                        @enderror
                                    </div>
                                </div>

                                <div class="form-group row mb-3">
                                    <label for="password" class="col-md-4 col-form-label text-md-right text-start">{{ __('Password') }}</label>

                                    <div class="#">
                                        <input placeholder="password" id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">

                                        @error('password')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                        @enderror
                                    </div>
                                </div>

                                <div class="form-group row mb-3">
                                    @if (Route::has('password.request'))
                                    <div class="col-12 col-sm-6 text-start">
                                        <input class="btn btn-primary text-start" type="button" name="submit" value="Show" id="show" onclick="ShowPassword()" />
                                        <input class="btn btn-primary text-start" type="button" style="display: none" id="hide" value="Hide" onclick="HidePassword()" />

                                    </div>
                                    <div class="col-12 col-sm-6 text-end">
                                        <a href="{{ route('password.request') }}">
                                            {{ __('Lupa Password') }}
                                        </a>


                                    </div>
                                    @endif

                                </div>

                                <div class="form-group row mb-3">
                                    <div class="#">
                                        <div class="form-check text-start">
                                            <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

                                            <label class="form-check-label" for="remember">
                                                {{ __('Tolong Ingat Akunku') }}
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group row mb-3">
                                    <div class="#">
                                        <button type="submit" class="btn btn-primary" id="button">
                                            {{ __('Masuk') }}
                                        </button>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="#">
                                        <div class="row ">
                                            <div class="col-12 text-center">
                                                <span>Belum Punya Akun?</span> <a class="btn btn-link" href="{{ route('register') }}">
                                                    Daftar di sini
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <!-- end right side -->

                <!-- start left side -->
                <div class="
                col-12 col-sm-6
                order-0 order-lg-0
                ">
                    <img src="{{ asset('img/login.png') }}" alt="Hero illustration" class="img-fluid element-3" id="img-login" /><div class="row text-center"><a href='https://www.freepik.com' target="_blank" >Ilustrasi dari freepik.com</a></div>

                </div>
                <!-- end left side -->
            </div>
        </div>
    </div>
</section>
<!-- end section hero -->


<div class="row justify-content-center">
    <div class="col-md-8">

    </div>
</div>

@endsection