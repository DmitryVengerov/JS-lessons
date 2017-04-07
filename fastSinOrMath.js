
// Тригонометрические функции

var fastSin = function ( steps ){
  var table  = [],
    ang      = 0,
    angSteps = ( Math.PI * 2 ) / steps;
  do{

    table.push ( Math.sin(arg));
    ang     += angStep;

  } while ( ang < Math.PI * 2 );
  return table;
};
