/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {Searchbar} from 'react-native-paper';
import Slider from '@react-native-community/slider';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBlackboard, faVolumeHigh} from '@fortawesome/free-solid-svg-icons';
import {faForward} from '@fortawesome/free-solid-svg-icons';
import {faPause} from '@fortawesome/free-solid-svg-icons';

const App: () => Node = () => {
  return (
    <View style={styles.background}>
      <Text style={styles.title}>playlister? i hardly know her (mobile) </Text>
      <View style={styles.searchrow}>
        <Searchbar style={styles.searchbar}></Searchbar>
        <Button style={styles.search} title="search"></Button>
      </View>
      <View style={styles.volumerow}>
        <FontAwesomeIcon
          style={{color: '#4f5257', marginLeft: 20}}
          icon={faVolumeHigh}
          size={40}></FontAwesomeIcon>

        <Slider style={styles.slider}></Slider>
      </View>
      <View style={styles.functionButtons}>
        <Button title="pause/play" style={styles.pause}></Button>
        <Button title="skip" style={styles.skip}></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.darker,
    height: '100%',
  },
  title: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 20,
    marginVertical: 20,
  },
  searchrow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  searchbar: {width: '80%'},
  search: {},
  skip: {},
  volumerow: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    width: '95%',
    borderRadius: 20,
    marginVertical: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
  slider: {margin: 20, width: '80%'},
  functionButtons: {
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
  },
});

export default App;
