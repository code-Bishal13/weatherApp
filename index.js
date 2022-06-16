

const searchForm=document.querySelector('.location-search');
const cityValue =document.querySelector('.location-search input');
const cityName=document.querySelector('.city-name p');
const cardBody=document.querySelector('.card-body');
const timeImage=document.querySelector('.card-top img');

const spitOutcelcius=(kelvin)=>{
celcius= Math.round(kelvin-273.15);
return celcius;
}
const isDayTime=(icon)=>{
    console.log("icon",icon)
if(icon.includes('d')){
    return true;
} else{
    return false;
}
}
updateWeatherApp =(city)=>{
    const imgName=city.weather[0].icon;
    var iconurl = "http://openweathermap.org/img/w/" + imgName + ".png";

    cityName.textContent=city.name;
    cardBody.innerHTML=`
    <div class="card-mid row">
                    <div class="col-8 text-center temp">
                        <span>${spitOutcelcius(city.main.temp)}&deg;C</span>
                    </div>
                    <div class="col-4 condition-temp">
                        <p class="condition">${city.weather[0].description}</p>
                        <p class="high">${spitOutcelcius(city.main.temp_max)}&deg;C</p>
                        <p class="low" >${spitOutcelcius(city.main.temp_min)}&deg;C</p>
                    </div>
                </div>

                <div class="icon-container card shadow mx-auto">
                    <img src="${iconurl}" alt=""height="150px, width=150px" >
                </div>
                <div class="card-bottom px-5 py=4 row">
                    <div class="col text-center "> 
                        <p>${spitOutcelcius(city.main.feels_like)}&deg;C</p>
                        <span>Feels like</span>
                    </div><br>
                        
                    <div class=" col text-center"> 
                        <p>${city.main.humidity}</p>
                        <span>Humidity</span>
                    </div>
                </div>

    `;
    if(isDayTime(imgName)){
        console.log('Day');
          timeImage.setAttribute('src','img/day_image.svg');
          if(cityName.classList.contains('text-white')){
            cityName.classList.remove('text-white')
          }else{
            cityName.classList.add('text-black')
          }
          
    }
    else{
        console.log('Night');
        timeImage.setAttribute('src','img/night_image.svg');
        if(cityName.classList.contains('text-black')){
            cityName.classList.remove('text-black')
          }else{
            cityName.classList.add('text-white')
          }
    }
    
    
}

// add addEventListener to form
searchForm.addEventListener('submit',(event)=>{
event.preventDefault();
const citySearched= cityValue.value.trim();
searchForm.reset();

requestCity(citySearched)
.then((data)=>{
    updateWeatherApp(data);
})
.catch((error)=>{console.log(error)})
    
})