# Тестовое задание в рамках обучения в skypro.

## Разработанный функционал

Тестовое задание выполнено c использованием библиотеки React.
Приложении позволяет:

-   осуществлять поиск пользователей платформы GitHub логину. (поиск происходит за счет использования API GitHub https://api.github.com/search);
- сортировать список отображаемых пользователей по возрастанию/убыванию по количеству у них публичных репозиториев;

Если фильтрация по репозиториям не активирована, отображение происходит по лучшему совпадению параметра поиска с username пользователя.

В приложении осуществлена пагинация по страницам с результатами поиска (на одной странице отображается до 30 пользователей).

При клике на кнопку "Показать больше информации" появляется блок с подробной информацией о пользователе, а именно:  
- логин;
- полное;
- информация "о себе";
- местоположение;
- количество репозиториев;
- количество подписчиков;
также появляется ссылка для перехода на страницу GitHub пользователя.

## Технический стек:

ReactJs;  
Styled-components;  
Redax;  
RTK Query.    

## Установка и запуск проекта:

Необходимо клонировать репозиторий: git repo clone v-sivozhelezov/search-users;
Установить заисимости: npm install;  
Запустить приложение: npm start;  
Открыть http://localhost:3000, чтобы просмотреть приложение.
