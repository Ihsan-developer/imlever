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
  var nilai1 = document.getElementsByName('sej');
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
    
    question: "1. Pelaku sejarah memiliki peran penting dalam penelitian sejarah karena… ",
    answers: {
      A: "pelaku sejarah adalah orang yang terlibat langsung dalam peristiwa sejarah",
      B: "kesaksian pelaku sejarah menjadi satu-satunya sumber primer dalam penelitian sejarah",
      C: "pelaku sejarah selalu ingin menonjolkan perannya dalam sejarah",
      D: "ingatan pelaku sejarah mengenai peristiwa yang dialaminya selalu benar",
      E: "pelaku sejarah merupakan satu-satunya informan dalam penelitian sejarah"
    },
    correctAnswer: "A"
  },
  {
    question: " 2. Tujuan utama Ekspedisi Pamalayu yang dilakukan raja Kertanegara tahun 1275-1286 pada dasarnya adalah untuk memperluas wilayah kekuasaan kerajaan Singhasari terutama sasarannya adalah kerajaan-kerajaan di Sumatera (Melayu).", 
    answers: {
      A: "memperluas wilayah kekuasaan Kerajaan Singhasari",
      B: "mencari sekutu yang dapat membendung serbuan Mongol",
      C: "menaklukkan Kerajaan Sriwijaya",
      D: "menunjukkan kekuasaan Kerajaan Sriwijaya",
      E: "menjaga Selat Malaka"
    },
    correctAnswer: "B"
  },
  {
    question:  "3. Dampak negatif sistem sewa tanah pada masa pemerintahan Gubernur Jenderal H.W. Daendels (1808–1811) adalah…",
    answers: {
      A: "dikuasainya sebagian besar tanah di Indonesia oleh swasta Belanda dan Cina",
      B: "munculnya kesewenang-wenangan tuan tanah swasta terhadap rakyat",
      C: "dikuasainya perekonomian Indonesia oleh swasta Belanda dan Cina",
      D: "ditariknya Daendels kembali ke Belanda dan digantikan oleh Jansen",
      E: "terjadinya perlawanan besar-besaran oleh rakyat Indonesia terhadap Daendels"
    },
    correctAnswer: "B"
  },
  {
    question: "4.Salah satu faktor yang mendorong pemerintah pendudukan Jepang membubarkan Poetera dan mendirikan Jawa Hokokai adalah…",
    answers: {
      A: "para pemimpin bangsa Indonesia memanfaatkan Poetera untuk mendorong munculnya rasa kebangsaan",
      B: "para pemimpin Poetera tidak mau melakukan Seikerei",
      C: "organisasi Poetera dianggap sebagai lambang seluruh aliran pergerakan nasional",
      D: "para pemimipin Poetera menjalin kerja sama dengan kelompok Islam",
      E: "para pemimpin Poetera tidak mampu menjalankan tugasnya"
    },
    correctAnswer: "A"
  },
  {
    question: "5. Pemerintahan Kabinet Ali Sastroamidjojo II didukung oleh tiga partai besar pemenang pemilu 1955, yaitu…",
    answers: {
      A: "NU, Muhammadiyah, dan PKI",
      B: "PNI, Masyumi, dan Muhammadiyah",
      C: "PNI, Masyumi, dan NU",
      D: "PNI, Parkindo, dan Masyumi",
      E: "Masyumi, Gerindo, dan PKI"
    },
    correctAnswer: "C"
  },
  {
    question: "6. Kegagalan pelaksanaan Pola Pembangunan Berencana Tahap I (1961–1969) pada masa Demokrasi Terpimpin disebabkan oleh…",
    answers: {
      A: "terjadinya krisis kepemimpinan",
      B: "terjadinya krisis pangan",
      C: "dilaksanakannya proyek-proyek mercusuar",
      D: "tidak tersedianya sumber daya manusia",
      E: "terjadinya kenaikan harga bahan pokok"
    },
    correctAnswer: "C"
  },
  {
    question: "7.Faktor utama penolakan pertanggungjawaban Presiden B.J. Habibie pada Sidang Umum MPR tahun 1999 adalah masalah…",
    answers: {
      A: "Korupsi",
      B: "Timor Timur",
      C: "Pemilu",
      D: "Dwi Fungsi ABRI",
      E: "Ekonomi"
    },
    correctAnswer: "B"
  },
  {
    question: "8.Salah satu warisan Peradaban Mesopotamia yang sekarang menjadi salah satu busana khas masyarakat di Timur Tengah adalah…",
    answers: {
      A: "abaya",
      B: "kaftan",
      C: "gamis",
      D: "niqab",
      E: "thobe"
    },
    correctAnswer: "B"
  },
  {
    question: "9.Upaya Presiden Truman dalam memulihkan ekonomi dan membendung penyebaran pengaruh komunis di Asia dilakukan dengan program…",
    answers: {
      A: "Grand in Aid",
      B: "Marshal Plan",
      C: "Four Point Program for the Economic Development in Asia",
      D: "Truman Doctrine",
      E: "Colombo Plan"
    },
    correctAnswer: "C"
  },
  {
    question: "10.Nekara terbesar di Asia Tenggara ditemukan di Kepulauan Selayar Sulawesi Selatan. <b>SEBAB</b> Nekara digunakan sebagai mas kawin dalam tradisi upacara pernikahan.",
    answers: {
      A: "Pernyataan benar dan alasan benar serta saling berhubungan",
      B: "Pernyataan benar dan alasan benar tapi tidak berhubungan",
      C: "Pernyataan benar dan alasan salah",
      D: "Pernyataan salah dan alasan benar",
      E: "Keduanya salah"
    },
    correctAnswer: "C"
  },
  {
    question: "11.Agama Islam mudah diterima oleh masyarakat Jawa karena bisa beradaptasi dengan budaya lokal. <b>SEBAB</b>  Para wali menggunakan kesenian lokal sebagai media penyebaran Islam di tanah Jawa.",
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
    question: "12. Ditangkapnya Soekarno pada Desember 1929 oleh pemerintah Belanda berdampak pada pembuburan organisasi Partai Nasional Indonesia (PNI) <b>SEBAB</b>  Soekarno tidak menginginkan Partai Nasional Indonesia (PNI) tetap berdiri saat dia sedang berada dalam tahanan Belanda.",
    answers: {
      A: "Pernyataan benar dan alasan benar serta saling berhubungan",
      B: "Pernyataan benar dan alasan benar tapi tidak berhubungan",
      C: "Pernyataan benar dan alasan salah",
      D: "Pernyataan salah dan alasan benar",
      E: "Keduanya salah"
    },
    correctAnswer: "C"
  },
  {
    question: "13.Pembawa kebudayaan perunggu ke Indonesia adalah suku bangsa ...",
    answers: {
      A: "Papua Melanesoid",
      B: "Melayu Austronesia",
      C: "Melayu Polinesia",
      D: "Proto Melayu",
      E: "Deutro Melayu"
    },
    correctAnswer: "E"
  },
  {
    question: "14. Latar belakang terjadinya gerakan DI/TII yang dipimpin oleh SM. Kartosuwiryo adalah penolakan terhadap hasil Perjanjian Linggarjati. <b>SEBAB</b> Sejak ditandatanganinya Perjanjian Linggarjati tanggal 8 Desember 1947, pasukan TNI harus meninggalkan wilayah Jawa Barat dan hijrah ke Jawa Tengah.",
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
    question: "15.Peristiwa Tanjung Morawa adalah peristiwa sengketa tanah di Sumatera Timur antara petani dengan pemerintah. <b>SEBAB</b> Peristiwa ini mengakibatkan 5 orang petani terbunuh sehingga menjadi sorotan pers maupun parlemen akibat dari peristiwa ini menjadi penyebab jatuhnya  kabinet Sukiman.",
    answers: {
      A: "Pernyataan benar dan alasan benar serta saling berhubungan",
      B: "Pernyataan benar dan alasan benar tapi tidak berhubungan",
      C: "Pernyataan benar dan alasan salah",
      D: "Pernyataan salah dan alasan benar",
      E: "Keduanya salah"
    },
    correctAnswer: "C"
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
if (sessionStorage.getItem("to1sej1")) {
  if (sessionStorage.getItem("to1sej1") < 0) {
    showResults();
    
    //return window.location.assign('end.html');
  } else {
    var value = sessionStorage.getItem("to1sej1");
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
    sessionStorage.setItem("to1sej1", value);
  }
  document.getElementById("demo").innerHTML = 'Sisa Waktu : ' + Math.floor(value / 60) + ' menit';
};

var interval = setInterval(counter, 1000);
