Welcome!
In this app, you can mark lessons and times on the calendar. On the main screen, the money earned for lessons in the selected month is calculated. You can also enter your personal details in your profile. See the main screenshots of the app below.

![Login_Screen](https://github.com/RomanIgonin/TimeTable/blob/develop/src/assets/images/screens/Simulator%20Screen%20Shot%20-%20iPhone%2014%20-%202023-01-12%20at%2012.57.11.png)
![Calendar_Screen](https://github.com/RomanIgonin/TimeTable/blob/develop/src/assets/images/screens/Simulator%20Screen%20Shot%20-%20iPhone%2014%20-%202023-01-12%20at%2012.58.53.png)
![Profile_Screen](https://github.com/RomanIgonin/TimeTable/blob/develop/src/assets/images/screens/Simulator%20Screen%20Shot%20-%20iPhone%2014%20-%202023-01-12%20at%2013.00.07.png)
![Edit_Screen](https://github.com/RomanIgonin/TimeTable/blob/develop/src/assets/images/screens/Simulator%20Screen%20Shot%20-%20iPhone%2014%20-%202023-01-12%20at%2013.00.00.png)

Start the server first


```json-server --host (your ip-address) -p 3002 --routes src/core/api/routes.json --watch src/core/api/db.json```

And run TimeTable app on ios simulator

```npm run ios```

Or use your physical device

```npm start```
