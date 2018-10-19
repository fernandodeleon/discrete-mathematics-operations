$(document).ready( function () {
  $( "#fiboButton" ).click( function () {
    let numbers = [1, 1];
    let helper = false;
    let result;
    let fibonacci = function (n1, n2, isStarting, limit) {
      if (isStarting) {
        result = numbers[numbers.length - 1] +  numbers[numbers.length - 2];
        numbers.push(result);
        return fibonacci(numbers[numbers.length - 1], numbers[numbers.length - 2], false, limit);
      } else {
        result = n1 + n2;
        if (result < limit) {
          numbers.push(result);
          return fibonacci(numbers[numbers.length - 1], numbers[numbers.length - 2], false, limit);
        } else {
          let fiboDone = `<p> ${ numbers } </p>`;
          $( "#fiboResult" ).append( fiboDone );
        }
      }
    }
    fibonacci(0, 0, true, 100);
   } );
} );
