const form = document.getElementById('form-deposito');
const numA = document.getElementById('numeroUm');
const numB = document.getElementById('numeroDois');
    
    function validaFormulario(valorA,valorB) {
        return valorB > valorA;
    }

    form.addEventListener('submit', function(e){
        e.preventDefault();

        const campoB = parseFloat(numB.value);
        const campoA = parseFloat(numA.value);
        const mensagemSucesso= `Está correto! O valor de ${campoA} é menor que o do ${campoB}`
        const mensagemError= `Tente novamente`
        const formEValido = validaFormulario(campoA, campoB);
        
        if(formEValido) {
            const containerMensagemSucesso = document.querySelector('.success-message');
            containerMensagemSucesso.innerHTML = mensagemSucesso;
            containerMensagemSucesso.style.display = 'block';

        }else{
            const containerMensagemError = document.querySelector('.error-message');
            containerMensagemError.innerHTML = mensagemError;   
            containerMensagemError.style.display = 'block';
    }
    });