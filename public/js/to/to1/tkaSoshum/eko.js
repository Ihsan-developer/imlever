const nomor1 = document.getElementById("satu");
const nomor2 = document.getElementById("dua");
const nomor3 = document.getElementById("tiga");
const nomor4 = document.getElementById("empat");
const nomor5 = document.getElementById("lima");
const nomor6 = document.getElementById("enam");
const nomor7 = document.getElementById("tujuh");
const nomor8 = document.getElementById("delapan");
const nomor9 = document.getElementById("sembilan");
const nomor10 = document.getElementById("sepuluh");
const nomor11 = document.getElementById("sebelas");
const nomor12 = document.getElementById("duabelas");
const nomor13 = document.getElementById("tigabelas");
const nomor14 = document.getElementById("empatbelas");
const nomor15 = document.getElementById("limabelas");
/*const nomor16 = document.getElementById("enambelas");
const nomor17 = document.getElementById("tujuhbelas");
const nomor18 = document.getElementById("delapanbelas");
const nomor19 = document.getElementById("sembilanbelas");
const nomor20 = document.getElementById("duapuluh");
const nomor21 = document.getElementById("duasatu");
const nomor22 = document.getElementById("duadua");
const nomor23 = document.getElementById("duatiga");
const nomor24 = document.getElementById("duaempat");*/

// Functions
function buildQuiz(){
  // variable to store the HTML output
  const output = [];

  // for each question...
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      // variable to store the list of possible answers
      const answers = [];
    

      // and for each available answer...
      for(letter in currentQuestion.answers){
        
        // ...add an HTML radio button
        answers.push(
          `
         
          <label type="button" id="jawaban">
          
          <input type="radio" name="question${questionNumber}" value="${letter}">
            <p id="jarakOpsi"></p>${letter}.
            ${currentQuestion.answers[letter]}
          </label>
          
          `
      
        );  
       
     
            }
        

      // add this question and its answers to the output
      output.push(
        `
        <div class="row" id="row">
            <div class="slide" id="slide">
              <div class="question id="row"> ${currentQuestion.question} </div>
              <hr>
              <div class="answers" id="row"> ${answers.join("")} </div>
            </div>
        </div>
        
        `
      );
    
    }
  );

  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join('');
  
}

//let score = 0;
//let nilaiAkhir = [];
function showResults(){

  // gather answer containers from our quiz
  const answerContainers = quizContainer.querySelectorAll('.answers');

  // keep track of user's answers
  let numCorrect = 0;
  let score = 0;

  // for each question...
  myQuestions.forEach( (currentQuestion, questionNumber) => {

    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;
    
    // if answer is correct
    if(userAnswer === currentQuestion.correctAnswer){
      // add to the number of correct answers
      numCorrect++;
      score = score + 66;
      // color the answers green
      //answerContainers[questionNumber].style.color = 'lightgreen';
    }
    // if answer is wrong or blank
    else{
      // color the answers red
      //answerContainers[questionNumber].style.color = 'red';
    }
  });

  // show number of correct answers out of total
  //resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  //resultsContainer.innerHTML = `Nilai kamu ${score} `;
  
  //Auto Set Nilai
  var nilai1 = document.getElementsByName('eko');
  nilai1[0].setAttribute('value', score);

  // Autoclick
  document.getElementById("submit").click();

  
  //return window.location.assign('to1pk');
}

 
function showSlide(n) {
  slides[currentSlide].classList.remove('active-slide');
  slides[n].classList.add('active-slide');
  currentSlide = n;
  if(currentSlide === 0){
    previousButton.style.display = 'none';
    
  }
  else{
    previousButton.style.display = 'inline-block';
  }
  if(currentSlide === slides.length-1){
    nextButton.style.display = 'none';
    submitButton.style.display = 'inline-block';
  }
  else{
    nextButton.style.display = 'inline-block';
    submitButton.style.display = 'none';
  }
}
/*
function tandaiSoal(){

  const selector = `input[name=question${questionNumber}]:checked`;
  if(selector){
    nomor1.style.color = "red";
  }
}
*/
function showNextSlide() {
  showSlide(currentSlide + 1);
  
}

function showPreviousSlide() {
  showSlide(currentSlide - 1);
}


function slide1(){
  showSlide(0);
}
function slide2(){
  showSlide(1);
}
function slide3(){
  showSlide(2);
}
function slide4(){
  showSlide(3);
}
function slide5(){
  showSlide(4);
}
function slide6(){
  showSlide(5);
}
function slide7(){
  showSlide(6);
}
function slide8(){
  showSlide(7);
}
function slide9(){
  showSlide(8);
}
function slide10(){
  showSlide(9);
}
function slide11(){
  showSlide(10);
}
function slide12(){
  showSlide(11);
}
function slide13(){
  showSlide(12);
}

function slide14(){
  showSlide(13);
}
function slide15(){
  showSlide(14);
}
/*
function slide16(){
  showSlide(15);
}
function slide17(){
  showSlide(16);
}
function slide18(){
  showSlide(17);
}
function slide19(){
  showSlide(18);
}
function slide20(){
  showSlide(19);
}
function slide21(){
  showSlide(20);
}
function slide22(){
  showSlide(21);
}
function slide23(){
  showSlide(22);
}
function slide24(){
  showSlide(23);
}*/

// Variables
const quizContainer = document.getElementById('quiz');
//const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const myQuestions = [
  {
    
    question: "1. Peran yang dimainkan oleh para pelaku ekonomi antara lain sebagai pengguna faktor produksi, pemilik faktor produksi, penghasil barang dan jasa, pengguna barang dan jasa, dan penyedia faktor produksi. Peran yang dapat dimainkan oleh rumah tangga konsumen adalah… ",
    answers: {
      A: "pengguna faktor produksi, pemilik faktor produksi, dan penghasil barang dan jasa",
      B: "pengguna faktor produksi, penghasil barang dan jasa, serta pengguna barang dan jasa",
      C: "pemilik faktor produksi, penghasil barang dan jasa, serta pengguna barang dan jasa",
      D: "pemilik faktor produksi, pengguna barang dan jasa, serta penyedia faktor produksi",
      E: "penghasil barang dan jasa, pengguna barang dan jasa, serta penyedia faktor produksi"
    },
    correctAnswer: "D"
  },
  {
    question: " 2. Kesetimbangan pasar yang baru ditandai oleh meningkatnya jumlah barang yang ditransaksikan dan tidak berubahnya harga barang.", 
    answers: {
      A: "peningkatan permintaan dan penurunan penawaran dalam proporsi yang sama",
      B: "penurunan permintaan dan peningkatan penawaran dalam proporsi yang sama",
      C: "penurunan permintaan dan penawaran",
      D: "peningkatan permintaan dan penawaran",
      E: "peningkatan permintaan dan penawaran dalam proporsi yang sama"
    },
    correctAnswer: "E"
  },
  {
    question:  "3.  Ketika harga per unit suatu barang Rp100.000,00, jumlah barang yang ditawarkan 50 unit; dan ketika harga per unit turun menjadi Rp50.000,00, jumlah barang yang ditawarkan menjadi 30 unit. Nilai koefisien elastisitas penawaran barang tersebut bersifat… ",
    answers: {
      A: "Elastis",
      B: "Inelastis ",
      C: "Elastis Unitari",
      D: "Elastis Sempurna",
      E: "Inelastis Sempurna"
    },
    correctAnswer: "B"
  },
  {
    question: "4.Jenis biaya yang tidak perlu dikeluarkan oleh perusahaan ketika tidak berproduksi adalah...",
    answers: {
      A: "Biaya Tetap",
      B: "Biaya Total",
      C: "Biaya Marginal",
      D: "Biaya Variabel",
      E: "Biaya Peluang"
    },
    correctAnswer: "D"
  },
  {
    question: "5. Kurva biaya total (TC) menggambarkan hubungan antara lain...",
    answers: {
      A: "jumlah input yang digunakan dan biaya total",
      B: "jumlah output yang diproduksi dan biaya total",
      C: "jumlah output yang diproduksi dan penerimaan total",
      D: "biaya total dan laba",
      E: "biaya total dan penerimaan total"
    },
    correctAnswer: "B"
  },
  {
    question: "6. Kebijakan harga yang seharusnya dilakukan oleh monopolis jika ingin meningkatkan penerimaan total adalah…",
    answers: {
      A: "menaikkan harga barang pada saat harga barang elastis",
      B: "menurunkan harga barang jika permintaan barang memiliki sifat elastis",
      C: "menurunkan harga barang pada saat harga barang inelastis",
      D: "menaikkan harga barang pada saat harga barang unitari-elastis",
      E: "menurunkan harga barang pada saat harga barang unitari-elastis"
    },
    correctAnswer: "B"
  },
  {
    question: "7.Ketika Produk Domestik Bruto (PDB) suatu negara meningkat, di negara tersebut sedang terjadi...",
    answers: {
      A: "kenaikan pendapatan dan kenaikan pengeluaran",
      B: "kenaikan pendapatan dan kenaikan tabungan",
      C: "kenaikan pendapatan, namun pengeluaran dapat naik atau turun",
      D: "kenaikan tabungan, namun pendapatan dapat naik atau turun",
      E: "kenaikan tabungan, namun pengeluaran dapat naik atau turun"
    },
    correctAnswer: "A"
  },
  {
    question: "8.Pemerintah meningkatkan belanja infrastruktur untuk membangun berbagai sarana transfortasi, baik darat, laut maupun udara di Indonesia.Kebijakan seperti ini diprediksi akan...",
    answers: {
      A: "meningkatkan permintaan agregat",
      B: "menurunkan permintaan agregat",
      C: "meningkatkan jumlah uang beredar",
      D: "menurunkan jumlah uang beredar",
      E: "menurunkan tingkat inflasi"
    },
    correctAnswer: "A"
  },
  {
    question: "9.Dalam memilih dan menggunakan produk dan jasa dari suatu lembaga jasa keuangan, konsumen dan masyarakat wajib memperhatikan hal-hal sebagai berikut, kecuali...",
    answers: {
      A: "meneliti profil lembaga jasa keuangan apakah sudah terdaftar di OJK",
      B: "meneliti apakah produk sudah mendapatkan izin",
      C: "membaca dengan seksama setiap informasi dalam kontrak terkait produk terkait ditawarkan oleh OJK",
      D: "memberikan salinan kontrak kepada konsumen wajib",
      E: "memilih berdasarkan pertimbangan keuntungan maksimal yang ditawarkan OJK"
    },
    correctAnswer: "D"
  },
  {
    question: "10.Tingkat pertumbuhan ekonomi suatu negara dapat dihitung dari...",
    answers: {
      A: "perkembangan harga barang dan jasa",
      B: "pertambahan jumlah uang beredar",
      C: "pertambahan jumlah barang dan jasa",
      D: "tersedianya kesempatan kerja",
      E: "banyaknya investasi yang ditanamkan"
    },
    correctAnswer: "C"
  },
  {
    question: "11.Memimpin organisasi atau perusahaan secara keseluruhan dan memimpin para manajer agar dapat membentuk tim kerja yang baik merupakan tugas..",
    answers: {
      A: "manajer lini pertama",
      B: "manajer menengah",
      C: "manajer puncak",
      D: "supervisor",
      E: "auditor"
    },
    correctAnswer: "C"
  },
  {
    question: "12. Di bawah ini adalah jenis badan usaha menurut lapangan usaha, kecuali...",
    answers: {
      A: "badan usaha perseroan terbatas",
      B: "Pbadan usaha jasa",
      C: "badan usaha manufaktur",
      D: "badan usaha perdagangan",
      E: "badan usaha agraris atau pertanian"
    },
    correctAnswer: "A"
  },
  {
    question: "13. Jurnal untuk mencatat pemberian jasa kepada pelanggan secara kredit sebesar Rp8.000,00 adalah...",
    answers: {
      A: "kas di debit Rp8.000,00, utang di kredit Rp8.000,00",
      B: "piutang usaha di debit Rp8.000,00, pendapatan jasa di kredit Rp8.000,00",
      C: "piutang usaha di debit Rp8.000,00, kas di kredit Rp8.000,00",
      D: "kas di debit Rp8.000,00, pendapatan jasa di kredit Rp8.000,00",
      E: "pendapatan jasa di debit Rp8.000,00, piutang usaha di kredit Rp8.000,00"
    },
    correctAnswer: "B"
  },
  {
    question: "14. Dalam jangka pendek, perusahaan monopoli akan selalu memperoleh laba.\n <b>SEBAB</b> Monopoli merupakan satu-satunya perusahaan dalam industri dan laba maksimum tercapai bila perusahaan berproduksi pada tingkat output pada saat penerimaan total (TR) adalah maksimum.",
    answers: {
      A: "Pernyataan benar dan alasan benar serta saling berhubungan",
      B: "Pernyataan benar dan alasan benar tapi tidak berhubungan",
      C: "Pernyataan benar dan alasan salah",
      D: "Pernyataan salah dan alasan benar",
      E: "Keduanya salah"
    },
    correctAnswer: "E"
  },
  {
    question: "15. Apabila nilai ekspor lebih kecil dari nilai impornya, negara tersebut akan mengalami defisit dalam neraca transaksi jasa <b>SEBAB</b> Neraca transaksi jasa akan mempengaruhi neraca pembayaran internasional suatu negara.",
    answers: {
      A: "Pernyataan benar dan alasan benar serta saling berhubungan",
      B: "Pernyataan benar dan alasan benar tapi tidak berhubungan",
      C: "Pernyataan benar dan alasan salah",
      D: "Pernyataan salah dan alasan benar",
      E: "Keduanya salah"
    },
    correctAnswer: "D"
  },
 
 
  
];

// Kick things off
buildQuiz();

// Pagination
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");

let currentSlide = 0;


// Show the first slide
showSlide(currentSlide);
 

 
// Event listeners    
submitButton.addEventListener('click', showResults);
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);
nomor1.addEventListener('click', slide1)
nomor2.addEventListener('click', slide2)
nomor3.addEventListener('click', slide3)
nomor4.addEventListener('click', slide4)
nomor5.addEventListener('click', slide5)
nomor6.addEventListener('click', slide6)
nomor7.addEventListener('click', slide7)
nomor8.addEventListener('click', slide8)
nomor9.addEventListener('click', slide9)
nomor10.addEventListener('click', slide10)
nomor11.addEventListener('click', slide11)
nomor12.addEventListener('click', slide12)
nomor13.addEventListener('click', slide13)
nomor14.addEventListener('click', slide14)
nomor15.addEventListener('click', slide15)
/*nomor16.addEventListener('click', slide16)
nomor17.addEventListener('click', slide17)
nomor18.addEventListener('click', slide18)
nomor19.addEventListener('click', slide19)
nomor20.addEventListener('click', slide20)
nomor21.addEventListener('click', slide21)
nomor22.addEventListener('click', slide22)
nomor23.addEventListener('click', slide23)
nomor24.addEventListener('click', slide24)*/


  



// Hapus angka setelah to1pk buat deklarasi ulang session storage
// Countdown
if (sessionStorage.getItem("to1eko4")) {
  if (sessionStorage.getItem("to1eko4") < 0) {
    showResults();
    
    //return window.location.assign('end.html');
  } else {
    var value = sessionStorage.getItem("to1eko4");
  }
} else {
  var value = 15000;
}
document.getElementById("demo").innerHTML = 'Sisa Waktu : ' + Math.floor(value / 60) + ' menit';

var counter = function () {
  if (value < 0) {
    showResults();
      
  } else {
    value = parseInt(value) - 1;
    sessionStorage.setItem("to1eko4", value);
  }
  document.getElementById("demo").innerHTML = 'Sisa Waktu : ' + Math.floor(value / 60) + ' menit';
};

var interval = setInterval(counter, 1000);
