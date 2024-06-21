let randomizerMode = "num"
let generateBtn = document.querySelector(".generate-btn")
let numsFirstInput = document.querySelector(".numbers-first-input")
let numsSecondInput = document.querySelector(".numbers-second-input")
let resultElement = document.querySelector(".result")

function randint(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

generateBtn.addEventListener("click", function(){
    if (Number(numsFirstInput.value) >= Number(numsSecondInput.value)){
        alert("Первое число не может быть больше или равно второго")
    }else{
        resultElement.innerHTML = randint(Number(numsFirstInput.value), Number(numsSecondInput.value))
    }
    
})