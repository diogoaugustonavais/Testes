let nome = prompt("Qual é o seu nome?");
alert("Olá "+ nome + ", seja bem vindo ao jogo!");
let arma = prompt("Qual arma você deseja usar? (pedra(1), espada(2), arco e flecha(3))");
if (arma == "pedra"+"1"){
    alert("Você escolheu a pedra!")
}else if (arma == "espada"+"2"){
    alert("Você escolheu a espada!")
}else if (arma == "arco e flecha"+"3"){
    alert("Você escolheu o arco e flecha!")
}
alert("Você está caminhando pela floresta e encontra um inimigo! O que você faz?");
let acao = prompt("Digite o número da ação que deseja realizar: (atacar(1), fugir(2))");
if (acao == "atacar"+"1"){
    alert("Você decide atacar o inimigo!")
    if (arma == "pedra"+"1"){
        while (vidaInimigo != 0){
        let ataque = prompt("Qual tipo de ataque deseja usar? (pedrada(1))")
        if (ataque == "pedrada"+"1"){
            const inimigo = 100
            const dano = danopedra(ataque)
            const vidaInimigo = vida(inimigo, dano)
            console.log("O inimigo tem ${vidaInimigo} de vida restante.");
    }  
    }  
}
    
}
function danopedra(ataque){
    if(ataque == "pedrada"){
        return 10
    }
}
function vida(inimigo, dano){
    return inimigo - dano
}
