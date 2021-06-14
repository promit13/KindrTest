import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  ScrollView,
  Animated,
  Dimensions,
} from 'react-native';

import {HeaderBar} from '../components/HeaderBar';
import {WalletTop} from '../components/WalletTop';
import {WalletDown} from '../components/WalletDown';
import {ViewProfile} from './ViewProfile';
import {OwnProfile} from './OwnProfile';

const profile = {
  url: 'https://homepages.cae.wisc.edu/~ece533/images/girl.png',
  profileImageUrl: 'https://reactnative.dev/img/tiny_logo.png',
  name: 'Nora_osborn',
  number_of_followers: '129',
  detail: 'She/Her. Passionate about plants. Lets make a positive change!',
  worldImage: 'https://reactnative.dev/img/tiny_logo.png',
  hasButton: false,
  isVerified: false,
};

const profilImage = require('../assets/profileImage.jpg');

const {height, width} = Dimensions.get('window');

const HEADER_EXPANDED_HEIGHT = height / 2;
const HEADER_COLLAPSED_HEIGHT = 30;

const HEADER_SCROLL_DISTANCE = HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT;

const chevronImage = require('../assets/leftChevronWhite.png');
const searchImage = require('../assets/searchBlack.png');

export function Wallet({navigation}) {
  const scrollOffsetY = useRef(new Animated.Value(0)).current;
  const leftIconPress = () => {
    navigation.goBack();
  };

  const rightIconPress = () => {
    console.log('RIGHT ICON PRESS');
  };

  const headerScrollHeight = scrollOffsetY.interpolate({
    inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
    outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
    extrapolate: 'clamp',
  });

  const imageOpacity = scrollOffsetY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 0, 0],
    extrapolate: 'clamp',
  });
  const imageTranslate = scrollOffsetY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -50],
    extrapolate: 'clamp',
  });

  return (
    <ImageBackground style={{flex: 1}} source={profilImage}>
      <Animated.View style={{height: headerScrollHeight}}>
        <Animated.View style={{zIndex: 1, position: 'absolute', marginTop: 20}}>
          <HeaderBar
            lefIconName={chevronImage}
            rightIconName={searchImage}
            hederTitle="@sarah_wills"
            showHeaderTitle={true}
            showHeaderButtons={false}
            leftIconPress={leftIconPress}
            rightIconPress={rightIconPress}
            personalAccountPress={() => {}}
            professionalAccountPress={() => {}}
            isVerified={false}
            showLeftBackground={false}
            colorBackground="white"
          />
        </Animated.View>
        <Animated.View
          style={{
            paddingHorizontal: 15,
            marginTop: 100,
            height: headerScrollHeight,
            opacity: imageOpacity,
            transform: [{translateY: imageTranslate}],
          }}>
          <WalletTop />
        </Animated.View>
      </Animated.View>
      <ScrollView
        onScroll={Animated.event([
          {
            nativeEvent: {
              contentOffset: {
                y: scrollOffsetY,
              },
            },
          },
        ])}
        scrollEventThrottle={16}>
        <View style={{marginTop: 20}}>
          <WalletDown />
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
