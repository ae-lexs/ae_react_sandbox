/* eslint no-shadow: off, no-unused-vars: off */

export enum Scales {
  Celsius = 'Celsius',
  Fahrenheit = 'Fahrenheit',
}

export function toCelsius(fahrenheitTemperature: number): number {
  return (fahrenheitTemperature - 32) * 5 / 9;
}

export function toFahrenheit(celsiusTemperature: number): number {
  return (celsiusTemperature * 9 / 5) + 32;
}
