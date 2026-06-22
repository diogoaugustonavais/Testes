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
  let vidaInimigo = 100
  let vidaAtualPlayer = 100
  let turno = 1 
  let inventarioJogador = []
  while (vidaInimigo>0 && vidaAtualPlayer>0){
    if (turno === 1){
    if (arma == "pedra" || arma == "1"){
    vidaInimigo = ataquePedrada(vidaInimigo)
    } else if (arma == "espada" || arma == "2"){
    vidaInimigo = ataqueEspada(vidaInimigo)
    } else if (arma == "arco e flecha" || arma == "3"){
    vidaInimigo = ataqueArco(vidaInimigo)
    } turno = 2
    if (vidaInimigo<=0){
        lootinicial();
    }
  }
   else { vidaAtualPlayer = ataquedoinimigo(vidaAtualPlayer)
    turno = 1
  }
}       
} else if (acao == "fugir" || acao == "2"){
   querocorrer()
}
acao = prompt("Você deseja fazer algo? \n (abrir inventario(1), usar poção de cura (2), ignorar(3)")
escolhas_ou_armazenamento(acao)
function ataquePedrada(vidaAtualInimigo){
     let ataque = prompt("Qual tipo de ataque deseja usar? (pedrada(1))")
        if (ataque == "pedrada" || ataque == "1"){
                const chancecritica = 0.4
            if (Math.random() < chancecritica){
        console.log("Você acertou um ataque critico!")
        alert("Você acertou um ataque critico!")
        const dano = 9
        vidaAtualInimigo = vidaAtualInimigo - dano
        console.log("O inimigo tem " + vidaAtualInimigo + " de vida restante.")
        alert("O inimigo tem " + vidaAtualInimigo + " de vida restante.")
    } else{
            const dano = 3
            vidaAtualInimigo = vidaAtualInimigo - dano
            console.log("O inimigo tem " + vidaAtualInimigo + " de vida restante.")
            alert("O inimigo tem " + vidaAtualInimigo + " de vida restante.")
            }
            return vidaAtualInimigo
        }
}
function ataqueEspada(vidaAtualInimigo){
     let ataque = prompt("Qual tipo de ataque deseja usar? (espadada(1))")
        if (ataque == "espadada" || ataque == "1"){
            const chancecritica = 0.2
            if (Math.random() < chancecritica){
        console.log("Você acertou um ataque critico!")
        alert("Você acertou um ataque critico!")
        const dano = 12
        vidaAtualInimigo = vidaAtualInimigo - dano
        console.log("O inimigo tem " + vidaAtualInimigo + " de vida restante.")
        alert("O inimigo tem " + vidaAtualInimigo + " de vida restante.")
    } else{
            const dano = 7
            vidaAtualInimigo = vidaAtualInimigo - dano
            console.log("O inimigo tem " + vidaAtualInimigo + " de vida restante.")
            alert("O inimigo tem " + vidaAtualInimigo + " de vida restante.")
            }
        }
            return vidaAtualInimigo
}
function ataqueArco(vidaAtualInimigo){
     let ataque = prompt("Qual tipo de ataque deseja usar? (flechada(1))")
        if (ataque == "flechada" || ataque == "1"){
            const chancecritica = 0.2
            if (Math.random() < chancecritica){
        console.log("Você acertou um ataque critico!")
        alert("Você acertou um ataque critico!")
        const dano = 11
        vidaAtualInimigo = vidaAtualInimigo - dano
        console.log("O inimigo tem " + vidaAtualInimigo + " de vida restante.")
        alert("O inimigo tem " + vidaAtualInimigo + " de vida restante.")
    } else{
            const dano = 6
            vidaAtualInimigo = vidaAtualInimigo - dano
            console.log("O inimigo tem " + vidaAtualInimigo + " de vida restante.")
            alert("O inimigo tem " + vidaAtualInimigo + " de vida restante.")
            }
            return vidaAtualInimigo
        }
}
function querocorrer(){
    const chancefugir = 0.1
    if (Math.random() < chancefugir){
    console.log("Você conseguiu fugir!!!")
    alert("Você conseguiu fugir!!!")
    } else{
    alert("Você decide fugir do inimigo! Você NÃO conseguiu escapar!"+"\n Perdeu aura.")
    console.log("Você decide fugir do inimigo! Você NÃO conseguiu escapar!"+"\n Perdeu aura.")
    alert("Você é obrigado a atacar o inimigo!")
    console.log("Você é obrigado a atacar o inimigo!")
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
}
function ataquedoinimigo(vidaAtualPlayer){
  console.log("O inimigo te da um ataque!")
  alert("O inimigo te da um ataque!")
  let dano = 5
   vidaAtualPlayer = vidaAtualPlayer - dano
  console.log("O inimigo te deu "+dano+" de dano!\nVocê tem "+vidaAtualPlayer+" de vida.")
  alert("O inimigo te deu "+dano+" de dano!\nVocê tem "+vidaAtualPlayer+" de vida.")
  return vidaAtualPlayer
}
function escolhas_ou_armazenamento(acao){
    if (acao == "1" || acao == "inventario"){
    console.log("Abrindo o armazenamento")
     mostrarMochila()
    } else if (acao == "2" || acao == "cura"){
     console.log("Poção de cura")
    } else if (acao == "3" || acao == "sair" || acao == "ignorar"){
     console.log("Você decidiu ignorar...") 
    }
}
function lootinicial(){
  const melhoriaferrodrop = 0.1
  const curainicialdrop = 0.2
    console.log("Você obteve 100 de ouro!")
    alert("Você obteve 100 de ouro!")
    ouro = 100
  if (Math.random() < melhoriaferrodrop){
    console.log("Você obteve uma melhoria de ferro!")
    alert("Você obteve uma melhoria de ferro!")
    let melhoriaFerro = new Item(1, "Melhoria de ferro", "Item", 0)
    inventarioJogador.push(melhoriaFerro)
  }
  if (Math.random() < curainicialdrop){
    console.log("Você obteve uma poção de cura inicial!")
    alert("Você obteve uma poção de cura inicial!")
    let curaInicial = new Item(1, "Poção de cura inicial", "Poção", 20)
    inventarioJogador.push(curaInicial)
  }
}
function loja(){
    console.log("Você encontra uma loja...")
    alert("Você encontra uma loja...")
    alert("Bem vindo a loja! você deseja comprar alguma coisa?")

}
function mostrarMochila(){
        alert("--- Inventario ---")
        inventarioDoJogador.forEach(function(item){
            alert(`Nome: ${item.nome} | Tipo: ${item.tipo} | Valor: ${item.valor} moedas`)
    })
}
