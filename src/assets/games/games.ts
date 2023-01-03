import { Theme } from "../styles";

const Games = [
  {
    id: 1,
    icon: require('../images/icons/chair.webp'),
    name: 'Dança da Cadeira',
    description: 'Toca-se uma música animada. Quando a música parar, todos devem sentar em alguma cadeira. Quem não conseguir sentar, é eliminado e tira-se mais uma cadeira. Ganha quem sentar na última cadeira.',
    theme: Theme.Colors.SpanishPink,
    target: 'DancaCadeira'
  },
  {
    id: 2,
    icon: require('../images/icons/incognito.png'),
    name: 'Detetive',
    description: 'O assassino deve “matar” as vítimas por meio de uma piscada de olho. A vítima, por sua vez, deve dizer “morri!”. O detetive deve estar “ligado” o tempo todo e assim que descobrir quem é o assassino deve dizer “preso em nome da lei!”.',
    theme: Theme.Colors.Mauve,
    target: 'Detetive'
  },
  {
    id: 3,
    icon: require('../images/icons/playing-cards.png'),
    name: 'UNO',
    description: 'No início da partida, cada jogador deve retirar uma carta do baralho. Aquele que tirar o maior número fará a distribuição. Esse jogador deve embaralhar o baralho e distribuir sete cartas para cada um dos participantes. Depois disso, o jogador deve colocar o restante do baralho virado para baixo, formando a pilha de Compras. A primeira carta acima da pilha de Compras deve ser virada, formando a pilha de Descarte. Assim, o jogador pode iniciar a partida, comprando uma carta e descartando outra. O jogo segue em sentido horário, até que um dos participantes fique com apenas uma carta na mão e grite “Uno”.',
    rules: {
      description: 'Para entender melhor como jogar e quais são as regras do Uno, é importante conhecer a função das cartas presentes no baralho. O jogo oficial mais recente conta com 76 cartas numeradas de 0 a 9, subdivididas igualmente entre as cores azul, verde, amarelo e vermelho. Além dessas, o baralho inclui:',
      rules: [
        {
          id: 1,
          text: '8 cartas “Comprar Duas Cartas” – faz o próximo jogador comprar duas cartas. Pode ser jogada sobre outra carta com a mesma cor ou o mesmo símbolo;'
        },
        {
          id: 2,
          text: '8 cartas “Inverter” – serve para alterar o sentido do jogo (se estiver indo para a esquerda, muda para a direita, e vice-versa). Pode ser jogada sobre outra carta com a mesma cor ou o mesmo símbolo;'
        },
        {
          id: 3,
          text: '8 cartas “Pular” – faz o próximo jogador ser  “pulado” (perder a vez). Pode ser jogada sobre outra carta com a mesma cor ou o mesmo símbolo;'
        },
        // {
        //   id: 4,
        //   text: ''
        // },
        // {
        //   id: 5,
        //   text: ''
        // },
        // {
        //   id: 6,
        //   text: ''
        // },
        // {
        //   id: 7,
        //   text: ''
        // },
        // {
        //   id: 8,
        //   text: ''
        // },
        // {
        //   id: 9,
        //   text: ''
        // },
      ]
    },
    theme: Theme.Colors.Blond,
    target: 'Uno'
  },
  {
    id: 4,
    icon: require('../images/icons/domino.png'),
    name: 'Dominó',
    description: 'Domino',
    theme: Theme.Colors.CarnationPink,
    target: 'Domino'
  },
  {
    id: 5,
    icon: require('../images/icons/notes.png'),
    name: 'Adedonha',
    description: 'Adedonha',
    theme: Theme.Colors.UranianBlue,
    target: 'Adedonha'
  },
  {
    id: 6,
    icon: require('../images/icons/cube-and-sphere-abstract-shape.png'),
    name: 'Jogo do tato',
    description: 'Esse jogo pode render muitas risadas. O anfitrião deve disponibilizar alguns objetos da sua casa para a brincadeira e o jogador da rodada deverá adivinhar que objeto é esse usando uma venda. O jogo exercita a imaginação e a capacidade de identificar objetos apenas com o tato. A memória também é ativada para fazer associações com objetos que o jogador conhece.',
    theme: Theme.Colors.AeroBlue,
    target: 'JogoTato'
  }
];

export {
  Games 
}
