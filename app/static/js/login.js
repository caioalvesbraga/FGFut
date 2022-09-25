const init = () => {
    const validateEmail = (event) => {
        const input = event.currentTarget;
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const emailTest = regex.test(input.value);

        if (!emailTest) {
            submitButton.setAttribute('disabled', 'disabled');
            input.classList.add('error');
        }else{
            submitButton.removeAttribute('disabled');
            input.classList.remove('error');
        }
    }

    const validatePassword = (event) => {
        const input = event.currentTarget;

        if(input.value.length < 8){
            submitButton.setAttribute('disabled','disabled');
            input.classList.add('error');
        }else{
            submitButton.removeAttribute('disabled');
            input.classList.remove('error');
        }
    }

    
    const inputEmail = document.getElementById('input-login__email');
    const inputPassword = document.getElementById('input-login__password');
    const submitButton = document.getElementById('login__button');
    const userName = document.getElementById('user__name');

    inputEmail.addEventListener('input', validateEmail);
    inputPassword.addEventListener('input', validatePassword);

    const errorHandler = () => {
        submitButton.classList.remove('success');
        submitButton.classList.add('error');
        submitButton.textContent = 'Erro :(';
    }

    const successHandler = () => {
        submitButton.classList.remove('error');
        submitButton.classList.add('success');
        submitButton.textContent = "Tudo certo! :)"
        window.location.href = "http://localhost:5000/partidas"
    }

    if(submitButton) {
        submitButton.addEventListener('click', (event) => {
            event.preventDefault();
            submitButton.textContent = '...Entrando';

            fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: inputEmail.value,
                    senha: inputPassword.value,
                })
            }).then((response) => {
            if(response.status !== 200) {
                    return errorHandler();
                }successHandler();
            }).catch((data) => {
                console.log(data)
                errorHandler();
            })
        })
    }
}
window.onload = init;