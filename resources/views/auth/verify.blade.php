@extends('layouts.verify')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header"><b>{{ __('Silahkan Cek Email Kamu, Untuk Verifikasi Akun') }}</b></div>

                <div class="card-body">
                    @if (session('resent'))
                    <div class="alert alert-success" role="alert">
                        {{ __('Berhasil Terkirim!, Link Verifikasi Akun Sudah Kami Kirimkan ke Email Kamu.') }}
                    </div>
                    @endif

                    {{ __('Sebelum kamu lanjut, silahkan verifikasi akunmu dengan mengklik link verifkasi di email kamu.') }}
                    
                    <p>{{ __('Jika kamu belum menerima link email verifikasinya, silahkan') }}</p>
                    <form class="d-inline" method="POST" action="{{ route('verification.resend') }}">
                        @csrf
                        <button type="submit" class="btn btn-link p-0 m-0 align-baseline">{{ __('klik ini untuk mengirimkan link verifikasi yang baru') }}</button>.
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection