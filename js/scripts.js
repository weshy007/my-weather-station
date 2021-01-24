$(document).ready(function() {
    $("#searchInput").on("keyup", function(e) {
        var cityname = e.target.value;
        const APIKey = "972adc3384cc972b79a509ab4c6e3894";

        //make request to server
        $.ajax({
            url:`http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIKey}&units=metric`,
        })
        .done(function(weatherdata) {
            console.log(weatherdata);

            $("#profile").html(
               `
               <div class="container">
               <div class="row">

               <div class="card" style="width: 28rem;">
                <img class="card-img-top" src="http://openweathermap.org/img/wn/${weatherdata.weather[0].icon}@2x.png" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Weather: ${weatherdata.weather[0].description}</h5>
                    <p class="card-text">The Temperature in ${cityname} is  ${weatherdata.main.temp}&#8451; but it feels like it is ${weatherdata.main.feels_like}&#8451; </p>
                    <a href="https://www.google.com/search?q=${cityname}" class="btn btn-primary">Learn More About The Place</a>
                </div>
                </div>

                </div>
                </div>
                `
            );
        });
    })

})
