$(document).ready(function () {
    var targetNumber = Math.floor(Math.random() * (119) + 2);
    $("#number-to-guess").text(targetNumber);

    // var maxNumber = Math.floor(Math.random() * (119) + 2);
    // // $("#number-to-guess").text(maxNumber);
    var wons = [];
    var losses = [];
    var win = 0;
    var loss = 0;

    function randomIntFromInterval(min, max) {
        var maxNumber = Math.floor(Math.random() * (max - min + 1) + min);
        return maxNumber
    }

    maxNumberValues = [];

    for (var i = 0; i < 4; i++) {

        var maxNumber = randomIntFromInterval(20, 30);
        maxNumberValues.push(maxNumber)
    }

    // var maxNumber = randomIntFromInterval(20, 30)

    var counter = 0;
    $("#green").attr("data-CrystalValue", maxNumberValues[0]);
    $("#yellow").attr("data-CrystalValue", maxNumberValues[0]);
    $("#purple").attr("data-CrystalValue", maxNumberValues[0]);
    $("#black").attr("data-CrystalValue", maxNumberValues[0]);


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

    // $("img").on("click", function () {
    //     winValue = $("#win").html;
    //     lossvalue = $("#losses").html;
    //     var CrystalValue = $(this).attr("data-CrystalValue");

    //     CrystalValue = parseInt(CrystalValue);
    //     counter += CrystalValue;

    //     $("#").html(counter);

    //     if (counter === maxNumber) {
    //         wins++;
    //         $("#points").html("You have made it out of the Upside Down, now go join the gang!")
    //         $("#wons").html(win);
    //         counter = 0;
    //     } else if (counter > maxNumber) {
    //         losses++;
    //         $("#points").html("You were caught by the Demogorgan and are stuck in the Upside Down...")
    //         $("#loss").html(losses);
    //         counter = 0;
    //     }
    });




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