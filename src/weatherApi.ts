import axios from "axios";
import { WeatherApiConfig } from "./types";
import { WeatherApiError } from "./types";
import { WeatherData } from "./types";

export class WeatherApi {
    private apiKey: string
    private baseUrl: string

    constructor(config: WeatherApiConfig) {
        this.apiKey = config.apiKey
        this.baseUrl = config.baseUrl
    }

    async getCurrentWeather(city: string): Promise<WeatherData> {
        try {
            const response = await axios.get(`${this.baseUrl}/current.json`, {
                params: {
                    key: this.apiKey,
                    q: city,
                    aqi: 'no'
                }
            });
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw {
                    code: error.response?.status || 500,
                    message: error.response?.data?.error?.message || 'An error occurred while fetching weather data'
                } as WeatherApiError;
            }
            throw {
                code: 500,
                message: 'An unexpected error occurred'
            } as WeatherApiError;
        }
    }
}



