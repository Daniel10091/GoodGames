import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './styles';
import { Ionicons } from '@expo/vector-icons';

export default function DancaCadeira ({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Danca Cadeira
        </Text>
        <TouchableOpacity 
          onPress={() => navigation.goBack()} 
          style={styles.backButton}
        >
          <Ionicons sytle={styles.backButtonIcon} name="ios-arrow-back" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
