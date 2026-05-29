import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useWeather } from "../hooks/useWeather";
import { WeatherCard } from "../components/WeatherCard";
import { formatTemperature, getWeatherInfo } from "../utils/helpers";

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
    <div className="detail-page w-full flex flex-col gap-6 mt-4">
      <Link
        to="/"
        className="back-link inline-flex items-center gap-2 self-start px-5 py-2.5 rounded-2xl text-sm font-bold bg-white/70 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800/40 backdrop-blur-md text-slate-600 dark:text-slate-350 hover:text-blue-600 dark:hover:text-sky-400 hover:border-blue-200 dark:hover:border-slate-700/60 shadow-lg shadow-slate-100/30 dark:shadow-none hover:-translate-x-1 transition-all duration-300"
      >
        ← Zpět na vyhledávání
      </Link>

      {isLoading && (
        <div className="loading flex flex-col items-center justify-center py-20 gap-4">
          <div className="w-12 h-12 border-4 border-blue-600/20 border-t-blue-600 dark:border-sky-400/20 dark:border-t-sky-400 rounded-full animate-spin"></div>
          <p className="text-slate-500 dark:text-slate-400 font-bold text-sm tracking-wide">
            Načítám data z meteostanice...
          </p>
        </div>
      )}

      {error && (
        <div className="error-message w-full p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200/50 dark:border-rose-900/40 text-rose-700 dark:text-rose-300 text-sm flex items-center gap-2">
          <strong className="font-bold flex items-center gap-1">
            <span>⚠️</span> Chyba:
          </strong>{" "}
          {error}
        </div>
      )}

      {data && !isLoading && (
        <div className="detail-content w-full flex flex-col gap-8">
          <WeatherCard data={data} />

          <div className="forecast-container mt-2 flex flex-col gap-4">
            <h3 className="text-xl sm:text-2xl font-black text-slate-850 dark:text-slate-100 tracking-tight flex items-center gap-2">
              <span>📅</span> Předpověď na další dny
            </h3>
            
            <ul className="forecast-list grid grid-cols-2 md:grid-cols-5 gap-3.5 w-full p-0 m-0 list-none">
              {/* Zde iterujeme přes pole předpovědí */}
              {data.forecast.map((day, index) => {
                const dayWeather = getWeatherInfo(day.weatherCode);
                const dayName = new Date(day.date).toLocaleDateString("cs-CZ", { weekday: "short" });

                return (
                  <li
                    key={index}
                    className="forecast-item p-4.5 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800/40 backdrop-blur-md flex flex-col items-center justify-center gap-2 text-center shadow-md shadow-slate-100/30 dark:shadow-none hover:shadow-lg dark:hover:border-slate-700/60 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <span className="text-[10px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                      {dayName}
                    </span>
                    <span className="forecast-date text-xs font-black text-slate-800 dark:text-slate-200">
                      {day.date}
                    </span>
                    <span className="text-3xl my-1.5" title={dayWeather.description}>
                      {dayWeather.icon}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 leading-tight">
                      {dayWeather.description}
                    </span>
                    <span className="forecast-temps text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">
                      Min: {formatTemperature(day.minTemp)} | Max:{" "}
                      <strong className="text-blue-600 dark:text-sky-400 font-black">
                        {formatTemperature(day.maxTemp)}
                      </strong>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
