# 💡 Calculadora de Consumo Energético

[![Acesse o projeto](https://img.shields.io/badge/GitHub%20Pages-acesse%20aqui-blue?style=flat-square&logo=github)](https://l4ss4r0t3.github.io/ccenergetico)

Ferramenta web simples para estimar o consumo em kWh e o custo de eletrodomésticos com base na potência, no tempo de uso e na tarifa da distribuidora.

🔗 **Demo ao vivo:** [l4ss4r0t3.github.io/ccenergetico](https://l4ss4r0t3.github.io/ccenergetico)

---

## Funcionalidades

- **Calculadora de Consumo** — converte Watts × minutos em kWh
- **Calculadora de Custo** — multiplica o consumo pela tarifa local (R$/kWh)
- Validação de entrada com mensagem de erro para campos vazios ou negativos
- Resultado formatado no padrão brasileiro (vírgula decimal)

---

## Fórmulas

```
Consumo (kWh) = Potência (W) × Tempo (min) ÷ 60.000
Custo   (R$)  = Consumo (kWh) × Tarifa (R$/kWh)
```

---

## Estrutura de arquivos

```
/
├── index.html          → marcação e estrutura da página
├── styles/
│   └── style.css       → estilos visuais
└── scripts/
    └── script.js       → lógica de cálculo e validação
```

---

## Como usar

**Online (sem instalação)**

Acesse diretamente pelo navegador: [l4ss4r0t3.github.io/ccenergetico](https://l4ss4r0t3.github.io/ccenergetico)

**Local**

1. Clone o repositório:
   ```bash
   git clone https://github.com/l4ss4r0t3/ccenergetico.git
   ```
2. Abra `index.html` no navegador — nenhuma dependência externa ou servidor é necessário.

---

## Tecnologias

| Tecnologia | Uso |
|---|---|
| HTML5 | Estrutura semântica e acessibilidade |
| CSS3 | Layout responsivo e estilo visual |
| JavaScript (ES6+) | Lógica de cálculo e manipulação do DOM |
| Google Fonts | Tipografia (Google Sans) |

---

## Desenvolvido por

**l4ss4r0t3**