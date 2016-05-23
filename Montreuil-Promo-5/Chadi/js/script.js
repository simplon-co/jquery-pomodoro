$(document).ready(function(){
    


$("#play").click(function () {
    
    timer = $(".time").countdowntimer({
        
        hours: 0,
        minutes: 25,
        second: 0,
        size : "lg",
        pauseButton : "pause" ,
        stopButton : "stop"
    });
    $("#play").hide();
});


});