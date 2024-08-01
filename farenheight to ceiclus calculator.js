function f_to_c(f) {

    const c = ((f - 32) / 1.8);
    console.log(c)
}



const userInput = prompt("enter degree in far");
const result = f_to_c(userInput);
document.write(result)