# TecnologiasAssistivas2026
Repositório voltado para colocar as atividades práticas proposta pelo professor na matéria de tecnologias assistivas, no ano de 2026.
# Modo Acessível — Extensão de Acessibilidade

Extensão para navegadores baseados em Chrome que aplica recursos de
acessibilidade em qualquer página web, desenvolvida como solução de
tecnologia assistiva digital de baixo custo.

## Funcionalidades

- **Alto contraste**: fundo preto, texto branco e links destacados em amarelo,
  melhorando a legibilidade para pessoas com baixa visão
- **Fonte ampliada com controle deslizante**: ajuste do tamanho do conteúdo
  entre 100% e 200%, permitindo que o usuário escolha o grau de ampliação
- **Espaçamento de leitura**: aumento do espaçamento entre letras, palavras
  e linhas, indicado para pessoas com dislexia e dificuldades de leitura
- **Navegação simplificada**: destaca links e botões com contorno visível,
  sublinha todos os links e remove animações da página
- **Atalhos de teclado**: alterna os modos sem precisar abrir o painel
  - Ctrl+Shift+1 — Alto contraste
  - Ctrl+Shift+2 — Fonte ampliada
  - Ctrl+Shift+3 — Navegação simplificada
  - Ctrl+Shift+4 — Espaçamento de leitura
- **Botão "Redefinir tudo"**: restaura todas as configurações ao estado
  original com um único clique
- **Preferências persistentes**: os ajustes ficam salvos e continuam ativos
  ao navegar entre páginas e ao fechar o navegador

## Como instalar

1. Abra `chrome://extensions` no navegador
2. Ative o "Modo do desenvolvedor"
3. Clique em "Carregar sem compactação"
4. Selecione a pasta do projeto

## Como usar

Clique no ícone da extensão e ative os recursos desejados, ou utilize os
atalhos de teclado. As preferências ficam salvas mesmo ao navegar para
outras páginas.

## Tecnologias utilizadas

- HTML, CSS e JavaScript puros (sem dependências externas)
- Chrome Extensions Manifest V3
- Chrome Storage API para persistência das preferências
- Content Scripts para aplicação dos estilos nas páginas visitadas
