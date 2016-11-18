 var running = 0;

        function starts() {
            if (running === 0) {
                running = 1;
                if (document.getElementById("input").value == "") {
                    var time = 25 * 60 * 10; // 25 min;
                    increment(time);
                } else {
                    var newMin = document.getElementById("input").value;
                    var time = newMin * 60 * 10;

                    increment(time);
                }
                document.getElementById("starts").innerHTML = "pause";
            } else {
                running = 0;
                document.getElementById("starts").innerHTML = "resume";
            }
        }

        function Pause() {
        	running = 0;
        	document.getElementById("Pause").innerHTML = "pause";

        }

        function reset() {
            running = 0;
            time = 25 * 60 * 10; // 25 min
            document.getElementById("output").innerHTML = "25:00:0";
        }

        function increment(time) {
            if (running === 1) {
                setTimeout(function() {
                    time--;
                    console.log("DEBUG: time = " + time);
                    var mins = Math.floor(time / (10 * 60));
                    var secs = Math.floor(time / 10) % 60;
                    var tenths = time % 10;

                    if (mins < 10) {
                        mins = "0" + mins
                    }


                    if (secs < 10) {
                        secs = "0" + secs
                    }

                    document.getElementById("output").innerHTML = mins + ":" + secs + ":" + tenths;
                    increment(time);
                }, 50);

            }
        }
        $("input").on("input", function(e) {
            console.log(e);
            starts();
        });