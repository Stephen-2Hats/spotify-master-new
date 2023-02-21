/**
 * Custom dropdown - Account dropdown header
 * 
 */
var list = $('.drpdwn-list');
var link = $('.drpdwn-link');
link.click(function (e) {
    e.preventDefault();
    list.slideToggle(200);
});

/**
 * Friends activity toggle window on mobile
 * 
 */
$(".openfrnds").click(function () {
    $(".right-nav").toggleClass("aa");
});



