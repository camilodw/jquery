$(document).ready(function() {
    $('form').submit(function(e) {
        //cancela el metodo por defecto
        e.preventDefault();
        var name = $('#name').val();
        console.log(name)

    });
});