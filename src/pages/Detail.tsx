import { useParams } from "react-router-dom";

export function Detail() {
  const { city } = useParams();

  return (
    <div>
      <h2>Detail počasí pro: {city}</h2>
      <p>komponenta WeatherCard...</p>
    </div>
  );
}
