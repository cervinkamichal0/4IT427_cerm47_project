import { useState } from "react";

type OnSearchFnc = (mesto: string) => void;

interface SearchBarProps {
  onSearch: OnSearchFnc;
  isLoading: boolean;
}

export function SearchBar({ onSearch, isLoading }: SearchBarProps) {
  const [mesto, setMesto] = useState("");

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    if (mesto.trim() !== "") {
      onSearch(mesto);
      setMesto("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
      <input
        type="text"
        value={mesto}
        onChange={(e) => setMesto(e.target.value)}
        placeholder="Zadejte název města..."
        disabled={isLoading}
        className="flex-1 px-5 py-4 rounded-2xl text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 bg-white/70 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800/45 backdrop-blur-md shadow-lg shadow-slate-100/50 dark:shadow-none outline-none focus:ring-2 focus:ring-blue-500/40 dark:focus:ring-indigo-500/40 focus:border-blue-500 dark:focus:border-indigo-400 focus:bg-white dark:focus:bg-slate-900 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      />
      <button
        type="submit"
        disabled={isLoading || mesto.trim() === ""}
        className="px-6 py-4 rounded-2xl font-bold tracking-wide text-white bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 dark:from-blue-500 dark:to-indigo-500 dark:hover:from-indigo-400 dark:hover:to-blue-400 active:scale-[0.98] transition-all duration-300 shadow-lg shadow-blue-500/10 dark:shadow-none disabled:from-slate-200/50 disabled:to-slate-300/50 dark:disabled:from-slate-850 dark:disabled:to-slate-900 disabled:text-slate-400 dark:disabled:text-slate-650 disabled:scale-100 disabled:cursor-not-allowed disabled:shadow-none"
      >
        {isLoading ? "Hledám..." : "Hledat"}
      </button>
    </form>
  );
}
