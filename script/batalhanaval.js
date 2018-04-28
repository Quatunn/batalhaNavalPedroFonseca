
var posicaoAleatoria = Math.ceil(Math.random() * 5); // definir posição aleatóriamente

var parte1 = posicaoAleatoria;//definir posição aleatória da primeira parte do barco
var parte2 = parte1+1;//definir posição aleatória da segunda parte do barco
var parte3 = parte2 +1 //definir posição aleatória da primeira parte do barco

var parteEscolhida = []; // variável que fiscaliza se uma parte do barco já foi atingida

var jogada;// variável de fiscalização que define a jogada do utilizador
var atingidas = 0;//variável de fiscalização que define o número de partes atingidas
var totalJogadas = 0;//variável de fiscalização que define o número de jogadas

var afundado = false;//determina se o jogo foi concluido

while (afundado === false) { //ciclo infinito até todas as partes do barco estiverem afundadas
	
	jogada = prompt("Estás Pronto? - Escolha um número entre 1 e 7:"); //recolhe o valor que o utilizador selecionou
	
	if (isNaN(jogada)) { /*determina se a jogada é válida, ou seja, se o valor introduzido é um número.
	Caso não seja o ciclo volta ao início*/
	
		alert("Escolha um número entre 1 e 7!");
	
	} else if (jogada < 1 || jogada > 7) { //garante que o valor está nos critérios do jogo, ou seja, se está entre 1 e 7

		alert("Bolas! este número é inválido... Tente novamente!");
	
	} else if (jogada % 1 !== 0) { //garante que o valor introduzido pelo utilizador é um número inteiro
		
		alert("O número tem que pertencer ao conjunto dos números inteiros!");
		
	} else {
		var comando = 0; 
	
		for (i=0; i < parteEscolhida.length; i++) { //ciclo que se repete por cada valor do array "parteEscolhida"
		    if (jogada == parteEscolhida[i]) { //caso o valor "jogada" seja igual a um valor do array este adiciona uma unidade à variável "comando"
		        comando++;
		    }
		}

		if (comando !== 0) { //caso "comando" não seja zero o utilizador está a repetir uma jogada com o mesmo valor, isto porque o valor já se encontra no array "parteEscolhida"
		    
		alert("Esta parte ja afundou. Tenta novamente!");
		
		} else {  //se for zero o utilizador não está a repetir uma jogada ocorre usualmente
		
		    totalJogadas += 1;
		
		    parteEscolhida.push(jogada); //insere a jogada no array "parteEscolhida"
        
		    if (jogada == parte1 || jogada == parte2 || jogada == parte3) { //determina se o número escolhido coencide com alguma parte do navio

			    alert("Acertaste em uma parte do barco! Continue por este caminho");

			    atingidas += 1;
            
			    if (atingidas == 3) { //caso as três partes do navio  sejam atingidas o jogo é dado como finalizado

				    afundado = true;

				    alert("Parabéns! Afundaste todas as partes do navio !");

			    }
        
		    } else { //se o utilizador não acertar em nenhuma parte o jogo dá o seguinte alerta

			    alert("Foi por pouco! Tenta nevamente!");

		    }

	    }

    }

}

var estatistica = "Foi preciso um total de " + totalJogadas + " jogadas para afundar o navio, " + 
                          "o que significa que a tua eficácia foi de " + (3/totalJogadas); //variável que calcula a eficacia do jogador em acertar as partes do navio

alert(estatistica);