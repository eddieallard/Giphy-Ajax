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
$("#add-movie-yo").on("click", function (event) {
    // Preventing the buttons default behavior when clicked (which is submitting a form)
    event.preventDefault();
    // This line grabs the input from the textbox
    var topic = $("#not-movie-input").val().trim();
    console.log(topic);

    // Adding the movie from the textbox to our array
    topics.push(topic);


    // Calling showButtons which handles the processing of topics array
    showButtons();
});

$(document).on("click", "button", function () {
    // In this case, the "this" keyword refers to the button that was clicked
    event.preventDefault();
    var topics = $(this).text().trim();
    console.log(topics)

    // PLACE NON ANIMATED 10 GIF IMAGES ON PAGE WHEN USER CLICKS ON A BUTTON
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=KtSDmHGXP9azrYkXiBni2G0wX2dVhoCN&q=" + topics + "&limit=10&offset=0&rating=PG-13&lang=en";


    // Performing our AJAX GET request
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)

        for (var i = 0; i < 9; i++) {

            // DISPLAY GIF RATINGS UNDER PICTURES
            var gifDiv = $("<div>");
            // SET PARAGRAPH TEXT TO RATING ALSO    
            var pTag = $("<p>").text("rating: " + response.data[i].rating);
            var image = $("<img>");

            var fixedPic = response.data[i].images.fixed_height_still.url
            var animatePic = response.data[i].images.fixed_height.url

            image.attr("src", fixedPic)
            image.attr("data-state", "still");
            image.attr("data-animate", animatePic);
            image.attr("data-still", fixedPic);

            //append img to gifDiv  
            gifDiv.append(image);

            //append gifDiv to your HTML element to hold your gifs
            gifDiv.append(pTag);

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