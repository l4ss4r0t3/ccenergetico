// Captura os elementos do HTML pelo ID e os armazena em variáveis
const potencia = document.getElementById("potencia"); // Campo de potência (Watts)
const tempo = document.getElementById("tempo");     // Campo de tempo (Minutos)
const rConsumo = document.getElementById("rConsumo");   // Parágrafo onde o resultado será exibido
const cBtn1 = document.getElementById("cBtn1");     // Botão de calcular

// Captura os elementos do HTML pelo ID e os armazena em variáveis
const consumo = document.getElementById("consumo"); // Campo de consumo (kWh)
const preco = document.getElementById("preco");     // Campo de preço (R$)
const rCusto = document.getElementById("rCusto");   // Parágrafo onde o resultado será exibido
const cBtn2 = document.getElementById("cBtn2");     // Botão de calcular

// Aguarda o clique no botão para executar o cálculo
cBtn1.addEventListener("click", () => {

  const vPotencia = potencia.value; // Lê o valor digitado no campo de potência
  const vTempo = tempo.value;     // Lê o valor digitado no campo de tempo

  // Converte os valores de string para número, multiplica e exibe o resultado formatado com 2 casas decimais
  rConsumo.innerHTML = "Este aparelho consome " + ((Number(vPotencia) * (Number(vTempo) / 60)) / 1000).toFixed(2) + " kWh!";
});

// Aguarda o clique no botão para executar o cálculo
cBtn2.addEventListener("click", () => {

  const vConsumo = consumo.value; // Lê o valor digitado no campo de consumo
  const vPreco = preco.value;     // Lê o valor digitado no campo de preço

  // Converte os valores de string para número, multiplica e exibe o resultado formatado com 2 casas decimais
  rCusto.innerHTML = "Esse consumo vai lhe custar R$ " + (Number(vConsumo) * Number(vPreco)).toFixed(2).replace(".", ",") + "!";
});