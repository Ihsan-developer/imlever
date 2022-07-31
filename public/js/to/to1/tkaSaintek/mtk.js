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
  var nilai1 = document.getElementsByName('mtk');
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
    
    question: "1.<img src='https://im4ge.netlify.app/tka/st/mtk1/mtk1.png' height='30%' width='40%'>\n \tDeterminan matriks A^4 adalah...",
    answers: {
      A: "1",
      B: "2",
      C: "4",
      D: "16",
      E: "81"
    },
    correctAnswer: "D"
  },
  {
    question: " 2. <img src='https://im4ge.netlify.app/tka/st/mtk1/mtk2.png' height='40%' width='50%'>", 
    answers: {
      A: "-4",
      B: "-2",
      C: "-1",
      D: "1",
      E: "2"
    },
    correctAnswer: "B"
  },
  {
    question:  "3.  <img src='https://im4ge.netlify.app/tka/st/mtk1/mtk3.png' height='80%' width='70%'>",
    answers: {
      A: "-2",
      B: "-1",
      C: "-1/2",
      D: "1/2",
      E: "2"
    },
    correctAnswer: "A"
  },
  {
    question: "4.<img src='https://im4ge.netlify.app/tka/st/mtk1/mtk4.png' height='60%' width='70%'>",
    answers: {
      A: "-3",
      B: "-2",
      C: "-1",
      D: "1",
      E: "2"
    },
    correctAnswer: "A"
  },
  {
    question: "5. <img src='https://im4ge.netlify.app/tka/st/mtk1/mtk5.png' height='60%' width='70%'>",
    answers: {
      A: "1",
      B: "2",
      C: "3",
      D: "4",
      E: "6"
    },
    correctAnswer: "B"
  },
  {
    question: "6. <img src='https://im4ge.netlify.app/tka/st/mtk1/mtk6.png' height='20%' width='30%'>",
    answers: {
      A: "7/25",
      B: "7/24",
      C: "-7/25",
      D: "-7/24",
      E: "-17/25"
    },
    correctAnswer: "A"
  },
  {
    question: "7.<img src='https://im4ge.netlify.app/tka/st/mtk1/mtk7.png' height='40%' width='50%'>",
    answers: {
      A: "-3/5",
      B: "-2/5",
      C: "0",
      D: "2/5",
      E: "3/5"
    },
    correctAnswer: "B"
  },
  {
    question: "8.<img src='https://im4ge.netlify.app/tka/st/mtk1/mtk8.png' height='15%' width='25%'>",
    answers: {
      A: "5/7",
      B: "7/10",
      C: "2/5",
      D: "3/4",
      E: "3/5"
    },
    correctAnswer: "D"
  },
  {
    question: "9.<img src='https://im4ge.netlify.app/tka/st/mtk1/mtk9.png' height='20%' width='30%'>",
    answers: {
      A: "1",
      B: "2",
      C: "3",
      D: "5",
      E: "7"
    },
    correctAnswer: "A"
  },
  {
    question: "10.<img src='https://im4ge.netlify.app/tka/st/mtk1/mtk10.png' height='45%' width='55%'>",
    answers: {
      A: "4",
      B: "-5",
      C: "6",
      D: "7",
      E: "8"
    },
    correctAnswer: "C"
  },
  {
    question: "11.<img src='https://im4ge.netlify.app/tka/st/mtk1/mtk11.png' height='40%' width='50%'>",
    answers: {
      A: "16",
      B: "20",
      C: "24",
      D: "28",
      E: "32"
    },
    correctAnswer: "B"
  },
  {
    question: "12. <img src='https://im4ge.netlify.app/tka/st/mtk1/mtk12.png' height='60%' width='70%'>",
    answers: {
      A: "-6/5",
      B: "-3/5",
      C: "0",
      D: "3/5",
      E: "6/5"
    },
    correctAnswer: "E"
  },
  {
    question: "13. <img src='https://im4ge.netlify.app/tka/st/mtk1/mtk13.png' height='40%' width='50%'>",
    answers: {
      A: "4",
      B: "5",
      C: "6",
      D: "7",
      E: "8"
    },
    correctAnswer: "A"
  },
  {
    question: "14. <img src='https://im4ge.netlify.app/tka/st/mtk1/mtk14.png' height='40%' width='50%'>",
    answers: {
      A: "1/2 √3",
      B: "1/2",
      C: "0",
      D: "-1/2",
      E: "-1/2 √3"
    },
    correctAnswer: "E"
  },
  {
    question: "15. <img src='https://im4ge.netlify.app/tka/st/mtk1/mtk15.png' height='60%' width='70%'>",
    answers: {
      A: "-3",
      B: "-2",
      C: "-1",
      D: "1",
      E: "2"
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
if (sessionStorage.getItem("to1mtk19")) {
  if (sessionStorage.getItem("to1mtk19") < 0) {
    showResults();
    
    //return window.location.assign('end.html');
  } else {
    var value = sessionStorage.getItem("to1mtk19");
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
    sessionStorage.setItem("to1mtk19", value);
  }
  document.getElementById("demo").innerHTML = 'Sisa Waktu : ' + Math.floor(value / 60) + ' menit';
};

var interval = setInterval(counter, 1000);
