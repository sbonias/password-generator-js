// variables to reference DOM elements
let generateBtn = document.querySelector("#generate")
let submitBtn = document.querySelector("#submit")

// function to hide generate button and display submit button
const btnTransitionStart = () => {
    generateBtn.style.display = "none"
    submitBtn.style.display = "inline-block"
}
 
// function to hide submit button and display generate button
const btnTransitionReset = () => {
    submitBtn.style.display = "none"
    generateBtn.style.display = "inline-block"
}

// user clicks generate button to start password generation sequence
generateBtn.onclick = () => {
    // first function that will execute
    btnTransitionStart();
}

// user clicks submit button to submit password criteria
submitBtn.onclick = () => {
    // first function that will execute
    btnTransitionReset();
}



// Assignment Code

// Write password to the #password input

// Add event listener to generate button
