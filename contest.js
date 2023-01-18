let btn = document.getElementById('btn');
let output = document.getElementById('outputtext')

//Hier wird der Parameter math.floor und math.random verwendet, floor = Zahlen aufrunden, random (zB wenn man 100 eingibt steht es u guessed to low)
let number = [Math.floor(Math.random ()* 100)]

btn.addEventListener('click', function () {

    let input = document.getElementById('userInput').value;
    if (input == number) {

        output.innerHTML = `You guessed right, your number was ${number}`
    }

    // input = das was man eingibt, falls dies kleiner ist als die random Number dann kommt die Nachricht "You guessed too low"
else if (input < number) {
    output.innerHTML = "You guessed too low"

    };  //Falls Inputfeld/nummer ist grösser als die Zahl kommt "You guessed to high"
if (input > number ){
    output.innerHTML = "You guessed too high"
}

})