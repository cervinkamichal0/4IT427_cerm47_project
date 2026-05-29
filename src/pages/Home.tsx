import { Link } from "react-router-dom";
import { SearchBar } from "../components/SearchBar";
import { useWeather } from "../hooks/useWeather";
import { formatTemperature } from "../utils/helpers";

export function Home() {
  const { data, isLoading, error, fetchWeather } = useWeather();

  return (
    <div className="home-page">
      <h2>Hledat počasí</h2>
      
      <SearchBar onSearch={fetchWeather} isLoading={isLoading} />

      {error && (
        <div className="error-message">
          <strong>Chyba:</strong> {error}
        </div>
      )}

      {data && !isLoading && (
        <div className="weather-preview">
          <h3>{data.cityName}</h3>
          <p>Aktuálně: <strong>{formatTemperature(data.temperature)}</strong></p>
          
          <Link to={`/weather/${data.cityName}`} className="detail-link">
            Zobrazit detail a předpověď na dalších 5 dní &rarr;
          </Link>
        </div>
      )}
    </div>
  );
}