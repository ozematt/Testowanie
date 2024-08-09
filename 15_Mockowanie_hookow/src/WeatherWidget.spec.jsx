import { WeatherWidget } from "./WeatherWidget";
import * as useWeatherFile from "./useWeather";
import { render } from "@testing-library/react";

const useWeatherSpy = vi.spyOn(useWeatherFile, "useWeather");

const mockUseWeather = ({ data = {}, isLoading = false, isError = false }) => {
  useWeatherSpy.mockReturnValue({ data, isLoading, isError });
};
