alert('Boas vindas ao jogo do Número secreto!');
let numeroMaximo = prompt(`Qual vai o numero mais alto do jogo? `);
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1)

console.log (numeroSecreto);

let chute;
let tentativa = 1

// enquanto chute for igual ao numero secreto
while(chute != numeroSecreto){
    chute = prompt(`Escolha um numero entre 1 e ${numeroMaximo}`);
    if (numeroSecreto == chute) {
        break
    }
        else {
            if (numeroSecreto < chute){
                alert(`Você Errou! O numero é Menor que ${chute}!`);
            }
            else{
                alert(`Você Errou! O numero é Maior que ${chute}!`);
            }
            tentativa++;
        }
}
let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
alert(`isso ai! Você acertou o numero secreto ${numeroSecreto} com ${tentativa} ${palavraTentativa}`);