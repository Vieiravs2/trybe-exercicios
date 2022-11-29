// Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100;
// Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se essa pessoa está na lista de espera. Para isso, considere as seguintes informações:
// Se a nota for maior ou igual a 80, imprima “Parabéns, você foi aprovada(o)!”
// Se a nota for menor que 80 e maior ou igual a 60, imprima “Você está na nossa lista de espera”
// Se a nota for menor que 60, imprima “Você foi reprovada(o)”
// Crie uma estrutura condicional utilizando o if, else if e else para criar o seu algoritmo, e os operadores lógicos que se aplicam a cada situação.
// Altere o valor da nota para verificar se as condições que você implementou funcionam.

const getNote = 100;

if (getNote >= 80) {
    console.log("Parabéns, você foi aprovado(a)!")
} else if (getNote < 80 && getNote >= 60) {
    console.log("Você está na nossa lista de espera")
} else if (getNote < 60) {
    console.log("Você foi reprovado(a)")
}