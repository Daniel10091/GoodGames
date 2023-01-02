import * as React from 'react';
import { 
  View, 
  Pressable, 
  TouchableOpacity,
  Text,
  Dimensions,
  ScrollView
} from 'react-native';

import styles from './styles';
import { Ionicons } from '@expo/vector-icons';
import { Games } from '../../../../assets';
import { GameModel } from '../../../../models';

const windowHeight = Dimensions.get('window').height;

export default class GameModal extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      modalVisible: props.modalState, 
      gameId: props.data
    };
  }
  
  render() {
    
    const { modalVisible } = this.state;
    var gameData: GameModel;

    Games.filter(games => games.id === this.state.gameId).map(game => gameData = game);
    console.log(gameData);

    return (
      <View style={styles.modal}>
        <Pressable 
          style={styles.modalBackground} 
          onPress={() => {
            this.setState({ modalVisible: false }); 
            this.props.hideModal();
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
                this.setState({ modalVisible: false }); 
                this.props.hideModal();
              }} 
              activeOpacity={0.6}
            >
              <Ionicons style={styles.modalButtonIcon} name="chevron-down" />
            </TouchableOpacity>
          </View>
          <View style={styles.modalGameTitleContent}>
            <Text style={styles.modalGameTitle}>{this.props.data.name}</Text>
          </View>
          <ScrollView 
            showsVerticalScrollIndicator={false} 
          >
            {/* Header */}
            <View style={styles.modalHeader}>
              <Text style={styles.modalHeaderTitle}>Instruções</Text>
            </View>
            {/* Body */}
            <View style={styles.modalBody}>
              <Text style={styles.modalBodyText}>
                <Text style={styles.modalBodyText}>
                  {gameData.name}
                </Text>
              </Text>
              <Text style={styles.modalBodyText}>
              {gameData.description}
              </Text>
            </View>
            {/* Footer */}
            <View style={styles.modalFooter}>
              <TouchableOpacity 
                style={styles.startGameButton} 
                onPress={() => {
                  this.setState({ modalVisible: false }); 
                  this.props.hideModal();
                  // navigation.navigate('Game');
                }}
                activeOpacity={0.6}
              >
                <Text style={styles.startGameButtonText}>JOGAR</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
