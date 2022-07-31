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
  var nilai1 = document.getElementsByName('ppu');
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
    
    question: "1. BI menyatakan sejalan dengan  penurunan tersebut, kapasitas produksi terpakai dan penggunaan tenaga kerja pada triwulan I-2020 tercatat lebih rendah dibandingkan triwulan sebelumnya. Meskipun demikian, kondisi keuangan dunia usaha dari aspek likuiditas dan rentabilitas masih cukup baik dengan akses terhadap kredit perbankan yang relatif normal. Maksud kata kapasitas dalam teks tersebut adalah.... ",
    answers: {
      A: "muatan",
      B: "keahlian",
      C: "keterampilan",
      D: "jumlah",
      E: "kemampuan"
    },
    correctAnswer: "E"
  },
  {
    question: " 2. (1)Rata-rata waktu bermain yang digunakan  siswa semakin berkurang, (2)Terjadi peningkatan jumlah tempat wisata  di daerah pantai. Manakah di bawah ini yang menggambarkan  hubungan pernyataan (1) dan(2)? ", 
    answers: {
      A: "Pernyataan (1) adalah penyebab dan  pernyataan (2) adalah akibat ",
      B: "Pernyataan (2) adalah penyebab dan  pernyataan (1) adalah akibat",
      C: "Pernyataan (1) dan (2) adalah penyebab,  namun tidak saling berhubungan",
      D: "Pernyataan (1) dan (2) adalah akibat dari  dua penyebab yang tidak saling  berhubungan ",
      E: "Pernyataan (1) dan (2) adalah akibat dari  suatu penyebab yang sama "
    },
    correctAnswer: "D"
  },
  {
    question:  "3.  .... berhubungan dengan MINUMAN, sebagaimana .... berhubungan dengan BINATANG",
    answers: {
      A: "Sehat - Hewan",
      B: "Jus - Angsa",
      C: "Lunak - Jinak",
      D: "Blender - kandang",
      E: "Segar - katak"
    },
    correctAnswer: "B"
  },
  {
    question: "4. Beberapa perguruan tinggi (PTN) di Indoensia menyelenggarakan program pertukaran dosen dan mahasiswa. Program ini bermanfaat untuk menambah pengetahuan dan pengalaman dosen dan mahasiswa tentang budaya dan pembelajaran di PTN lain. Meski sudah dirintis sejak tujuh tahun silam, program tersebut baru dimulai tahun ini karena memerlukan penyesuaian pada tiap-tiap PTN. ",
    answers: {
      A: "Intensitas kerja sama antar-PTN",
      B: "Penyelenggaraan program pertukaran mahasiswa dan dosen antar-PTN",
      C: "Kebermanfaatan program pertukaran dosen dan mahasiswa antar-PTN",
      D: "Penambahan wawasan dan pengalaman mahasiswa PTN",
      E: "Keberhasilan PTN dalam bekerja sama"
    },
    correctAnswer: "B"
  },
  {
    question: "5. Dalam pergaulan sosial, setiap persoalan harus dikonfirmasi terlebih dahulu agar tidak terjadi fintah dan pengambilan tindakan yang sewenang-wenang. Makna istilah dikonfirmasi dalam kalimat di atas adalah ...",
    answers: {
      A: "Diperjelas persoalannya",
      B: "Dilihat kebenarannya",
      C: "Dipastikan benar salahnya",
      D: "Dikaji sumber masalahnya",
      E: "Dipahami kondisinya"
    },
    correctAnswer: "C"
  },
  {
    question: "6.Kata yang mengalami makna meluas terdapat pada kalimat berikut, kecuali ….",
    answers: {
      A: "Para tokoh mengajak masyarakat untuk menggunakan hak pilihnya dengan cerdas dan tanpa tekanan agar kursi di DPR terwakili secara benar.",
      B: "Keutuhan fungsi UN terkait dengan pemetaan indeks kompetensi, kelulusan seleksi, dan perbaikan terhadap infrastruktur sekolah.",
      C: "Para sarjana lingkungan berkumpul di Kanada untuk mengikuti konferensi internasional tentang perubahan iklim.",
      D: "Kapal-kapal Australia berlayar sejak beberapa hari yang lalu mencari kotak hitam pesawat MH370.",
      E: "“Maaf, apakah Bapak tahu gedung induk tempat seminar berlangsung?”"
    },
    correctAnswer: "C"
  },
  {
    question: "7. Kata yang mengalami makna menyempit terdapat pada kalimat, kecuali ….",
    answers: {
      A: "Bangunan sekolah tersebut sudah lama tidak direnovasi.",
      B: "Para pendeta baru saja mengunjungi lokasi bencana.",
      C: "Kami belajar membaca dan menulis kaligrafi di madrasah.",
      D: "Entah dari mana sumber bau busuk yang tercium oleh mereka.",
      E: "Walaupun sebagai seorang pembantu, dia tidak pernah merasa malu."
    },
    correctAnswer: "A"
  },
  {
    question: "8. Sebanyak tiga rumah warga terendam dan satu jembatan tidak bisa dilalui ... ada bagian jembatan yang hanyut akibat terjangan air. Konjungsi yang tepat untuk mengisi bagian rumpang pada kalimat di atas adalah ….",
    answers: {
      A: "apabila ",
      B: "tetapi ",
      C: "hingga ",
      D: "sehingga ",
      E: "karena"
    },
    correctAnswer: "E"
  },
  {
    question: "9. Prioritas ini […] diciptakan melalui tiga layanan pendampingan advokasi dan sosialisasi penguatan karakter. Kata yang tepat untuk melengkapi […] pada kalimat tersebut adalah ….",
    answers: {
      A: "76",
      B: "104",
      C: "112",
      D: "224",
      E: "316"
    },
    correctAnswer: "B"
  },
  {
    question: "10.<img src='https://im4ge.netlify.app/tka/st/kimia1/kim10.png?token=ARCS2DWAP3G3RECBBSWARKTBJ37DG' height='70%' width='75%'>",
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
    question: "11.<img src='https://im4ge.netlify.app/tka/st/kimia1/kim11.png?token=ARCS2DWMR36LOA2IQ6DLQK3BJ37J4' height='20%' width='30%'>",
    answers: {
      A: "(1), (2), dan (3)",
      B: "(1) dan (3)",
      C: "(2) dan (4)",
      D: "(4)",
      E: "Semua Benar"
    },
    correctAnswer: "A"
  },
  {
    question: "12. <img src='https://im4ge.netlify.app/tka/st/kimia1/kim12.png?token=ARCS2DWGFEVO2DRCXW2TQ5TBJ37KW' height='85%' width='90%'>",
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
    question: "13. <img src='https://im4ge.netlify.app/tka/st/kimia1/kim13.png?token=ARCS2DQCWHFAXFMFOXUR5PLBJ4DSE' height='80%' width='90%'>",
    answers: {
      A: "6 Liter",
      B: "12 Liter",
      C: "18 Liter",
      D: "24 Liter",
      E: "36 Liter"
    },
    correctAnswer: "D"
  },
  {
    question: "14. <img src='https://im4ge.netlify.app/tka/st/kimia1/kim14.png?token=ARCS2DXWUGTYXE6HK5V7SNTBJ4DTI' height='110%' width='100%'>",
    answers: {
      A: "v menjadi 2v",
      B: "v menjadi 3v",
      C: "2v menjadi 3v",
      D: "3v menjadi 4v",
      E: "4v menjadi 5v"
    },
    correctAnswer: "A"
  },
  {
    question: "15. <img src='https://im4ge.netlify.app/tka/st/kimia1/km15.png?token=ARCS2DQTZ5PMZD65WVIRI2DBJ4DUS' height='110%' width='100%'>",
    answers: {
      A: "5%",
      B: "40%",
      C: "45%",
      D: "80%",
      E: "90%"
    },
    correctAnswer: "E"
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
if (sessionStorage.getItem("to1kim2")) {
  if (sessionStorage.getItem("to1kim2") < 0) {
    showResults();
    
    //return window.location.assign('end.html');
  } else {
    var value = sessionStorage.getItem("to1kim2");
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
    sessionStorage.setItem("to1kim2", value);
  }
  document.getElementById("demo").innerHTML = 'Sisa Waktu : ' + Math.floor(value / 60) + ' menit';
};

var interval = setInterval(counter, 1000);
