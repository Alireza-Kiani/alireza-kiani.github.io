$('#contact-button').click(function (e) {
    $('#contact-modal').addClass('is-active');
});

$('.modal-background').click(function (e) {
    $('.modal').removeClass('is-active');
});

$('.modal-close').click(function (e) {
    $('.modal').removeClass('is-active');
});

$('#submit').click(async function (e) {
//    const response = await fetch('https://dumas.ir/send-email', {
//        method: 'POST',
//        headers: {
//            'content-type': 'application/json'
//        },
//        body: JSON.stringify({
//            email: $('#email').val(),
//            name: $('#name').val(),
//            subject: $('#subject').val(),
//            message: $('#message').val()
//        }),
//        redirect: 'follow'
//    }); 
});


$('#about-button').click(function (e) {
    if (!$('#about-pane').hasClass('show')) {
        $('#home-pane').addClass('hide');
        $('#about-pane').addClass('show');
    }
});

$('#back-button').click(function (e) {
    if ($('#about-pane').hasClass('show')) {
        $('#home-pane').removeClass('hide');
        $('#about-pane').removeClass('show');
    }
});