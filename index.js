// disappearing navbar

jQuery(document).on("scroll", function () {
    if ($(document).scrollTop() > 200) {
        $(".navb").css("background-color","rgba(0,0,0,0.6)");
        $(".disappear").css("top","0");
    } else {
        $(".navb").css("background","none");
        $(".disappear").css("top","-200");
    }
}); 

// modal

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})