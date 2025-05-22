import dotenv from 'dotenv';
import { WeatherApi } from './weatherApi';
import { convertCelsiusToFahrenheit, convertKphToMph } from './utils';
import * as readline from 'readline';


dotenv.config();


const weatherApi = new WeatherApi({
    apiKey: process.env.WEATHER_API_KEY || '',
    baseUrl: 'https://api.weatherapi.com/v1'
});


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


async function getWeatherForCity(city: string) {
    try {
        const weatherData = await weatherApi.getCurrentWeather(city);
        console.log(`Weather in ${weatherData.location.name}:`);
        console.log(
            `Temperature: ${weatherData.current.temp_c}°C (${convertCelsiusToFahrenheit(weatherData.current.temp_c).toFixed(1)}°F)`
        );
        console.log(
            `Feels like: ${weatherData.current.feelslike_c}°C (${convertCelsiusToFahrenheit(weatherData.current.feelslike_c).toFixed(1)}°F)`
        );
        console.log(
            `Wind: ${weatherData.current.wind_kph} km/h (${convertKphToMph(weatherData.current.wind_kph).toFixed(1)} mph)`
        );
        console.log(`Condition: ${weatherData.current.condition.text}`);
        console.log(`Humidity: ${weatherData.current.humidity}%`);
    } catch (error) {
        console.error('Error fetching weather:', error);
    }
}


rl.question('Enter a city name: ', (city) => {
    getWeatherForCity(city.trim());
    rl.close();
});



