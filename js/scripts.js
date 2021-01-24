$(document).ready(function() {
    $("#searchInput").on("keyup", function(e) {
        var cityname = e.target.value;
        const APIKey = "972adc3384cc972b79a509ab4c6e3894";

        //make request to server
        $.ajax({
            url:`http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIKey}`,
        })
        .done(function(weatherdata) {
            console.log(weatherdata);
        });
    })

})
