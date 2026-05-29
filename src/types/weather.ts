export interface DailyForecast {
  date: string;
  maxTemp: number;
  minTemp: number;
  weatherCode: number;
}

export interface WeatherData {
  cityName: string;
  temperature: number;
  humidity: number;
  weatherCode: number;
  forecast: DailyForecast[];
}
