const form = document.querySelector('.quiz-form');
const finalScoreContainer = document.querySelector('.final-score-container');

const correctAnswers = ['A', 'B', 'A', 'B', 'A'];

let score = 0; 

const getUserAnswers = () => {

  let userAnswers = [];

  correctAnswers.forEach((correctAnswer, index) => {
    const userAnswer = form[`inputQuestion${index + 1}`].value
    userAnswers.push(userAnswer)
  })

  return userAnswers;
}

const calculateUserScore = (userAnswers) =>{
  
  userAnswers.forEach((userAnswer, index) => {
    const isUserAnswerCorret = userAnswer === correctAnswers[index]

    if(isUserAnswerCorret){
      score += 20;
    }
  })

}

const showFinalScore = () =>{
  scrollTo({
    top:0,
    left:0,
    behavior: 'smooth'

  });
  finalScoreContainer.classList.remove('d-none');

}

const animateFinalScore = () =>{
  let counter = 0;

  const timer = setInterval(()=> {

    if (counter === score){
      clearInterval(timer);
    }

    finalScoreContainer.querySelector('span').textContent = `${counter ++}%`

  }, 10)

}

form.addEventListener('submit', event => {
  event.preventDefault();

  //obtém as respostas do usuário 
  const userAnswers = getUserAnswers();

  //calcula a pontuação do usuário
  calculateUserScore(userAnswers);

  //exibe a pontuação final 
  showFinalScore();

  //anima a pontuação final
  animateFinalScore();
 
})
