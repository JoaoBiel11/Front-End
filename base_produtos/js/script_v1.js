//prettier-ignore
let produtos = [
    { nome: 'Fone', diretorio: 'fone', textoDescritivo: 'Fone de Ouvido Philips com Microfone - Branco', imagens: ['01.jpg', '02.jpg', '03.jpg'] },
    { nome: 'Mouse', diretorio: 'mouse', textoDescritivo: 'Mouse Gamer Acer Nitro 7200 DPI - Preto', imagens: ['01.jpg', '02.jpg', '03.jpg'] },
    { nome: 'HeadSet', diretorio: 'headSet', textoDescritivo: 'Headset Gamer Com Mic Quantum Jbl  - Preto', imagens: ['01.jpg', '02.jpg', '03.jpg'] },
    { nome: 'Teclado', diretorio: 'teclado', textoDescritivo: 'Teclado Mecânico Gamer Phantom, ABNT2 - Preto', imagens: ['01.jpg', '02.jpg', '03.jpg'] },
  ];

  function ilustrarImagens() {
  const container = document.getElementById('produtos');

  if (container && container instanceof HTMLDivElement) {
    // Limpa o container antes de adicionar novos elementos
    container.innerHTML = '';

    produtos.forEach(prod => {
      const produtoDiv = document.createElement('div');
      produtoDiv.className = 'produto';

      // Título
      const titulo = document.createElement('h2');
      titulo.textContent = prod.nome;
      produtoDiv.appendChild(titulo);

      // Container de imagens
      const imagensContainer = document.createElement('div');
      imagensContainer.className = 'imagens';

      // Adiciona cada imagem
      prod.imagens.forEach(img => {
        const imgElement = document.createElement('img');
        imgElement.src = `img/${prod.diretorio}/${img}`; // Caminho: pasta/nome.jpg
        imgElement.alt = prod.nome;
        imagensContainer.appendChild(imgElement);
        imgElement.style.width = ('45rem');
        titulo.style.padding = '100px';
      });

      produtoDiv.appendChild(imagensContainer);
      container.appendChild(produtoDiv);
    });
  } else {
    console.error("#produtos não é uma div válida.");
  }
}

// Chame a função após o carregamento do DOM
document.addEventListener('DOMContentLoaded', ilustrarImagens);