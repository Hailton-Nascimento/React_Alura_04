function validarCPF(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: "CPF deve ter 11 digitos." }
  }
  else if (cpf.match(/^(\d)\1{10}/g)) {
    return { valido: false, texto: "CPF digitado não é valido." };
  }
  else {
    return { valido: true, texto: "" }
  }

}

function validarSenha(senha) {
  const regexSenha =/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[ !@#$%^&*_=+-]).{6,12}$/;
  if (senha.length < 4 || senha.length > 30) {
    return { valido: false, texto: "A senha deve ter entre 4 e 30 dígitos." }
  } else if(!senha.match(regexSenha))
  return { valido: false, texto: "A senha deve conter entre 6 a 12 caracteres, deve conter pelo menos uma letra maiúscula, um número e não deve conter símbolos."};
  else {
    return { valido: true, texto: "" }
  }

}
function validarNome(nome) {
  console.log(nome + "tentou validar o nome");
  if (nome.length < 4 || nome.length > 30) {
    return { valido: false, texto: "A senha deve ter entre 4 e 30 dígitos." }
  } else {
    return { valido: true, texto: "" }
  }

}
function validarCep(cep) {
  cep = cep.replace(/\D/g, '');
  const regexCep = /[\d]{5}-?[\d]{3}/;

  if (!cep.match(regexCep)|| cep.length!==8) {
    return { valido: false, texto: "CEP digitado não é valido." }
  }else {
    return { valido: true, texto: "" }
  }

}


export {
  validarCPF,
  validarSenha,
  validarNome,
  validarCep
}