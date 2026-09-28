const estados = {
  contrast: false,
  nav: false,
  reading: false
};

let fontScale = 100;

function aplicar() {
  const raiz = document.documentElement;
  raiz.classList.toggle("a11y-contrast", estados.contrast);
  raiz.classList.toggle("a11y-nav", estados.nav);
  raiz.classList.toggle("a11y-reading", estados.reading);
  if (fontScale > 100) {
    raiz.style.setProperty("--a11y-zoom", fontScale / 100);
  } else {
    raiz.style.removeProperty("--a11y-zoom");
  }
}

chrome.storage.local.get(["contrast", "nav", "reading", "fontScale"], (dados) => {
  estados.contrast = !!dados.contrast;
  estados.nav = !!dados.nav;
  estados.reading = !!dados.reading;
  fontScale = Number(dados.fontScale) || 100;
  aplicar();
});

chrome.storage.onChanged.addListener((mudancas) => {
  if ("fontScale" in mudancas) {
    fontScale = Number(mudancas.fontScale.newValue) || 100;
  }
  for (const chave in mudancas) {
    if (chave in estados) {
      estados[chave] = mudancas[chave].newValue;
    }
  }
  aplicar();
});