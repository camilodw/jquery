$(document).ready(function() {
    //insertamos texto en el h1 que estra dentro del id content
    $('#content h1').html('Jequery course');
    //le agregamos una clase a todos los elementos con la clase con display 4
    $('.display-4').addClass('text-success');
    //eliminamos la clase
    $('.display-4').removeClass('text-success');
    $('#content').prepend('<h1>esto es un elemento al inicio</h1>');
    $('#content').append('<h1>esto es un elemento al final</h1>');
    //seteo una pripiedad y le doy su valor
    $('.display-4').css('color', 'blue');
    //elimina el elemento
    $('#content').remove();
    //oculta el elemento
    $('#content').hide();
});
//document.querySelector('.display-4').innerHTML = 'vanilla'