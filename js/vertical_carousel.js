$(document).ready(function(){

    // scroll slides on mouse scroll 
    $('#verticalCarousel').bind('mousewheel DOMMouseScroll', function(e){
    
            if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
                $(this).carousel('prev');
            }
            else{
                $(this).carousel('next');
                
            }
        });
    
    //scroll slides on swipe for touch enabled devices 
    
         $("#verticalCarousel").on("touchstart", function(event){
     
            var yClick = event.originalEvent.touches[0].pageY;
            $(this).one("touchmove", function(event){
    
            var yMove = event.originalEvent.touches[0].pageY;
            if( Math.floor(yClick - yMove) > 1 ){
                $(".carousel-vert").carousel('next');
            }
            else if( Math.floor(yClick - yMove) < -1 ){
                $(".carousel-vert").carousel('prev');
            }
        });
        $(".carousel-vert").on("touchend", function(){
                $(this).off("touchmove");
        });
    });
        
    });
    //animated  carousel start
    $(document).ready(function(){
    //to add  start animation on load for first slide 
         $("#verticalCarousel").on('slide.bs.carousel', function () {
            $.fn.extend({
                animateCss: function (animationName) {
                    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                    this.addClass('animated ' + animationName).one(animationEnd, function() {
                        $(this).removeClass(animationName);
                    });
                }
            });
        });
    });
    