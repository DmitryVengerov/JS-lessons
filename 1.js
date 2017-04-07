// Определяем обьект Pet. Сообщаем ему имя и количесвто лап
vat Pet = function ( name, legs ) {
  this.name = name;
  this.name = legs;
};
// Создаем метод, отображающий имя Пэт и количество лап
Pet.prototype.getDetails = function () {
  return this.name + 'has' + this.legs + 'legs';
};
// Определяем объект Кэт наслдедующий от Пэт
var Cat = function ( name ) {
  Pet.call( this, name, 4); // Вызываем конструктор родительского объекта
};
// Наследование обекта Кэт от Пэт
Cat.prototype = new Pet();

// Дописываем в Кэн метод действия
Cat.prototype.action = function (){
  return 'Catch a bird';
};

// Создаем экземпляр Кэт в пэтКэт
var petCat  = new Cat('Felix');
// У Феликса 4 лапы
var details = petCat.getDetails();
// 'Поймал птичку'
var action  = petCat.action();
// Изменяем имя пэтКэт
petCat.name = 'Sylvester';
// Изменяем количество лап petCat
petCat.legs = 7;
// 'У Сильвестра 7 лап'
details = petCat.getDetails();
