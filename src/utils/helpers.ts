export function formatTemperature(temp: number): string {
  return `${Math.round(temp)} °C`;
}

export interface WeatherInfo {
  description: string;
  icon: string;
}

export function getWeatherInfo(code: number): WeatherInfo {
  switch (code) {
    case 0:
      return { description: "Jasno", icon: "☀️" };
    case 1:
    case 2:
    case 3:
      return { description: "Skoro jasno / Polojasno", icon: "⛅" };
    case 45:
    case 48:
      return { description: "Mlha", icon: "🌫️" };
    case 51:
    case 53:
    case 55:
      return { description: "Mrholení", icon: "🌧️" };
    case 56:
    case 57:
      return { description: "Mrznoucí mrholení", icon: "🌧️" };
    case 61:
    case 63:
    case 65:
      return { description: "Déšť", icon: "🌧️" };
    case 66:
    case 67:
      return { description: "Mrznoucí déšť", icon: "🌧️" };
    case 71:
    case 73:
    case 75:
      return { description: "Sněžení", icon: "❄️" };
    case 77:
      return { description: "Sněhové krupky", icon: "❄️" };
    case 80:
    case 81:
    case 82:
      return { description: "Přeháňky", icon: "🌦️" };
    case 85:
    case 86:
      return { description: "Sněhové přeháňky", icon: "❄️" };
    case 95:
      return { description: "Bouřka", icon: "⛈️" };
    case 96:
    case 99:
      return { description: "Bouřka s krupami", icon: "⛈️" };
    default:
      return { description: "Neznámé počasí", icon: "❓" };
  }
}
