Refatoração realizada no arquivo TennisGame3 por Sabrina Lopes: 

1 - Substituí todas as instâncias de var por const ou let.

2- Substituí as variáveis p1N e p2N por um objeto chamado playerNames para armazenar os nomes dos jogadores.

3- Extrai a lógica para verificar se o placar está abaixo de "Deuce" para o método isScoreBelowDeuce e a lógica para obter o placar quando abaixo de "Deuce" para o método getScoreBelowDeuce. Isso torna o método getScore mais legível.

4- Simplifiquei o método wonPoint eliminando a necessidade de um bloco if-else para verificar qual jogador marcou o ponto.

5- Renomeei a variável p para this.scores para indicar que ela armazena os valores dos pontos ("Love", "Fifteen", etc.).

