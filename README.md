# Особенности приложения

- Поиск по имени запускается сразу при введении символов. Запрос отправляется с небольшой задержкой (debounce = 300ms);
- Фильтры применяются по нажатию кнопки "Apply" в UI / либо кнопки "Enter" на клавиатуре;
- Если при введении имени выбраны и фильтры - они применятся вместе с именем;
- Кнопка сброса очищает как фильтры, так и поле с именем;
- Попап закрывается крестиком / кликом по зоне вне попапа / кнопкой "ESC";
- Весь UI написан вручную, без сторонних библиотек;
- Приложение создано под десктоп, без адаптации под мобильные устройства;
- По какой-то причине в этой сборке Create React App + TS - не заработали тесты компонентов, даже снэпшот. Советы из интернета не помогли :(\
    Из-за этого добавлен только тест функции, создающей URL.  

## Запуск приложения

В ветке `main` - `npm i`, затем `npm start`.
