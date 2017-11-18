$(document).ready(function () {

    // var targetNumber = Math.floor(Math.random() * (119) + 2);
    var targetNumber = randomIntFromInterval(90, 100);

    $("#number-to-guess").html(targetNumber);

    function randomIntFromInterval(min, max) {
        var maxNumber = Math.floor(Math.random() * (max - min + 1) + min);
        return maxNumber
    }


    var wons = 0;
    var losses = 0;
    var win = 0;
    var loss = 0;
    var counter = 0;




    maxNumberValues = [];

    for (var i = 0; i < 4; i++) {

        var maxNumber = randomIntFromInterval(5, 10);
        maxNumberValues.push(maxNumber)
    }

    // var maxNumber = randomIntFromInterval(10, 30)

    $("#green").attr("data-CrystalValue", maxNumberValues[0]);
    $("#yellow").attr("data-CrystalValue", maxNumberValues[1]);
    $("#purple").attr("data-CrystalValue", maxNumberValues[2]);
    $("#black").attr("data-CrystalValue", maxNumberValues[3]);


    $("img").on("click", function () {
        // winValue = $("#win").html;
        // lossvalue = $("#losses").html;
        var CrystalValue = $(this).attr("data-CrystalValue");

        CrystalValue = parseInt(CrystalValue);
        counter += CrystalValue;

        $(".hash").html(counter);

        if (counter === targetNumber) {
            wons++;
            alert(" You win! You have made it out of the Upside Down, now go join the gang!");
            $(".wons").html(wons);
            // $("#points").html("You have made it out of the Upside Down, now go join the gang!")

            counter = 0;
        } else if (counter > targetNumber) {
            losses++;
            alert(" You lost! You were caught by the Demogorgan and are now stuck in the Upside Down forever...");
            $(".losses").html(losses);
            counter = 0;
            // $("#points").html("You were caught by the Demogorgan and are stuck in the Upside Down...")

        }

    });
});



// $("#green").on("click", function () {
//         counter += green;
//         $(".hash").html(counter);
//     });
//     $("#yellow").on("click", function () {
//         counter += yellow;
//         $(".hash").html(counter);
//     });
//     $("#purple").on("click", function () {
//         counter += purple;
//         $(".hash").html(counter);
//     });
//     $("#black").on("click", function () {
//         counter += black;
//         $(".hash").html(counter);
//     });

// var counter = 0;
// var green = Math.floor(Math.random() * 12) + 1;
// var yellow = Math.floor(Math.random() * 12) + 1;
// var purple = Math.floor(Math.random() * 12) + 1;
// var black = Math.floor(Math.random() * 12) + 1;

//     if (counter === targetNumber) {
//         wins++;
//         // $(".hash").html("You have made it out of the Upside Down, now go join the gang!")
//         wins.push("#wons");
//     } else if (counter > targetNumber) {
//         loss++;
//         $(".hash").html("You were caught by the Demogorgan and are stuck in the Upside Down...");
//         loss.push("#losses");
//     }

// });