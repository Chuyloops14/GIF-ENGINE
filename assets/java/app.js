var topics = ["cat", "hippo", "lion", "dolphin", "tiger", "dog",
"pig", "panda","gorilla", "elephant"];

var numberOfGIFs = 10
var cutOffRating = "PG";

function renderButtons(){
    for( var i = 0; i< topic.length; i++) {
        var newButton = $("<button>");
        newButton.addClass("btn");
        newButton.addclass("cartoon-button");
        newButton.text(topics[i]);
        $("#button-container").append(newButton);
    }
    $(".animal-button").unbind("click");

    $(".animal-button").on("click", function(){
        $(".gif-image").unbind("click");
        $("#gif-container").unbind("click");
        $("#gif-container").removeClass("dotted-border");
        populateGIFContainer($(this).text());
    });
    
}

function addButton(show){
    if(topics.indexOf(show) === -1) {
        topics.push(show);
        $("#button-container").empty();
        renderButtons();
    }
}

