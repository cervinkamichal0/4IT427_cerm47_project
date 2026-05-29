import { SearchBar } from "../components/SearchBar";
import { useWeather } from "../hooks/useWeather";

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

      {data && (
        <div className="weather-result">
          <h3>{data.cityName}</h3>
          <p>
            Teplota: <strong>{data.temperature} °C</strong>
          </p>
          <p>Vlhkost: {data.humidity} %</p>
        </div>
      )}
    </div>
  );
}
