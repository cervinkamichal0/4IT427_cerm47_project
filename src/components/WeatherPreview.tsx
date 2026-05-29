import { Link } from "react-router-dom";
import type { WeatherData } from "../types/weather";
import { formatTemperature, getWeatherInfo } from "../utils/helpers";

interface WeatherPreviewProps {
  data: WeatherData;
}

export function WeatherPreview({ data }: WeatherPreviewProps) {
  const weather = getWeatherInfo(data.weatherCode);

  return (
    <div className="weather-preview p-6 sm:p-8 rounded-3xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800/40 backdrop-blur-md shadow-xl shadow-slate-100/50 dark:shadow-none hover:shadow-2xl dark:hover:border-slate-700/65 hover:-translate-y-1 transition-all duration-300 w-full mt-8 flex flex-col gap-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-slate-100 tracking-tight">
            {data.cityName}
          </h3>
          <p className="text-sm font-semibold text-slate-650 dark:text-slate-300 mt-1">
            {weather.description}
          </p>
        </div>
        <span className="text-4xl sm:text-5xl">{weather.icon}</span>
      </div>

      <div className="flex items-baseline gap-2">
        <p className="text-sm text-slate-600 dark:text-slate-400 flex items-baseline">
          Aktuálně: <strong className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-slate-55 ml-2">{formatTemperature(data.temperature)}</strong>
        </p>
      </div>

      <div className="w-full flex items-center justify-between pt-4 border-t border-slate-200/50 dark:border-slate-800/40 text-xs sm:text-sm">
        <span className="font-bold text-slate-700 dark:text-slate-200">
          Vlhkost vzduchu: <span className="font-extrabold text-blue-700 dark:text-sky-350">{data.humidity} %</span>
        </span>
        <Link
          to={`/weather/${data.cityName}`}
          className="detail-link font-extrabold text-blue-600 dark:text-sky-400 hover:text-blue-500 dark:hover:text-sky-300 flex items-center gap-1 transition-colors duration-300"
        >
          Zobrazit detail a předpověď na dalších 5 dní &rarr;
        </Link>
      </div>
    </div>
  );
}
