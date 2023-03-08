function anonymous_button(button) {
// var anonymous_button = document.getElementById('')
var i = document.getElementById('anon');
var name_input = document.getElementById('name_input');
var lastname_input = document.getElementById('lastname_input');

if (button.checked === true) {
    i.classList.replace('fa-regular', 'fa-solid');
    i.style.color = 'green';
    name_input.value = 'Anonim';
    lastname_input.value = 'Anonimowy';
    name_input.disabled = true;
    lastname_input.disabled = true;
}
else if (button.checked === false) {
    i.classList.replace('fa-solid', 'fa-regular')
    i.style.color = 'black';
    name_input.value = '';
    lastname_input.value = '';
    name_input.disabled = false;
    lastname_input.disabled = false;
}
}

var scrollToForm = () => {
    var form = document.getElementById('email-form');
    window.scrollTo({top: (form.offsetTop - 100), behavior: 'smooth'});
}