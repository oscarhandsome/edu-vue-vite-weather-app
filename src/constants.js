// const
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = import.meta.env.VITE_WEATHER_API_URL;

// errors
export const errorMap = new Map([[1006, "Указанный город не найден"]]);

// variables
export const cityProvide = Symbol("city");
export const activeIndexProvide = Symbol("activeIndex");

export { API_KEY, BASE_URL };
