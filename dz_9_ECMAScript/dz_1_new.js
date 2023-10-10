function getUserData(userId) {
    // Создаем URL для запроса на сервер
    const apiUrl = `https://reqres.in/api/users/${userId}`;
  
    // Отправляем GET-запрос и возвращаем промис
    return fetch(apiUrl)
      .then((response) => {
        // Проверяем статус ответа
        if (!response.ok) {
          // Если статус не 200 (успешный запрос), отклоняем промис с сообщением об ошибке
          throw new Error(`Ошибка при запросе: ${response.status} ${response.statusText}`);
        }
  
        // Преобразуем ответ в формат JSON и возвращаем его
        return response.json();
      })
      .then((userData) => {
        // Проверяем, есть ли данные о пользователе в ответе
        if (!userData.data) {
          // Если данные не найдены, отклоняем промис с сообщением об ошибке
          throw new Error(`Пользователь с ID ${userId} не найден.`);
        }
  
        // Возвращаем данные о пользователе
        return userData.data;
      });
  }
  
  // Пример использования функции getUserData
  const userId = 1; // Замените на нужный ID пользователя
  getUserData(userId)
    .then((user) => {
      console.log(user); // Выводим данные о пользователе
    })
    .catch((error) => {
      console.error(error.message); // Выводим сообщение об ошибке, если что-то пошло не так
    });
  