import { afterAll, expect } from "vitest";
import { WeatherWidget } from "./WeatherWidget";
import * as useWeatherFile from "./useWeather";
import { render, screen } from "@testing-library/react";

const useWeatherSpy = vi.spyOn(useWeatherFile, "useWeather");

const mockUseWeather = ({ data = {}, isLoading = false, isError = false }) => {
  useWeatherSpy.mockReturnValue({ data, isLoading, isError });
};

describe("<WeatherWidget />", () => {
  afterAll(() => {
    useWeatherSpy.mockRestore();
  });
  test("should display Loading", () => {
    mockUseWeather({ isLoading: true });

    render(<WeatherWidget />);

    expect(screen.getByText("Loading weather data...")).toBeInTheDocument();
  });
  test("should display Error message", () => {
    mockUseWeather({ isError: true });

    render(<WeatherWidget />);

    expect(
      screen.getByText("Failed to load weather data.")
    ).toBeInTheDocument();
  });
});
