export function encriptar(texto) {
  const errores = validarEntrada(texto);

  if (Object.entries(errores).length > 0) return errores;

  const regex = /[aeiou]/g;

  const textoEncriptado = texto.replace(regex, (match, text) => {
    switch (match) {
      case "a":
        return "ai";
      case "e":
        return "enter";
      case "i":
        return "imes";
      case "o":
        return "ober";
      case "u":
        return "ufat";
    }
  });

  return textoEncriptado;
}

export function desencriptar(texto) {
  const errores = validarEntrada(texto);

  if (Object.entries(errores).length > 0) return errores;

  const regex = /enter|ai|imes|ober|ufat/g;

  const textoEncriptado = texto.replace(regex, (match, text) => {
    console.log(`${match}--${text}`);
    switch (match) {
      case "ai":
        return "a";
      case "enter":
        return "e";
      case "imes":
        return "i";
      case "ober":
        return "o";
      case "ufat":
        return "u";
    }
  });

  return textoEncriptado;
}

function validarEntrada(texto) {
  const errores = {};
  if (texto === "") errores.vacia = "El campo esta vacio";
  if (/[A-Z]/.test(texto)) errores.mayusculas = "Hay Mayusculas en el texto";
  if (/[ÁÉÍÓÚÜÑáéíóúüñ#?!@$%^&*-]/.test(texto))
    errores.acentos = "Hay caracteres especiales o hay acentos";
  return errores;
}
