# Weather Dashboard on Vue 3 + Vite

[English version](./README.md) | Русская версия

Небольшое SPA-приложение для просмотра прогноза погоды по выбранному городу. Интерфейс построен как дашборд из двух панелей: слева показывается текущая выбранная карточка дня, справа находятся основные погодные метрики, список дней прогноза и форма смены города.

Проект использует [Vue 3](https://vuejs.org/), [Vite](https://vite.dev/) и данные из [WeatherAPI](https://www.weatherapi.com/).

## Что умеет приложение

- Загружает прогноз погоды по городу через WeatherAPI.
- Показывает прогноз на 3 дня.
- Позволяет переключаться между днями прогноза.
- Позволяет менять город прямо из интерфейса.
- Отображает базовую ошибку, если город не найден.
- Читает настройки API из переменных окружения.
- Использует HTTPS для запросов к WeatherAPI.

## Текущий стек

- `Vue 3`
- `Vite`
- `@vitejs/plugin-vue`
- `vite-svg-loader`
- `ESLint`

## Запуск проекта

### Установка зависимостей

```bash
npm install
```

### Настройка переменных окружения

Создай файл `.env` в корне проекта:

```env
VITE_WEATHER_API_KEY=your_weatherapi_key
VITE_WEATHER_API_URL=https://api.weatherapi.com/v1
```

### Локальная разработка

```bash
npm run dev
```

### Production build

```bash
npm run build
```

### Предпросмотр production-сборки

```bash
npm run preview
```

## Скрипты

- `npm run dev` - запуск dev-сервера Vite
- `npm run build` - production-сборка
- `npm run preview` - локальный просмотр production-сборки

## Структура проекта

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

## Как устроено приложение

- `src/App.vue` - корневой контейнер, загрузка данных из API, хранение общего состояния `city`, `data`, `current`, `activeIndex`, `error`
- `src/components/PanelLeft.vue` - отображение активного дня прогноза
- `src/components/PanelRight.vue` - вывод статистики, ошибок, недельного блока и формы смены города
- `src/components/CitySelect.vue` - управление выбранным городом
- `src/components/Weather/Index.vue` и `DayCard.vue` - список дней прогноза и переключение активной карточки
- `src/constants.js` - чтение API-конфига из env, карта ошибок и provide/inject-ключи

## Архитектурные наблюдения по текущей версии

Сильные стороны:

- Структура небольшая и читаемая: UI уже разбит на атомарные и составные компоненты.
- Для обмена состоянием между компонентами используется `provide/inject`, что убирает лишний prop drilling.
- Конфигурация Vite и алиас `@` настроены аккуратно, проект быстро стартует и собирается без ошибок.

Что стоит улучшить дальше:

- В проекте нет отдельного `lint`-скрипта и нет тестов.
- Слой API пока находится прямо в `App.vue`; со временем удобнее вынести запросы в отдельный модуль, например `src/api/`.
- Название `src/components/Weather/Index.vue` рабочее, но для поддержки понятнее будет более явное имя вроде `WeatherWeek.vue`.

## Ограничения текущей реализации

- Нет состояния загрузки, хотя заготовка под него уже просматривается в коде.
- Проект ориентирован на русский язык и локаль `ru-RU`.
- API-ключ больше не захардкожен, но так как запросы всё ещё уходят напрямую из браузера, ключ остаётся видимым на клиенте. Чтобы полностью скрыть его, нужен backend proxy.

## Что уже проверено

- Production-сборка выполняется успешно через `npm run build`.
- Настройки WeatherAPI теперь читаются из `.env`.
- Базовый URL API теперь использует HTTPS.
- Карточки прогноза теперь последовательно используют градусы Цельсия.
- Прежнее CSS-предупреждение из-за `input:placeholder` исчезло после упрощения стилей поля ввода.

## Возможные следующие шаги

- Добавить `npm run lint`.
- Добавить `isLoading` и довести обработку сетевых ошибок до устойчивого состояния.
- Разделить UI-слой и работу с API.
- Добавить backend proxy, если API-ключ нужно полностью скрыть от клиента.
