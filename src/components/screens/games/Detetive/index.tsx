import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './styles';
import { Ionicons } from '@expo/vector-icons';

export default function Detetive ({ route, navigation }) {
  
  const { game } = route.params;

  const [ gameData, setGameData ] = React.useState(game);

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
            onPress={() => alert()} 
            activeOpacity={0.6}
          >
            <Text style={styles.startGameButtonLabel}>JOGAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
