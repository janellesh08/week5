
const getWeatherBtn = document.getElementById("getWeatherBtn")
const weatherDiv = document.getElementById("weatherDiv")
const weatherList = document.getElementById("weatherList")

function getWeather(cityName){
    const city = document.getElementById("cityName").value
    const GET_WEATHER_URL = (`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b5f9e994a7155019f90297b14b662e69`)
    fetch(GET_WEATHER_URL)
        .then(response => {
            return response.json()        
        }).then(result => {
            console.log(result)
            displayWeather(result)
        }).catch((error) => {
            console.log(error)
        })      
    }


function displayWeather(result){
   const weatherInfo = `
    <ul>${result.name}
    <li>Low: ${result.main.temp_min} degrees</li>
    <li>High: ${result.main.temp_max} degrees</li>
    <li>Humidity: ${result.main.humidity}</li>
    </ul>
    `
    weatherDiv.innerHTML = weatherInfo
}



getWeatherBtn.addEventListener("click", function(){
    getWeather()
    displayWeather()


})
