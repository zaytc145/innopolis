export default () => {
    const emailInput = document.querySelector('#email');
    const emailErrorBlock = document.querySelector('.email-error');
    const passwordInput = document.querySelector('#password');
    const passwordErrorBlock = document.querySelector('.password-error');
    const genderInput = document.querySelector('#gender');
    const genderErrorBlock = document.querySelector('.gender-error');
    const submitButton = document.querySelector('#submit');
    const form = document.querySelector('form');

    const isPasswordValid = (password) => {
        return password.length !== 0 && password.length > 5;
    };

    const isEmailValid = (email) => {
        const regex =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        return regex.test(email);
    };

    const isGenderValid = (gender) => {
        return gender !== '';
    }

    emailInput.addEventListener('input', (e) => {
        const currentValue = e.target.value;

        const isValid = isEmailValid(currentValue);

        if (isValid) {
            emailInput.classList.remove('input-error');
            emailErrorBlock.classList.add('d-none');
        } else {
            if (currentValue.length === 0) {
                emailErrorBlock.textContent = 'Email не может быть пустым';
            } else {
                emailErrorBlock.textContent = 'Введите корректный email';
            }
            emailInput.classList.add('input-error');
            emailErrorBlock.classList.remove('d-none');
        }
    });

    passwordInput.addEventListener('input', (e) => {
        const currentValue = e.target.value;

        const isValid = isPasswordValid(currentValue);

        if (isValid) {
            passwordInput.classList.remove('input-error');
            passwordErrorBlock.classList.add('d-none');
        } else {
            if (currentValue.length === 0) {
                passwordErrorBlock.textContent = 'Пароль не может быть пустым';
            } else {
                passwordErrorBlock.textContent = 'Пароль не может быть короче 6-и символов';
            }
            passwordInput.classList.add('input-error');
            passwordErrorBlock.classList.remove('d-none');
        }
    });

    genderInput.addEventListener('input', (e) => {
        const currentValue = e.target.value;
        const isValid = isGenderValid(currentValue);

        if (isValid) {
            genderInput.classList.remove('input-error');
            genderErrorBlock.classList.add('d-none');
        } else {
            genderErrorBlock.textContent = 'Необходимо указать пол'
            genderInput.classList.add('input-error');
            passwordErrorBlock.classList.remove('d-none');
        }
    })

    form.addEventListener('input', (e) => {
        const email = form.querySelector('#email').value;
        const password = form.querySelector('#password').value;
        const gender = form.querySelector('#gender').value;

        if (
            isEmailValid(email) &&
            isPasswordValid(password) &&
            isGenderValid(gender)
        ) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    });
};
