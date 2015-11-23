$(document).ready(function(){
var num_of_modulenav = 0;
	var modulenav_counter = 0;

 
	// module nav items - adds custom classes to first and last li
	if(jQuery("div.menu-mainnav-container ul.menu li").length){
		num_of_modulenav = (jQuery("div.menu-mainnav-container ul.menu li.menu-item").length)-1;
		jQuery("div.menu-mainnav-container ul.menu li.menu-item:eq("+0+")").addClass('first');
		//$("div.menu-mainnav-container ul.menu li.menu-item:eq("+5+")").addClass('last');
	};

	// check for child nav item and append hoverOn class if exists
	// provides the sub slide out menu function
	jQuery("#header #sectionMenu ul li ul li").mouseenter(function() {
		if(jQuery('#header #sectionMenu ul li ul li ul').length){
			jQuery(this).addClass('hoverOn');
		}
  		}).mouseleave(function() {
    			jQuery(this).removeClass('hoverOn');
			});
			if(jQuery('.hs-cta-img')){
			jQuery('.hs-cta-img').css('height','65px');
	    jQuery('.hs-cta-img').css('width','auto');
			}
	
	// This is code the the images that fade in and out
	

$('.testselect3').SumoSelect({placeholder: 'This is a placeholder'});
// {$("form").submit(function(){
//     alert("Thank you for your submission");
// });
// }

});

// This is the javascript to check if the user has submitted for these fields and alerts them to do so if they have not.

function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == null || x == "") {
        alert("First name must be filled out");
        
    }
     var y = document.forms["myForm"]["lname"].value;
    if (y == null || y == "") {
        alert("Last name must be filled out");
        return false
    }
    var z = document.forms["myForm"]["phone"].value;
    if (z == null || z == "") {
        alert("Phone number must be filled out");
        return false
    }

    else
    {
    	alert("Thanks for your submission");
    }
}

