$(document).ready(function(){
    $("#telefone").mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    });
    $("#CPF").mask('000.000.000-00', {
        placeholder: '___.___.___-__'
    });
    $("#CEP").mask('00000-000', {
        placeholder: '_____-___'
    });
    $('form').validate({
        rules:{
            nome:{
                required:true
            },
            email:{
                required:true,
                email: true
            },
            telefone:{
                required:true
            },
            CPF:{
                required:true
            }
        }
    })
});