$(document).ready(function() {
    //insertamos texto en el h1 que estra dentro del id content
    $('#content h1').html('Jequery course');
    //le agregamos una clase a todos los elementos con la clase con display 4
    $('.display-4').addClass('text-success');
    //eliminamos la clase
    $('.display-4').removeClass('text-success');
});
//document.querySelector('.display-4').innerHTML = 'vanilla'