# Запуск проекта

Проект был создал с помощью [Create React App](https://github.com/facebook/create-react-app).

    npm install
    npm start

# Работа программы

Приложение состоит из 3 переключателей. В любой момент времени актинвыми могут быть только 2 из них. При попытке включить третий переключатель, первый должен быть автоматически отключен (в порядке очереди). Например: пользоваель аквтивировал сначала переключатель #2, а затем переключательно #1; если он активирует переключатель #3, то переключатель #2 должен отключиться автоматически; если после этого снова активировать переключатель #2, то отключится переключатель #1 и т.д.

Каждый переключатель отвечает за разный функционал:
 1. первый - темная / светлая тема
 2. второй - воспроизведение музыкального произведения
 3. терий - меняет эффект остальных переключателей на противоположный 
