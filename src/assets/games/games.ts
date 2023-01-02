import { Theme } from "../styles";

const Games = [
  {
    id: 1,
    icon: require('../images/icons/chair.webp'),
    name: 'Dança da Cadeira',
    description: 'Toca-se uma música animada. Quando a música parar, todos devem sentar em alguma cadeira. Quem não conseguir sentar, é eliminado e tira-se mais uma cadeira. Ganha quem sentar na última cadeira.',
    theme: Theme.Colors.SpanishPink
  },
  {
    id: 2,
    icon: require('../images/icons/incognito.png'),
    name: 'Detetive',
    description: '',
    theme: Theme.Colors.Mauve
  },
  {
    id: 3,
    icon: require('../images/icons/playing-cards.png'),
    name: 'UNO',
    description: '',
    theme: Theme.Colors.Blond
  },
  {
    id: 4,
    icon: require('../images/icons/domino.png'),
    name: 'Dominó',
    description: '',
    theme: Theme.Colors.CarnationPink
  },
  {
    id: 5,
    icon: require('../images/icons/notes.png'),
    name: 'Adedonha',
    description: '',
    theme: Theme.Colors.UranianBlue
  },
  {
    id: 6,
    icon: require('../images/icons/notes.png'),
    name: 'Jogo do tato',
    description: 'Esse jogo pode render muitas risadas. O anfitrião deve disponibilizar alguns objetos da sua casa para a brincadeira e o jogador da rodada deverá adivinhar que objeto é esse usando uma venda. O jogo exercita a imaginação e a capacidade de identificar objetos apenas com o tato. A memória também é ativada para fazer associações com objetos que o jogador conhece.',
    theme: Theme.Colors.UranianBlue
  }
];

export {
  Games 
}
