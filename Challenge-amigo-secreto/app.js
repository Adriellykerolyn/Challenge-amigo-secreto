//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes dos amigos
// Array para armazenar os nomes dos amigos
let amigos = [];

function adicionarAmigo() {
  let input = document.getElementById("amigo");
  let nome = input.value.trim();

  if (nome === "") {
    alert("Por favor, insira um nome.");
    return;
  }

  amigos.push(nome);


  atualizarLista();

  input.value = "";
}

function atualizarLista() {
  let lista = document.getElementById("listaAmigos");

  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Adicione pelo menos um nome antes de sortear!");
    return;
  }

  let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  let sorteado = amigos[indiceAleatorio];

  let resultadoLista = document.getElementById("resultado");
  resultadoLista.innerHTML = ""; 

  let li = document.createElement("li");
  li.textContent = "O amigo secreto sorteado é: " + sorteado;
  resultadoLista.appendChild(li);
}
