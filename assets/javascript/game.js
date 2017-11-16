$(document).ready(function () {

        var maxNumber = Math.floor(Math.random() * (119) + 2);
        $("#number-to-guess").text(targetNumber);

        var counter = 0;
        var green = Math.floor(Math.random() * 12) + 1;
        var yellow = Math.floor(Math.random() * 12) + 1;
        var purple = Math.floor(Math.random() * 12) + 1;
        var blue = Math.floor(Math.random() * 12) + 1;

        $(".green").on("click"),
            function () {
                counter += greenScore;
                $(".hash").html(counter);
            }
        $(".yellow").on("click"),
            function () {
                counter += yellowScore;
                $(".hash").html(counter);
            }
        $(".purple").on("click"),
            function () {
                counter += greenScore;
                $(".hash").html(counter);
            }
        $(".black").on("click"),
            function () {
                counter += greenScore;
                $(".hash").html(counter);
            }

var wons=[];
var losses=[];

    if (counter === maxNumber) {
        var win= 0 ;
        wins++;
        $(".hash").html("You have made it out of the Upside Down, now go join the gang!")
        wins.push(wons);
    }
    
    else if (counter !==maxNumber){
        var loss=0;
        loss++;
        $(".hash").html("You were caught by the Demogorgan and are stuck in the Upside Down...");
        loss.push(losses);
    }

});