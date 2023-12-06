let email = document.getElementsByClassName("clInput").value

let btn = document.getElementsByClassName("btn").value


function validateForm() {
    // Реализуйте проверки и верните true или false в зависимости от результата
    // Например:
    var password = document.getElementById('password').value;
    if (password.length < 8) {
        alert('Пароль должен содержать не менее 8 символов');
        return false;
    }
    return true;
}

function validateForm() {
    let emailInput = document.getElementById('email');
    let email = emailInput.value;

    // Регулярное выражение для валидации email
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        alert('Пожалуйста, введите корректный email адрес.');
        return false;
    }



    return true;
}