    Задачи от Алексея после собеседования
- изучить основные паттерны проектирования и зачем они нужны (синглтон сервайс фабрика и фасад)
- отрефакторить проект в плане сервисов, названия констант, названия методов
- тайп скрипт отличие типов от интерфейса
- клиент не предусматривает защиты на показ контента не авторизованных пользователей
- понять как работает авторизация auth
- дописать свой фронт так, будто бы сервер проверяет выполнена ли авторизация перед тем как вернуть данные
- auth hook form validation (вкрути к ней реакт хук форм с валидацией на яп)
- переделать слайс в createEntityAdapter в lessonsSlice, что бы он за меня генерил методы
- сделать компонент input общий и придумать куда его положить
- подключить для одного экрана emotion js, что бы работали подсказки за счет описания интерфейса для emotion

TASKS:
- При удалении юзера удаляются все его уроки, как?
- Пока не подключил интерфейс для initialState в lessonsSlice
- Render Navigation происходит 2 раза, при этом isUserLoading оба раза false 
- Перед входом все равно есть задержка до появления LoaderScreen
- Не могу понять как передать свои errors в UDInput
- Можно ли в emotion js указывать размеры шрифта?
- Подсказки в emotion js благодаря ThemeProvider имелось ввиду?

  Ответы Алексею:
метод auth() не ассинхронный, поэтому await не требуется, authServices() уже требует await

1. Проверку на авторизацию теперь делаю в самой навигации, оказалось в самой документации react
navigation был пример. В компоненте App.tsx я проверяю есть ли auth().currentUser на firebase и подсасываю
с сервера в стейт редакса юзера. Потом в навигаторе делаю условие, если юзер в стейте есть, то отбражаю Home screen.
Если юзер в стейте undefined, то отбражаю Login screen. Правильная ли реализация?
Еще я заметил что навигатор рендерится по 2 раза при переходе на другой скрин, причину понять пока не смог. Интересно,
что когда я открываю приложение и мне нужно залогиниться, isUserLoading: false. Когда логинюсь => isUserLoading: true
и навигатор должен отобразить LoaderScreen, что он и делает. Но при этом console.log показывает что isUserLoading false.

2. В lessonsSlice массив Dates[] сделал через createEntityAdapter. Сгенерированные медоты работают!)
Только не понял как описать интерфейс у viewedMonth, viewedYear и isLoading?

3. Валидацию инпутов сделал, но не понял как передать свои errors message в мой UDInput(которые мы пишем в setLocale)

4. Подсказки интерфейса в emotion js должны появляться благодаря оборачиванию приложения в ThemeProvider?
Это имелось ввиду?) Подключил
в пропсы три цвета для примера. Еще я не понял можно ли в этой theme указывать размеры шрифта? Ошибку он не показывает
если я пробую, но и шрифт не меняет на тот что в props передаю ему.

5. И последний вопрос у меня про задежку входа при авторизации. Как я уже говорил, пока происходит авторизация - 
навигатором отображается LoaderScreen. Но до появления LoaderScreen все равно есть задержка небольшая, 
могу показать на видео ниже, как с ней быть?
