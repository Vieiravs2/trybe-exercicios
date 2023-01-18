function sum() {
  const value1 = document.getElementById('value1').value;
  const value2 = document.getElementById('value2').value;
  const result = Number(value1) + Number(value2);
  try {
    verificacao(value1, value2)
    document.getElementById('result').innerHTML = `Resultado: ${result}`;
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  } catch (error) {
    document.getElementById('result').innerHTML = error.message;
  } finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
}

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}

function verificacao(value1, value2) {
  if (!value1 || !value2) {
    throw new Error("Erro detectado! Um espaço está em branco, impossibilitando a soma")
  }
  if ( isNaN(value1) || isNaN(value2)) {
    throw new Error("Erro detectado! Os valores não são números")
  }
}