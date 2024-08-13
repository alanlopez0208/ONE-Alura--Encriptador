export const textArea = document.querySelector("#textArea");
export const botonEncriptar = document.querySelector("#botonEncriptar");
export const botonDesencriptar = document.querySelector("#botonDescencriptar");
const body = document.querySelector("body");

export function mostrarTexto(titulo, texto) {
  const containerResultado = document.createElement("div");
  containerResultado.classList.add("contenido__resultado__informacion");

  const tituloElemento = document.createElement("h2");
  tituloElemento.innerText = titulo;

  const textoElemento = document.createElement("p");
  textoElemento.innerText = texto;

  const boton = document.createElement("button");
  boton.classList.add(
    "contenido__resultado_copiar_boton",
    "contenido__encriptador__boton"
  );
  boton.innerText = "copiar";
  boton.onclick = () => {
    navigator.clipboard.writeText(texto);
    alert("Texto copiado");
  };

  containerResultado.appendChild(tituloElemento);
  containerResultado.appendChild(textoElemento);
  containerResultado.appendChild(boton);

  const modal = construirVentana(containerResultado);

  body.appendChild(modal);
}

export function mostrarError(titulo, error) {
  const containerResultado = document.createElement("div");
  containerResultado.classList.add("contenido__resultado__informacion");

  const tituloElemento = document.createElement("h2");
  tituloElemento.innerText = titulo;

  const ul = document.createElement("ul");

  console.log(Object.values(error));

  for (const value of Object.values(error)) {
    const li = document.createElement("li");
    li.innerHTML = value;
    ul.appendChild(li);
  }

  containerResultado.appendChild(tituloElemento);

  containerResultado.appendChild(ul);

  const modal = construirVentana(containerResultado);

  body.appendChild(modal);
}

function construirModal() {
  const modal = document.createElement("div");
  modal.classList.add("modal__container");

  body.style.overflow = "hidden";

  return modal;
}

function construirVentana(contendio) {
  const modal = construirModal();

  const cerrar = () => {
    modal.remove();
    body.style.overflow = "scroll";
  };

  const divContenido = document.createElement("div");
  divContenido.classList.add("contenido__resultado");

  const botonCerrar = document.createElement("button");
  botonCerrar.classList.add("contenido__resultado__cerrar__boton");
  botonCerrar.onclick = cerrar;

  const img = document.createElement("img");
  img.src = "assets/img/cerrar.png";

  botonCerrar.appendChild(img);
  divContenido.appendChild(botonCerrar);
  divContenido.appendChild(contendio);

  modal.appendChild(divContenido);

  return modal;
}
