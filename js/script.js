
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


 function sortValues()
    {
        /*Save the contents of each div in an array 
          so they can be looped through and 
          re inserted later*/
        var content=[$("#January").html(),$("#February").html,$("#March").html(),$("#April").html()];

        //Get the value of all dropdowns and sort them
        var sortedArray=[getDropdown("select_3"),getDropdown("select_2"),getDropdown("select_3")];
        var sortedContent=new Array();
        sortedArray.sort();

        /*Loop through all the sorted values, 
         compare the value of each dropdown
         against the sorted value and use that 
         to determine the new arrangement of the divs
         */
        for (x=0; x< sortedArray.length; x++)
        {
            for (y=0; y<=content.length; y++)
            {
                if (getDropdown("dropdown_" + (y+1))==sortedArray[x])
                {
                    sortedContent[x]=content[x];
                               //This will prevent the same div from being assigned again:
                    $("#select_" + (y+1)).remove(); 
                    break;
                }

            }

        }
        /* Empty the parent div so new divs can be inserted.
           You can also do a fadeout/fadeIn of the div here
         */


        $("#parent").empty();       

        for (x=0; x< sortedContent.length; x++)
        {
            $("#parent").append(sortedContent[x]);
        }
    }
