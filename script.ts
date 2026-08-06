interface WeatherAsset {
    icon: string;
    video: string;
}

interface WeatherResponse {
    cod: number;
    message?: string;
    name: string;

    main: {
        temp: number;
        humidity: number;
    };

    weather: {
        main: string;
        description: string;
    }[];

    wind: {
        speed: number;
    };
}
type WeatherType =
    | "Clear"
    | "Clouds"
    | "Rain"
    | "Thunderstorm"
    | "Drizzle"
    | "Mist"
    | "Fog"
    | "Haze";
    const weatherAssets: Record<WeatherType, WeatherAsset> = {

   Clear: {  
    icon: "/assets/icons/sunny.png",
    video: "/assets/video/sunny.mp4"
  },

  Clouds: {
    icon: "/assets/icons/cloudy.png",
    video: "/assets/video/cloudy.mp4"
  },

  Rain: {
    icon: "/assets/icons/rain.png",

    video: "/assets/video/rain.mp4"
  },

  Thunderstorm: {
    icon: "/assets/icons/storm.png",
    video: "/assets/video/rain.mp4"
  },

  Drizzle: {
    icon: "/assets/icons/rain.png",
    video: "/assets/video/rain.mp4"
  },

  Mist: {
    icon: "/assets/icons/mist.png",
    video: "/assets/video/cloudy.mp4"
  },

  Fog: {
    icon: "/assets/icons/mist.png",
    video: "/assets/video/cloudy.mp4"
  },

  Haze: {
    icon: "/assets/icons/mist.png",
    video: "/assets/video/cloudy.mp4"
  }
};
const apiKey = import.meta.env.VITE_API_KEY;

async function getWeather(): Promise<void> {

    const cityInput=document.getElementById("cityInput");

    if(!(cityInput instanceof HTMLInputElement)){
        return;
    }

    const city=cityInput.value.trim();

    if(city===""){
        alert("Masukkan nama kota.");
        return;
    }

    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=id`;

    try{

        const response=await fetch(url);

        const data:WeatherResponse=await response.json();

        if(data.cod!==200){
            alert(data.message);
            return;
        }

        updateUI(data);

    }catch(error){

        console.error(error);

        alert("Gagal mengambil data.");

    }

}
function updateUI(data:WeatherResponse):void{

    const cityName=document.getElementById("cityName");
    const temperature=document.getElementById("temperature");
    const description=document.getElementById("description");
    const humidity=document.getElementById("humidity");
    const wind=document.getElementById("wind");

    if(
        !cityName||
        !temperature||
        !description||
        !humidity||
        !wind
    ){
        return;
    }

    cityName.textContent=data.name;

   temperature.textContent = `${Math.round(data.main.temp)}°C`;

// Ambil data cuaca pertama
const weather = data.weather[0];

// Cek apakah ada
if (!weather) {
    alert("Data cuaca tidak tersedia.");
    return;
}

description.textContent = weather.description;

humidity.textContent = `${data.main.humidity}%`;

wind.textContent = `${data.wind.speed} m/s`;

changeWeatherDisplay(weather.main);
}
function changeWeatherDisplay(weather:string):void{

    const icon=document.getElementById("weatherIcon");
    const bgVideo=document.getElementById("bgVideo");
    const videoSource=document.getElementById("videoSource");

    if(
        !(icon instanceof HTMLImageElement)||
        !(bgVideo instanceof HTMLVideoElement)||
        !(videoSource instanceof HTMLSourceElement)
    ){
        return;
    }

    const selected=
        weatherAssets[weather as WeatherType] ??
        weatherAssets.Clouds;

    icon.src=selected.icon;

    videoSource.src=selected.video;

    bgVideo.load();

    bgVideo.play().catch(console.error);

}

const searchBtn = document.getElementById("searchBtn");

if (searchBtn instanceof HTMLButtonElement) {
    searchBtn.addEventListener("click", () => {
        getWeather();
    });
}
const cityInput = document.getElementById("cityInput");

if (cityInput instanceof HTMLInputElement) {

    cityInput.addEventListener("keydown", (event: KeyboardEvent) => {

        if (event.key === "Enter") {
            getWeather();
        }

    });

}