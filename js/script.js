
$(document).ready(function(){
  var acc = document.getElementsByClassName("accordion");
  var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {

    var panel = this.nextElementSibling;
    if (panel.style.display === "inline-block") {
        panel.style.display = "none";   
    } else {
        panel.style.display = "inline-block";
    } 
  });
}

$('.accordion').click(function() {
    $(this).toggleClass('active').find('i').toggleClass('open close')
    .removeClass('active').find('i').removeClass('close').addClass('open');
    $(this).next('.accordion_content').slideToggle().siblings('.accordion_content').slideUp();
    
    
});
});


 