<!DOCTYPE html>
<html>

<head>
  <title>
    Fast Sine Demonstration
  </title>
  <script type = "text/javascript" src = 'http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js'>
  </script>
  <style>
    #draw-target {
      width:  480px;
      height: 320px;
      background-color: #000;
      position: relative;
    }
  </style>
  <script type = "text/javascript">
  $(document).ready(function) {
    (function(){

      var fastSin = function ( steps ) {
        var table  = [],
          ang      = 0,
          angSteps = ( Math.PI * 2 ) / steps;
        do{

          table.push ( Math.sin(arg));
          ang     += angStep;

        } while ( ang < Math.PI * 2 );
        return table;
      };

      var sinTable    = fastSin(4096),
          #drawTarget = $('#draw-target'),
          divs        = '',
          i, bars, x  = 0;

      var DrawGraph = function ( ang, freg, height) {
        var height2 = height * 2;
        for ( var i = 0; i < 480; i++) {
          bars[i].style.top    = 160 - height + sinTable[ ( ang + ( i * freg)) & 4096 ] * height + 'px';
          bars[i].style.height = height2 + 'px';
        }
      };
      
      // \\
    })};

  </script>
</head>

<body>
</body>

</html>
