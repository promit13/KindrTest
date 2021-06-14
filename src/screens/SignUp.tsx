import React from 'react';
import {
  View,
  Image,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Button} from 'react-native-elements';
const {height, width} = Dimensions.get('window');

let showButton = false;
const image = require('../assets/welcome.jpg');
export function SignUp({route, navigation}) {
  if (route.params !== undefined) {
    showButton = route.params.showButton;
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image} resizeMode="cover">
        <Text style={styles.text}>Wunder</Text>
        <View
          style={{
            position: 'absolute',
            bottom: 80,
            alignItems: 'center',
            width,
          }}>
          <Button
            title="Create Account"
            buttonStyle={{backgroundColor: '#FD1053', borderRadius: 10}}
            containerStyle={{
              width: width - 40,
              alignSelf: 'center',
            }}
            onPress={() => navigation.navigate('AgeIdentity')}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Introduction');
            }}
            style={{alignSelf: 'center', marginTop: 20}}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 18,
              }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
