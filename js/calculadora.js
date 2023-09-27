//Tentaiva de conectar com o html css feito


/* function calcularGorjeta() {
    let divContaPorcen
    let porcentagem = document.getElementById("porcentagem").value;
    let valorConta = document.getElementById("valorConta").value;
    let valorGorjeta = document.getElementById("valorGorjeta").value;
    let valorTotal = document.getElementById("valorTotal").value;

    if (porcentagem === 0.10) {
        valorGorjeta = (parseInt(valorConta) * parseInt(porcentagem))
        divContaPorcen = valorGorjeta /100
        valorTotal = (parseInt(valorGorjeta) + parseInt(valorConta))
    } else if (porcentagem === 0.8) {
        valorConta = (parseInt(valorConta) * parseInt(porcentagem) /100)
        valorTotal = (parseInt(valorGorjeta) + parseInt(valorConta))
    } else if (porcentagem === 0.5) {
        valorConta = (parseInt(valorConta) * parseInt(porcentagem) /100)
        valorTotal = (parseInt(valorGorjeta) + parseInt(valorConta))
    } else if (porcentagem === 0.2) {
        valorConta = (parseInt(valorConta) * parseInt(porcentagem))
        valorTotal = (parseInt(valorGorjeta) + parseInt(valorConta))
    }else {
        alert = "Você digitou algo errado. Tente novamente!"
        console.log (`Você digitou algo errado. Tente novamente!`)
    }
}

document.getElementById("valorGorjeta").innerHTML = `Sua conta deu R$: ${valorGorjeta}.`
document.getElementById("valorTotal").innerHTML = `Sua conta deu R$: ${valorTotal}.` */



//Tentaiva de fazer funcionar com o console.log ANTES DE TENTAR CONECTAR COM O HTML CSS

function calcularGorjeta2() {
    let porcentagem, valorConta, valorGorjeta, valorTotal

    porcentagem = 0.10
    valorConta = 100

    if (porcentagem === 0.10) {
        valorGorjeta = (valorConta * 0.10) /100
        valorTotal = (parseInt(valorGorjeta) + parseInt(valorConta))

        console.log (`Você vai pagar R$: ${valorGorjeta} de gorjeta.`)
        console.log (`Sua conta deu no total R$: ${valorTotal}.`) 
    } else if (porcentagem === 0.8) {
        valorConta = (parseInt(valorConta) * parseInt(porcentagem) /100)
        valorTotal = (parseInt(valorGorjeta) + parseInt(valorConta))
    } else if (porcentagem === 0.5) {
        valorConta = (parseInt(valorConta) * parseInt(porcentagem) /100)
        valorTotal = (parseInt(valorGorjeta) + parseInt(valorConta))
    } else if (porcentagem === 0.2) {
        valorConta = (parseInt(valorConta) * parseInt(porcentagem))
        valorTotal = (parseInt(valorGorjeta) + parseInt(valorConta))
    }else {
        alert = "Você digitou algo errado. Tente novamente!"
        console.log (`Você digitou algo errado. Tente novamente!`)
    }
}

/* console.log (`Você vai pagar R$: ${valorGorjeta} de gorjeta.`)
console.log (`Sua conta deu no total R$: ${valorTotal}.`) */


function somaNumero(){
    let num1, num2, resp=0
    num1 = 10
    num2 = 20
    resp = num1+num2
    console.log(`O resultado da soma é ${resp}`)
}