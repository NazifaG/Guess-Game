let input= document.querySelector('.guess')
let press = document.querySelector('.press')
let result = document.querySelector('.result')


let arr = ['book','code', 'music','experience', 'universe','paint']


function randomWord(){
let random_word = Math.floor(Math.random()*arr.length);
return arr[random_word]
}

let newArr = randomWord().toLowerCase()



press.addEventListener('click', function(){

    let inputLow = input.value.toLowerCase()
  if(inputLow===newArr){
   result.innerText= 'Congratulation! You have found correct word.'
  //  result.classList.add('correct');
  result.style.color='green'
    }else if(inputLow!==newArr){
    result.innerText = 'Sorry, wrong guess. Try a new word!'
    result.classList.add('incorrect');

  }
  input.value =''
})