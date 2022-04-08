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
    
    // Codigo JavaScript para transparentar o Colorear la Barra de Navegación--
    // Esta echo según el evento Scroll, 
    // y toma el valor de trigger según el "ancho del ViewPort"--
    $(window).scroll(function(){        
        const viewport_width = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        if($("#barra_menu").offset().top > (viewport_width/1.67)){
            $("#barra_menu").removeClass("bg-transparent");
            $("#barra_menu").addClass("barra_turquesa");
        }
        else{
            $("#barra_menu").removeClass("barra_turquesa");
            }
        })

});

// END.