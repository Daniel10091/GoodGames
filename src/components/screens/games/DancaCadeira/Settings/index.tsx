import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, Animated, TextInput, Alert } from 'react-native';

import styles from './styles';
import { Ionicons } from '@expo/vector-icons';

export default function DancaCadeiraSettings ( props: any ) {

  const [ chairsQuantity, setChairsQuantity ]: any = React.useState();
  const [ minPauseInterval, setMinPauseInterval ]: any = React.useState();
  const [ maxPauseInterval, setMaxPauseInterval ]: any = React.useState();

  var numChairs: number = chairsQuantity;
  var minInterval: number = minPauseInterval;
  var maxInterval: number = maxPauseInterval;
  var minIntervalAux: number = minPauseInterval;
  var maxIntervalAux: number = maxPauseInterval;

  React.useEffect(() => {
    if (chairsQuantity === undefined && minPauseInterval === undefined && maxPauseInterval === undefined) {
      setChairsQuantity(props.chairsQuantity);
      setMinPauseInterval(props.minPauseInterval);
      setMaxPauseInterval(props.maxPauseInterval);
    }
  }, [ props.chairsQuantity, chairsQuantity, minPauseInterval, maxPauseInterval ]);

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.closeModalButton} 
          onPress={() => props.closeModal()} 
          activeOpacity={0.6}
        >
          <Ionicons style={styles.closeModalIcon} name="ios-chevron-down" />
        </TouchableOpacity>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.formRow}>
          <Text style={styles.inputLabel}>Números do cadeiras:</Text>
          <View style={styles.textFieldContainer}>
            <TouchableOpacity 
              style={styles.textFieldButton} 
              onPress={() => {
                if (numChairs > 2) {
                  numChairs = numChairs - 1;
                  setChairsQuantity(numChairs);
                  props.setChairsQuantity(numChairs);
                } else Alert.alert('2 é o número mínimo de cadeiras.');
              }} 
              activeOpacity={0.6}
            >
              <Ionicons style={styles.textFieldButtonIcon} name="ios-remove" />
            </TouchableOpacity>
            <View style={styles.textFieldContent}>
              <Text style={styles.textField}>{chairsQuantity}</Text>
            </View>
            <TouchableOpacity 
              style={styles.textFieldButton} 
              onPress={() => {
                numChairs = numChairs + 1;
                setChairsQuantity(numChairs);
                props.setChairsQuantity(numChairs);
              }} 
              activeOpacity={0.6}
            >
              <Ionicons style={styles.textFieldButtonIcon} name="ios-add" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.formRow}>
          <Text style={styles.inputLabel}>Intervalo de pausa mínimo:</Text>
          <View style={styles.textFieldContainer}>
            <TouchableOpacity 
              style={styles.textFieldButton} 
              onPress={() => {
                if (minIntervalAux > 10) {
                  minInterval = minIntervalAux - 1;
                  setMinPauseInterval(minInterval);
                  props.setMinPauseInterval(minInterval);
                } else Alert.alert('10 é o intervalo mínimo de pausa.');
              }} 
              activeOpacity={0.6}
            >
              <Ionicons style={styles.textFieldButtonIcon} name="ios-remove" />
            </TouchableOpacity>
            <View style={styles.textFieldContent}>
              <Text style={styles.textField}>{minPauseInterval}</Text>
            </View>
            <TouchableOpacity 
              style={styles.textFieldButton} 
              onPress={() => {
                if (minIntervalAux < 20) {
                  maxInterval = minIntervalAux + 1;
                  setMinPauseInterval(maxInterval);
                  props.setMinPauseInterval(maxInterval);
                } else Alert.alert('20 é o intervalo máximo de pausa.');
              }} 
              activeOpacity={0.6}
            >
              <Ionicons style={styles.textFieldButtonIcon} name="ios-add" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.formRow}>
          <Text style={styles.inputLabel}>Intervalo de pausa máximo:</Text>
          <View style={styles.textFieldContainer}>
            <TouchableOpacity 
              style={styles.textFieldButton} 
              onPress={() => {
                if (maxIntervalAux > 20) {
                  maxInterval = maxIntervalAux - 1;
                  setMaxPauseInterval(maxInterval);
                  props.setMaxPauseInterval(maxInterval);
                } else Alert.alert('20 é o intervalo máximo de pausa.');
              }} 
              activeOpacity={0.6}
            >
              <Ionicons style={styles.textFieldButtonIcon} name="ios-remove" />
            </TouchableOpacity>
            <View style={styles.textFieldContent}>
              <Text style={styles.textField}>{maxPauseInterval}</Text>
            </View>
            <TouchableOpacity 
              style={styles.textFieldButton} 
              onPress={() => {
                if (maxIntervalAux < 30) {
                  maxInterval = maxIntervalAux + 1;
                  setMaxPauseInterval(maxInterval);
                  props.setMaxPauseInterval(maxInterval);
                } else Alert.alert('30 é o intervalo máximo de pausa.');
              }} 
              activeOpacity={0.6}
            >
              <Ionicons style={styles.textFieldButtonIcon} name="ios-add" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
