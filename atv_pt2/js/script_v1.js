let produtos = [
  { nome: 'Fone', diretorio: 'fone', textoDescritivo: 'Fone de Ouvido Philips com Microfone - Branco', imagens: ['01.jpg', '02.jpg', '03.jpg'] },
  { nome: 'Mouse', diretorio: 'mouse', textoDescritivo: 'Mouse Gamer Acer Nitro 7200 DPI - Preto', imagens: ['01.jpg', '02.jpg', '03.jpg'] },
  { nome: 'HeadSet', diretorio: 'headSet', textoDescritivo: 'Headset Gamer Com Mic Quantum Jbl  - Preto', imagens: ['01.jpg', '02.jpg', '03.jpg'] },
  { nome: 'Teclado', diretorio: 'teclado', textoDescritivo: 'Teclado Mecânico Gamer Phantom, ABNT2 - Preto', imagens: ['01.jpg', '02.jpg', '03.jpg'] },
];

function ilustrarProduto() {
  let container = document.getElementById("produtos");

  if (container instanceof HTMLDivElement) {
    produtos.forEach(produto => {
      produto.imagens.forEach(nomeImagem => {
        const img = document.createElement("img");
        console.log(produto);
        img.src = `img/${produto.diretorio}/${nomeImagem}`;
        img.alt = produto.nome;
        img.style.width = "150px";
        img.style.margin = "10px";
        container.appendChild(img);
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", ilustrarProduto);
