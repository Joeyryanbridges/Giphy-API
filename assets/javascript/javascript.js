

var emotions = ["Happy", "Sad", "Excited", "Tired", "Depressed", "Horny", "Jealous", "Frustrated", "Loved", "Disgusted", "Shocked" ];

      // displayMovieInfo function re-renders the HTML to display the appropriate content
      function displayEmotionInfo() {

        var emotions = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + emotions + "nJEWn8ZepjJ0pKZntjqbzMEhs2HZ5uy5";
        
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
          console.log(response);

      }
    )}