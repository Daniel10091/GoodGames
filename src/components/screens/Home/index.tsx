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

export default class HomeScreen extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      navigation: navigator,
      updateRender: false, 
      modalVisible: false, 
      gameId: null 
    };
  }

  renderGames(id: number, icon: string, name: string, bgColor: string, target: string) {
    return (
      <TouchableOpacity 
        key={id} 
        style={[styles.gameBox, {
          width: (windowWidth  / 2) - 20, 
          backgroundColor: bgColor
        }]} 
        onPress={() => {
          this.setState({ modalVisible: true });
          // this.props.navigation.navigate('Game', {
          //   id: id,
          //   name: name,
          //   icon: icon,
          //   target: target
          // });
          this.setState({
            gameId: id
          });
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
  
  render() {

    const appConfig = AppConfig.appConfig; // Application configs was declared in here

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
                this.renderGames(game.id, game.icon, game.name, game.theme, '')
              ))
            }
          </View>

          {/* Modal */}
          
          <Modal 
            visible={this.state.modalVisible}
            animationType="slide" 
            transparent={true} 
            onRequestClose={() => this.setState({ modalVisible: false })}
          >
            <GameModal 
              modalState={this.state.modalVisible} 
              data={this.state.gameId} 
              hideModal={() => this.setState({ modalVisible: false })} 
            />
          </Modal>

        </View>

      </ScrollView>
    );
  }
}
