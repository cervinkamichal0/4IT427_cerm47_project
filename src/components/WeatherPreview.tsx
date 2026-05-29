import { Link } from "react-router-dom";
import type { WeatherData } from "../types/weather";
import { formatTemperature } from "../utils/helpers";

interface WeatherPreviewProps {
  data: WeatherData;
}

export function WeatherPreview({ data }: WeatherPreviewProps) {
  return (
    <div className="weather-preview">
      <h3>{data.cityName}</h3>
      <p>
        Aktuálně: <strong>{formatTemperature(data.temperature)}</strong>
      </p>

      <Link to={`/weather/${data.cityName}`} className="detail-link">
        Zobrazit detail a předpověď na dalších 5 dní &rarr;
      </Link>
    </div>
  );
}
