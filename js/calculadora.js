//Tentaiva de conectar com o html css feito


function calcularGorjeta() {

    let porcentagem = document.getElementById("porcentagem").value;
    let valorConta = document.getElementById("valorConta").value;

    if (porcentagem == 10) {
        calculoGorjeta = ((valorConta * 10) / 100)
        valorTotal = (parseInt(calculoGorjeta) + parseInt(valorConta))
    } else if (porcentagem == 8) {
        calculoGorjeta = ((valorConta * 8) / 100)
        valorTotal = (parseInt(calculoGorjeta) + parseInt(valorConta))
    } else if (porcentagem == 5) {
        calculoGorjeta = ((valorConta * 5) / 100)
        valorTotal = (parseInt(calculoGorjeta) + parseInt(valorConta))
    } else if (porcentagem == 2) {
        calculoGorjeta = ((valorConta * 2) / 100)
        valorTotal = (parseInt(calculoGorjeta) + parseInt(valorConta))
    }
    else {
        document.getElementById("total").innerHTML = "Você digitou algo errado. Tente novamente!"
    }

    document.getElementById("gorjeta").innerHTML = `R$ ${calculoGorjeta} reais.`
    document.getElementById("total").innerHTML = `R$ ${valorTotal} reais.`
}