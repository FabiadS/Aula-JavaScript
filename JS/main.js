 /* var nome = "Fabiola Spredemann"
var idade = 19;
var idade2 = 20;
var frase = "Japão é o melhor time do mundo";
var n1 = 34;
var n2 = 7;

//STRINGS

alert(nome + " tem " + idade + " anos "); //alerta na página //concatenar
alert(idade + idade2); //soma os dois números concatenando

com asplas duplas não soma, pois é considerado uma string

console.log(frase.replace("Japão", "Brasil"));  //troca palavras

alert(frase.replace("Japão", "Brasil"));

console.log(frase.toLocaleLowerCase()); //todas as letras minúsculas

console.log(frase.toLocaleUpperCase()); // todas as letras maiusculas

/OPERAÇÕES COM NÚMEROS

console.log(n1 * n2); */

//ARRAYS

/* var lista = ["maça", "pera", 12];
lista.push("uva") //adicionar um elemento à lista
lista.pop(); //tira o elemento adicionado 
console.log(lista.length); //ver o tamanho do array
//console.log(lista.reverse()); //imprime os elementos ao contrário
console.log(lista.toString()); //imprime como string
console.log (lista[0].toString()); //imprime o que tem na posição 0
console.log (lista.toString()[0]); //imprime a primeira letra ou numero
console.log(lista.join(" - ")); //separa por traço */

//DICIONÁRIO

/* var fruta = {nome: "maça", cor: "vermelha"};
console.log(fruta.nome);
alert(fruta.cor);

var frutas = [{nome: "maça", cor: "vermelha"}, {nome: "uva", cor: "roxo"}];
console.log(frutas[0]);
alert(frutas[1].nome)
*/

//CONDICIONAIS

/* var idade = prompt("Qual é a sua idade?"); // perguntar a idade da pessoa quand entrar na pag

if( idade < 18){
    alert("Menor de idade");
}
else{
    alert("Maior de idade");
}
*/

// LAÇOS DE REPETIÇÃO

/* var count = 0;

while(count <= 5){
    console.log(count);
    count++;
};
*/

/* var count;

for(count=0; count<5; count++){
    alert(count);
};
*/

//DATES

/* var d = new Date(); //pega a data
alert(d.getMonth()+1); //com o get pega os meses (add+1), dias, horas, etc
alert(d.getFullYear());
*/

//FUNÇÕES

/* function soma(n1, n2){
    return n1 + n2;
}

alert(soma(5,10));

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

alert(setReplace("Vai Japão", "Japão","Brasil"));
*/

function button(){
    //pega o id e após clicar no botão aparece uma mensagem na tela
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
   // console.log(document.getElementById("agradecimento"));

};

//quando clicar no "Obrigado por clicar, vai ir para outra página"
function redirecionar(){
    window.open("https://digitalinnovation.one/sign-in"); //vai para outra aba
   // window.location.href = "https://digitalinnovation.one/sign-in"; //abre na mesma aba
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
    //alert("trocar texto");
    elemento.innerHTML ="Obrigado por passar o mouse";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}
