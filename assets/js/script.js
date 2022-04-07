var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
return new bootstrap.Tooltip(tooltipTriggerEl)
})

$(function(){
    
    $("#enviarCorreo").click(function(){
        alert("El correo fue enviado correctamente...");
    })

    
    $("h6").dblclick(function(){
        $("h6").removeClass("txt_rojo");
        $(this).addClass("txt_rojo");
    })


    $(".card-title").click(function(){
        $(".card").toggle();
        $(this).parents(".card").toggle();
        //
        $(".card-text").toggle();
        $(".card-img-top").toggle();
    })


    });

// END.