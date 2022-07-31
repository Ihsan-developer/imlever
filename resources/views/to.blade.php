@extends('layouts.dashboardto')

@section('content')



<div class="container-fluid py-4">
    <div class="row">
        <div class="col-12 mt-4">
            <div class="card mb-4">
                <div class="card-header pb-0 p-3">
                    <h6 class="mb-1">Try Out Gratis</h6>
                    <p class="text-sm">Yuk, cobain try out gratis ini!</p>
                </div>
                <div class="card-body p-3">
                    <div class="row">
                        <div class="col-xl-3 col-md-6 mb-xl-0 mb-4">
                            <div class="card card-blog card-plain">
                                <div class="position-relative">
                                    <a class="d-block shadow-xl border-radius-xl">
                                        <img src="../assets/img/home-decor-1.jpg" alt="img-blur-shadow" class="img-fluid shadow border-radius-xl">
                                    </a>
                                </div>
                                <div class="card-body px-1 pb-0">
                                    <a href="javascript:;">
                                        <h5>
                                         Try Out UTBK #1
                                        </h5>
                                    </a>
                                    <p class="text-gradient text-dark mb-2 text-sm">Free</p>
                                    <p class="mb-4 text-sm text-justify">
                                    Asah kemampuanmu dengan cara mengerjakan try out UTBK berkualitas <!--dari Imlever.-->
                                    </p>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <button type="button" class="btn btn-outline-primary btn-sm mb-0" id="disable" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Kerjakan</button>
                                        <!--<div class="avatar-group mt-2">
                                            <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Elena Morison">
                                                <img alt="Image placeholder" src="../assets/img/team-1.jpg">
                                            </a>
                                            <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ryan Milly">
                                                <img alt="Image placeholder" src="../assets/img/team-2.jpg">
                                            </a>
                                            <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Nick Daniel">
                                                <img alt="Image placeholder" src="../assets/img/team-3.jpg">
                                            </a>
                                            <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Peterson">
                                                <img alt="Image placeholder" src="../assets/img/team-4.jpg">
                                            </a>
                                        </div>-->
                                    </div>
                                    <!-- Modal -->
                                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                        <div class="modal-dialog modal-dialog-centered">
                                            <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <input type="text" id="inputKode" name="kode" placeholder="Masukkan Kode">
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" class="btn btn-primary" id="submitKodeTo1Free">Understood</button>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-md-6 mb-xl-0 mb-4">
                            <div class="card card-blog card-plain">
                                <div class="position-relative">
                                    <a class="d-block shadow-xl border-radius-xl">
                                        <img src="../assets/img/home-decor-2.jpg" alt="img-blur-shadow" class="img-fluid shadow border-radius-lg">
                                    </a>
                                </div>
                                <div class="card-body px-1 pb-0">
                                    <a href="javascript:;">
                                        <h5>
                                         Try Out UTBK #2
                                        </h5>
                                    </a>
                                    <p class="text-gradient text-dark mb-2 text-sm">Free</p>
                                    <p class="mb-4 text-sm text-justify">
                                    Asah kemampuanmu dengan cara mengerjakan try out UTBK berkualitas <!--dari Imlever.-->
                                    </p>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <button type="button" class="btn btn-outline-primary btn-sm mb-0 disabled">Coming Soon</button>
                                        <!--<div class="avatar-group mt-2">
                                            <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Nick Daniel">
                                                <img alt="Image placeholder" src="../assets/img/team-3.jpg">
                                            </a>
                                            <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Peterson">
                                                <img alt="Image placeholder" src="../assets/img/team-4.jpg">
                                            </a>
                                            <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Elena Morison">
                                                <img alt="Image placeholder" src="../assets/img/team-1.jpg">
                                            </a>
                                            <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ryan Milly">
                                                <img alt="Image placeholder" src="../assets/img/team-2.jpg">
                                            </a>
                                        </div>-->
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-md-6 mb-xl-0 mb-4">
                            <div class="card card-blog card-plain">
                                <div class="position-relative">
                                    <a class="d-block shadow-xl border-radius-xl">
                                        <img src="../assets/img/home-decor-3.jpg" alt="img-blur-shadow" class="img-fluid shadow border-radius-xl">
                                    </a>
                                </div>
                                <div class="card-body px-1 pb-0">
                                    <a href="javascript:;">
                                        <h5>
                                         Try Out UTBK #3
                                        </h5>
                                    </a>
                                    <p class="text-gradient text-dark mb-2 text-sm">Free</p>
                                    <p class="mb-4 text-sm text-justify">
                                    Asah kemampuanmu dengan cara mengerjakan try out UTBK berkualitas <!--dari Imlever.-->
                                    </p>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <button type="button" class="btn btn-outline-primary btn-sm mb-0 disabled">Coming Soon</button>
                                        <!--<div class="avatar-group mt-2">
                                            <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Peterson">
                                                <img alt="Image placeholder" src="../assets/img/team-4.jpg">
                                            </a>
                                            <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Nick Daniel">
                                                <img alt="Image placeholder" src="../assets/img/team-3.jpg">
                                            </a>
                                            <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ryan Milly">
                                                <img alt="Image placeholder" src="../assets/img/team-2.jpg">
                                            </a>
                                            <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Elena Morison">
                                                <img alt="Image placeholder" src="../assets/img/team-1.jpg">
                                            </a>
                                        </div>-->
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-md-6 mb-xl-0 mb-4">
                        <div class="card card-blog card-plain">
                                <div class="position-relative">
                                    <a class="d-block shadow-xl border-radius-xl">
                                        <img src="../assets/img/home-decor-3.jpg" alt="img-blur-shadow" class="img-fluid shadow border-radius-xl">
                                    </a>
                                </div>
                                <div class="card-body px-1 pb-0">
                                    <a href="javascript:;">
                                        <h5>
                                         Try Out UTBK #4
                                        </h5>
                                    </a>
                                    <p class="text-gradient text-dark mb-2 text-sm">Free</p>
                                    <p class="mb-4 text-sm text-justify">
                                    Asah kemampuanmu dengan cara mengerjakan try out UTBK berkualitas <!--dari Imlever.-->
                                    </p>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <button type="button" class="btn btn-outline-primary btn-sm mb-0 disabled">Coming Soon</button>
                                        <!--<div class="avatar-group mt-2">
                                            <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Peterson">
                                                <img alt="Image placeholder" src="../assets/img/team-4.jpg">
                                            </a>
                                            <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Nick Daniel">
                                                <img alt="Image placeholder" src="../assets/img/team-3.jpg">
                                            </a>
                                            <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ryan Milly">
                                                <img alt="Image placeholder" src="../assets/img/team-2.jpg">
                                            </a>
                                            <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Elena Morison">
                                                <img alt="Image placeholder" src="../assets/img/team-1.jpg">
                                            </a>
                                        </div>-->
                                    </div>
                                </div>
                            </div>
                           <!-- <div class="card h-100 card-plain border">
                                <div class="card-body d-flex flex-column justify-content-center text-center">
                                    <a href="javascript:;">
                                        <i class="fa fa-plus text-secondary mb-3"></i>
                                        <h5 class=" text-secondary"> New project </h5>
                                    </a>
                                </div>
                            </div>-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
    //Kode
    const test1 = 'test';
    const test2 = 'test';
    const KodeSaintek = 'to1_utbk_saintek_free_by_imlever';
    const KodeSoshum = 'to1_utbk_soshum_free_by_imlever';
    var disable = document.getElementsByTagName("button");
    //const test = 'coba';
    

    document.querySelector('#submitKodeTo1Free').addEventListener('click',function(e)
	{	        
		let inputKode = document.querySelector('#inputKode');	
        
        if (inputKode.value !== KodeSaintek && inputKode.value !== KodeSoshum){
            alert("Kode Salah");
        }

        else {
            if(inputKode.value === KodeSaintek){
                localStorage.setItem('nilai', 'a');
                return window.location.assign('mtk');  
            }
            if (inputKode.value === KodeSoshum) {
                localStorage.setItem('nilai', 'a');
                return window.location.assign('sej'); 
            } 
        }       
        /*
        https://www.proweb.co.id/articles/js/localstorage-json.html
        Tahap Develop
        storage browser yang udah dipake{
            1. nil
            2. nila
            3. coba
            4. co
            5. c
            6. b
            7.
        }
        */ 
	});
    var storage = localStorage.getItem('nilai');
    if (storage === 'a'){
            disable[0].setAttribute('disabled', '');
        }
</script>

<!-- Cara input nilai ke database dengan js tricknya
1. Gunakan fungsi setAttibut  untuk form kirim (route {ect.php})
2. Hubungkan parameter fungsi setAtribut dengan  "value = variabel score" pada setiap sub test
3. setiap waktu habis langsung kirim ke databaseee dengan cara muncul modal atau submit jawaban
4.

-->
@endsection