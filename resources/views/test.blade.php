@extends('layouts.to')

@section('content')
<div class="container">
    <div class="card"> 
        <div class="card-header">
            <h3>Nilai Siswa</h3>
        </div> 
        <div class="card-body">
             
            <form action="{{ route('test.store')}}" method="POST">
                @csrf
                <ul class="list-group">
                    Nilai TPS <input type="text"  name="nilai" readonly>
              
                </ul>
                <input type="submit" value="Simpan Data" class="btn btn-success">
            </form>
        </div>
    </div>
</div>

<script >
//../../../public/js/to/to1/tps/
//import { score } from './pbm.js';
score = 50;
var nilai1 = document.getElementsByName('nilai');

nilai1[0].setAttribute('value', score);

</script>
<script src="{{ asset('js/to/to1/tps/pbm.js') }}"></script>
@endsection