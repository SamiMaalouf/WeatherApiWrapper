export function convertCelsiusToFahrenheit(celsius: number): number {
    return (celsius * 9/5) + 32;
}

export function convertFahrenheitToCelsius(fahrenheit: number): number {
    return (fahrenheit - 32) * 5/9;
}

export function convertKphToMph(kph: number): number {
    return kph * 0.621371;
}

export function convertMphToKph(mph: number): number {
    return mph * 1.60934;
}
