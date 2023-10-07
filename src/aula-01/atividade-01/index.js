function validarNome(input) {
  const valor = input.value;
  const regex = /^[A-Za-z\sçéíã]+$/;

  if (!valor) {
    input.classList.add("focus:border-[#FF0000]");
    input.setCustomValidity("Este campo é obrigatório");
  } else if (!regex.test(valor)) {
    input.classList.add("focus:border-[#FF0000]");
    input.setCustomValidity("Apenas letras são permitidas");
  } else {
    input.classList.remove("focus:border-[#FF0000]");
    input.setCustomValidity("");
  }
}

function validarEmail(input) {
  const valor = input.value;
  const count = (valor.match(/@/g) || []).length;

  if (count > 1) {
    input.classList.add("focus:border-[#FF0000]");
    input.setCustomValidity("Digite apenas um '@'");
  } else {
    input.classList.remove("focus:border-[#FF0000]");
    input.setCustomValidity("");
  }
}

function validarTelefone(input) {
  const valor = input.value;
  if (valor.length !== 15) {
    input.setCustomValidity("Preencha com 15 dígitos");
    input.classList.add("focus:border-[#FF0000]");
  } else {
    input.classList.remove("focus:border-[#FF0000]");
    input.setCustomValidity("");
  }

  let numero = input.value.replace(/\D/g, "");

  if (numero.length > 2) {
    numero = "(" + numero.substring(0, 2) + ") " + numero.substring(2);
  }
  if (numero.length > 10) {
    numero = numero.substring(0, 10) + "-" + numero.substring(10);
  }

  input.value = numero;
}

function validarIdade(input) {
  const idade = parseInt(input.value);
  switch (true) {
    case idade < 0:
      input.classList.add("focus:border-[#FF0000]");
      input.setCustomValidity("Você é a evolução do ser humano?");
      break;
    case idade > 100:
      input.classList.add("focus:border-[#FF0000]");
      input.setCustomValidity("Você é um ancião?");
      break;
    default:
      input.classList.remove("focus:border-[#FF0000]");
      input.setCustomValidity("");
      break;
  }
}

function validarSelecao(selectElement) {
  var selectedOption = selectElement.options[selectElement.selectedIndex];
  selectedOption.value !== ""
    ? selectElement.classList.add("text-white")
    : selectElement.classList.remove("text-white");
}
