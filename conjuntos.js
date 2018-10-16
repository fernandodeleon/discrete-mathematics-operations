$( document ).ready( function () {
  $( '#mySelect' ).change( function () {
    if (document.getElementById("inner").hasChildNodes()) {
      $( "#inner" ).empty();
    }
    let html = null;
    let value = $( this ).val();
    for ( var x = 0; x < value; x++ ) {
      html = `<div class="input-field">
          <input id="conjunto${x + 1}" type="text" class="validate">
          <label for="conjunto${x + 1}">Conjunto ${x + 1}</label>
        </div>`;
      $( "#inner" ).append( html );
    }

  });

  $( "#letsoperate" ).click( function () {
    let html = null;
    let operation = $( "#operationSelect" ).val();
    let numeroDeConjuntos = $( "#mySelect" ).val();
    if (numeroDeConjuntos === "0") {
      Materialize.toast('Cantidad de conjuntos no seleccionada', 3000);
    } else {
      if (numeroDeConjuntos === "2") {
        if (  document.getElementById("conjunto1") && document.getElementById("conjunto2") ) {
          if ( $( "#conjunto1" ).val() === "" || $( "#conjunto2" ).val() === "" ) {
            Materialize.toast('Conjuntos vacios', 3000);
          } else {
            if ( operation === "union" ) {
              let arrayConjunto1 = $( "#conjunto1" ).val().split(" ");
              let arrayConjunto2 = $( "#conjunto2" ).val().split(" ");
              let auxiliary = [];
              for ( let x = 0; x < arrayConjunto1.length; x++ ) {
                for ( let y = 0; y < arrayConjunto2.length; y++ ) {
                  if ( arrayConjunto1[x] === arrayConjunto2[y] ) {
                    let index = auxiliary.findIndex( j => {
                      return j === arrayConjunto1[x];
                    });
                    if ( index === -1 ) auxiliary.push( arrayConjunto1[x] );
                  } else {
                    let indexConj1 = auxiliary.findIndex( j => {
                      return j === arrayConjunto1[x];
                    } );
                    let indexConj2 = auxiliary.findIndex( j => {
                      return j === arrayConjunto2[y];
                    } );
                    if ( indexConj1 === -1 ) auxiliary.push( arrayConjunto1[x] );
                    else if ( indexConj2 === -1 ) auxiliary.push( arrayConjunto2[y] );
                  }
                }
              }

              html = `<p>${auxiliary.sort((a, b) => a - b)}</p>`;
              $( "#result" ).append( html );
            } else {
              Materialize.toast('Ninguna operacion seleccionada', 3000);
            }
          }
        } else {
          console.log("no existen aun");
        }
      } else {
        console.log("otras opcines");
      }
    }
  });
});
