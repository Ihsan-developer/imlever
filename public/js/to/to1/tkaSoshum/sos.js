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
  var nilai1 = document.getElementsByName('sos');
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
    
    question: "1. Pengangguran di Indonesia tidak hanya disebabkan oleh faktor ekonomi, tetapi juga oleh faktor lain, seperti pendidikan dan kebijakan pemerintah. Hal ini menunjukkan bahwa gejala sosial bersifat… ",
    answers: {
      A: "tidak dapat diukur",
      B: "kompleks",
      C: "satu dimensi",
      D: "sulit diprediksi",
      E: "transdisiplin"
    },
    correctAnswer: "B"
  },
  {
    question: " 2. Bagi Karl Marx, keberadaan masyarakat identik dengan sejarah perjuangan kelas sosial. Struktur masyarakat yang terbentuk dilandaskan pada…", 
    answers: {
      A: "jenjang ekonomi",
      B: "kepemilikan alat produksi",
      C: "prestise",
      D: "kekuasaan",
      E: "keturunan"
    },
    correctAnswer: "B"
  },
  {
    question:  "3. Kebudayaan adalah keseluruhan sistem gagasan, tindakan, dan hasil karya manusia dalam rangka untuk memenuhi kehidupan masyarakat. Pernyataan tersebut merupakan definisi kebudayaan menurut…",
    answers: {
      A: "Koentjaraningrat",
      B: "Selo Soemardjan",
      C: "Soerjono Soekanto",
      D: "Parsudi Suparlan",
      E: "Soelaeman Soemardi"
    },
    correctAnswer: "A"
  },
  {
    question: "4.Dalam masyarakat majemuk, etnosentrisme kelompok yang sangat kuat kepada etniknya memberikan dampak timbulnya…",
    answers: {
      A: "adaptasi",
      B: "keekslusifan",
      C: "pluralitas",
      D: "integrasi",
      E: "asimilasi"
    },
    correctAnswer: "B"
  },
  {
    question: "5. Sistem stratifikasi yang memungkinkan anggotanya untuk mengubah status yang dimilikinya disebut stratifikasi…",
    answers: {
      A: "achieved",
      B: "ascribed",
      C: "tertutup",
      D: "terbuka",
      E: "campuran"
    },
    correctAnswer: "D"
  },
  {
    question: "6. Seorang pejabat diberhentikan dari jabatannya dan dijadikan staf biasa karena terbukti menyelewengkan sejumlah dana pembangunan daerah. Pejabat tersebut mengalami mobilitas ….",
    answers: {
      A: "vertikal naik",
      B: "horizontal",
      C: "vertikal turun",
      D: "geografis",
      E: "social climbing"
    },
    correctAnswer: "C"
  },
  {
    question: "7.Dampak positif program transmigrasi adalah membaurnya pendatang dan penduduk asli yang dapat memperkuat…",
    answers: {
      A: "interaksi sosial",
      B: "koalisi",
      C: "amalgamasi",
      D: "asimilasi ",
      E: "integrasi sosial"
    },
    correctAnswer: "E"
  },
  {
    question: "8.Proses pemilihan kepala daerah menimbulkan konflik antara dua pendukung yang bersaing, diawali dengan upaya-upaya mempromosikan calon dari kelompoknya dengan berbagai informasi yang positif, kemudian memberikan penilaian negatif terhadap pesaing. Fenomena itu disebut konflik ….",
    answers: {
      A: "tertutup",
      B: "terbuka",
      C: "vertikal",
      D: "horizontal",
      E: "realistis"
    },
    correctAnswer: "E"
  },
  {
    question: "9.Berikut ini adalah dampak pada kondisi sosial dari perseteruan masyarakat dalam kasus reklamasi pantai…",
    answers: {
      A: "memperluas lahan permukiman",
      B: "meningkatkan kegiatan pariwisata di pantai",
      C: "membuka peluang usaha baru",
      D: "menimbulkan perbedaan pendapat dalam masyarakat",
      E: "menguntungkan bisnis properti"
    },
    correctAnswer: "D"
  },
  {
    question: "10.Proses sosialisasi yang dialami anak balita lebih banyak dipengaruhi oleh kelompok bermain daripada orang tuanya. <b>SEBAB</b>  Setiap agen sosialisasi memberikan pembelajaran nilai dan norma yang sering kali bertentangan.",
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
    question: "11.Dalam bersikap dan berperilaku, seseorang mengikuti aturan dan nilai-nilai yang berlaku dalam kelompok lain. <b>SEBAB</b> Konformitas seseorang pada aturan dan nilai kelompoknya memungkinkan ia dapat berperilaku dan bersikap sesuai dengan kelompoknya.",
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
    question: "12. Dalam melaksanakan interaksi sosial antar dua orang atau lebih maka akan ditandai dengan terjadinya ...",
    answers: {
      A: "aksi dan reaksi",
      B: "status dan peran",
      C: "assosiatif dan dissosiatif",
      D: "akulturasi dan assimilasi",
      E: "stratifikasi dan diferensiasi"
    },
    correctAnswer: "A"
  },
  {
    question: "13. Salah satu fungsi norma agama bagi kehidupan masyarakat adalah sebagai pedoman untuk ...",
    answers: {
      A: "memberikan batas-batas pada perilaku individu",
      B: "mengidentifikasi individu dengan kelompoknya",
      C: "mencapai kebahagiaan lahir dan batin",
      D: "menjaga solidaritas antar umat beragama",
      E: "menjaga masyarakat dari bahaya kriminalitas"
    },
    correctAnswer: "D"
  },
  {
    question: "14.Pengaruh kolonialisme Belanda terhadap pelapisan sosial masyaraat Indonesia yang masih dirasakan dampaknya dalam organisasi dewasa ini adalah ...",
    answers: {
      A: "adanya sifat kekuasaan yang berdasarkan primordialisme",
      B: "adanya sistem birokrasi yang bersifat kaku",
      C: "terbentuknya sistem kasta dalam masyarakat",
      D: "kaum elit menguasai perekonomian negara",
      E: "jabatan pemerintah didominasi oleh militer"
    },
    correctAnswer: "B"
  },
  {
    question: "15. Pembahasan tentang mobilitas sosial pada dasarnya adalah pembicaraan tentang struktur sosial. <b>SEBAB</b> Mobilitas sosial terdiri atas mobilitas vertikal dan horizontal.",
    answers: {
      A: "Pernyataan benar dan alasan benar serta saling berhubungan",
      B: "Pernyataan benar dan alasan benar tapi tidak berhubungan",
      C: "Pernyataan benar dan alasan salah",
      D: "Pernyataan salah dan alasan benar",
      E: "Keduanya salah"
    },
    correctAnswer: "A"
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
if (sessionStorage.getItem("to1sos1")) {
  if (sessionStorage.getItem("to1sos1") < 0) {
    showResults();
    
    //return window.location.assign('end.html');
  } else {
    var value = sessionStorage.getItem("to1sos1");
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
    sessionStorage.setItem("to1sos1", value);
  }
  document.getElementById("demo").innerHTML = 'Sisa Waktu : ' + Math.floor(value / 60) + ' menit';
};

var interval = setInterval(counter, 1000);
