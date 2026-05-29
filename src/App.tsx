import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-linear-to-br from-blue-50 via-indigo-50 to-slate-100 dark:from-slate-950 dark:via-indigo-950 dark:to-slate-900 text-slate-800 dark:text-slate-100 transition-colors duration-500 font-sans flex flex-col items-center p-4 sm:p-6 md:p-8">
        <header className="w-full max-w-2xl text-center mb-8 mt-4">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight flex items-center justify-center gap-3">
            <span>🌤️</span>
            <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-sky-400 dark:via-indigo-400 dark:to-violet-400 bg-clip-text text-transparent">
              Počasí
            </span>
          </h1>
          <p className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 mt-2 tracking-wider uppercase">
            Předpověď pro města
          </p>
        </header>

        <main className="w-full max-w-2xl flex-1 flex flex-col justify-start">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/weather/:city" element={<Detail />} />
          </Routes>
        </main>

        <footer className="w-full max-w-2xl text-center mt-12 py-6 border-t border-slate-200/50 dark:border-slate-800/40 text-xs text-slate-400 dark:text-slate-500">
          <p>Semestrální práce pro předmět 4IT427</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
