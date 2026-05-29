import { SearchBar } from "../components/SearchBar";
import { WeatherPreview } from "../components/WeatherPreview"; // <-- Nový import
import { useWeather } from "../hooks/useWeather";

export function Home() {
  const { data, isLoading, error, fetchWeather } = useWeather();

  return (
    <div className="home-page w-full flex flex-col items-center gap-6 mt-4">
      <h2 className="text-xl sm:text-2xl font-extrabold text-slate-700 dark:text-slate-200 tracking-tight self-start mb-1 flex items-center gap-2">
        <span>🔍</span> Hledat počasí
      </h2>

      <SearchBar onSearch={fetchWeather} isLoading={isLoading} />

      {error && (
        <div className="error-message w-full p-4 mt-4 rounded-2xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200/50 dark:border-rose-900/40 text-rose-700 dark:text-rose-300 text-sm flex items-center gap-2">
          <strong className="font-bold flex items-center gap-1">
            <span>⚠️</span> Chyba:
          </strong>{" "}
          {error}
        </div>
      )}

      {/* Zde jsme původní HTML nahradili naší novou komponentou */}
      {data && !isLoading && <WeatherPreview data={data} />}
    </div>
  );
}