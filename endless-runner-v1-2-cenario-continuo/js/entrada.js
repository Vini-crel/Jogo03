const form = document.getElementById('formEntrada');
const campoNome = document.getElementById('nome');
const campoTipo = document.getElementById('tipo');
const campoPerigo = document.getElementById('perigo');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const monstro = {
    nome: campoNome.value.trim(),
    tipo: campoTipo.value.trim(),
    perigo: parseInt(campoPerigo.value) || 1
  };

  localStorage.setItem('personagem', JSON.stringify(monstro));
  window.location.href = '01-ceu.html';
});