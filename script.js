let pedirLanche = new Promise((resolve, reject) => {
    let disponivel = true; // Altere para false para testar erro
  
    console.log("Fazendo o pedido...");
  
    setTimeout(() => {
      if (disponivel) {
        resolve("Pedido feito! A caminho...");
      } else {
        reject("Desculpe, estamos sem entregadores no momento.");
      }
    }, 2000);
  });
  
  pedirLanche
    .then((mensagem) => {
      console.log(mensagem); // Pedido feito
  
      // Agora simula o tempo de entrega com outro setTimeout
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("Entregue com sucesso!");
        }, 3000); // Tempo de entrega
      });
    })
    .then((mensagemFinal) => {
      console.log(mensagemFinal); // Entregue com sucesso!
    })
    .catch((erro) => {
      console.log("Erro:", erro);
    })
    .finally(() => {
      console.log("Obrigado por utilizar nossos serviços!");
    });
  