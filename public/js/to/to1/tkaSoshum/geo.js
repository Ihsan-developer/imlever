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
  var nilai1 = document.getElementsByName('geo');
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
    
    question: "1. Penyebab terjadinya danau air asin seperti Danau Satonda di Bima, Nusa Tenggara Barat, adalah...",
    answers: {
      A: "intrusi air laut yang terjadi di danau",
      B: "partikel yang terkandung dalam air danau",
      C: "air laut yang terperangkap di dalam batuan",
      D: "danau yang lebih rendah dari permukaan air laut",
      E: "evaporasi yang besar pada air danau"
    },
    correctAnswer: "C"
  },
  {
    question: " 2. Peningkatan gas rumah kaca (GRK) di lapisan atmosfer bumi berpengaruh terhadap peningkatan suhu udara permukaan bumi karena...", 
    answers: {
      A: "menghambat radiasi bumi",
      B: "meningkatkan radiasi matahari",
      C: "menghambat radiasi matahari",
      D: "meningkatkan radiasi bumi",
      E: "memantulkan radiasi matahari"
    },
    correctAnswer: "A"
  },
  {
    question:  "3.  Karakteristik fisik tanah yang dapat terjaga dengan adanya rotasi tanaman pada budidaya pertanian berkelanjutan adalah...",
    answers: {
      A: "tekstur tanah",
      B: "strukur tanah",
      C: "kelembaban tanah",
      D: "3permeabilitas tanah",
      E: "berat jenis tanah"
    },
    correctAnswer: "B"
  },
  {
    question: "4.Kekayaan ikan laut di Indonesia banyak hilang dicuri oleh nelayan asing karena...",
    answers: {
      A: "wilayah laut sangat terbuka",
      B: "sebagian besar laut dangkal",
      C: "wilayah laut sangat luas",
      D: "garis batas wilayah tidak jelas",
      E: "wilayah laut yang banyak pulau"
    },
    correctAnswer: "D"
  },
  {
    question: "5. Penduduk yang bertempat tinggal di wilayah perdesaan sekitar kota umumnya berprofesi sebagai pekerja komuter karena...",
    answers: {
      A: "terjangkaunya jarak tempuh",
      B: "kemajuan pembangunan kota",
      C: "kemiskinan penduduk desa",
      D: "perbedaan tingkat pendidikan",
      E: "murahnya biaya hidup di desa"
    },
    correctAnswer: "A"
  },
  {
    question: "6. Identifikasi perbedaan bangunan sekolah dan hotel dapat dilakukan melalui interpretasi foto udara dengan menggunakan unsur...",
    answers: {
      A: "bentuk dan pola",
      B: "asosiasi dan rona",
      C: "ukuran dan bayangan",
      D: "bayangan dan bentuk",
      E: "ukuran dan rona"
    },
    correctAnswer: "A"
  },
  {
    question: "7.Salah satu usaha yang perlu ditingkatkan oleh Pemerintah Indonesia agar dapat memenuhi kriteria sebagai negara maju adalah …. ",
    answers: {
      A: "pemanfaatan sumber daya alam",
      B: "perluasan industri pertanian",
      C: "perluasan lapangan kerja",
      D: "intensifikasi sektor perdagangan ",
      E: "pengembangan sektor jasa"
    },
    correctAnswer: "C"
  },
  {
    question: "8.Sumber energi biomasa biasanya dimanfaatkan untuk pemenuhan kebutuhan energi bagi masyarakat pedesaan karena ….",
    answers: {
      A: "teknologi belum berkembang ",
      B: "harga minyak tidak stabil",
      C: "potensi energi relatif terbatas",
      D: "ketersediaan bahan melimpah ",
      E: "biaya operasional rendah"
    },
    correctAnswer: "D"
  },
  {
    question: "9.Proses pembentukan Bukit Barisan di Sumatera lebih disebabkan oleh ….",
    answers: {
      A: "pembentukan struktur graben tengah",
      B: "tumbukan antara dua lempeng tektonik",
      C: "tumbuhnya gunung api di sepanjang sesar",
      D: "dua lempeng tektonik yang saling menjauh",
      E: "penunjaman lempeng Samudera Hindia"
    },
    correctAnswer: "E"
  },
  {
    question: "10.Ketidakmerataan persebaran penduduk antarwilayah di Indonesia dapat dilakukan dengan menerapkan konsep lokasi relatif. <b>SEBAB</b> Hasil kajian kependudukan tidak dapat menunjukkan secara pasti jumlah dan konsentrasi penduduk di Indonesia.",
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
    question: "11.Setiap jenis hewan dan tumbuhan tersebar tidak merata di berbagai tempat di permukaan bumi. <b>SEBAB</b> Setiap jenis hewan dan tumbuhan mempunyai habitat yang sesuai dengan persyaratan hidupnya.",
    answers: {
      A: "Pernyataan benar dan alasan benar serta saling berhubungan",
      B: "Pernyataan benar dan alasan benar tapi tidak berhubungan",
      C: "Pernyataan benar dan alasan salah",
      D: "Pernyataan salah dan alasan benar",
      E: "Keduanya salah"
    },
    correctAnswer: "A"
  },
  {
    question: "12. Pesisir timur Sumatera lebih berisiko terlanda bencana tsunami dibanding pesisir barat Sumatera. <b>SEBAB</b> Daratan pesisir timur Sumatera sebagian besar berupa dataran rendah dan rawa-rawa.",
    answers: {
      A: "Pernyataan benar dan alasan benar serta saling berhubungan",
      B: "Pernyataan benar dan alasan benar tapi tidak berhubungan",
      C: "Pernyataan benar dan alasan salah",
      D: "Pernyataan salah dan alasan benar",
      E: "Keduanya salah"
    },
    correctAnswer: "D"
  },
  {
    question: "13. Di bawah ini yang termasuk contoh peta tematik adalah ...",
    answers: {
      A: "Peta Jakarta",
      B: "Peta Indonesia",
      C: "Peta Asia Tenggara",
      D: "Peta iklim dunia",
      E: "Peta geografis"
    },
    correctAnswer: "D"
  },
  {
    question: "14. Rotasi tanaman dapat mencegah penyerapan unsur hara tertentu secara terus menerus oleh satu jenis tanaman sehingga tanah menjadi tidak subur. <b>SEBAB</b> Vegetasi berfungsi mencegah erosi dan pertumbuhan gulma serta mempertahankan kandungan kimia tanah.",
    answers: {
      A: "Pernyataan benar dan alasan benar serta saling berhubungan",
      B: "Pernyataan benar dan alasan benar tapi tidak berhubungan",
      C: "Pernyataan benar dan alasan salah",
      D: "Pernyataan salah dan alasan benar",
      E: "Keduanya salah"
    },
    correctAnswer: "B"
  },
  {
    question: "15. Rotasi bumi menyebabkan arah angin muson di belahan bumi utara berbelok ke kanan dan di belahan bumi selatan berbelok ke kiri. <b>SEBAB</b> Rotasi bumi di ekuator lebih cepat daripada di bagian bumi yang lain.",
    answers: {
      A: "Pernyataan benar dan alasan benar serta saling berhubungan",
      B: "Pernyataan benar dan alasan benar tapi tidak berhubungan",
      C: "Pernyataan benar dan alasan salah",
      D: "Pernyataan salah dan alasan benar",
      E: "Keduanya salah"
    },
    correctAnswer: "B"
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
if (sessionStorage.getItem("to1geo2")) {
  if (sessionStorage.getItem("to1geo2") < 0) {
    showResults();
    
    //return window.location.assign('end.html');
  } else {
    var value = sessionStorage.getItem("to1geo2");
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
    sessionStorage.setItem("to1geo2", value);
  }
  document.getElementById("demo").innerHTML = 'Sisa Waktu : ' + Math.floor(value / 60) + ' menit';
};

var interval = setInterval(counter, 1000);
