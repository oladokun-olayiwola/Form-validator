// const form = document.getElementById('form')
// const username = document.getElementById('username')
// const email = document.getElementById('email')
// const password = document.getElementById('password')
// const password2 = document.getElementById('password2')
// const load = document.querySelector('body')

// //Error function
// function showError(input, message){
//     const formControl = document.getElementsByClassName('form-control')
//     formControl[0].classList.add('error')
//     formControl[1].classList.add('error')
//     formControl[2].classList.add('error')
//     formControl[3].classList.add('error')
//     const small = document.querySelector('small')
//     small.innerText = message;
// }
// function showSuccess(username){
//     const formControl = document.querySelector('.form-control')
//     formControl.classList.add('success')
// }



// // Event Listeners
// const submit = document.querySelector('button')
// submit.addEventListener('click', function(e){
//     e.preventDefault();
   
//     if(username.value === ''){
//         showError(username,'Username is required')
//     }
//     else{
//         showSuccess(username)
//     }
//     // if(email.value === ''){
//     //     showError(email,'Email is required')
//     // }
//     // else{
//     //     showSuccess(email)
//     // }
//     // if(password.value === ''){
//     //     showError(password,'Password is required')
//     // }
//     // else{
//     //     showSuccess(password)
//     // }
//     // if(password2.value === ''){
//     //     showError(password2,'Password is required')
//     // }
//     // else{
//     //     showSuccess(password2)
//     // }

// });



















const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

//Error function
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Success function

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

// Email Validator

function checkEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email.value.trim())) {
        showError(email, 'Email is invalid')
    } else {
        showSuccess(email)
    }
}


// input valididty

function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if(input.value.trim() === ''){
            showError(input, `${getFieldName(input)} is required`)
        }  
        else{
            showSuccess(input)
        } 

    });
}

// Check input length
function checkLength(input, min, max){
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} must be more than ${min} characters`)
    }
    else if(input.value.length > max){
        showError(input, `${getFieldName(input)} must be less than ${max} characters`)
    }
}

// check password
function checkPassword(input){
    if (password === password2) {
        showSuccess(input)
    } else {
        showError(input, 'Passwords do not match')

    }
}

// get field name
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


// Event Listeners
const submit = document.querySelector('button')
submit.addEventListener('click', function(e){
    e.preventDefault();
   
   checkRequired([username, email, password, password2])
    checkLength(username, 3, 15)
    checkLength(password, 6, 25)
    checkEmail(email)
    checkPassword(password2)
});


