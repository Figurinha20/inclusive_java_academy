//Function the creates a FizzBuzz element and adds it to the dom
function createElement(text) {
    const para = document.createElement("p");
    para.classList.add("col-12");
    para.classList.add("col-sm-6")
    para.classList.add("col-md-2")
    para.classList.add("border");
    para.classList.add("border-primary");
    para.classList.add("rounded");
    para.innerHTML = text;
    document.getElementById("fizzBuzzDiv").appendChild(para)
}

class FizzBuzz {

    /**
     * Method that finds if the number is divisible by 3, 5 or both and then creates fizzBuzz elements
     * 
     * @param {int} loops
     */
    start(loops) {
        let i = 0;
        let text = "";
        while (i <= loops) {
            if (i % 3 == 0 && i % 5 == 0) {
                text = i + " is FizzBuzz";
                createElement(text);
            } else if (i % 3 == 0) {
                text = i + " is Fizz";
                createElement(text);
            } else if (i % 5 == 0) {
                text = i + " is Buzz";
                createElement(text);
            }

            i++;
        }
    }
}