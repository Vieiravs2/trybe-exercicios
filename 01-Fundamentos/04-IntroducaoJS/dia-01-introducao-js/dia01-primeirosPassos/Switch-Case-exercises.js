let trafficaLight = "Verde"

switch (trafficaLight) {
    case "Vermelho":
        console.log("Pare")
        break;

    case "Amarelo":
        console.log("Atenção")
        break;

    case "Verde":
        console.log("Prossiga")
        break;

    default: 
        console.log("Valor não identificado")
}

// Crie uma variável para armazenar o status da pessoa candidata no processo seletivo, que pode ser: 'aprovada', 'lista' ou 'reprovada';
// Crie uma estrutura condicional com o switch/case que irá imprimir as seguintes mensagens:
// Caso 'aprovada', imprima “Parabéns, você foi aprovada(o)!”.
// Caso 'lista', imprima “Você está na nossa lista de espera”.
// Caso 'reprovada', imprima “Você foi reprovada(o)”.
// Caso default, imprima a mensagem de “Informação incorreta”.

let statusStorage = "Aprovada";

switch (statusStorage) {
    case "Aprovada":
        console.log("Parabéns, você foi aprovada(o)!")
    
    case "Lista":
        console.log("Você está na nossa lista de espera")
    
    case "Reprovada":
        console.log("Reprovada")

    default:
        console.log("Informação incorreta")
}

