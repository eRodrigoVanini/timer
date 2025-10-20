DevWorld Timer ⏱️

<p align="center">
  <a href="https://github.com/eRodrigoVanini/timer">
    <img src="assets/preview01.png" alt="DevWorld Timer — preview" width="720">
  </a>
</p>


A minimal, fast, vanilla JS timer with Start, Pause, and Reset. Clean UI, zero dependencies, and readable code.

<p align="center"> <!-- Substitua os links abaixo quando publicar --> <a href="https://SEU_USUARIO.github.io/SEU_REPO/"> <img src="https://img.shields.io/badge/OPEN%20LIVE%20DEMO-000000?style=for-the-badge" alt="Open Live Demo"> </a> &nbsp; <a href="https://github.com/SEU_USUARIO/SEU_REPO"> <img src="https://img.shields.io/badge/VIEW%20CODE-4863f7?style=for-the-badge" alt="View Code"> </a> </p>
✨ Features

HH:MM:SS display with 1s tick

Start / Pause / Reset controls

Event delegation (um único listener para todos os botões)

State styling: quando pausado, o tempo fica vermelho (.paused)

CSS custom properties para personalizar cores

🖼️ Preview

Adicione um screenshot em assets/preview.png para valorizar o repositório:

![DevWorld Timer — Preview](assets/preview.png)

🧱 Tech Stack

HTML5 (estrutura semântica simples)

CSS3 (variáveis, layout responsivo básico, Google Fonts)

JavaScript (vanilla) — sem frameworks ou build steps

📁 Project Structure
.
├── index.html
├── style.css
├── script.js
└── assets/
    └── preview.png        # opcional

▶️ Run locally

Você pode abrir diretamente o index.html. Para um fluxo mais realista, suba um servidor estático:

# no diretório do projeto
python -m http.server 5500
# abra http://localhost:5500

🧭 How it works (high-level)

State: um contador seconds é incrementado a cada 1s por setInterval.

Format: getTimeFromSeconds(seconds) usa Date + toLocaleTimeString("pt-br", { timeZone: "UTC", hour12: false }) para exibir HH:MM:SS.

Controls: clique em Start inicia (ou reinicia) o intervalo; Pause interrompe; Reset zera o relógio e o estado visual.

Event Delegation: um único document.addEventListener('click', ...) decide a ação com classList.contains(...).

Key snippet — event delegation:

document.addEventListener('click', (e) => {
  const el = e.target;

  if (el.classList.contains('reset')) {
    clearInterval(timer);
    components.clock.classList.remove('paused');
    components.clock.innerHTML = '00:00:00';
    seconds = 0;
  }

  if (el.classList.contains('start')) {
    components.clock.classList.remove('paused');
    clearInterval(timer);
    startClock();
  }

  if (el.classList.contains('pause')) {
    components.clock.classList.add('paused');
    clearInterval(timer);
  }
});

🧩 Customization

Cores (no :root):

:root {
  --primary-color: #4863f7;
  --primary-color-darker: #2f41a5;
}


Estado pausado:

.paused { color: red; }  /* mude para a cor que preferir */


Fonte: ajustável via Google Fonts em style.css.

Título: altere o <h1> no index.html.

♿ Accessibility (baseline)

Botões com rótulos textuais claros (Start, Pause, Reset).

Sugestões de melhoria rápida:

Adicionar aria-pressed nos estados Start/Pause.

:focus-visible para foco de teclado evidente.

Role de atalhos (ex.: Space pausar/retomar).

🗺️ Roadmap

 Atalhos de teclado (Space = pause/resume; R = reset; S = start)

 Sons opcionais (beep ao iniciar/pausar)

 Lap marks (parciais)

 Persistência (salvar último tempo no localStorage)

 Modo “countdown” além de “stopwatch”

✅ Checklist before publishing

 Substituí os links da Demo e Repo no topo

 Adicionei assets/preview.png

 Testei Start/Pause/Reset em desktop e mobile

 Revisei contraste do estado pausado

🤝 Contributing

Sugestões e PRs são bem-vindos — principalmente para atalhos de teclado e acessibilidade.

📝 License

Defina sua licença preferida (ex.: MIT) e inclua LICENSE.
