// variables

const Fname = document.querySelector('#Fname'),
    email = document.querySelector('#email'),
    phonenumber = document.querySelector('#phone-number'),
    dropdown = document.querySelector('#dropdown'),
    mostlike = document.querySelector('#most-like'),
    Frontcheckbox = document.querySelector('#Front-checkbox'),
    Backcheckbox = document.querySelector('#Back-checkbox'),
    submit = document.querySelector('#submit');






// Event liteners 
addEventListener()

function addEventListener() {
    document.addEventListener('DOMContentLoaded', disableBtn)
    Fname.addEventListener('blur', ValidateInput)
    email.addEventListener('blur', ValidateInput)
    phonenumber.addEventListener('blur', ValidateInput)

}


// Functions

function disableBtn() {
    submit.disabled = true


}

function ValidateInput(e) {

    validateLength(e.target)

    if (e.target.type === 'email') {
        if (validateEmail(e.target) < 0) {
            e.target.style.borderColor = 'red'
        } else {
            e.target.style.borderColor = 'green'
        }
    }

}

function validateLength(element) {

    if (element.value.length == 0) {

        element.style.borderColor = 'red'
    } else {
        element.style.borderColor = 'green'
    }

}

function validateEmail(email) {

    return String(email.value)
        .toLowerCase()
        .search(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );


}