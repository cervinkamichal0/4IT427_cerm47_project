import type { WeatherData } from "../types/weather";
import { formatTemperature } from "../utils/helpers";

interface WeatherCardProps {
  data: WeatherData;
}

export function WeatherCard({ data }: WeatherCardProps) {
  return (
    <div className="weather-card">
      <div className="weather-header">
        <h2>{data.cityName}</h2>
      </div>
      <div className="weather-body">
        <p className="temperature">
          Teplota: <strong>{formatTemperature(data.temperature)}</strong>
        </p>
        <p className="humidity">Vlhkost: {data.humidity} %</p>
      </div>
    </div>
  );
}
