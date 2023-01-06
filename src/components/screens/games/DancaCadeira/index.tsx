import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, Animated, TextInput, Modal } from 'react-native';
import { Audio } from 'expo-av';

import styles from './styles';
import { Ionicons } from '@expo/vector-icons';
import DancaCadeiraSettings from './Settings';

export default function DancaCadeira ({ route, navigation }) {
  
  const { game } = route.params;

  const [ modalVisible, setModalVisible ]: any = React.useState(false);
  const [ numChairs, setNumChairs ]: any = React.useState();
  const [ minPauseTime, setMinPauseTime ]: any = React.useState();
  const [ maxPauseTime, setMaxPauseTime ]: any = React.useState();
  const [ waitingTimed, setWaitingTimed ]: any = React.useState();
  const [ gaming, setGaming ] = React.useState(false);
  const [ paused, setPaused ] = React.useState(true);
  const [ timePaused, setTimePaused ]: any = React.useState();
  const [ pausingIn, setPausingIn ]: any = React.useState();
  const [ loaded, setLoaded ] = React.useState(false);
  const [ loading, setLoading ] = React.useState(false);
  const music = React.useRef(new Audio.Sound());

  const SampleTrack = require('../../../../assets/audios/songs/song-1.mp3');
  
  const rotateValue = React.useRef(new Animated.Value(1)).current;
  
  var songCurrentTime = 0;
  var chairs = numChairs;
  
  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  React.useEffect(() => {
    LoadAudio();
    setNumChairs(3);
    setMinPauseTime(15);
    setMaxPauseTime(20);
    setWaitingTimed(7);
    setGaming(false);
    setPaused(true);
  }, []);

  const PlayAudio = async () => {
    try {
      const result = await music.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === false) {
          music.current.playAsync();
        }
      }
    } catch (error) {}
  };

  const PauseAudio = async () => {
    try {
      const result = await music.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === true) {
          music.current.pauseAsync();
        }
      }
    } catch (error) {}
  };

  const StopAudio = async () => {
    try {
      const result = await music.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === true) {
          music.current.stopAsync();
        }
      }
    } catch (error) {}
  };

  const LoadAudio = async () => {
    setLoading(true);
    const checkLoading = await music.current.getStatusAsync();
    if (checkLoading.isLoaded === false) {
      try {
        const result = await music.current.loadAsync(SampleTrack, {}, true);
        if (result.isLoaded === false) {
          setLoading(false);
          console.log('Error in Loading Audio');
        } else {
          setLoading(false);
          setLoaded(true);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };
  
    
  var times = undefined;
  
  const timeForPause = () => {
    setTimeout(() => {
      setPausingIn(times - 1);
      times = times - 1;
      if (paused && times > 0) timeForPause();
    }, 1000);
  };

  var timePause = undefined;

  const timeInPaused = () => {
    setTimeout(() => {
      setTimePaused(timePause - 1);
      timePause = timePause - 1;
      if (paused && timePause > 0) timeInPaused();
    }, 1000);
  };

  // React.useEffect(() => {
  //   console.log('\n');
  //   console.log('GoodGames');
  //   console.log('Pausado? ' + paused);
  //   console.log('Jogando? ' + gaming);
  //   console.log('\n');
  // }, [gaming]);

  const PlayGame = () => { // *** Main function ***

    Animated.timing(rotateValue, {
      toValue: gaming ? 1 : 0.5,
      duration: 300,
      useNativeDriver: true
    }).start()

    setGaming(true);
    setPaused(false);

    var time = getRandomInt(minPauseTime, maxPauseTime);
    
    times = time;

    setPausingIn(time);
    timeForPause();

    console.log('\n');
    console.log('Tempo: ' + time * 1000);
    console.log('Cadeiras: ' + numChairs);
    console.log('Current time: ' + songCurrentTime);
    
    PlayAudio();
    console.log('Tocando música');
    
    setTimeout(() => {
      setPaused(true);
      timePause = waitingTimed;
      timeInPaused();
      PauseAudio();
      console.log('Música pausada');

      if (songCurrentTime !== 0) {
        songCurrentTime = songCurrentTime + time * 1000;
      } else {
        songCurrentTime = time * 1000;
      }
      
      if (numChairs >= 1) {
        chairs = chairs - 1;
        console.log(chairs);
        setNumChairs(chairs);
        console.log('Retirando cadeiras');
        console.log('Tempo de espera: ' + waitingTimed + 's');
        setTimeout(() => {
          PlayGame();
          setGaming(true);
        }, waitingTimed * 1000);
      } else {
        console.log('\n');
        StopAudio();
        setGaming(false);
        console.log('Fim do Jogo!');
      }
    }, time * 1000);

    // if (!gaming) {
    // } else {
    //   StopAudio();
    //   setGaming(false);
    //   setPaused(true);
    //   console.log('Fim do Jogo!');
    //   songCurrentTime = 0;
    //   console.log('Current time: ' + songCurrentTime);
    // }
  }

  React.useEffect(() => {

    console.log('\n');
    console.log('GoodGames');
    console.log('Jogando: ' + gaming);
    console.log('Cadeiras: ' + numChairs);
    console.log('\n');

  }, [gaming, numChairs]);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {/* Header */}
      <View style={[styles.header, {
        backgroundColor: game.theme
      }]}>
        <View style={styles.headerRow}>
          <TouchableOpacity 
            style={styles.headerButton} 
            onPress={() => navigation.goBack()} 
            activeOpacity={0.6}
          >
            <Ionicons style={styles.headerButtonIcon} name="ios-chevron-back" />
          </TouchableOpacity>
          <Text style={styles.title}>{game.name}</Text>
        </View>
        <View style={styles.headerRow}>
          <TouchableOpacity 
            style={styles.headerButton} 
            onPress={() => setModalVisible(true)} 
            activeOpacity={0.6}
          >
            <Ionicons style={styles.headerButtonIcon} name="ios-settings-outline" />
          </TouchableOpacity>
        </View>
      </View>
      {/* Body */}
      <View style={styles.bodyContainer}>
        <View style={styles.bodyContent}>


          <Modal 
            visible={modalVisible}
            animationType="slide" 
            transparent={true} 
            onRequestClose={() => setModalVisible(!modalVisible)}
          >
            <DancaCadeiraSettings 
              chairsQuantity={numChairs} 
              minPauseInterval={minPauseTime} 
              maxPauseInterval={maxPauseTime} 
              setChairsQuantity={(value: number) => setNumChairs(value)} 
              setMinPauseInterval={(value: number) => setMinPauseTime(value)} 
              setMaxPauseInterval={(value: number) => setMaxPauseTime(value)} 
              closeModal={() => setModalVisible(false)} 
            />
          </Modal>





          {
            gaming ? (
              <View>
                {/* <Text>Pausando em: {pausingIn}s</Text> */}
                <Text>Cadeiras: {numChairs}</Text>
              </View>
            ) : null
          }
          {
            timePaused > 0 ? (
              <View>
                <Text>Pausado por: {timePaused}s</Text>
              </View>
            ) : null
          }
          {/* <Animated.View style={{ 
            transform: [
              { scale: rotateValue }
            ]
          }}>
            <View style={styles.circle} />
          </Animated.View> */}
        </View>
        <View style={styles.bodyFooter}>
          <TouchableOpacity 
            style={styles.startGameButton} 
            onPress={() => PlayGame()} 
            activeOpacity={0.6}
          >
            <Text style={styles.startGameButtonLabel}>{gaming ? 'RODANDO...' : 'INICIAR'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
