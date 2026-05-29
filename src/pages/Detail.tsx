import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useWeather } from "../hooks/useWeather";
import { WeatherCard } from "../components/WeatherCard";

export function Detail() {
  const { city } = useParams();
  const { data, isLoading, error, fetchWeather } = useWeather();

  useEffect(() => {
    if (city) {
      fetchWeather(city);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);

  return (
    <div className="detail-page">
      <Link to="/" className="back-link">
        ← Zpět na vyhledávání
      </Link>

      {isLoading && <p className="loading">Načítám data...</p>}

      {error && (
        <div className="error-message">
          <strong>Chyba:</strong> {error}
        </div>
      )}

      {data && !isLoading && <WeatherCard data={data} />}
    </div>
  );
}
