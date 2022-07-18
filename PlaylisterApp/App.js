/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
var RNFS = require('react-native-fs');
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

async function getSong(pl) {
  let resp = await Promise.resolve(
    fetch('http://68.183.196.41:1234/getsong', {headers: {url: pl}}),
  );
  return {data: resp.data, url: resp.url};
}
function createFile(data) {
  function makeid(length) {
    var result = '';
    var characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  let path = RNFS.DocumentDirectoryPath + makeid(10);
  RNFS.writeFile(path, data.data, 'utf8')
    .then(() => {
      console.log('FILE WRITTEN!');
    })
    .catch(err => {
      console.log(err.message);
    });
  return path;
}
function cleanupFile(path) {
  RNFS.unlink(path)
    .then(() => {
      console.log('FILE DELETED');
    })
    // `unlink` will throw an error, if the item to unlink does not exist
    .catch(err => {
      console.log(err.message);
    });
}
const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

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
