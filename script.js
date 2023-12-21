let scoreText = document.getElementById("score")
let plus = document.getElementById("plus")
let minus = document.getElementById("minus")
let reset = document.getElementById("reset")


let score = 0

plus.addEventListener("click", function(){
    score +=1
    scoreText.innerHTML = score
})

minus.addEventListener("click", function(){
    score -= 1
    scoreText.innerHTML = score

})

reset.addEventListener("click", function(){
    score = 0
    scoreText.innerHTML = score

})
