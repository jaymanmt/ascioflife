/*global $*/

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