import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

import styles from './styles';
import { Ionicons } from '@expo/vector-icons';

export default function DancaCadeira ({ route, navigation }) {
  
  const { game } = route.params;

  const [ gameData, setGameData ] = React.useState(game);
  const [ sound, setSound ]: any = React.useState();
  
  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  var songCurrentTime = 0;

  async function playing(numCadeiras: number, minTime: number, maxTime: number) {
    var time: any = getRandomInt(minTime, maxTime);
    const { sound } = await Audio.Sound.createAsync( require('../../../../assets/audios/songs/song-1.mp3') );
    
    console.log('\n');
    console.log('Tempo: ' + time * 1000);
    console.log('Cadeiras: ' + numCadeiras);

    console.log('Current time: ' + songCurrentTime);
    
    if (songCurrentTime !== 0) {
      sound.playFromPositionAsync(songCurrentTime);
    } else {
      sound.playAsync();
    }

    console.log('Tocando música');
    
    setTimeout(() => {
      sound.pauseAsync();
      console.log('Música pausada');

      if (songCurrentTime !== 0) {
        songCurrentTime = songCurrentTime + time * 1000;
      } else {
        songCurrentTime = time * 1000;
      }

      numCadeiras = numCadeiras - 1;
      
      if (numCadeiras >= 1) {
        console.log('Retirando cadeiras');
        setTimeout(() =>{
          playing(numCadeiras, minTime, maxTime);
        }, 7000);
      } else {
        console.log('\n');
        console.log('Fim do Jogo!');
      }
    }, time * 1000);
  }

  const jogar = () => {
    var numCadeiras: number = 10;
    playing(numCadeiras, 10, 15);
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {/* Header */}
      <View style={[styles.header, {
        backgroundColor: gameData.theme
      }]}>
        <View style={styles.headerRow}>
          <TouchableOpacity 
            style={styles.headerButton} 
            onPress={() => navigation.goBack()} 
            activeOpacity={0.6}
          >
            <Ionicons style={styles.headerButtonIcon} name="ios-chevron-back" />
          </TouchableOpacity>
          <Text style={styles.title}>{gameData.name}</Text>
        </View>
        <View style={styles.headerRow}>
          <TouchableOpacity 
            style={styles.headerButton} 
            onPress={() => alert('Settings')} 
            activeOpacity={0.6}
          >
            <Ionicons style={styles.headerButtonIcon} name="ios-settings-outline" />
          </TouchableOpacity>
        </View>
      </View>
      {/* Body */}
      <View style={styles.bodyContainer}>
        <View style={styles.bodyContent}>
          
        </View>
        <View style={styles.bodyFooter}>
          <TouchableOpacity 
            style={styles.startGameButton} 
            onPress={() => jogar()} 
            activeOpacity={0.6}
          >
            <Text style={styles.startGameButtonLabel}>JOGAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
