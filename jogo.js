let nome = prompt("Qual é o seu nome?");
alert("Olá "+ nome + ", seja bem vindo ao jogo!");
let arma = prompt("Qual arma você deseja usar? (pedra(1), espada(2), arco e flecha(3))");
if (arma == "pedra" || arma == "1"){
    alert("Você escolheu a pedra!")
}else if (arma == "espada" || arma == "2"){
    alert("Você escolheu a espada!")
}else if (arma == "arco e flecha" || arma == "3"){
    alert("Você escolheu o arco e flecha!")
}
alert("Você está caminhando pela floresta e encontra um inimigo! O que você faz?");
let acao = prompt("Digite o número da ação que deseja realizar: (atacar(1), fugir(2))");
if (acao == "atacar" || acao == "1"){
    alert("Você decide atacar o inimigo!")
    if (arma == "pedra" || arma == "1"){
        let vidaInimigo = 100
            while (vidaInimigo > 0){
               vidaInimigo = ataquePedrada(vidaInimigo)
    }  
 } else if (arma == "espada" || arma == "2"){
    let vidaInimigo = 100
            while (vidaInimigo > 0){
               vidaInimigo = ataqueEspada(vidaInimigo)
 }
}else if (arma == "arco e flecha" || arma == "3"){
    let vidaInimigo = 100
            while (vidaInimigo > 0){
               vidaInimigo = ataqueArco(vidaInimigo)
            }
}
}
function ataquePedrada(vidaAtualInimigo){
     let ataque = prompt("Qual tipo de ataque deseja usar? (pedrada(1))")
        if (ataque == "pedrada" || ataque == "1"){
            const dano = 5
            vidaAtualInimigo = vidaAtualInimigo - dano
            console.log("O inimigo tem " + vidaAtualInimigo + " de vida restante.")
            alert("O inimigo tem " + vidaAtualInimigo + " de vida restante.")
            }
            return vidaAtualInimigo
}
function ataqueEspada(vidaAtualInimigo){
     let ataque = prompt("Qual tipo de ataque deseja usar? (espadada(1))")
        if (ataque == "espadada" || ataque == "1"){
            const dano = 20
            vidaAtualInimigo = vidaAtualInimigo - dano
            console.log("O inimigo tem " + vidaAtualInimigo + " de vida restante.")
            alert("O inimigo tem " + vidaAtualInimigo + " de vida restante.")
            }
            return vidaAtualInimigo
}
function ataqueArco(vidaAtualInimigo){
     let ataque = prompt("Qual tipo de ataque deseja usar? (flechada(1))")
        if (ataque == "flechada" || ataque == "1"){
            const dano = 15
            vidaAtualInimigo = vidaAtualInimigo - dano
            console.log("O inimigo tem " + vidaAtualInimigo + " de vida restante.")
            alert("O inimigo tem " + vidaAtualInimigo + " de vida restante.")
            }
            return vidaAtualInimigo
}
