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
            e.target.classList.add('error')
        } else {
            e.target.style.borderColor = 'green'
            e.target.classList.remove('error')
        }
    }

    if (e.target.type === 'phonenumber') {
        if (validatePhoneNumber(e.target) < 0) {
            e.target.style.borderColor = 'red'
            e.target.classList.add('error')
        } else {
            e.target.style.borderColor = 'green'
            e.target.classList.remove('error')
        }
    }
    enableBtn()
}

function validateLength(element) {

    if (element.value.length == 0) {
        element.style.borderColor = 'red'
        element.classList.add('error')
    } else {
        element.style.borderColor = 'green'
        element.classList.remove('error')
    }
}

function validateEmail(email) {

    return String(email.value)
        .toLowerCase()
        .search(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );


}

function validatePhoneNumber(phonenumber) {
  
    return String(phonenumber.value)
        .toLowerCase()
        .search(
            /^(0|0098|\+98)9(0[1-5]|[1 3]\d|2[0-2]|98)\d{7}$/

        );


}

function enableBtn() {
    const errorClasses = document.querySelectorAll('.error')

    if (errorClasses.length == 0 && email.value !== '' && Fname.value !== '' &&
        phonenumber.value !== '') {
        submit.disabled = false
    }

}