var feels = ["Awkward", "Drunk", "Hungry", "Mind Blown", "Bored", "Excited", "Confused", "Frustrated", "Tired", "Embarrased", "Suspicious", "Emo"];
				  

      // displayFeels function re-renders the HTML to display the appropriate content
      function displayFeels() {

        var feels = $(this).attr("data-name");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + feels + "&limit=15&api_key=nJEWn8ZepjJ0pKZntjqbzMEhs2HZ5uy5";

    $.ajax({
         url: queryURL,
         method: "GET"
       }).then(function(response) {
         var feelsDiv = $("<div class='feels'>");
            for (var i = 0; i < response.data.length; i++){
                console.log(response.data[i].rating)

         var rating = response.data[i].rating;
         var pOne = $("<p>").text(rating[i]);
         feelsDiv.append(pOne);
         var giphyURL = response.data[i].images.fixed_height.url;
          var giphy = $("<img>").attr("src", giphyURL);
         feelsDiv.append(giphy);
            
          $("#feels-view").html(feelsDiv);
         }
       });
     }
      // Function for displaying movie data
      function renderButtons() {
        // Deleting the movies prior to adding new movies
        $("#buttons-view").empty();
        // Looping through the array of movies
        for (var i = 0; i < feels.length; i++) {
			
			console.log(feels[i])
          // Then dynamicaly generating buttons for each movie in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var a = $("<button>");
          // Adding a class of movie-btn to our button
          a.addClass("feels-btn");
          // Adding a data-attribute
          a.attr("data-name", feels[i]);
          // Providing the initial button text
          a.text(feels[i]);
          // Adding the button to the buttons-view div
          $("#buttons-view").append(a);
        }
      }
      // This function handles events where a movie button is clicked
      $("#add-feels").on("click", function(event) {
        event.preventDefault();
        // This line grabs the input from the textbox
        var feel = $("#feels-input").val().trim();
        // Adding movie from the textbox to our array
        feels.push(feel);
        // Calling renderButtons which handles the processing of our movie array
        renderButtons();
      });
      // Adding a click event listener to all elements with a class of "movie-btn"
      $(document).on("click", ".feels-btn", displayFeels);
      // Calling the renderButtons function to display the intial buttons
      renderButtons();