function calcularNotas() {
  const linhas = document.querySelectorAll('#tabelaNotas tbody tr');
  linhas.forEach(linha => {
    const inputs = linha.querySelectorAll('input');
    let soma = 0;
    let preenchidos = 0;

    inputs.forEach(input => {
      const val = parseFloat(input.value);
      if (!isNaN(val)) {
        soma += val;
        preenchidos++;
      }
    });

    const media = preenchidos === 3 ? (soma / 3).toFixed(2) : '-';
    const mediaTd = linha.querySelector('.media');
    const statusTd = linha.querySelector('.status');

    mediaTd.textContent = media;

    if (media !== '-') {
      if (media >= 7) {
        statusTd.textContent = 'Aprovado';
        statusTd.className = 'status aprovado';
      } else {
        statusTd.textContent = 'Reprovado';
        statusTd.className = 'status reprovado';
      }
    } else {
      statusTd.textContent = '-';
      statusTd.className = 'status';
      }
  });
}