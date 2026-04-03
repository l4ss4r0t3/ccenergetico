/*
  ╔══════════════════════════════════════════════════════════════╗
  ║         Calculadora de Consumo Energético — Scripts         ║
  ╚══════════════════════════════════════════════════════════════╝

  Índice:
    1. Referências ao DOM
    2. Funções auxiliares
    3. Calculadora de Consumo  (cBtn1)
    4. Calculadora de Custo    (cBtn2)
*/


/* ── 1. REFERÊNCIAS AO DOM ────────────────────────────────────
   Capturadas uma única vez no topo e reutilizadas nos listeners,
   evitando consultas repetidas ao DOM a cada clique.
────────────────────────────────────────────────────────────── */

// Seção 1 — Consumo
const inputPotencia = document.getElementById("potencia"); // Potência em Watts
const inputTempo    = document.getElementById("tempo");    // Tempo de uso em minutos
const rConsumo      = document.getElementById("rConsumo"); // Resultado do consumo
const cBtn1         = document.getElementById("cBtn1");    // Botão calcular consumo

// Seção 2 — Custo
const inputConsumo = document.getElementById("consumo"); // Consumo em kWh
const inputPreco   = document.getElementById("preco");   // Tarifa em R$/kWh
const rCusto       = document.getElementById("rCusto"); // Resultado do custo
const cBtn2        = document.getElementById("cBtn2");  // Botão calcular custo


/* ── 2. FUNÇÕES AUXILIARES ────────────────────────────────────
────────────────────────────────────────────────────────────── */

/**
 * Lê e converte o valor de um <input> para número de ponto flutuante.
 * parseFloat é mais apropriado que Number() para entradas do usuário:
 * Number("") retorna 0 (silencioso), parseFloat("") retorna NaN (explícito).
 *
 * @param {HTMLInputElement} input - O elemento de input a ser lido.
 * @returns {number} O valor numérico digitado, ou NaN se inválido/vazio.
 */
function lerValor(input) {
  return parseFloat(input.value);
}

/**
 * Valida se todos os valores fornecidos são números finitos e positivos.
 * Impede cálculos com campos vazios, negativos ou zero.
 *
 * @param {...number} valores - Um ou mais valores a validar.
 * @returns {boolean} true se todos os valores forem válidos.
 */
function valoresValidos(...valores) {
  return valores.every(v => Number.isFinite(v) && v > 0);
}

/**
 * Exibe uma mensagem de erro no parágrafo de resultado informado.
 *
 * @param {HTMLElement} elemento - O parágrafo onde a mensagem será exibida.
 * @param {string} mensagem      - O texto de erro a exibir.
 */
function exibirErro(elemento, mensagem) {
  elemento.textContent = mensagem;
}

/**
 * Formata um número para o padrão monetário brasileiro (vírgula decimal).
 * Ex.: 12.5 → "12,50"
 *
 * @param {number} valor     - O número a formatar.
 * @param {number} [casas=2] - Quantidade de casas decimais (padrão: 2).
 * @returns {string} O número formatado como string.
 */
function formatarBR(valor, casas = 2) {
  return valor.toFixed(casas).replace(".", ",");
}


/* ── 3. CALCULADORA DE CONSUMO ────────────────────────────────
   Fórmula: Consumo (kWh) = Potência (W) × Tempo (min) / 60.000
     - Divide por 60 para converter minutos em horas.
     - Divide por 1.000 para converter Wh em kWh.
     - Equivalente a: (W × min) / 60.000
────────────────────────────────────────────────────────────── */
cBtn1.addEventListener("click", () => {

  const potencia = lerValor(inputPotencia); // Potência em Watts
  const tempo    = lerValor(inputTempo);    // Tempo de uso em minutos

  // Interrompe e informa o usuário se algum campo estiver vazio ou inválido
  if (!valoresValidos(potencia, tempo)) {
    exibirErro(rConsumo, "⚠️ Preencha os campos com valores positivos.");
    return;
  }

  const consumoKWh = (potencia * (tempo / 60)) / 1000;

  rConsumo.textContent = `Este aparelho consome ${formatarBR(consumoKWh)} kWh!`;
});


/* ── 4. CALCULADORA DE CUSTO ──────────────────────────────────
   Fórmula: Custo (R$) = Consumo (kWh) × Tarifa (R$/kWh)
────────────────────────────────────────────────────────────── */
cBtn2.addEventListener("click", () => {

  const consumo = lerValor(inputConsumo); // Consumo em kWh
  const preco   = lerValor(inputPreco);   // Tarifa em R$/kWh

  // Interrompe e informa o usuário se algum campo estiver vazio ou inválido
  if (!valoresValidos(consumo, preco)) {
    exibirErro(rCusto, "⚠️ Preencha os campos com valores positivos.");
    return;
  }

  const custo = consumo * preco;

  rCusto.textContent = `Esse consumo vai lhe custar R$ ${formatarBR(custo)}!`;
});