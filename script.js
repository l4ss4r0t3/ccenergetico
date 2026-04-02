const consumo = document.getElementById("consumo");
const preco = document.getElementById("preco");
const rCusto = document.getElementById("rCusto");
const cBtn2 = document.getElementById("cBtn2");

cBtn2.addEventListener("click", () => {
const vConsumo = consumo.value;
const vPreco = preco.value;
rCusto.innerHTML = "Esse consumo vai lhe custar: R$ " + Number(vConsumo) * Number(vPreco) + "!";
});