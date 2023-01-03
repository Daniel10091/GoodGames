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

import { Game } from '../../../../models';
import { Games } from '../../../../assets';

const windowHeight = Dimensions.get('window').height;

export default function GameModal ( props: any ) {

  const [ modalVisible, setModalVisible ] = React.useState(true);
  const [ gameId, setGameId ] = React.useState();
  
  var gameData: Game;

  React.useEffect(() => {
    if (gameId !== props.gameId) {
      setGameId(props.gameId);
      setModalVisible(true);
    }
  }, [ gameId, props.gameId ]);

  Games.filter(games => games.id === props.gameId).map(game => gameData = game);
  
  return (
    <View style={styles.modal}>

      <Pressable  
        style={styles.modalBackground} 
        onPress={() => {
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
          >
            {/* Title */}
            <View style={styles.gameTitleContent}>
              <Text style={[styles.gameTitle, {
                color: gameData.theme
              }]}>{gameData.name}</Text>
            </View>
            {/* Body */}
            <View style={styles.body}>
              {/* Header */}
              <View style={styles.header}>
                <Text style={styles.headerTitle}>Instruções</Text>
              </View>
              <View style={styles.bodyContent}>
                <Text style={styles.caption}>Como jogar?</Text>
                <Text style={styles.description}>{gameData.description}</Text>
                {
                  gameData.rules != null ? (
                    <View>
                      <Text style={styles.caption}>Funções das cartas de ação</Text>
                      <Text style={styles.description}>{gameData.rules.description}</Text>
                      {
                        gameData.rules.rules != null ? (
                          <View style={styles.rulesContainer}>
                            {
                              gameData.rules.rules.map(role => (
                                <View style={styles.ruleContent}>
                                  <View style={styles.ruleIcon} />
                                  <Text key={role.id} style={styles.rule}>{role.text}</Text>
                                </View>
                              ))
                            }
                          </View>
                        ) : null
                      }
                    </View>
                  ) : null
                }
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
        {/* Footer */}
        <View style={styles.modalFooter}>
          <TouchableOpacity 
            style={styles.startGameButton} 
            onPress={() => {
              props.hideModal();
              props.goToGame(gameData);
            }}
            activeOpacity={0.6}
          >
            <Text style={styles.startGameButtonLabel}>JOGAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
