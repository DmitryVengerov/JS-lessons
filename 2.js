/*
*   Функциональное наследования
*/
  var pet = function ( name, legs) {

      /* создаем обьектный литерал ( that ). Включаемм свойства name
       для общедоступного использования и функцию getDetails().
       Лапы остаются приватными. Любые локальые переменные.
       определенные здесь или переданные в pet в качестве аргументов,
       остаются приватными, но тем не менее будут доступны из других функций,
       которые определяются ниже
      */
      var that = {
        name:name,
        getDetails: function () {
          /* по правилам видимости, действующим в JavaScript
             переменная legs будет доступна здесь (замыкание),
             не смотря на то что она недоступна извне объекта pet.
          */
          return that.name + 'has' + legs + 'legs';
        }
      };
      return that;
  }

var Cat = function ( name ) {
  var that = pet(name, 4); // Наследуем от pet
  // Дописываем в cat метод действия
  that.action = function () {
    return 'Catch a bird';
  };
  return that;
};
// Создаем экземпляр cat в petCat2
var petCat2 = cat('Felix');
// У феликса 4 лапы
details = petCat2.getDetails();
// Поймал птичку
action  = petCat2.action();
// Теперь кота зовут Сильвестр
petCat2.name = 'Sylvester';
// Но не можем заменить количество ног из-за замыкания
petCat2.legs = 7;
// У Сильвестра 4 лапы
details = petCat2.getDetails();
