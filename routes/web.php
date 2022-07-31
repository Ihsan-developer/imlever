<?php


use App\Http\Controllers\SiswaController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\To;
use App\Http\Controllers\MenuController;

/* Development*/
use App\Http\Controllers\TestController;
use App\Http\Controllers\CobaController;

/* Production */ 
use App\Http\Controllers\ToController;

use App\Http\Controllers\PbmController;
use App\Http\Controllers\PkController;
use App\Http\Controllers\PpuController;
use App\Http\Controllers\PuController;

use App\Http\Controllers\MtkController;
use App\Http\Controllers\FisController;
use App\Http\Controllers\KimController;
use App\Http\Controllers\BioController;

use App\Http\Controllers\SejController;
use App\Http\Controllers\EkoController;
use App\Http\Controllers\GeoController;
use App\Http\Controllers\SosController;

use GuzzleHttp\Middleware;
use Illuminate\Support\Facades\Route;
use Auth\VerificationController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
| 
*/

/* Index */
Route::get('/', function () {
    return view('index');
});
Route::get('/index', [MenuController::class, 'home']);

/* Verifying Validation */
Auth::routes(['verify' => True]);
Route::get('/email/verify', function () {
    return view('auth.verify');
})->middleware('auth')->name('verification.notice');

/* Dashboard Main*/

Route::get('/dashboard', [MenuController::class, 'dashboard']);#->middleware('verified')->middleware('auth', 'can:isAdminSiswa')->name('verification.notice');
Route::get('/to', [MenuController::class, 'to'])->middleware('can:isAdminSiswa');

/* Testing */
Route::resource('siswa', SiswaController::class)->middleware('can:isAdmin');
Route::resource('siswa', SiswaController::class)->only('show')->middleware('can:isAdminSiswa');

/* Development */
Route::resource('test', TestController::class)->middleware('can:isAdminSiswa');
Route::resource('siswa', SiswaController::class)->middleware('can:isAdmin');
Route::resource('coba', CobaController::class)->middleware('can:isAdminSiswa');
Route::resource('to', MenuController::class)->middleware('can:isAdminSiswa');
/*
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/data', [DependentDropdownController::class, 'index']);
Route::get('/top', [MenuController::class, 'top_global_to']);
*/


/* Production */
// Rubah setiap session waktu Sub Test dan session TO #1 UTBK

/* Nilai dan Rata2  */

/* TPS */
Route::resource('pbm', PbmController::class)->middleware('can:isAdminSiswa');
Route::resource('pk', PkController::class)->middleware('can:isAdminSiswa');
Route::resource('ppu', PpuController::class)->middleware('can:isAdminSiswa');
Route::resource('pu', PuController::class)->middleware('can:isAdminSiswa');

/* TKA Saintek */
Route::resource('mtk', MtkController::class)->middleware('can:isAdminSiswa');
Route::resource('fis', FisController::class)->middleware('can:isAdminSiswa');
Route::resource('kim', KimController::class)->middleware('can:isAdminSiswa');
Route::resource('bio', BioController::class)->middleware('can:isAdminSiswa');

/* TKA Soshum */
Route::resource('sej', SejController::class)->middleware('can:isAdminSiswa');
Route::resource('eko', EkoController::class)->middleware('can:isAdminSiswa');
Route::resource('geo', GeoController::class)->middleware('can:isAdminSiswa');
Route::resource('sos', SosController::class)->middleware('can:isAdminSiswa');


/* TO 1 TPS */
Route::get('/to1pbm', [ToController::class, 'to1pbm'])->middleware('can:isAdminSiswa');
Route::get('/to1pu', [ToController::class, 'to1pu'])->middleware('can:isAdminSiswa');
Route::get('/to1ppu', [ToController::class, 'to1ppu'])->middleware('can:isAdminSiswa');
Route::get('/to1pk', [ToController::class, 'to1pk'])->middleware('can:isAdminSiswa');

/* TO 1 TKA */
Route::get('/to1mtk', [ToController::class, 'to1mtk'])->middleware('can:isAdminSiswa');
Route::get('/to1fis', [ToController::class, 'to1fis'])->middleware('can:isAdminSiswa');
Route::get('/to1kim', [ToController::class, 'to1kim'])->middleware('can:isAdminSiswa');
Route::get('/to1bio', [ToController::class, 'to1bio'])->middleware('can:isAdminSiswa');

Route::get('/to1sej', [ToController::class, 'to1sej'])->middleware('can:isAdminSiswa');
Route::get('/to1eko', [ToController::class, 'to1eko'])->middleware('can:isAdminSiswa');
Route::get('/to1geo', [ToController::class, 'to1geo'])->middleware('can:isAdminSiswa');
Route::get('/to1sos', [ToController::class, 'to1sos'])->middleware('can:isAdminSiswa');

Route::get('/submitTo1Ss', [ToController::class, 'submitTo1Ss'])->middleware('can:isAdminSiswa');
Route::get('/submitTo1St', [ToController::class, 'submitTo1St'])->middleware('can:isAdminSiswa');
