const perguntas = [
    {
      pergunta: "Qual é a linguagem de programação usada para desenvolver aplicativos web?",
      respostas: [
        "Java",
        "Python",
        "JavaScript",
      ],
      correta: 2,
    },
    {
      pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
      respostas: [
        "var",
        "let",
        "const",
      ],
      correta: 1,
    },
    {
      pergunta: "Qual método é usado para exibir uma mensagem no console do navegador?",
      respostas: [
        "alert()",
        "log()",
        "print()",
      ],
      correta: 1,
    },
    {
      pergunta: "Qual operador é usado para concatenar strings em JavaScript?",
      respostas: [
        "+",
        "-",
        "*",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual estrutura de controle é usada para executar um bloco de código repetidamente?",
      respostas: [
        "if",
        "for",
        "while",
      ],
      correta: 2,
    },
    {
      pergunta: "Qual método é usado para converter uma string em um número inteiro?",
      respostas: [
        "parseInt()",
        "parseFloat()",
        "toFixed()",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual símbolo representa uma função anônima em JavaScript?",
      respostas: [
        "() =>",
        "function()",
        "=>",
      ],
      correta: 2,
    },
    {
      pergunta: "Qual método é usado para adicionar um elemento ao final de um array?",
      respostas: [
        "push()",
        "pop()",
        "shift()",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual operador é usado para verificar igualdade de valor e tipo?",
      respostas: [
        "==",
        "===",
        "!=",
      ],
      correta: 1,
    },
    {
      pergunta: "Qual objeto global é usado para manipular o tempo em JavaScript?",
      respostas: [
        "Date",
        "Time",
        "Clock",
      ],
      correta: 0,
    },
  ]; //ARRAY COM OBJETOS(PERGUNTA E RESPOSTA) E PROPRIEDADES
  
  const quiz = document.querySelector('#quiz') //ESTÁ PEGANDO O ID QUIZ DO HTML
  const template = document.querySelector('template')//ESTÁ PEGANDO O TEMPLATE DO HTML 
  const corretas = new Set()
  const totalPerguntas = perguntas.length
  const MostrarTotal = document.querySelector('#acertos span') //esse espaço entre eles quer dizer que ele está selecionando os acertos
  MostrarTotal.textContent= corretas.size + ' de ' + totalPerguntas
  
  //LOOP DE REPETIÇÃO, PARA CADA ITEM DAS PERGUNTAS VAI SE REPETINDO
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    //AQUI ELE CRIA A VARIAVEL QUIZITEM, ATRIBUI A ELA O CONTEUDO DA TEMPLATE O CLONANDO COM O CONTENT.CLONENODE
    quizItem.querySelector('h3').textContent= item.pergunta
    //ELE PEGA A VARIAEL QUIZITEM,COLOCA COMO PROPRIEDADE O H3(PARA APARECER NA TELA) ATRIBUINDO 
  
  
  
  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt ').cloneNode(true)//ele está pegando o conteúdo dentro do elemento filho do DL, que é o DT, que lá tem as alternativas.
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').value=item.respostas.indexOf(resposta)//aqui está selecionando o input no HTML, está colocando um valor para obter ou definir um valor do campo de entrada, e o item.respostas.indexOf(respostas) está procurando o objeto respostas no array respostas  
    dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf(item)) 
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta =event.target.value == item.correta
      
      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }
      MostrarTotal.textContent = corretas.size + ' de ' + totalPerguntas
    } 
  
    quizItem.querySelector('dl').appendChild(dt)}
  
  quizItem.querySelector('dl dt').remove()
  
    quiz.appendChild(quizItem)
  }
  //aqui está selecionando o input no HTML, está colocando um valor para obter ou definir um valor do campo de entrada, e o item.respostas.indexOf(respostas)  