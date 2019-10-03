/*global $*/

// home icon functionality
function rotater(){
    $("#home-icon").html(`<button style="animation-name: alerter"id="home-icon""><i class="fas fa-thermometer-three-quarters"></i></button>`);
}
$("#home-icon").click(function(){
    rotater();
})

//add ripple out feature to click functionality
$(".hvr-ripple-out").click(function(){
    let el = $(this);
    let clickRip = el.clone(true);
    el.before(clickRip);
    el.remove();
})

//DOM Ready Function
$(function(){
    $(".pages").hide();
    $("#page-1").show();
    //Single Page Application
    $(".nav-linker").click(function() {
        let page = $(this).data("dest");
        $(".pages").hide();
        $('#' + page).show();
    })
})