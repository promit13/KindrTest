import React, {useState} from 'react';
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  Text,
  TouchableWithoutFeedback,
  ImageBackground,
} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
import {DetailHolderView} from '../components/DetailHolderView';
import {HeaderBar} from '../components/HeaderBar';
import {ProjectHeaderTabBar} from '../components/ProjectHeaderTabBar';
import {ProjectView} from '../components/ProjectView';
import {imageArray} from '../config/data';

const {height, width} = Dimensions.get('window');

const bellImage = require('../assets/bellFillBlack.png');
const walletImage = require('../assets/walletBlack.png');

export function Home({navigation}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const renderItem = ({item, index}) => {
    return (
      <ProjectView
        item={item}
        index={index}
        currentIndex={currentIndex}
        imageWidth={0}
        imageHeight={100}
        topMargin={40}
        bottomMargin={200}
        navigation={navigation}
      />
    );
  };

  const onLeftIconPress = () => {
    console.log('LEFT ICON PRESSED');
  };

  const onRightIconPress = () => {
    console.log('RIGHT ICON PRESSED');
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
      }}>
      <View
        style={{
          zIndex: 1,
          position: 'absolute',
          marginTop: 30,
        }}>
        <HeaderBar
          lefIconName={bellImage}
          rightIconName={walletImage}
          hederTitle="nora.osborn"
          showHeaderTitle={false}
          showHeaderButtons={false}
          leftIconPress={onLeftIconPress}
          rightIconPress={onRightIconPress}
          personalAccountPress={() => {}}
          professionalAccountPress={() =>
            navigation.navigate('LinkAccountScreen')
          }
          isVerified={false}
          showLeftBackground={true}
          colorBackground="white"
        />
      </View>

      <Carousel
        ref={c => {
          this._carousel = c;
        }}
        layout="stack"
        layoutCardOffset={650}
        data={imageArray}
        renderItem={renderItem}
        sliderHeight={height}
        itemHeight={height}
        itemWidth={width}
        vertical={true}
        activeSlideOffset={20}
        onSnapToItem={i => {
          setCurrentIndex(i);
        }}
        // inactiveSlideOpacity={1}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    height: height - 200,
    // height: height - 180,
    width: width - 50,
    resizeMode: 'cover',
    // marginTop: -20,
  },
  profileImage: {
    width: 24,
    height: 24,
    borderRadius: 24 / 2,
    overflow: 'hidden',
  },
  worldImage: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    overflow: 'hidden',
  },
  overLayView: {
    zIndex: 1,
    position: 'absolute',
    marginHorizontal: 20,
    bottom: 40,
  },
  textStyle: {
    color: 'white',
    fontSize: 20,
    marginTop: 10,
  },
});
