let btnEnviar = document.getElementById("tabuada");
btnEnviar.addEventListener("click", calcular)
let resposta = ''


function calcular(){
    let input1 = document.getElementById("n1")


    let resp = document.getElementById("resultado")


    let n1 = input1.value


    for(let i = 1; i <= 10; i++){
        resposta += `${n1} X ${i} é ${n1 * i}. \n`
        resp.innerText = `${resposta}`
    }
}