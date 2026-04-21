# Weather Dashboard on Vue 3 + Vite

English | [Русская версия](./README.ru.md)

A small SPA for viewing the weather forecast for a selected city. The interface is built as a two-panel dashboard: the left side shows the currently selected forecast day, while the right side contains weather stats, the forecast list, and the city switcher form.

The project uses [Vue 3](https://vuejs.org/), [Vite](https://vite.dev/), and data from [WeatherAPI](https://www.weatherapi.com/).

## Features

- Fetches weather forecast data for a city via WeatherAPI.
- Displays a 3-day forecast.
- Lets the user switch between forecast days.
- Lets the user change the city directly from the UI.
- Shows a basic error message when a city is not found.
- Reads API configuration from environment variables.
- Uses HTTPS for WeatherAPI requests.

## Tech Stack

- `Vue 3`
- `Vite`
- `@vitejs/plugin-vue`
- `vite-svg-loader`
- `ESLint`

## Getting Started

### Install dependencies

```bash
npm install
```

### Configure environment variables

Create a `.env` file in the project root:

```env
VITE_WEATHER_API_KEY=your_weatherapi_key
VITE_WEATHER_API_URL=https://api.weatherapi.com/v1
```

### Start the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Scripts

- `npm run dev` - starts the Vite dev server
- `npm run build` - creates the production build
- `npm run preview` - previews the production build locally

## Project Structure

```text
.
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── Weather/
│   │   │   ├── DayCard.vue
│   │   │   ├── IconCloud.vue
│   │   │   ├── IconRain.vue
│   │   │   ├── IconSun.vue
│   │   │   └── Index.vue
│   │   ├── BaseButton.vue
│   │   ├── BaseInput.vue
│   │   ├── BaseNotification.vue
│   │   ├── CitySelect.vue
│   │   ├── IconLocation.vue
│   │   ├── Loader.vue
│   │   ├── PanelLeft.vue
│   │   ├── PanelRight.vue
│   │   └── Stat.vue
│   ├── App.vue
│   ├── constants.js
│   ├── main.js
│   └── style.css
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── README.ru.md
└── vite.config.js
```

## Application Structure

- `src/App.vue` - root container, API loading, and shared state for `city`, `data`, `current`, `activeIndex`, and `error`
- `src/components/PanelLeft.vue` - renders the active forecast day
- `src/components/PanelRight.vue` - renders stats, errors, the forecast section, and the city form
- `src/components/CitySelect.vue` - manages city selection
- `src/components/Weather/Index.vue` and `DayCard.vue` - render the forecast list and active day switching
- `src/constants.js` - reads env-based API configuration, stores the error map, and define provide/inject keys

## Architecture Notes

Strengths:

- The structure is compact and easy to read: the UI is already split into small reusable and composite components.
- Shared state between components is handled with `provide/inject`, which reduces unnecessary prop drilling.
- Vite configuration and the `@` alias are set up cleanly, and the project starts and builds quickly.

Areas to improve:

- There is no dedicated `lint` script and no tests yet.
- The API logic still lives directly in `App.vue`; over time it would be cleaner to move requests into a separate module such as `src/api/`.
- The name `src/components/Weather/Index.vue` works, but something like `WeatherWeek.vue` would be clearer long term.

## Current Limitations

- There is no active loading state yet, although the code already hints at one.
- The project is currently tailored to the Russian language and `ru-RU` locale.
- The API key is no longer hardcoded, but because requests still go directly from the browser, the key remains client-visible at runtime. A backend proxy would be needed to fully hide it.

## Verified

- The production build completes successfully with `npm run build`.
- WeatherAPI requests are configured through `.env` variables.
- The API base URL now uses HTTPS.
- Forecast cards now use Celsius consistently.
- The previous CSS warning caused by `input:placeholder` is gone after simplifying the input styles.

## Suggested Next Steps

- Add `npm run lint`.
- Add `isLoading` and finalize robust network error handling for fetch failures.
- Separate API logic from the UI layer.
- Add a backend proxy if the API key must be fully hidden from the client.
