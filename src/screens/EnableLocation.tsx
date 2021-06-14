import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Icon, Button} from 'react-native-elements';

const {width, height} = Dimensions.get('window');

export function EnableLocation({navigation}) {
  return (
    <View style={styles.mainView}>
      <View style={{marginTop: 100}}>
        <Text style={{color: 'lightgrey', alignSelf: 'center'}}>Step 7/7</Text>
        <Text style={[styles.textSyle, {marginTop: 100}]}>
          Enable Location Services
        </Text>
        <Text
          style={[
            styles.textSyle,
            {fontWeight: 'normal', color: 'grey', marginTop: 20},
          ]}>
          {`Enabling location services will allow Wunder to gather\nand use data indicating your approximate location`}
        </Text>
        <Image
          source={require('../assets/locationPink.png')}
          style={{height: 80, width: 80, alignSelf: 'center', marginTop: 40}}
        />
      </View>
      <View style={{position: 'absolute', bottom: 40}}>
        <Button
          title="Enable"
          buttonStyle={{
            backgroundColor: '#FD1053',
            width: width - 40,
            borderRadius: 10,
          }}
          onPress={() =>
            navigation.navigate('AccountCreated', {
              showButton: false,
            })
          }
        />
        <Button
          title="Not now"
          buttonStyle={{
            backgroundColor: 'transparent',
            width: width - 40,
            marginTop: 10,
          }}
          titleStyle={{color: 'grey'}}
          onPress={() => navigation.navigate('Interests')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  inputViewStyle: {
    marginVertical: 20,
    flexDirection: 'row',
    width: width - 40,
    height: 40,
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'lightgrey',
    opacity: 1,
    alignSelf: 'center',
  },
  textSyle: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
