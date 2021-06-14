import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import Swiper from 'react-native-swiper';

const {height, width} = Dimensions.get('window');

const imageArray = [
  {
    image: require('../assets/introSlideOne.jpg'),
    title: 'Discover exciting new\npositive content.',
  },
  {
    image: require('../assets/introSlideTwo.jpeg'),
    title: 'Challenge yourself to\ndo more for society.',
  },
  {
    image: require('../assets/introSlideThree.jpg'),
    title: 'Join events promoting\ngood initiatives.',
  },
  {
    image: require('../assets/introSlideFour.jpg'),
    title: 'Invite your friends to\njoin the challenge.',
  },
];

const renderSlider = navigation => {
  const slides = imageArray.map((item, index) => (
    <ImageBackground source={item.image} style={styles.slide1}>
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
      <Text style={styles.text}>{item.title}</Text>
      {index === imageArray.length - 1 && (
        <View style={styles.redBoxStyle}>
          <Icon
            name="arrowright"
            type="antdesign"
            color="white"
            size={24}
            onPress={() => navigation.navigate('Signup')}
          />
        </View>
      )}
    </ImageBackground>
  ));
  return slides;
};

export function Introduction({navigation}) {
  return (
    <Swiper
      style={styles.wrapper}
      showsButtons={false}
      loop={false}
      dotColor="grey"
      activeDotColor="white"
      paginationStyle={{marginVertical: height / 3 + 20}}>
      {renderSlider(navigation)}
    </Swiper>
  );
}

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    zIndex: 1,
  },
  redBoxStyle: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: '#FD1053',
    borderRadius: 5,
    position: 'absolute',
    bottom: 60,
    zIndex: 1,
  },
});
