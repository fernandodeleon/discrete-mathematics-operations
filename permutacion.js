$(document).ready(function () {
    $("#formPermutacion").submit(function (event) {
        let n = $("#inputNPermutacion").val();
        let r = $("#inputRPermutacion").val();

        //n factorial
        var resultadoN = 1;
        for (i = 1; i <= n; i++) {
            resultadoN = resultadoN * i;
        }

        //(n-r) factorial
        if (r <= n) {
            let eneMenosErre = n - r;
            var resultadoEneMenorR = 1;
            for (i = 1; i <= eneMenosErre; i++) {
                resultadoEneMenorR = resultadoEneMenorR * i;
            }
            $("#resultadoPermutacion").text("Resultado: " + (resultadoN/resultadoEneMenorR));
        }else{
            Materialize.toast('"r" no puede ser mayor a "n"', 4000)
        }

        event.preventDefault();
    });
});

