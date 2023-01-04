import { Theme } from "../styles";

const Games = [
  {
    id: 1,
    icon: require('../images/icons/chair.webp'),
    name: 'Dança da Cadeira',
    description: 'Faz-se uma roda de cadeiras e outra de pessoas. Sendo que o número de cadeiras deve ser sempre um a menos. Toca-se uma música animada. Quando a música parar, todos devem sentar em alguma cadeira. Quem não conseguir sentar, é eliminado e tira-se mais uma cadeira. Ganha quem sentar na última cadeira.',
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
      title: 'Principais regras do Uno',
      description: 'Sabendo quantas cartas tem o Uno e quais são as funcionalidades dela, fica ainda mais fácil jogar. Agora, é hora de entender quais são as principais regras e como elas influenciam a partida.\n\nComo o objetivo é ficar sem nenhuma carta na mão, as regras do jogo Uno giram em torno do descarte. Nesse caminho, quando descartar sua penúltima carta, grite “Uno” para indicar que só há uma carta na sua mão. Se não gritar e alguém perceber isso antes de o próximo jogador começar a rodada, você terá que comprar duas cartas.\n\nEntretanto, oficialmente, as regras do Uno determinam que, percebendo o próprio erro e dizendo “Uno”, o jogador não precisa comprar as cartas, já que há uma janela de acusação de um turno. Por exemplo, se o jogador A se esquecer de dizer “Uno”, mas o jogador B terminar o turno em seguida, quando chegar a vez do jogador C, o jogador A não poderá mais ser acusado.',
    },
    functions: {
      title: 'Funções das cartas de ação',
      description: 'Para entender melhor como jogar e quais são as regras do Uno, é importante conhecer a função das cartas presentes no baralho. O jogo oficial mais recente conta com 76 cartas numeradas de 0 a 9, subdivididas igualmente entre as cores azul, verde, amarelo e vermelho. Além dessas, o baralho inclui:',
      functions: [
        {
          id: 1,
          text: '8 cartas “Comprar Duas Cartas” - faz o próximo jogador comprar duas cartas. Pode ser jogada sobre outra carta com a mesma cor ou o mesmo símbolo;'
        },
        {
          id: 2,
          text: '8 cartas “Inverter” - serve para alterar o sentido do jogo (se estiver indo para a esquerda, muda para a direita, e vice-versa). Pode ser jogada sobre outra carta com a mesma cor ou o mesmo símbolo;'
        },
        {
          id: 3,
          text: '8 cartas “Pular” - faz o próximo jogador ser  “pulado” (perder a vez). Pode ser jogada sobre outra carta com a mesma cor ou o mesmo símbolo;'
        },
        {
          id: 4,
          text: '4 cartas “Curinga” - dá ao jogador a opção de escolher a cor em que continuará o jogo. É possível jogá-la sobre qualquer carta;'
        },
        {
          id: 5,
          text: '4 cartas “Comprar Quatro Cartas” - dá ao jogador a opção de escolher a cor em que continuará o jogo, além de fazer o próximo comprar quatro cartas e perder a vez. Só é possível jogá-la quando o jogador não tiver outra carta que combine com a cor da pilha de descarte;'
        },
        {
          id: 6,
          text: '3 cartas “Curinga Branca para personalizar” - dá ao jogador a opção de escolher a cor em que continuará o jogo e pode ser personalizada com novas regras do Uno, criadas pelos participantes;'
        },
        {
          id: 7,
          text: '1 carta “Curinga Trocar as Mãos” - dá ao jogador a opção de escolher a cor em que continuará o jogo e a possibilidade de trocar de cartas com outro jogador. Pode ser jogada sobre qualquer carta.'
        },
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
