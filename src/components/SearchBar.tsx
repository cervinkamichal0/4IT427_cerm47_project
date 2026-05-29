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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={mesto}
        onChange={(e) => setMesto(e.target.value)}
        placeholder="Zadejte název města..."
        disabled={isLoading}
      />
      <button type="submit" disabled={isLoading || mesto.trim() === ""}>
        {isLoading ? "Hledám..." : "Hledat"}
      </button>
    </form>
  );
}
