// Captura os elementos do HTML pelo ID e os armazena em variáveis
const consumo = document.getElementById("consumo"); // Campo de consumo (kWh)
const preco = document.getElementById("preco");     // Campo de preço (R$)
const rCusto = document.getElementById("rCusto");   // Parágrafo onde o resultado será exibido
const cBtn2 = document.getElementById("cBtn2");     // Botão de calcular

// Aguarda o clique no botão para executar o cálculo
cBtn2.addEventListener("click", () => {

  const vConsumo = consumo.value; // Lê o valor digitado no campo de consumo
  const vPreco = preco.value;     // Lê o valor digitado no campo de preço

  // Converte os valores de string para número, multiplica e exibe o resultado formatado com 2 casas decimais
  rCusto.innerHTML = "Esse consumo vai lhe custar: R$ " + (Number(vConsumo) * Number(vPreco)).toFixed(2) + "!";
});