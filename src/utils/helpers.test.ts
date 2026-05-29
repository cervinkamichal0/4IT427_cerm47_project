import { describe, it, expect } from "vitest";
import { formatTemperature, getWeatherInfo } from "./helpers";

describe("formatTemperature", () => {
  it("rounds down a number correctly and adds the unit", () => {
    expect(formatTemperature(25.4)).toBe("25 °C");
  });

  it("rounds up a number correctly", () => {
    expect(formatTemperature(25.6)).toBe("26 °C");
  });

  it("handles negative numbers correctly", () => {
    expect(formatTemperature(-4.8)).toBe("-5 °C");
  });

  it("handles exact zero correctly", () => {
    expect(formatTemperature(0)).toBe("0 °C");
  });
});

describe("getWeatherInfo", () => {
  it("returns correct info for code 0 (Clear)", () => {
    const info = getWeatherInfo(0);
    expect(info.description).toBe("Jasno");
    expect(info.icon).toBe("☀️");
  });

  it("returns correct info for code 61 (Rain)", () => {
    const info = getWeatherInfo(61);
    expect(info.description).toBe("Déšť");
    expect(info.icon).toBe("🌧️");
  });

  it("returns default info for unknown code", () => {
    const info = getWeatherInfo(-99);
    expect(info.description).toBe("Neznámé počasí");
    expect(info.icon).toBe("❓");
  });
});
