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
- `src/constants.js` - stores the API base URL, error map, and provide/inject keys

## Architecture Notes

Strengths:

- The structure is compact and easy to read: the UI is already split into small reusable and composite components.
- Shared state between components is handled with `provide/inject`, which reduces unnecessary prop drilling.
- Vite configuration and the `@` alias are set up cleanly, and the project starts and builds quickly.

Areas to improve:

- The API key is hardcoded in the source code and should be moved to environment variables via `.env`.
- The API base URL uses `http`, which may cause mixed-content issues in secure environments.
- There is no dedicated `lint` script and no tests yet.
- The API logic still lives directly in `App.vue`; over time it would be cleaner to move requests into a separate module such as `src/api/`.
- The name `src/components/Weather/Index.vue` works, but something like `WeatherWeek.vue` would be clearer long term.

## Current Limitations

- Error handling does not cover all API failure scenarios.
- There is no active loading state yet, although the code already hints at one.
- The forecast cards use `avgtemp_f` while the UI label shows `°C`, so the displayed units are currently inconsistent.
- The project is currently tailored to the Russian language and `ru-RU` locale.

## Verified

- The production build completes successfully with `npm run build`.
- The build currently reports a CSS warning caused by the `input:placeholder` selector in `src/components/BaseInput.vue`; `::placeholder` should be used instead.

## Suggested Next Steps

- Move the API key and base URL into `.env`.
- Add `npm run lint`.
- Fix the temperature unit mismatch in forecast cards.
- Add `isLoading` and more robust network error handling.
- Separate API logic from the UI layer.
