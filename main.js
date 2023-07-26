const form = document.getElementById('form-deposito');
const numA = document.getElementById('numeroUm');
const numB = document.getElementById('numeroDois');
    
    function validaFormulario(numA,numB) {
        if(numB > numA){
        }
    }

    form.addEventListener('submit', function(e){
        e.preventDefault();

        const campoB = parseFloat(numA.value);
        const campoA = parseFloat(numB.value);
        const mensagemSucesso= `Está correto! O valor de ${campoA.value} é menor que o do ${campoB.value}`
        const mensagemError= `A premissa não está correta!`

        formEValido = validaFormulario()
        if(formEValido) {
            const containerMensagemSucesso = document.querySelector('.success-message');
            containerMensagemSucesso.innerHTML = mensagemSucesso;
            containerMensagemSucesso.style.display = 'block';

        }else{
            const containerMensagemError = document.querySelector('.error-message');
            containerMensagemError.innerHTML = mensagemError;   
            containerMensagemError.style.display = 'block';
    }
    })
console.log(form);  