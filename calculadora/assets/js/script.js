function inserir(num){
    document.querySelector('.resultado').innerHTML += num;
}



function clean () {
    document.querySelector('.resultado').innerHTML = "";
}


function back() {
    let resultado = document.querySelector('.resultado').innerHTML;
    document.querySelector('.resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function sum () {
    let resultado = document.querySelector('.resultado').innerHTML;
    document.querySelector('.resultado').innerHTML = eval(resultado);
    if (resultado) {

    document.querySelector('.resultado').innerHTML = eval(resultado);

    } else {

        document.querySelector('.resultado').innerHTML = "nenhum comando...";

    }
}