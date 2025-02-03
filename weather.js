const apikey = 'b6a9ca52bb5caf7f33019984f8f90625'
const apilink = `https://api.openweathermap.org/data/2.5/weather?units=metric&`
const temp = document.getElementById('temp')
const city = document.getElementById('city')
const humid = document.getElementById('humidity')
const cloudse= document.getElementById('clouds')
const search = document.getElementById('search')
const icon = document.getElementById('icon')
const weath = document.getElementById('weath')
const weatherdiv = document.getElementById('weather')

async function getWeather(city) {
  const response = await fetch(apilink + `q=${city}&appid=${apikey}`)
  var data = await response.json()
  temp.innerHTML = Math.round(data.main.temp) + '°C'
  cityname.innerHTML = data.name
    humid.innerHTML = data.main.humidity + '%'
    cloudse.innerHTML = data.clouds.all + '%'
    weath.innerHTML = data.weather[0].description


    if(data.weather[0].main == 'Clouds' || data.weather.main == 'Smoke' || data.weather.main == 'Haze' || data.weather.main == 'Dust' || data.weather.main == 'Fog' || data.weather.main == 'Sand' || data.weather.main == 'Dust' || data.weather.main == 'Ash' || data.weather.main == 'Squall'){
        icon.src = "https://img.icons8.com/?size=100&id=V7GVddKxfSq4&format=png&color=F25081"
        
    }   

    
    else if(data.weather[0].main == 'Clear'){
        icon.src = "https://img.icons8.com/?size=100&id=84045&format=png&color=F25081"


    }
    else if(data.weather[0].main == 'Mist'){
        icon.src = "https://img.icons8.com/?size=100&id=APWzt66wNtrK&format=png&color=F25081"


    }
    else if(data.weather[0].main == 'Rain'){
        icon.src = "https://img.icons8.com/?size=100&id=UJ4sPoxNc5ZA&format=png&color=F25081"


    }
    else if(data.weather[0].main == 'Snow'){
        icon.src = "https://img.icons8.com/?size=100&id=HNANhCpYZBWp&format=png&color=F25081"


    }
    else if(data.weather[0].main == 'Thunderstorm'){
        icon.src = "https://img.icons8.com/?size=100&id=AQrRKilZuU3V&format=png&color=F25081"

    }   

    console.log(data.weather[0].description);

    
    
  

}


search.addEventListener('click', () => {
  getWeather(city.value)
  weatherdiv.style.display = "block"

})



