programa {
  funcao inicio() {
    real x,y,z
    cadeia conta
    escreva("insira 2 números:\n")
    leia(x)
    escreva("insira o segundo numero\n")
    leia(y)
    escreva("o que você deseja fazer com esses numeros?\nescreva as seguintes opões:\n-------------------------------------------------\n|| multiplicar || dividir || somar || subtrair ||\n-------------------------------------------------\n")
    leia(conta)
    se ((conta=="multiplicar") ou (conta=="Multiplicar") ou (conta=="vezes")){
      escreva("O resultado da multiplição é: ",multiplicar(x,y))
    }
    se ((conta=="dividir") ou (conta=="divisao") ou (conta=="divida")){
      escreva("O resultado da divisão é: ",dividir(x,y))
    }
     se ((conta=="somar") ou (conta=="soma") ou (conta=="mais")){
      escreva("O resultado da soma é: ",somar(x,y))
    }
     se ((conta=="subtrai") ou (conta=="subtrair") ou (conta=="menos")){
      escreva("O resultado da subtração é: ",subtrair(x,y))
    }
  }
   funcao real multiplicar(real x, real y){
    real z
    z = x*y
    retorne z
   }
   funcao real dividir(real x, real y){
    real z
    z = x/y
    retorne z
   }
  funcao real somar(real x, real y){
    real z
    z = x+y
    retorne z
   }
   funcao real subtrair(real x, real y){
    real z
    z = x-y
    retorne z
   }




}
