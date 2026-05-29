import { SearchBar } from "../components/SearchBar";
import { WeatherPreview } from "../components/WeatherPreview"; // <-- Nový import
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

      {/* Zde jsme původní HTML nahradili naší novou komponentou */}
      {data && !isLoading && <WeatherPreview data={data} />}
    </div>
  );
}