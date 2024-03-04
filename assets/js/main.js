$(document).ready(function () {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
    const myModal = new bootstrap.Modal(document.getElementById('modal'));

    $('.carousel-button').on('click', function (event) {
        myModal.show();
    })
});
