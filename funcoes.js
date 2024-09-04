/*Código para mostrar a tabela, incluindo os itens e os ícones dos botões*/

var lista = [];

function listar() {
  var tabela = document.getElementById("tabela")
  tabela.innerHTML = '<th>Itens adicionados</th>'
  
  for (let pos in lista) {
    tabela.innerHTML += `<tr><td>${Number(pos)+1}. ${lista[pos]}</td></tr>`
    tabela.innerHTML += `<button id="botaoExcluir" style="top:${(Number(pos)*32.3) + 150}px;" class="fa fa-trash" onclick="excluir(${Number(pos)})"></button>`;
    tabela.innerHTML += `<button id="botaoEditar" style="top:${(Number(pos)*32.3) + 150}px;" class="fa fa-edit" onclick="editar(${Number(pos)})"></button>`;
  }
}

/*Código para adicionar itens na tabela*/

var botaoAdicionar = document.getElementById("adicionar");

function adicionar() {
  var item = document.getElementById("item")
  if (lista.indexOf(item.value) == -1 && item.value != "") {
    lista.push(item.value)
    listar()
  } else {
    alert("Item em branco ou já encontrado na lista!")
  }
  item.value = ""
  item.focus()
}

botaoAdicionar.addEventListener("click", adicionar);

/*Código para limpar a tabela*/

var botaoLimpar = document.getElementById("limpar");

function limpar() {
  var resultado = confirm('Deseja limpar a lista?')
  if (resultado == true) {
    lista.splice(0)
    listar()
  }
}

botaoLimpar.addEventListener("click", limpar);

/*Código para excluir os itens da tabela*/

function excluir(indice) {
  var resultado = confirm('Deseja excluir o item da lista?')
  if (resultado == true) {
    lista.splice(indice, 1)
    listar()
  }
}

/*Código para editar os itens da tabela*/

function editar(indice) {
  var novo_item = prompt('Digite o novo nome:')
  if (novo_item != '' && lista.indexOf(novo_item) == -1 && novo_item != null) {
    lista[indice] = novo_item
    listar()
  } else {
    alert('Campo em branco ou item já encontrado na lista!')
  }
}
