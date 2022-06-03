$("document").ready(function(){
    $('#submit').click(function() {
        var town = $('#cityInput').val();
        var key = "37d88959184556e363b36952f4e4487b";
        $.ajax({
            url : 'http://api.openweathermap.org/data/2.5/weather?q='+town+'&APPID='+key+'&units=metric',
            method : 'GET',
            dataType : "json",
            success: function(data) {
                var temp = data.main.temp;
                var tempMin = data.main.temp_min;
                var tempMax = data.main.temp_max;
                var feelTemp = data.main.feels_like;
                var humidity = data.main.humidity;
                var cityName = data.name;

                $("#cityText").addClass("d-none");
                $("#cityInput").addClass("d-none");
                $("#submit").addClass("d-none");
                $("#errorMessage").addClass("d-none");

                $("#cityName").removeClass("d-none");
                $("#temp").removeClass("d-none");
                $(".tempMinMax").removeClass("d-none");
                $("#feelTemp").removeClass("d-none");
                $("#humidity").removeClass("d-none");
                
                $("#cityName")[0]['childNodes'][3].innerText = "For the city of " + cityName + ":";
                $("#temp")[0]['childNodes'][3].innerText ="Il fait "+temp+"°C";
                $("#tempMin")[0]['childNodes'][3].innerText =tempMin+"°C";
                $("#tempMax")[0]['childNodes'][3].innerText =tempMax+"°C";
                $("#feelTemp")[0]['childNodes'][3].innerText ="Feels like "+feelTemp+"°C";
                $("#humidity")[0]['childNodes'][3].innerText ="Le taux d'humidité est de "+humidity+"%";
            },
            error: function(data){
                if(data.responseJSON.message == "city not found"){
                    $("#errorMessage").html("City not found, please check spelling");
                }else{
                    $("#errorMessage").html("API error, please try again later");
                }
            }
        });
    });
});