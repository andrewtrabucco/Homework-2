$("#portfolio").on("click", function (event) {
    event.preventDefault()
    $(".places-section").removeClass("hide")


    $("#information").text(city + " Information");



    // SECOND API FUNCTION BEGINS HERE 
    var yelpURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=" + city;

    $.ajax({
        url: yelpURL,
        method: "GET",
        headers: { "Authorization": "Bearer MJ5-bJhkCujBxJVttLJ0vxzLgs5ge3wRewkDm32IiqjBo69dYZkqZ-oz679UL0x0bTYNRiJHmfBO1JXrB8W7b4djrkYhgMFUgpRmcdhcy4NMbz7SSqbEhpeDo8NiX3Yx" },
        success: function (data) {
            console.log(data)
            console.log(data.businesses[0].name);
            console.log(data.businesses[0].rating);
            console.log(data.businesses[0].image_url);
            console.log(data.businesses[0].url);
            console.log(data.businesses[0].display_phone);


            // Card One //
            $(".card-title-1").text(data.businesses[0].name);
            $("#card-image-1").attr("src", data.businesses[0].image_url);
            $(".card-ranking-1").html("<i class=\"far fa-star\"></i> rating: " + data.businesses[0].rating);
            $(".card-phone-1").html("<i class=\"fas fa-mobile-alt\"></i> " + data.businesses[0].display_phone);
            $("#card-link-1").attr("href", data.businesses[0].url);


            // Card Two //
            $(".card-title-2").text(data.businesses[1].name);
            $("#card-image-2").attr("src", data.businesses[1].image_url);
            $(".card-ranking-2").html("<i class=\"far fa-star\"></i> rating: " + data.businesses[1].rating);
            $(".card-phone-2").html("<i class=\"fas fa-mobile-alt\"></i> " + data.businesses[1].display_phone);
            $("#card-link-2").attr("href", data.businesses[1].url);

            // Card Three //
            $(".card-title-3").text(data.businesses[2].name);
            $("#card-image-3").attr("src", data.businesses[2].image_url);
            $(".card-ranking-3").html("<i class=\"far fa-star\"></i> rating: " + data.businesses[2].rating);
            $(".card-phone-3").html("<i class=\"fas fa-mobile-alt\"></i> " + data.businesses[2].display_phone);
            $("#card-link-3").attr("href", data.businesses[2].url);

             // Card Four //
            $(".card-title-4").text(data.businesses[3].name);
            $("#card-image-4").attr("src", data.businesses[3].image_url);
            $(".card-ranking-4").html("<i class=\"far fa-star\"></i> rating: " + data.businesses[3].rating);
            $(".card-phone-4").html("<i class=\"fas fa-mobile-alt\"></i> " + data.businesses[3].display_phone);
            $("#card-link-4").attr("href", data.businesses[3].url);

        }
    });
})





// API KEY (YELP): MJ5-bJhkCujBxJVttLJ0vxzLgs5ge3wRewkDm32IiqjBo69dYZkqZ-oz679UL0x0bTYNRiJHmfBO1JXrB8W7b4djrkYhgMFUgpRmcdhcy4NMbz7SSqbEhpeDo8NiX3Yx


