import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Icon, Button} from 'react-native-elements';

const {width, height} = Dimensions.get('window');

export function WelcomeUnderSixteen({navigation}) {
  return (
    <View style={styles.mainView}>
      <View style={{marginTop: height / 6}}>
        <Icon
          name="location-pin"
          type="entypo"
          size={80}
          iconStyle={{marginTop: 40}}
        />
        {/* <Image source={require('../assets/'.png)} style={{height: 60, width: 60, marginTop: 40}}/> */}
        <Text style={styles.textSyle}>Yay! Welcome!</Text>
        <Text style={[styles.textSyle, {fontWeight: 'normal', color: 'grey'}]}>
          {`You have been authorised by Wunder and can\nnow create an account and enjoy the experience.`}
        </Text>
      </View>
      <View style={styles.redBoxStyle}>
        <Icon
          name="arrowright"
          type="antdesign"
          color="white"
          size={24}
          onPress={() => {
            navigation.navigate('EmailMobileUpload');
          }}
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
    marginTop: 20,
  },
  redBoxStyle: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: 'red',
    borderRadius: 5,
    position: 'absolute',
    bottom: 60,
  },
});
