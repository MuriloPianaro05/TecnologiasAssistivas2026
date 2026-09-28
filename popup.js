const chaves = ["contrast", "nav", "reading"];

function sincronizarInterface(dados) {
  chaves.forEach((chave) => {
    document.getElementById(chave).checked = !!dados[chave];
  });
  const slider = document.getElementById("fontScale");
  slider.value = Number(dados.fontScale) || 100;
  document.getElementById("valorFonte").textContent = slider.value + "%";
}

document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.local.get([...chaves, "fontScale"], sincronizarInterface);

  chaves.forEach((chave) => {
    document.getElementById(chave).addEventListener("change", (evento) => {
      chrome.storage.local.set({ [chave]: evento.target.checked });
    });
  });

  document.getElementById("fontScale").addEventListener("input", (evento) => {
    document.getElementById("valorFonte").textContent = evento.target.value + "%";
    chrome.storage.local.set({ fontScale: Number(evento.target.value) });
  });

  document.getElementById("reset").addEventListener("click", () => {
    chrome.storage.local.set({ contrast: false, nav: false, reading: false, fontScale: 100 });
    sincronizarInterface({ contrast: false, nav: false, reading: false, fontScale: 100 });
  });
});