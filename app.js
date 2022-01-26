let city = prompt("Введите название города на английском: ")

class City {
    constructor(name, humidity, pressure, wind, img, temp, feels, description, parent){
        this.name = name
        this.humidity = humidity
        this.pressure = pressure
        this.wind = wind
        this.img = img
        this.temp = temp
        this.feels = feels
        this.description = description
        this.parent = document.querySelector(parent);
    }

    render(){
        let city = document.createElement("city")
        city.classList.add("col-3")
        city.innerHTML = `
        <div class="city">
            <div class="left-side">
                <h2>${this.name}</h2>
                <div class="humidity">
                    <span>Humidity: </span>${this.humidity}%
                </div>
                <div class="pressure">
                    <span>Pressure: </span> ${this.pressure} hPa
                </div>
                <div class="wind">
                    <span>Wind: </span> ${this.wind} km/h SEE
                </div>
            </div>
            <div class="right-side">
                <div class="city-img">
                    <img src="http://openweathermap.org/img/w/${this.img}.png" alt="">
                </div>
                <div class="temp">
                    ${this.temp}&deg;c
                </div>
                <div class="feels-like">
                    Feels Like: ${this.feels}&deg;c
                </div>
                <div class="description">
                    ${this.description}
                </div>
            </div>
        </div>`

        this.parent.append(city)
    }
}

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`)
.then((res) => res.json())
.then((data) => {
    new City (data.name, data.main.humidity, data.main.pressure, data.wind.speed, data.weather[0].icon, data.main.temp, data.main.feels_like, data.weather[0].description, ".cities").render()
})

