var counterElement =  document.querySelector("#counter");
var increment = document.querySelector("#increment");
var decrement = document.querySelector("#decrement");

var counter = 0;
// function incrementCounter(){
//     counter++;
//     counterElement.innerHTML = counter;
// }
// function decrementCounter(){
//     counter--;
//     counterElement.innerHTML = counter;
// }

increment.addEventListener("click" , function(){
    counter++;
    counterElement.innerHTML= counter;
    if(counter < 0){
        counterElement.style.color = "red"
    }else{
        counterElement.style.color ="green"
    }
})

decrement.addEventListener("click" , function(){
    counter--;
    counterElement.innerHTML= counter;
    if(counter < 0){
        counterElement.style.color = "red"
    }else{
        counterElement.style.color = "green"
    }
})
