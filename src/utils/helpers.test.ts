import { describe, it, expect } from "vitest";
import { formatTemperature } from "./helpers";

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
