$("document").ready(function(){
    $('#submit').click(function() {
        var town = $('#finder').val();
        var key = "37d88959184556e363b36952f4e4487b";
        $.ajax({
            url : 'http://api.openweathermap.org/data/2.5/weather?q='+town+'&APPID='+key+'&units=metric',
            method : 'GET',
            dataType : "json",
            success: function(data) {
                console.log(data);
                console.log(data.main.temp);
                var html = data.main.temp;
                $("#temperature").html("Il fait "+html+"°C");
                $("#ville").html(town+" :");
            },
        });
    });
});