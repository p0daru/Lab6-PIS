# Lab6-PIS
Сценарій використання зовнішнього API на прикладі OpenWeatherMap:
1. Спершу потрібно отримати вільний логін за лінком https://home.openweathermap.org/users/sign_in. Після активування API Key (30хв), можна користуватись сервісом.
2. На сторінці свого логіну до сервісу (https://home.openweathermap.org/api_keys) дивимось значення API key.
3. Далі на сторінці http://bulk.openweathermap.org/sample/ в архіві city.list.json.gz знаходимо Id потрібного міста (наприклад, Хайфи).
4. У підсумку запит http://api.openweathermap.org/data/2.5/weather?q=Haifa&appid=cfd04eb0e8f2b6c9988936e34fdd9d3d генерує відповідь. 

