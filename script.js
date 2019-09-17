var topics = ["Sports", "News", "Movies", "Cars", "Techy"];


// Event listener for all button elements
function showButtons() {
    $(".buttonsforthepage").empty();
    for (var i = 0; i < topics.length; i++) {
        var gifbuttons = $("<button>");
        gifbuttons.attr("type", "button");
        gifbuttons.text(topics[i]);
        $(".buttonsforthepage").append(gifbuttons);
    }
}
showButtons();


$("button").on("click", function () {
    // In this case, the "this" keyword refers to the button that was clicked
    var topic = $(this).text().trim();

    // PLACE NON ANIMATED 10 GIF IMAGES ON PAGE WHEN USER CLICKS ON A BUTTON
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        topic + "&api_key=KtSDmHGXP9azrYkXiBni2G0wX2dVhoCN&limit=10";


    // Performing our AJAX GET request
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    });
    // After the data comes back from the API


    // FOR LOOP TO APPEND A BUTTON FOR EACH STRING
    for (var i = 0; i < 9; i++) {

    // DISPLAY GIF RATINGS UNDER PICTURES
        var gifDiv = $("<div>");
        var pTag = $("<p>");
        var image = $("<img>");

        var fixedPic = response.data[i].images.fixed_height_still.url
        var animatePic = response.data[i].images.fixed_height.url

        var ratePic = response.data[i].rating

        image.attr("src", fixedPic)
        image.attr("data-state", "still", fixedPic)




        



        // CREATE BUTTONS IN THE HTML
        $(".gifs-appear-here").append(button);

        // STILL GIPH IMAGE ANIMATES WHEN CLICKED ON, GIF IMAGE STOPPED WHEN PRESSED
        $(".gif").on("click", function () {
            var state = $(this).attr("data-state");
            if (state === "still") {
                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-state", "animate");
            } else {
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "still");
            }
        });


        // ADD FORM TO PAGE THAT TAKES VALUE FROM INPUT BOX AND ADDS TO TOPICS ARRAY

        // MAKE A FUNCTION THAT TAKES EACH TOPIC IN ARRAY AND REMAKES THE BUTTONS ON PAGE

    }
});