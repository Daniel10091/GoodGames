import * as React from 'react';
import { 
  Dimensions, 
  Image, 
  Modal, 
  ScrollView, 
  Text, 
  TouchableOpacity, 
  View, 
  Pressable 
} from 'react-native';

import styles from './styles';
import { Ionicons } from '@expo/vector-icons';
import { AppConfig, Games } from '../../../assets';
import { Theme } from '../../../assets/styles';
import GameModal from './Modal';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function HomeScreen ({ navigation }) {
  
  const [ updateRender, setUpdateRender ]: any = React.useState(false);
  const [ modalVisible, setModalVisible ]: any = React.useState(false);
  // const [ gameName, setGameName ]: any = React.useState();
  const [ gameId, setGameId ]: any = React.useState();
  // const [ update, setUpdate ]: any = React.useState(true);

  function renderGames(id: number, icon: string, name: string, bgColor: string) {
    return (
      <TouchableOpacity 
        key={id} 
        style={[styles.gameBox, {
          width: (windowWidth  / 2) - 20, 
          backgroundColor: bgColor
        }]} 
        onPress={() => {
          setModalVisible(true);
          // setGameName(game);
          setGameId(id);
          // setUpdate(true);
        }} 
        activeOpacity={0.9}
      >
        <View style={styles.gameIconContainer}>
          <Image style={styles.gameIcon} source={icon} />
        </View>
        <View style={styles.gameNameContainer}>
          <Text style={styles.gameName}>{name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  
  const appConfig = AppConfig.appConfig; // Application configs was declared in here

  // React.useEffect(() => {
  //   if (update) {
  //     console.log('Game id: ' + gameId);
  //     setUpdate(false);
  //   }
  // }, update);

  return (
    <ScrollView 
      style={[styles.container, {
        backgroundColor: AppConfig.appDarkTheme ? '#1E1E1E' : Theme.Colors.AliceBlue
      }]} 
      showsVerticalScrollIndicator={false}
    >

      {/* Header */}

      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.title}>{appConfig.name}</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity 
            style={styles.themeButton} 
            onPress={() => {
              // this.setState({
              //   updateRender: !this.state.updateRender
              // });
              // AppConfig.appDarkTheme = !AppConfig.appDarkTheme;
              alert('A opção ainda não está disponível.');
            }} 
            activeOpacity={0.6}
          >
            <Ionicons 
              style={[styles.themeButtonIcon, {
                color: AppConfig.appDarkTheme ? Theme.Colors.MinionYellow : Theme.Colors.MidnigntGreenEagleGreen
              }]} 
              name={AppConfig.appDarkTheme ? "ios-sunny" : "ios-moon"} 
            />
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Main */}

      <View style={styles.main}>
        <View style={styles.gamesSection}>
          {
            Games.map(game => (
              renderGames(game.id, game.icon, game.name, game.theme)
            ))
          }
        </View>

        {/* Modal */}
        
        <Modal 
          visible={modalVisible}
          animationType="slide" 
          transparent={true} 
          onRequestClose={() => setModalVisible(!modalVisible)}
        >
          <GameModal 
            modalState={modalVisible} 
            gameId={gameId} 
            hideModal={() => setModalVisible(false)} 
            goToGame={(gameData) => {
              navigation.navigate(gameData.target, {
                game: gameData,
              });
            }}
          />
        </Modal>

      </View>

    </ScrollView>
  );
}
