$(document).ready(function () {
    //ejemplo: 2x^2 -3
    $("#formCuadratica").submit(function (event) {
        functionPlot({
            target: '#cuadratica',
            data: [{
                fn: $("#inputCuadratica").val(), color: 'green'
            }]
        })

        event.preventDefault();
    });
});

