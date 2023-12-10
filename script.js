let placarToss = JSON.parse(localStorage.getItem("placar")) || {
  Vitorias: 0,
  Derrotas: 0,
};

function resetPlacarCaraOuCoroa() {
  placarToss.Vitorias = 0;
  placarToss.Derrotas = 0;

  atualizarPlacar();

  localStorage.setItem("placar", JSON.stringify(placarToss));
}

function caraOuCoroa(selection) {
  const numeroRandom = Math.random();
  let escolhaComputador = "";

  if (numeroRandom >= 0.5) {
    escolhaComputador = "Cara";
  } else {
    escolhaComputador = "Coroa";
  }

  let resultado = "";

  if (selection === escolhaComputador) {
    resultado = "Você venceu!";
    placarToss.Vitorias += 1;
  } else {
    resultado = "Você perdeu!";
    placarToss.Derrotas += 1;
  }

  atualizarPlacar();

  localStorage.setItem("placar", JSON.stringify(placarToss));

  alert(
    `Você escolheu ${selection} e a moeda caiu em ${escolhaComputador}. ${resultado} Vitórias: ${placarToss.Vitorias}, Derrotas ${placarToss.Derrotas}`
  );
}

function atualizarPlacar() {
  document.querySelector(
    ".placar"
  ).innerHTML = `Vitórias: ${placarToss.Vitorias}, Derrotas: ${placarToss.Derrotas}`;
}

window.addEventListener("load", function () {
  atualizarPlacar();
});
