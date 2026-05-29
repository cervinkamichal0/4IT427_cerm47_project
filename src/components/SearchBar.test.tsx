import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { describe, it, expect, vi, afterEach } from "vitest";
import { SearchBar } from "./SearchBar";

describe("SearchBar Component", () => {
  afterEach(() => {
    cleanup();
  });

  it("calls onSearch with correct city name when submitted", () => {
    const mockOnSearch = vi.fn();

    render(<SearchBar onSearch={mockOnSearch} isLoading={false} />);

    const input = screen.getByPlaceholderText("Zadejte název města...");

    const inputValue = "Praha";

    fireEvent.change(input, { target: { value: inputValue } });

    const button = screen.getByRole("button", { name: "Hledat" });
    fireEvent.click(button);

    expect(mockOnSearch).toHaveBeenCalledTimes(1);
    expect(mockOnSearch).toHaveBeenCalledWith(inputValue);
  });

  it("disables input and button when isLoading is true", () => {
    render(<SearchBar onSearch={vi.fn()} isLoading={true} />);

    const input = screen.getByPlaceholderText("Zadejte název města...");
    const button = screen.getByRole("button", { name: "Hledám..." });

    expect(input).toBeDisabled();
    expect(button).toBeDisabled();
  });
});
