$('.ba-header-sl').slick({
    dots: true,
    autoplay: true
});

$('.ba-projects-sl').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    asNavFor: '.ba-projects-sl2'
});

$('.ba-projects-sl2').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.ba-projects-sl',
    focusOnSelect: true
});


function valid(el, pattern, msgEl) {
        var res = el.val().search(pattern);
        if (res == -1) {
            return msgEl;
        } else {
            return '';
        }
    }; 

$('.form--btn').on('click', function(e) {
        var msg = '';
        msg += valid($('[name="name"]'),/^[a-zA-Z0-9]{1,}$/,'Use latin letters and numbers in the name. ');
        msg += valid($('[name="phone"]'),/^[0-9]{1,}$/,'Use numbers in the phone. ');
        msg += valid($('[name="email"]'),/^[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}$/,'E-mail isn\'t correct. ');
        msg += valid($('[name="message"]'),/^[a-zA-Z0-9]{1,}$/,'Use Latin letters and numbers in the message. ');
        
        if (msg != '') {
            alert(msg);
            return false;
        }
    });