// Carrega os dados do personagem do localStorage e exibe onde couber
(function() {
  const dados = localStorage.getItem('personagem');
  if (!dados) return;

  const monstro = JSON.parse(dados);
  const texto = `👤 ${monstro.nome} (${monstro.tipo}) — Perigo ${monstro.perigo}/5`;

  // 1. Tenta encontrar um elemento com id "nomePersonagem" (HUD)
  const spanHud = document.getElementById('nomePersonagem');
  if (spanHud) {
    spanHud.textContent = texto;
    return;
  }

  // 2. Se não houver HUD, insere no rodapé (.informacao)
  const info = document.querySelector('.informacao');
  if (info) {
    const p = document.createElement('p');
    p.style.marginTop = '10px';
    p.innerHTML = `<span class="destaque">Personagem:</span> ${texto.replace('👤 ', '')}`;
    info.appendChild(p);
  }
})();