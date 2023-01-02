import * as React from 'react';
import { 
  View, 
  Pressable, 
  TouchableOpacity,
  Text,
  Dimensions,
  ScrollView,
  SafeAreaView
} from 'react-native';

import styles from './styles';
import { Ionicons } from '@expo/vector-icons';
import { Games } from '../../../../assets';
import { GameModel } from '../../../../models';
import { Audio } from 'expo-av';

// Window height
const windowHeight = Dimensions.get('window').height;

export default function GameModal ( props ) {

  const [ modalVisible, setModalVisible ] = React.useState();
  const [ gameId, setGameId ] = React.useState(props.data);
  const [ scrollTop, setScrollTop ] = React.useState(0);
  const [ sound, setSound ] = React.useState();
  
  var gameModel: GameModel;

  Games.filter(games => games.id === gameId).map(game => gameModel = game);
  
  var song = new Audio('../../../../assets/audios/songs/song-1.mp3');

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( require('./assets/Hello.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  function playing(numCadeiras: number) {
    var time: any = getRandomInt(5, 20);
    
    console.log('\n');
    console.log('Tempo: ' + time * 1000);
    console.log('Cadeiras: ' + numCadeiras);

    console.log('Tocando música');
    
    setTimeout(() => {
      console.log('Música pausada');

      numCadeiras = numCadeiras - 1;
      
      if (numCadeiras >= 1) {
        console.log('Retirando cadeiras');
        setTimeout(() =>{
          playing(numCadeiras);
        }, 7000);
      } else {
        console.log('\n');
        console.log('Fim do Jogo!');
      }
    }, time * 1000);
  }

  const jogar = () => {
    var numCadeiras: number = 10;
    playing(numCadeiras);
  }
  
  return (
    <View style={styles.modal}>

      <Pressable  
        style={styles.modalBackground} 
        onPress={() => {
          // this.setState({ modalVisible: false }); 
          props.hideModal();
        }} 
      />

      <View style={[styles.modalContent, {
        marginTop: windowHeight / 2.5,
      }]}>
        {/* TopBar */}
        <View style={styles.modalTopBar}>
          <TouchableOpacity 
            style={styles.modalButton} 
            onPress={() => {
              props.hideModal();
            }} 
            activeOpacity={0.6}
          >
            <Ionicons style={styles.modalButtonIcon} name="chevron-down" />
          </TouchableOpacity>
        </View>

        <SafeAreaView style={styles.modalContainer}>
          <ScrollView 
            contentContainerStyle={{paddingTop: 20}} 
            showsVerticalScrollIndicator={false} 
            onScroll={ e => {
              // this.state.scrollTop = e.nativeEvent.contentOffset.y;
              // console.log(this.state.scrollTop);
            }}
          >
            {/* Title */}
            <View style={styles.gameTitleContent}>
              <Text style={[styles.gameTitle, {
                color: gameModel.theme
              }]}>{gameModel.name}</Text>
            </View>
            {/* Body */}
            <View style={styles.body}>
              {/* Header */}
              <View style={styles.header}>
                <Text style={styles.headerTitle}>Instruções</Text>
              </View>
              <View style={styles.bodyContent}>
                <Text style={styles.bodyDescription}>{gameModel.description}</Text>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
        {/* Footer */}
        <View style={styles.modalFooter}>
          <TouchableOpacity 
            style={styles.startGameButton} 
            onPress={() => {
              // props.hideModal();
              jogar();
              // navigation.navigate('Game');
              // navigation.navigate('DancaCadeira', {
              //   screen: 'Feed',
              //   params: { sort: 'latest' },
              // });
            }}
            activeOpacity={0.6}
          >
            <Text style={styles.startGameButtonText}>JOGAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
