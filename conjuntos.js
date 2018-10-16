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
        </div>`
      $( "#inner" ).append( html );
    }
    
  });
});
