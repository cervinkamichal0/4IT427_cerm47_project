import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useWeather } from "../hooks/useWeather";
import { WeatherCard } from "../components/WeatherCard";
import { formatTemperature } from "../utils/helpers";

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

      {data && !isLoading && (
        <div className="detail-content">
          <WeatherCard data={data} />

          <div className="forecast-container">
            <h3>Předpověď na další dny</h3>
            <ul className="forecast-list">
              {/* Zde iterujeme přes pole předpovědí */}
              {data.forecast.map((day, index) => (
                <li key={index} className="forecast-item">
                  <span className="forecast-date">{day.date}</span>
                  <span className="forecast-temps">
                    Min: {formatTemperature(day.minTemp)} | Max:{" "}
                    <strong>{formatTemperature(day.maxTemp)}</strong>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
