const resultadoHTML = document.querySelector('div.resultado-wrapper')

const buttons = {
  limpar: document.querySelector("button.form__button--limpar"),
  calcular: document.querySelector("button.form__button--enviar"),
};

const input = {
  apInicial: document.querySelector('input[name="aplic-inicial"]'),
  apMeses: document.querySelector('input[name="aplic-meses"]'),
  meses: document.querySelector('input[name="meses"]'),
  taxa: document.querySelector('input[name="taxa"]'),
};

const data = {
  apInicial: 0,
  apMeses: 0,
  meses: 0,
  taxa: 0,
};

function calcular() {
  if (data.taxa == 0) {
    alert("A taxa não pode ser zero!");
    return;
  } else {
    let resultado = parseInt(data.apInicial);
    for (let i = 1; i <= parseInt(data.meses); i++) {
      resultado += parseInt(data.apMeses);
      resultado += resultado * (parseInt(data.taxa) / 12);
    }
    
	resultadoHTML.innerHTML = `<hr>
	<section class="resultado">
	   <p>R$${parseInt(data.apInicial)}, investido durante ${parseInt(data.meses)} meses a ${parseInt(data.taxa)}% a.m. rende:</p>
	   <h3>R$${resultado.toFixed(2)} ao final da aplicação</h3>
   </section>`



  }
}

for (const p in input) {
  if (Object.hasOwnProperty.call(input, p)) {
    input[p].addEventListener("change", (e) => {
      data[p] = e.target.value;
    });
  }
}

for (const b in buttons) {
  if (Object.hasOwnProperty.call(buttons, b)) {
    console.log(b);
    buttons[b].addEventListener("click", (e) => {
      e.preventDefault();
      b == "calcular" ? console.log(calcular()) : limparInputs();
    });
  }
}
