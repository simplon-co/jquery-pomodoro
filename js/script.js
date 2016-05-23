var d = 4;
var pause = 0;
var count = 0;
//var counter=setInterval(timer, 1000);
var stoped = 0;
$(document).ready(function() {
    ////////
    $("#play").click(function() {
        var counter = setInterval(function() {
            timer()
        }, 1000);

        function timer() {
            d = d - 1;
            $(".time").html(d);
            if (d <= 0) {
                $("ul").append("<li><s>doing my sport<s></li>");
                alert(" Your task time is finished , you will have break ");
                d = d + 3;
                $(".time").html(d);
            }
        }
    });
    ////////// pause
    $("#pause").click(function() {
        if (stoped == 0) {
            if (pause == 0) {
                clearInterval(counter);
                document.getElementById("pause").innerHTML = "play"
                pause = 1;
                return;
            }

            if (pause == 1) {
                window.counter = setInterval(timer, 1000);
                document.getElementById("timer").innerHTML = count 
                document.getElementById("pause").innerHTML = "Pause"
                pause = 0;
                return;
            }
        }
        return;
    });
    /////////////// stop
    $("#stop").click(function() {
        clearInterval(counter);
        window.count = 0;
        window.pause = 0;
        document.getElementById("pause").innerHTML = "Pause"
        window.stoped = 1
        $(".time").html(0);
    });
});
/*
var

function auto() {
    if (score > 20) {
        score = score - 20;
        var test = document.getElementById('test');
        setInterval(function() {
            score = score + 1;
            var display = document.getElementById('display');
            display.innerHTML = score;
        }, 1000);
        display.innerHTML = score;
    }
}
 $("p").hide("slow", function() {
            alert("The paragraph is now hidden");
            $("p").css("color", "red").slideUp(2000).slideDown(2000);
        });*/
