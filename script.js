document.getElementById("valor").innerHTML = "15";

let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let useUpper, useLower, useNumbers, useSymbols; // Defina essas variáveis aqui, pois seus estados podem mudar

let charset = "";
let lowerCharset = "abcdefghijklmnopqrstuvwxyz";
let upperCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numberCharset = "1234567890";
let symbolCharset = "!@#$%^&*()_+";
var novaSenha = "";

sliderElement.oninput = function () {
  sizePassword.innerHTML = this.value;
};

function generatePassword() {
  useUpper = document.getElementById("upperLetters").checked;
  useLower = document.getElementById("lowLetters").checked;
  useNumbers = document.getElementById("numbers").checked;
  useSymbols = document.getElementById("symbols").checked;

  let pass = "";

  const length = sliderElement.value; // Obtenha o valor atual do controle deslizante
  let charsetToUse = charset; // Comece com o conjunto de caracteres padrão

  if (useLower) {
    charsetToUse += lowerCharset;
  } //
  if (useUpper) {
    charsetToUse += upperCharset;
  }
  if (useNumbers) {
    charsetToUse += numberCharset;
  }
  if (useSymbols) {
    charsetToUse += symbolCharset;
  }

  for (let i = 0, n = charsetToUse.length; i < length; ++i) {
    pass += charsetToUse.charAt(Math.floor(Math.random() * n));
  }
  containerPassword.classList.remove("hide");
  password.innerHTML = pass;
  novaSenha = pass;
}

function closeAlert() {
    var modal = document.getElementById("custom-alert");
    modal.style.display = "none";
  }
  function openAlert(message) {
    var modal = document.getElementById("custom-alert");
    var modalContent = document.querySelector(".modal-content");
    modalContent.innerHTML = `
      <h2>Alerta Personalizado?</h2>
      <p>${message}</p>
      <button id="custom-alert-button">Fechar</button>`;
  
    modal.style.display = "block"; // Exibir o modal
  
    var closeButton = document.getElementById("custom-alert-button");
    closeButton.addEventListener("click", closeAlert);
  
    // Adicione um event listener para fechar o alerta quando clicar fora dele
    modal.addEventListener("click", function (event) {
      if (event.target === modal) {
        closeAlert();
      }
    });
  }

function copyPassword() {
  if (novaSenha) {
    navigator.clipboard.writeText(novaSenha);
    openAlert("Senha copiada com sucesso!");
  } else {
    openAlert("Nenhuma senha gerada, por favor selecione alguma das opções");
  }
}
