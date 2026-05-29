import type { WeatherData } from "../types/weather";
import { formatTemperature, getWeatherInfo } from "../utils/helpers";

interface WeatherCardProps {
  data: WeatherData;
}

export function WeatherCard({ data }: WeatherCardProps) {
  const weather = getWeatherInfo(data.weatherCode);

  return (
    <div className="weather-card p-6 sm:p-8 rounded-3xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800/40 backdrop-blur-md shadow-xl shadow-slate-100/50 dark:shadow-none w-full flex flex-col gap-6">
      <div className="weather-header flex justify-between items-center pb-4 border-b border-slate-200/50 dark:border-slate-800/40">
        <h2 className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-slate-50 tracking-tight">
          {data.cityName}
        </h2>
        <span className="text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full bg-blue-100/90 text-blue-800 dark:bg-indigo-950/80 dark:text-indigo-200 border border-blue-200/40 dark:border-indigo-850/50">
          Aktuální stav
        </span>
      </div>

      <div className="weather-body flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-5">
          <span className="text-6xl sm:text-7xl">{weather.icon}</span>
          <div>
            <p className="temperature text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400">
              Teplota: <strong className="block text-4xl sm:text-5xl font-black text-slate-950 dark:text-slate-50 mt-1">{formatTemperature(data.temperature)}</strong>
            </p>
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mt-1">
              {weather.description}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center sm:items-end bg-blue-50/80 dark:bg-slate-800/50 px-6 py-4 rounded-2xl border border-blue-100/60 dark:border-slate-750/30 w-full sm:w-auto shadow-sm">
          <span className="text-2xl">💧</span>
          <p className="humidity text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 mt-1.5">
            Vlhkost: <span className="font-black text-blue-700 dark:text-sky-300 ml-1">{data.humidity} %</span>
          </p>
        </div>
      </div>
    </div>
  );
}
