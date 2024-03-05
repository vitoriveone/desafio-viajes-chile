$(document).ready(function () {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
    const myModal = new bootstrap.Modal(document.getElementById('modal'));

    $('.carousel-button').on('click', function (event) {
        myModal.show();
    })

    $('a').on('click', function(event){
        if(this.hash !== ""){
            event.preventDefault();
            let hash = this.hash;
            $('html,  body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                console.log(window.location.hash);
            });
        }
    });

    $('#btn-enviar').on('click', function (event) {
        event.preventDefault();
    })
});
