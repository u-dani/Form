
const inputs = document.querySelectorAll('.js-main-form-input');

inputs.forEach( input => {
    input.addEventListener('focus', focusInput);
    input.addEventListener('focusout', focusOutInput);
})


function focusInput({target}) {
    target.previousElementSibling.classList.add('span-active');
    target.classList.add('input-active');
}


function focusOutInput() {
    inputs.forEach( input => {
        if (input.value == '') {
            input.previousElementSibling.classList.remove('span-active');
            input.classList.remove('input-active');
        }
    })
}