var topics = ["Sports", "News", "Movies", "Cars", "Techy"];


// Event listener for all button elements
function showButtons() {
    $(".buttonsforthepage").empty();
    for (var i = 0; i < topics.length; i++) {
        var gifButtons = $("<button>");
        gifButtons.attr("data-name", topics[i]);
        gifButtons.addClass("button")
        gifButtons.text(topics[i]);
        $(".buttonsforthepage").append(gifButtons);
    }
}



$(document).on("click", ".button", function () {
    // In this case, the "this" keyword refers to the button that was clicked
    var topics = $(this).attr("data-name");

    // PLACE NON ANIMATED 10 GIF IMAGES ON PAGE WHEN USER CLICKS ON A BUTTON
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        topics + "&api_key=KtSDmHGXP9azrYkXiBni2G0wX2dVhoCN&limit=10";


    // Performing our AJAX GET request
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

            var results = response.data

            for (var i = 0; i < results.length; i++) {

                // DISPLAY GIF RATINGS UNDER PICTURES
                var gifDiv = $("<div>");
                var pTag = $("<p>");
                var image = $("<img>");

                var fixedPic = results[i].images.fixed_height_still.url
                var animatePic = results[i].images.fixed_height.url

                var ratePic = results[i].rating

                image.attr("src", fixedPic)
                image.attr("data-state", "still");
                image.attr("data-animate", animatePic);
                image.attr("data-still", fixedPic);

                //append img to gifDiv  
                gifDiv.append(image);
                //append gifDiv to your HTML element to hold your gifs

                //create a var for <p>                  
                //set paragraph text to the rating. (HINT: You named that shit "Rating" like 5 lines up)                                  
                //append the <p> to gifDiv too.


                // CREATE BUTTONS IN THE HTML
                $(".gifs-appear-here").prepend(gifDiv);

            };
            });
    

        // STILL GIPH IMAGE ANIMATES WHEN CLICKED ON, GIF IMAGE STOPPED WHEN PRESSED
        $(document).on("click", "img", function () {
            var state = $(this).attr("data-state");
            if (state === "still") {
                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-state", "animate");
            } else {
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "still");
            }
        });


});
showButtons();