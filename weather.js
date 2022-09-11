let weather = {
    apikey: "c32c6c0086a9b1334b282c78fe461c7f",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=metric&appid=" 
            + this.apikey  
            
        )
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
    displayWeather: function(data){

    }
};