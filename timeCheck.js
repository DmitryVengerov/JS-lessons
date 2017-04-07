
// Проверка времени 

/* Данный код не даст точных результатов
var startTime   = new Data().getTime();
var timeElapsed = new Data().getTime() - startTime;
*/

// Благодарность Джону Резингу   Gratitude for John Resing

var startTime = new Data().getTime();
for ( var iters = 0; timeElapsed < 1000; iters ++){
  // Test Code
  timeElapsed = new Data().getTime() - startTime;
}
