//Function the creates a FizzBuzz element and adds it to the dom
function createElement(text) {
    const paragraph = `<p class="col-12 col-sm-6 col-md-2 border border-primary rounded">${text}</p>`;
    document.getElementById("fizzBuzzDiv").insertAdjacentHTML('beforeend', paragraph);
}

class FizzBuzz {

    /**
     * Method that finds if the number is divisible by 3, 5 or both and then creates fizzBuzz elements
     * 
     * @param {int} loops
     */
    start(loops) {
        let i = 0;
        while (i <= loops) {
            if (i % 3 == 0 && i % 5 == 0) {
                createElement(i + " is FizzBuzz");
            } else if (i % 3 == 0) {
                createElement(i + " is Fizz");
            } else if (i % 5 == 0) {
                createElement(i + " is Buzz")
            }
            i++;
        }
    }
}