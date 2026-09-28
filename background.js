const comandos = {
  "toggle-contrast": "contrast",
  "toggle-font": "fontScale",
  "toggle-nav": "nav",
  "toggle-reading": "reading"
};

chrome.commands.onCommand.addListener((comando) => {
  const chave = comandos[comando];
  chrome.storage.local.get(chave, (dados) => {
    if (chave === "fontScale") {
      const atual = Number(dados.fontScale) || 100;
      chrome.storage.local.set({ fontScale: atual > 100 ? 100 : 130 });
    } else {
      chrome.storage.local.set({ [chave]: !dados[chave] });
    }
  });
});