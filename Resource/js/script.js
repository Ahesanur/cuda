

$(document).ready(function(){
//    STICKY MANU
//    $(".js--service-section").waypoint(function(direction){
//      if(direction == "down"){
//                $("nav").addClass("sticky");
//         }
//         else{
//            $("nav").removeClass("sticky");
//         }
//    });
    
    
    
    
    //MIXIT UP
    var mixer = mixitup('.contener');
});
function openNav(){
    document.getElementById("myNav").style.width = "100%";
}
function closeNav(){
    document.getElementById("myNav").style.width = "0%";
}

//SMOOTH SCROLL
$(function(){
    $('a').on('click', function(){
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        return false;
    });
});




