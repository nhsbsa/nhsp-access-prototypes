// ES6 or Vanilla JavaScript
$(document).ready(function () {

    // Tell user about dead links
    // @via paulhayes_dfe
    function alertUser(evt) {
        evt.preventDefault();
        alert('Sorry, this hasn\'t been built yet');
    }
    $('body').on('click', 'a[href="#"]', alertUser);

    // const $backButton = document.querySelector('.nhsuk-back-link__link');

    // if ($backButton !== null) {
    //     $backButton.addEventListener('click', function (event) {
    //     event.preventDefault();
    //     window.history.go(-1);
    //     });
    // };


});