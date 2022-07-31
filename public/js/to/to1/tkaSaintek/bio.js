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
  var nilai1 = document.getElementsByName('bio');
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
    
    question: "1. Struktur DNA pada organisme \n(1)double helix, \n(2)gula pentosa ribosa, (3)basa pirimidin urasil, (4)sirkuler",
    answers: {
      A: "(1), (2), dan (3)",
      B: "(1) dan (3)",
      C: "(2) dan (4)",
      D: "(4)",
      E: "Semua Benar"
    },
    correctAnswer: "D"
  },
  {
    question: " 2. Difusi oksigen dapat terjadi pada alveolus karena adanya perbedaan tekanan parsial antara udara dan darah di dalam alveolus. <b>SEBAB</b> Hemoglobin akan melepaskan ion Hidrogen agar dapat berikatan dengan oksigen membentuk HBO3 dan selanjutnya akan berdifusi di dalam alveolus.", 
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
    question:  "3. Seorang pasien memeriksakan dirinya ke dokter dengan gejala sakit kepala dan pusing. Setelah diperiksa, ternyata kadar eritrosit di dalam darahnya sebesar 5,9 juta sel/ml. Hal tersebut menyebabkan darah mengental sehingga memperlambat aliran darah. Dokter mengatakan, jika hal tersebut tidak segera ditangani maka akan menyebabkan penggumpalan darah sehingga terjadi kematian jaringan. Berdasarkan deskripsi tersebut, penyakit yang diderita pasien adalah ....",
    answers: {
      A: "thalasemia",
      B: "hemofilia",
      C: "arteriosklerosis",
      D: "polisitemia",
      E: "aterosklerosis"
    },
    correctAnswer: "D"
  },
  {
    question: "4.Seorang siswa mengamati tumbuhan yang diduga mengalami penyakit. Daun bagian bawah tumbuhan tersebut menguning, kemudian selanjutnya akan mengering dan rontok. Tulang-tulang di bawah permukaan daun muda tampak pucat. Selain itu, pertumbuhan tanaman lambat, kerdil dan lemah serta produksi bunga dan biji rendah. Berdasarkan ciri-ciri tersebut, penyakit pada tumbuhan yang diamati disebabkan oleh ....",
    answers: {
      A: "kekurangan unsur N",
      B: "kelebihan unsur N",
      C: "kekurangan unsur P",
      D: "kelebihan unsur P",
      E: "kelebihan unsur S"
    },
    correctAnswer: "A"
  },
  {
    question: "5. Beberapa tumbuhan memiliki bunga sebagai alat reproduksi. Bagian bunga yang berkembang menjadi buah semu pada buah ciplukan adalah ....",
    answers: {
      A: "pendunculus",
      B: "receptacle",
      C: "brachteola",
      D: "petal",
      E: "sepal"
    },
    correctAnswer: "E"
  },
  {
    question: "6. Anoa merupakan salah satu hewan endemik Indonesia. Karakteristik yang tepat sehingga Anoa digolongkan sebagai spesies endemik Indonesia adalah....",
    answers: {
      A: "dapat ditemukan di wilayah dataran eropa.",
      B: "memiliki tanduk yang khas.",
      C: "hanya dapat ditemukan di sulawesi.",
      D: "dapat bertahan hidup pada semua iklim.",
      E: "ditemukan dalam jumlah yang banyak di beberapa wilayah."
    },
    correctAnswer: "C"
  },
  {
    question: "7.Kingdom Plantae terdiri dari kelompok tumbuhan Tracheophyta dan Atracheophyta. Tumbuhan Tracheophyta berikut ini yang tidak memiliki bunga sejati adalah....",
    answers: {
      A: "Mangifera indica",
      B: "Pinus merkusi",
      C: "Carica papaya",
      D: "Jasminium sambac",
      E: "Artocarpus heterophyllus"
    },
    correctAnswer: "B"
  },
  {
    question: "8.Spora yang dihasilkan jamur mempunyai sifat alami, yaitu membentuk filamen multiselular yang disebut hifa. <b>SEBAB</b> Hifa yang terbentuk tersusun atas serat halus dan memiliki dinding sel yang terbuat dari kitin polisakarida.",
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
    question: "9.Clostridium tetani merupakan bakteri anaerob yang menyebabkan penyakit tetanus. <b>SEBAB</b> Clostridium tetani  merupakan bakteri Gram positif.",
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
    question: "10.Penyakit African trypanosomiasis yang ditularkan melalui lalat tsetse disebabkan karena infeksi parasit dari kelas....",
    answers: {
      A: "Sarcodina",
      B: "Flagellata",
      C: "Ciliata",
      D: "Rhizopooda",
      E: "Sporozoa"
    },
    correctAnswer: "B"
  },
  {
    question: "11.Spesies jamur yang membentuk struktur trikogin dalam siklus reproduksinya....",
    answers: {
      A: "Rhizopus stolonifer",
      B: "Volvariela volvaceae",
      C: "Chalmydomucor oryzae",
      D: "Tricodherma reesei",
      E: "Tinea versicolor"
    },
    correctAnswer: "D"
  },
  {
    question: "12. Jamur air atau Oomycota dikelompokkan dalam kingdom Protista karena anggota jamur ini dapat menghasilkan spora berflagel yang disebut....",
    answers: {
      A: "konidia",
      B: "basidiospora",
      C: "zoospora",
      D: "zigospora",
      E: "sporangiospora"
    },
    correctAnswer: "C"
  },
  {
    question: "13.Pertumbuhan tanaman selalu terkait dengan proses pendewasaan tanaman yang bersifat <b>SEBAB</b> irreversible",
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
    question: "14. Bayi kembar identik dan bayi kembar siam memiliki kesamaan dalam proses fertilisasinya tetapi memiliki....",
    answers: {
      A: "kesamaan dalam proses organogenesis dan diferensiasi sel.",
      B: "perbedaan pembelahan sel saat embriogenesis pada tahap morula.",
      C: "kesamaan pembelahan sel saat embriogenesis pada tahap blastula.",
      D: "perbedaan pembelahan sel saat embriogenesis pada tahap organogenesis.",
      E: "perbedaan pada pemisahan sel-sel saat proses diferensiasi."
    },
    correctAnswer: "B"
  },
  {
    question: "15. Hematuria merupakan gangguan yang terjadi pada sistem ekskresi karena ....",
    answers: {
      A: "banyaknya kadar hormon ADH di glomerulus sehingga proses filtrasi air semakin cepat.",
      B: "kurangnya kadar hormon ADH di tubulus kontortus proksimal sehingga proses reabsorpsi air semakin lambat.",
      C: "kurangnya kadar air yang ada di darah pada saat proses filtrasi di glomerulus sehingga pada urin masih ditemukan sela darah merah.",
      D: "banyaknya kadar air yang ada di darah pada saat proses filtrasi di glomerulus sehingga terbentuk urin dalam jumlah yang banyak.",
      E: "banyaknya asam amino yang ada di darah pada saat proses augmentasi di glomerulus sehingga pada urin masih ditemukan asam amino."
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
if (sessionStorage.getItem("to1bio1")) {
  if (sessionStorage.getItem("to1bio1") < 0) {
    showResults();
    
    //return window.location.assign('end.html');
  } else {
    var value = sessionStorage.getItem("to1bio1");
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
    sessionStorage.setItem("to1bio1", value);
  }
  document.getElementById("demo").innerHTML = 'Sisa Waktu : ' + Math.floor(value / 60) + ' menit';
};

var interval = setInterval(counter, 1000);
