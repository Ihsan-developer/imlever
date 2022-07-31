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
  var nilai1 = document.getElementsByName('pk');
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
    
    question: "1. Harga dua pensil Rp5.000,00 dan harga satu buku b rupiah. Amir membeli 5 buku dan 10 pensil. Jika ia membayar Rp100.000,00, maka jumlah uang kembalian yang diterimanya adalah...rupiah",
    answers: {
      A: "25000−5b",
      B: "50000+b",
      C: "75000−5b",
      D: "35000−5b",
      E: "75000+5b"
    },
    correctAnswer: "C"
  },
  {
    question: " 2. Operasi ⊙ pada himpunan bilangan bulat didefenisikan dengan aturan a⊙b=a(b−1)−a. Nilai 3⊙(2⊙4) adalah...", 
    answers: {
      A: "−6",
      B: "0",
      C: "5",
      D: "6",
      E: "11"
    },
    correctAnswer: "D"
  },
  {
    question:  "3. Operasi ⊙ pada himpunan bilangan bulat didefenisikan dengan aturan a⊙b=(a+b)b+2. Nilai −2⊙((−1)⊙2) adalah...",
    answers: {
      A: "7",
      B: "12",
      C: "10",
      D: "16",
      E: "25"
    },
    correctAnswer: "C"
  },
  {
    question: "4.Operasi ⊙ pada himpunan bilangan bulat didefenisikan dengan aturan x⊙y=xy−y. Nilai 2⊙(2⊙3) adalah...",
    answers: {
      A: "22",
      B: "23",
      C: "25",
      D: "27",
      E: "29"
    },
    correctAnswer: "D"
  },
  {
    question: "5. Operasi ⊙ pada himpunan bilangan bulat didefenisikan dengan aturan a⊙b=b(a+1)−a. Nilai 2⊙(1⊙3) adalah...",
    answers: {
      A: "5",
      B: "6",
      C: "7",
      D: "10",
      E: "13"
    },
    correctAnswer: "E"
  },
  {
    question: "6. Jika xy=50 dan logx−logy=1, maka nilai x−y=...",
    answers: {
      A: "1",
      B: "2",
      C: "3",
      D: "4",
      E: "5"
    },
    correctAnswer: "E"
  },
  {
    question: "7.Diketahui grafik fungsi kuadrat f memotong garis y=4 dititik (1,4) dan (5,4). Jika grafik fungsi f menyinggung sumbu-x, maka grafik fungsi f memotong garis x=2 di...",
    answers: {
      A: "(2,-2)",
      B: "(2,-1)",
      C: "(2,0)",
      D: "(2,1)",
      E: "(2,2)"
    },
    correctAnswer: "D"
  },
  {
    question: "8.Jika f(x−1)=5x2+6x−6, g(x)=ax+1 dan (g∘f)(1)=−51 maka nilai f(a+1)=",
    answers: {
      A: "-2",
      B: "-6",
      C: "-7",
      D: "-11",
      E: "-13"
    },
    correctAnswer: "B"
  },
  {
    question: "9.Diketahui grafik fungsi kuadrat f mempunyai sumbu simteri x=4. Jika grafik fungsi f melalui titik (2,0) dan (0,3), maka ordinat titik puncak grafik fungsi f adalah...",
    answers: {
      A: "2",
      B: "1",
      C: "0",
      D: "-1",
      E: "-2"
    },
    correctAnswer: "D"
  },
  {
    question: "10.Jika f(x)=3x+a dan (f∘f)(x)=9x+a+3 maka nilai f(a)=...",
    answers: {
      A: "6",
      B: "5",
      C: "4",
      D: "3",
      E: "2"
    },
    correctAnswer: "C"
  },
  {
    question: "11.Jika f(x)=ax+3 dan (f∘f)(x)=4x−3 maka nilai f(a)=...",
    answers: {
      A: "1",
      B: "3",
      C: "5",
      D: "7",
      E: "9"
    },
    correctAnswer: "D"
  },
  {
    question: "12. Diketahui (f∘f) invers (11)=2p dan f(2x−4)=3x−7 maka nilai p=⋯",
    answers: {
      A: "1",
      B: "2",
      C: "3",
      D: "4",
      E: "5"
    },
    correctAnswer: "C"
  },
  {
    question: "13. Jika x dan y bilangan bulat positif yang memenuhi 4x−5y=a dan 8x+5y=34 serta x+a adalah bilangan prima antara 2 dan 6, maka x−y=...",
    answers: {
      A: "1",
      B: "2",
      C: "3",
      D: "4",
      E: "5"
    },
    correctAnswer: "A"
  },
  {
    question: "14. Jika x dan y bilangan bulat positif yang memenuhi x+y=6 dan x−2y=1−b serta x+b adalah bilangan antara 1 dan 4, maka x−b=...",
    answers: {
      A: "1",
      B: "3",
      C: "5",
      D: "7",
      E: "9"
    },
    correctAnswer: "D"
  },
  {
    question: "15. Diketahui grafik y=8x+a dan y=x2+5x berpotongan di dua titik (x1,y1) dan (x2,y2). Jika grafik y=x2+5x melalui titik (a,−6), maka x1x2=...",
    answers: {
      A: "-3",
      B: "-2",
      C: "-1",
      D: "1",
      E: "2"
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
if (sessionStorage.getItem("to1pk1")) {
  if (sessionStorage.getItem("to1pk1") < 0) {
    showResults();
    
    //return window.location.assign('end.html');
  } else {
    var value = sessionStorage.getItem("to1pk1");
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
    sessionStorage.setItem("to1pk1", value);
  }
  document.getElementById("demo").innerHTML = 'Sisa Waktu : ' + Math.floor(value / 60) + ' menit';
};

var interval = setInterval(counter, 1000);
