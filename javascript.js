$(document).ready(function(){

$('#search-btn').on("click", function(){

    
    var key = "yTBgKH4fFHGdQ6eAEOpfJ1habWnN0kA4";
    var searchTerm = $('#topic-search').val();
    var numResults = $('#num-results').val();
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key="+key+"fq=source:('The New York Times')fq="+searchTerm;

    $.ajax({
        url: queryURL,
        method: "GET",
        success : function(response) {
        //do something
        var results = response.data;
          console.log(response);

        //   for (var i = 0; i < numResults; i++) {
        //     var articleDiv = $("<div>");

        //     var heading = results[i].r;

        //     var p = $("<p>").text("Rating: " + rating);

        //     var personImage = $("<img>");
        //     personImage.attr("src", results[i].images.fixed_height.url);

        //     gifDiv.prepend(p);
        //     gifDiv.prepend(personImage);

        //     $("#gifs-appear-here").prepend(gifDiv);
        //   }
    },
    error : function(request, status, error ) {
        if (request.status !== 200) {
            console.log("an error occured");
        }
    }
    });

}); //end of button funciton

}); //end of document ready