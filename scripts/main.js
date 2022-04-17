let dados = [];
let dado;
let radio;

// Executa as operações
habilitarDesabilitarRadio();
function tratamentoDados(){
    dado = document.getElementById("textoCamp").value;
    radio = checkRadio();
    inserir();
    imprimir(radio);
}

// só permite letras no input
$("#textoCamp").on("input", function(){
    var regexp = /[^a-zA-Z]/g;
    if(this.value.match(regexp)){
      $(this).val(this.value.replace(regexp,''));
    }
  });

// caso o array dados esteja com algum valor na inicialização do sistema desabilita os buttonRadios 
function habilitarDesabilitarRadio() {
    let rLista = document.querySelector("#lista");
    let rPilha = document.querySelector("#pilha");
    if (dados.length != 0){
        rLista.disabled = true;
        rPilha.disabled = true;
    }else{
        rLista.disabled = false;
        rPilha.disabled = false;
    }
}

// verifica qual dos buttunRadios está selecionado e retorna o nome dele
function  checkRadio (){
    if(document.getElementById("lista").checked){
        return "lista";

    }else if (document.getElementById("pilha").checked){
        return "pilha";
    }
}

// Caso o buttonRadio lista esteja selecionado insere o dado na última posição do array
// Caso o buttonRaio pilha esteja selecionado insere na primeira posição do array
function inserir(){
    if (radio === "lista")
        dados.push(dado);
    else if (radio === "pilha")
        dados.unshift(dado);
} 

// Chama as funções de impressão
function imprimir(radioBtn){
    switch (radioBtn){
        case 'lista':
            imprimirLista();
            break;
        case 'pilha':
            imprimirPilha();
            break;
        default:
    }
}

// imprime os valores no formato de lista
function imprimirLista(){
    $('#dadosArray').html(" ");
    let aux = 0;
    for (let i = dados.length-1; i >= 0; i--){
        if (aux === 0)
            $('#dadosArray').prepend(dados[i]);
        else 
            $('#dadosArray').prepend(dados[i]+ " - ");
        
        aux++;
    }
}

// imprimi os valores no formato de pilha
function imprimirPilha(){
    $('#dadosArray').html(" ");
    for (i of dados){
        $('#dadosArray').append(i+"<br>");
    }
}

// esvazia o array e atualiza a tela
function limpar(){
    dados = [];
    imprimir(radio);
}
