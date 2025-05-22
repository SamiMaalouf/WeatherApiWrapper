export interface WeatherData {
    location: {
        name: string
        region: string
        country: string
        lat: number
        lon: number
        localtime: string
    }

    current: {
        temp_c: number
        temp_f :number
        condition: {
            text: string
            icon: string
            code: number
        }
        wind_kph: number
        wind_mph: number
        humidity: number
        feelslike_c: number
        feelslike_f : number

    }
}

export interface WeatherApiConfig {
    apiKey: string
    baseUrl: string
}

export interface WeatherApiError {
    code: number
    message: string
}
