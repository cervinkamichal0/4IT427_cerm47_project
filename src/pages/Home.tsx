import { useNavigate } from "react-router-dom";
import { SearchBar } from "../components/SearchBar";

export function Home() {
  const navigate = useNavigate();

  const handleSearch = (cityName: string) => {
    navigate(`/weather/${cityName}`);
  };

  return (
    <div className="home-page">
      <h2>Hledat počasí</h2>

      <p>Zadejte název města pro zobrazení aktuální předpovědi.</p>

      <SearchBar onSearch={handleSearch} isLoading={false} />
    </div>
  );
}
