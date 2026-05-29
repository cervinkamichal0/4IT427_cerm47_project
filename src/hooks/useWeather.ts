import { useState } from "react";
import type { DailyForecast, WeatherData } from "../types/weather";

export function useWeather() {
  const [data, setData] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = async (city: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=cs&format=json`,
      );
      if (!geoRes.ok)
        throw new Error("Could not communicate with geocoding API.");

      const geoData = await geoRes.json();
      if (!geoData.results?.length) throw new Error("Could not find the city.");

const { latitude, longitude, name } = geoData.results[0];

      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`
      );
      if (!weatherRes.ok) throw new Error('Nepodařilo se stáhnout data o počasí.');

      const weatherData = await weatherRes.json();
      
      const dailyForecast: DailyForecast[] = weatherData.daily.time.map((time: string, index: number) => ({
        date: time,
        maxTemp: weatherData.daily.temperature_2m_max[index],
        minTemp: weatherData.daily.temperature_2m_min[index],
        weatherCode: weatherData.daily.weather_code[index],
      })).slice(1, 6); 
      
      setData({
        cityName: name,
        temperature: weatherData.current.temperature_2m,
        humidity: weatherData.current.relative_humidity_2m,
        weatherCode: weatherData.current.weather_code,
        forecast: dailyForecast // Uložíme předpověď
      });
    } catch (err: unknown) {
      setError((err as Error).message);
      setData(null);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, error, fetchWeather };
}
