/*
  Pegamos os elementos do HTML pelo id.

  document significa o documento HTML.
  getElementById significa: "pegue o elemento que tem esse id".
*/
const selectIdioma = document.getElementById("idioma");
const botaoSaudacao = document.getElementById("botaoSaudacao");
const resultado = document.getElementById("resultado");
const bandeira = document.getElementById("bandeira");

/*
  addEventListener cria um evento.

  Evento é algo que acontece na página.
  Nesse caso, o evento é o clique no botão.
*/
botaoSaudacao.addEventListener("click", function () {

  /*
    Variável é uma caixinha que guarda um valor.

    Aqui, idiomaSelecionado recebe o idioma escolhido no select.
  */
  let idiomaSelecionado = selectIdioma.value;

  /*
    Essa variável vai guardar a saudação que será mostrada na página.
  */
  let saudacao = "";

  /*
    Essa variável vai guardar a bandeira do idioma escolhido.
  */
  let emojiBandeira = "🌎";

  /*
    switch case é uma estrutura de decisão.

    Ele olha o valor da variável idiomaSelecionado
    e escolhe qual bloco de código deve executar.
  */
  switch (idiomaSelecionado) {

    case "portugues":
      saudacao = "Olá! Seja bem-vindo!";
      emojiBandeira = "🇧🇷";
      break;

    case "ingles":
      saudacao = "Hello! Welcome!";
      emojiBandeira = "🇺🇸";
      break;

    case "espanhol":
      saudacao = "¡Hola! ¡Bienvenido!";
      emojiBandeira = "🇪🇸";
      break;

    case "frances":
      saudacao = "Bonjour! Bienvenue!";
      emojiBandeira = "🇫🇷";
      break;

    case "italiano":
      saudacao = "Ciao! Benvenuto!";
      emojiBandeira = "🇮🇹";
      break;

    case "alemao":
      saudacao = "Hallo! Willkommen!";
      emojiBandeira = "🇩🇪";
      break;

    case "japones":
      saudacao = "こんにちは! ようこそ!";
      emojiBandeira = "🇯🇵";
      break;

    /*
      default acontece quando nenhuma opção acima foi escolhida.
      É uma segurança para evitar resposta vazia.
    */
    default:
      saudacao = "Por favor, escolha um idioma primeiro.";
      emojiBandeira = "🌎";
      break;
  }

  /*
    textContent coloca texto dentro do elemento HTML.

    Usamos textContent em vez de innerHTML porque é mais seguro
    quando estamos apenas mostrando texto.
  */
  resultado.textContent = saudacao;
  bandeira.textContent = emojiBandeira;
});

