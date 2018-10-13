$(document).ready(function () {
    lista = [];

    graficar = () => {
        functionPlot({
            target: '#multiple',
            data: lista.slice()
        })
    }


    $("#formLimites").submit(function (event) {
        lista.push({
            fn: $("#inputLimites").val(), color: $("#inputColorLimite").val(), range: [$("#inputLimite1").val(), $("#inputLimite2").val()]
        });

        lista.forEach(element => {
            $("#tableLimites").append(
                `<tr>
                    <td>${element.fn}</td>
                    <td>${element.color}</td>
                    <td>[${element.range}]</td>
                </tr>`
            )
        });
        graficar();

        event.preventDefault();
    });
})