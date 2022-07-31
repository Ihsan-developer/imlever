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
  var nilai1 = document.getElementsByName('pu');
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
    
    question: "1. Lima peserta ujian, yaitu Q, R, S, T, U mengikuti seleksi masuk PTN. Nilai TPA mereka sebagai berikut. Nilai U lebih tinggi dari R, tetapi U lebih rendah dari S. Nilai R lebih tinggi dari Q dan T lebih rendah dari Q. <br> Dari data tersebut, peserta dengan nilai TPA tertinggi adalah... ",
    answers: {
      A: "Q",
      B: "R",
      C: "S",
      D: "T",
      E: "U"
    },
    correctAnswer: "C"
  },
  {
    question: " 2.Ziko memiliki lima anak perempuan. Mereka adalah Humairoh, Aisyah, Hafsoh, Ruqoyyah, dan Fatimah. Humairoh lebih kaya dari Ruqoyyah, Aisyah lebih miskin dari Roqoyyah dan lebih kaya dari Fatimah, dan Fatimah lebih kaya dari Hafsoh. Di antara anak perempuan Ziko, siapakah yang paling kaya?", 
    answers: {
      A: "Aisyah",
      B: "Fatimah",
      C: "Hafsoh",
      D: "Humairroh",
      E: "Ruqoyyah"
    },
    correctAnswer: "D"
  },
  {
    question:  "3.  Ada lima keranjang buah-buahan dengan berat yang berbeda. Keranjang salak lebih berat daripada jambu. Keranjang manggis lebih ringan daripada jambu. Keranjang pisang lebih berat daripada apel. Keranjang jambu lebih berat daripada pisang. Keranjang apel tidak lebih ringan daripada manggis. Keranjang buah terberat kedua adalah keranjang ….",
    answers: {
      A: "Jambu",
      B: "Salak",
      C: "Pisang",
      D: "Manggis",
      E: "Apel"
    },
    correctAnswer: "A"
  },
  {
    question: "4. Dalam perjalanan menuju sekolah, lima sekawan Slamet, Joni, Anto, Rika, dan Rahma selalu berangkat bersama. Joni selalu menjemput Slamet, setelah ia dijemput oleh Anto. Rika menjadi anak terakhir yang dijemput. Sementara rumah Rahma terletak di antara rumah Joni dan rumah Anto. Berikut ini pernyataan yang BENAR adalah ….>",
    answers: {
      A: "Rumah Rahma terletak paling jauh",
      B: "Rumah Joni terletak paling jauh",
      C: "Rumah Rika terletak paling jauh",
      D: "Rumah Slamet terletak paling dekat",
      E: "Rumah Rika terletak paling dekat"
    },
    correctAnswer: "E"
  },
  {
    question: "5. Rian, Rendy, Andi, Leo dan Wildan adalah seorang atlet basket, saat akan Latihan mereka terlebih dahulu mengukur tinggi badan. Wildan mempunyai tinggi badan 185 cm setelah diukur. Tinggi badan Andi lebih tinggi 4 cm dari Rendi dan lebih tinggi 8 cm dari Rian. Jika tinggi badan Wildan 6 cm lebih tinggi dari Rian dan Leo, Tinggi yang paling pendek adalah …",
    answers: {
      A: "178 cm",
      B: "179 cm",
      C: "180 cm",
      D: "183 cm",
      E: "185 cm"
    },
    correctAnswer: "B"
  },
  {
    question: "6. Semua bentuk gratifikasi tidak terpuji, Sebagian menteri menerima gratifikasi. Simpulan yang tepat dari pernyataan tersebut adalah ….",
    answers: {
      A: "Sebagian menteri terpuji.",
      B: "Semua menteri tidak terpuji.",
      C: "Sebagian menteri tidak terpuji.",
      D: "Semua menteri menolak gratifikasi.",
      E: "Sebagian menteri menerima gratifikasi."
    },
    correctAnswer: "C"
  },
  {
    question: "7. Jika SEPEDA ditulis VHSIHE, maka PENSIL ditulis ....",
    answers: {
      A: "SHQVLO",
      B: "SHQMWP",
      C: "SHQWMP",
      D: "WMPSHQ",
      E: "VLOSHQ"
    },
    correctAnswer: "C"
  },
  {
    question: "8.Jika skor Qisma lebih tinggi empat poin dari skor Lala dan lebih tinggi satu poin dari skor Robi, skor tertinggi diraih oleh ….",
    answers: {
      A: "Sekar",
      B: "Robi",
      C: "Sinta",
      D: "Lala",
      E: "Qisma"
    },
    correctAnswer: "A"
  },
  {
    question: "9. Jika skor Lala satu poin lebih rendah dari skor Qisma dan Sekar, skor terendah yang diperoleh oleh peserta lomba di atas adalah ….",
    answers: {
      A: "71",
      B: "73",
      C: "75",
      D: "76",
      E: "77"
    },
    correctAnswer: "E"
  },
  {
    question: "10. Lani membagikan piring untuk membagi kue ulang tahunnya kepada lima orang temannya, yaitu Dinda , Rani, Siska, Ammar, dan Ariq. Lani memiliki lima warna piring, yaitu merah, biru, ungu, putih, dan hijau. Dinda menyukai warna merah muda dan hijau. Siska menyukai semua warna, kecuali warna yang disukai Dinda. Ammar menyukai warna biru, sedangkan Ariq menyukai warna ungu dan hijau. Lani ingin semua temannya mendapatkan piring dengan warna yang mereka suka. Jika Diana hanya menyukai warna hijau, piring berwarna ungu akan diberikan kepada ….",
    answers: {
      A: "Dinda",
      B: "Siska",
      C: "Diana",
      D: "Ammar",
      E: "Ariq"
    },
    correctAnswer: "E"
  },
  {
    question: "11. Jika kepala stasiun meniup peluit, kereta siap diberangkatkan. Jika ada pengumuman, kereta mengalami penundaan keberangkatan. Saat ini, kereta berada di stasiun atau tidak ada penundaan keberangkatan. Simpulan yang paling tepat adalah ...",
    answers: {
      A: "Masinis kereta kurang memperhatikan bunyi peluit  dan tidak ada pengumuman.",
      B: "Kepala stasiun lupa meniup peluit dan tidak ada pengumuman.",
      C: "Kereta belum bisa diberangkatkan dan tidak ada penundaan keberangkatan.",
      D: "Kepala stasiun tidak meniup peluit tanda kereta siap diberangkatkan atau tidak ada pengumuman.",
      E: "Kepala stasiun tidak memberikan pengumuman bahwa kereta siap diberangkatkan."
    },
    correctAnswer: "D"
  },
  {
    question: "12. Dalam perjalanan menuju sekolah, lima sekawan Slamet, Joni, Anto, Rika, dan Rahma selalu berangkat bersama. Joni selalu menjemput Slamet, setelah ia dijemput oleh Anto. Rika menjadi anak terakhir yang dijemput. Sementara rumah Rahma terletak di antara rumah Joni dan rumah Anto. Berikut ini pernyataan yang BENAR adalah ….",
    answers: {
      A: "rumah Rahma terletak paling jauh",
      B: "rumah Joni terletak paling jauh",
      C: "rumah Rika terletak paling jauh",
      D: "rumah Slamet terletak paling dekat",
      E: "rumah Rika terletak paling dekat"
    },
    correctAnswer: "E"
  },
  {
    question: "13. Terdapat sebanyak lima orang dari pedagang bakso yang menghitung pendapatannya dalam kurun waktu satu hari. Pedagang C didapati lebih banyak menjual dibandingkan dari pedagang B, tetapi masih tidak lebih dari pedagang A. Sementara penjualan pedagang C tersebut sama jumlahnya dengan pedagang D meskipun tidak melebihi dari pendapatan pedagang A. Maka, pedagang mana yang memiliki jumlah pendapatan yang paling sedikit?",
    answers: {
      A: "Pedagang A",
      B: "Pedagang B",
      C: "Pedagang C",
      D: "Pedagang D.",
      E: "Pedagang C dan D"
    },
    correctAnswer: "B"
  },
  {
    question: "14. Lani membagikan piring untuk membagi kue ulang tahunnya kepada lima orang temannya, yaitu Dinda , Rani, Siska, Ammar, dan Ariq. Lani memiliki lima warna piring, yaitu merah, biru, ungu, putih, dan hijau. Dinda menyukai warna merah muda dan hijau. Siska menyukai semua warna, kecuali warna yang disukai Dinda. Ammar menyukai warna biru, sedangkan Ariq menyukai warna ungu dan hijau. Lani ingin semua temannya mendapatkan piring dengan warna yang mereka suka. Jika Rani hanya menyukai warna merah muda, piring yang diberikan kepada Siska berwarna ….",
    answers: {
      A: "putih",
      B: "hijau",
      C: "biru",
      D: "ungu",
      E: "merah muda"
    },
    correctAnswer: "A"
  },
  {
    question: "15. Diketahui bahwa Sela tidak memiliki kemampuan melebihi daripada Lina dan Reni. Fara memiliki kemampuan yang lebih baik dibandingkan Lina. Lina lebih mampu dibandingkan Reni. Lalu, ada Jay yang tidak lebih mampu juga dibandingkan Fara, akan tetapi kemampuannya melebihi Lina. Dari penjelasan tersebut, maka orang yang memiliki kemampuan paling sedikit adalah….",
    answers: {
      A: "Sela",
      B: "Lina",
      C: "Reni",
      D: "Fara",
      E: "Jay"
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
if (sessionStorage.getItem("to1pu2")) {
  if (sessionStorage.getItem("to1pu2") < 0) {
    showResults();
    
    //return window.location.assign('end.html');
  } else {
    var value = sessionStorage.getItem("to1pu2");
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
    sessionStorage.setItem("to1pu2", value);
  }
  document.getElementById("demo").innerHTML = 'Sisa Waktu : ' + Math.floor(value / 60) + ' menit';
};

var interval = setInterval(counter, 1000);
