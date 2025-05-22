# Weather API Wrapper

A TypeScript wrapper for the Weather API that provides easy access to weather data with type safety and utility functions.

## Features

- Get current weather data for any city
- Type-safe API responses
- Unit conversion utilities
- Error handling
- Environment variable configuration

## Installation

```bash
npm install
```

## Configuration

1. Create a `.env` file in the root directory
2. Add your Weather API key:
```
WEATHER_API_KEY=your_api_key_here
WEATHER_API_BASE_URL=https://api.weatherapi.com/v1
```

## Usage

```typescript
import { WeatherApi } from './src/weatherApi';
import { convertCelsiusToFahrenheit } from './src/utils';

// Initialize the API
const weatherApi = new WeatherApi({
    apiKey: process.env.WEATHER_API_KEY || '',
    baseUrl: process.env.WEATHER_API_BASE_URL || ''
});

// Get weather for a city
async function getWeather(city: string) {
    try {
        const weather = await weatherApi.getCurrentWeather(city);
        console.log(`Temperature: ${weather.current.temp_c}°C`);
        console.log(`Temperature: ${convertCelsiusToFahrenheit(weather.current.temp_c)}°F`);
    } catch (error) {
        console.error('Error:', error);
    }
}
```

## Available Methods

### getCurrentWeather(city: string)
Returns current weather data for the specified city.

## Utility Functions

### Temperature Conversion
- `convertCelsiusToFahrenheit(celsius: number): number`
- `convertFahrenheitToCelsius(fahrenheit: number): number`

### Wind Speed Conversion
- `convertKphToMph(kph: number): number`
- `convertMphToKph(mph: number): number`

## Development

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Run in development mode
npm run dev

# Start the compiled version
npm start
```

## License

ISC 