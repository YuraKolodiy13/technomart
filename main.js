
/***********************************header******************************************/

/*$('header input').click(function (event) {
    $('.logo a').css('background', '#ee3643');
    event.preventDefault();
});*/

/*******************************servis***********************************************/

$('.nav').find('a').click(function () {
    $('.nav .active').removeClass('active');
    $(this).addClass('active');
});

$('#delivery').click(function (event) {
    event.preventDefault();
    $('.guarantee').css('display', 'none');
    $('.credit').css('display', 'none');
    $('.delivery').css('display', 'block');
});
$('#credit').click(function (event) {
    event.preventDefault();
    $('.guarantee').css('display', 'none');
    $('.delivery').css('display', 'none');
    $('.credit').css('display', 'block');
});
$('#guarantee').click(function (event) {
    event.preventDefault();
    $('.delivery').css('display', 'none');
    $('.credit').css('display', 'none');
    $('.guarantee').css('display', 'block');
});

/**********************************************contacts**********************************************/

$('.contacts').find('img').click(function (event) {
    event.preventDefault();
    $('.modal-map').css('display', 'block');
});
$('.modal-map-close').click(function () {
    $('.modal-map').css('display', 'none');
});

$('a.modal-window').click(function (event) {
    event.preventDefault();
    $('.modal-writeUS').css('display', 'block');
    $("[name=name]").focus();
});
$('.modal-writeUS-close').click(function () {
    $('.modal-writeUS').css('display', 'none');
});