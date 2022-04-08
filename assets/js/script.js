//Código JavaScript para que funcione el ToolTip...
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
return new bootstrap.Tooltip(tooltipTriggerEl)
})

$(function(){
    // Código JavaScript para que aparezca la ALERT al hacer click en el botón ENVIAR del formulario Contacto... 
    $("#enviarContacto").click(function(){
        alert("Hemos Recibido tu Solicitud!!, Pronto nos pondremos en contacto contigo!");
    })

    // Código JavaScript para hacer Toggle a las CARDs de la página...
    $(".card-title").click(function(){
        $(".card").toggle();
        $(this).parents(".card").toggle();
    })


});

// END.