const correctAnswers = ['A', 'B', 'A', 'B', 'A'];
const form = document.querySelector('.quiz-form');

const finalResult = document.querySelector('.result');

form.addEventListener('submit', event => {
  event.preventDefault();

  let score = 0; 

  //obtém as respostas do usuário 
  
  const userAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value,
    form.inputQuestion5.value
  ]
  //calcula a pontuação do usuário

  userAnswers.forEach((userAnswer, index) => {
    if(userAnswer === correctAnswers[index]){
      score += 20;
    }
  })


  //exibe a pontuação final 
  scrollTo(0, 0);
  
  finalResult.classList.remove('d-none');

  //anima a pontuação finalk
  let counter = 0;

  const timer = setInterval(()=> {

    if (counter === score){
      clearInterval(timer);
    }
    finalResult.querySelector('span').textContent = `${counter}%`
    counter ++

  }, 10)


})
