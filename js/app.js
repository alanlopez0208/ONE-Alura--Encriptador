import {
  botonDesencriptar,
  botonEncriptar,
  mostrarError,
  mostrarTexto,
  textArea,
} from "./ui.js";

import { desencriptar, encriptar } from "./encriptacion.js";

botonEncriptar.addEventListener("click", () => {
  const texto = textArea.value;
  const respuesta = encriptar(texto);

  typeof respuesta != "object"
    ? mostrarTexto("El texto encriptado es:", respuesta)
    : mostrarError("Hay errores en tu texto", respuesta);
});

botonDesencriptar.addEventListener("click", () => {
  const texto = textArea.value;
  const respuesta = desencriptar(texto);

  typeof respuesta != "object"
    ? mostrarTexto("El texto desencriptado es:", respuesta)
    : mostrarError("Hay errores en tu texto", respuesta);
});
