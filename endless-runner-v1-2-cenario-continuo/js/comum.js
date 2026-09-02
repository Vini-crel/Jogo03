
(function() {
  const dados = localStorage.getItem('personagem');
  if (!dados) return;

  const monstro = JSON.parse(dados);
  const texto = `👤 ${monstro.nome} (${monstro.tipo}) — Perigo ${monstro.perigo}/5`;

   "nomePersonagem" (HUD)
  const spanHud = document.getElementById('nomePersonagem');
  if (spanHud) {
    spanHud.textContent = texto;
    return;
  }

  
  const info = document.querySelector('.informacao');
  if (info) {
    const p = document.createElement('p');
    p.style.marginTop = '10px';
    p.innerHTML = `<span class="destaque">Personagem:</span> ${texto.replace('👤 ', '')}`;
    info.appendChild(p);
  }
})();