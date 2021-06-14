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
export function WelcomeScreen({route, navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image} resizeMode="cover">
        {/* <Image
          source={require('../assets/gradientIntro.png')}
          style={[styles.image, {position: 'absolute', zIndex: 1}]}
          resizeMode="cover"
        /> */}
        <View
          style={{
            height,
            width,
            backgroundColor: 'black',
            opacity: 0.4,
            position: 'absolute',
            zIndex: 1,
          }}
        />
        <Text style={[styles.text, {zIndex: 1}]}>Wunder</Text>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Introduction');
          }}
          style={{
            position: 'absolute',
            bottom: 40,
            alignSelf: 'center',
            zIndex: 2,
          }}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 18,
            }}>
            TAP TO CONTINUE
          </Text>
        </TouchableOpacity>
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
