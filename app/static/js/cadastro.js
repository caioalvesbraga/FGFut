const init = () => {
    const validateEmail = (event) => {
        const input = event.currentTarget;
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const emailTest = regex.test(input.value);

        if (!emailTest) {
            submitButton.setAttribute('disabled', 'disabled');
            input.classList.add('error');
            setError(1);
        }else{
            submitButton.removeAttribute('disabled');
            input.classList.remove('error');
            removeError(1);
        }
    }

    const validatePassword = (event) => {
        const input = event.currentTarget;

        if(input.value.length < 8){
            submitButton.setAttribute('disabled','disabled');
            input.classList.add('error');
            setError(2);
        }else{
            submitButton.removeAttribute('disabled');
            input.classList.remove('error');
            removeError(2);
        }
    }

   
    const validateName = (event) => {
        const input = event.currentTarget;

        if(input.value.length < 3){
            submitButton.setAttribute('disabled','disabled');
            input.classList.add('error');
            setError(0);
        }else{
            submitButton.removeAttribute('disabled');
            input.classList.remove('error');
            removeError(0);
        }
    }

    const confirmaPassword = (event) => {
        const input = event.currentTarget;

        if(input.value != inputPassword.value){
            submitButton.setAttribute('disabled','disabled');
            input.classList.add('error');
            setError(3)
        }else{
            submitButton.removeAttribute('disabled');
            input.classList.remove('error');
            removeError(3);
        }
    }
    


    const inputUsername = document.getElementById('input__cadastro-nome');
    const inputEmail = document.getElementById('input__cadastro-email');
    const inputPassword = document.getElementById('input__cadastro-password');
    const inputConfirmaPassword = document.getElementById('input__cadastro-confirmapassword');
    const submitButton = document.getElementById('button__signup');
    const spans = document.querySelectorAll('.span-required')

    function setError(index) {
        spans[index].style.display = 'block';
    }

    function removeError(index) {
        spans[index].style.display = 'none';
    }


    inputUsername.addEventListener('input', validateName);
    inputEmail.addEventListener('input', validateEmail);
    inputPassword.addEventListener('input', validatePassword);
    inputConfirmaPassword.addEventListener('input', confirmaPassword);

    if(submitButton) {
        submitButton.addEventListener('click', (event) => {
            event.preventDefault();

            fetch('http://localhost:5000/usuario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: inputUsername.value,
                    email: inputEmail.value,
                    senha: inputPassword.value,
                })
            }).then((response) => {
                return response.json();
            }).then((data) => {
                console.log(data);
                if(data.mensagem == "Criado com sucesso"){
                    alert("Conta criada com sucesso")
                    window.location.href = "http://localhost:5000/login"
                }
            })
        })
    }
}

window.onload = init;