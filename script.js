// marcar ramos aprobados
document.querySelectorAll('.ramo').forEach(ramo => {
  ramo.addEventListener('click', () => {
    ramo.classList.toggle('aprobado');

    if (ramo.dataset.info) {
      alert("Prerrequisito: " + ramo.dataset.info);
    }
  });
});

// filtro por año
function filtrar(anio) {
  document.querySelectorAll('.anio').forEach(div => {
    if (anio === 'todos' || div.dataset.anio === anio) {
      div.style.display = 'block';
    } else {
      div.style.display = 'none';
    }
  });
}
