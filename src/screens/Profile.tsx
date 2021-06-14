import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Overlay, Icon, Button} from 'react-native-elements';
import Swiper from 'react-native-swiper';
import {HeaderBar} from '../components/HeaderBar';
import {ViewProfile} from './ViewProfile';
import {OwnProfile} from './OwnProfile';
import {ProjectSingle} from '../components/ProjectSingle';
import {testImageArray} from '../config/data';

const profile = {
  url: 'https://homepages.cae.wisc.edu/~ece533/images/fruits.png',
  profileImageUrl: 'https://reactnative.dev/img/tiny_logo.png',
  name: 'Nora_osborn',
  number_of_followers: '129',
  detail: 'She/Her. Passionate about plants. Lets make a positive change!',
  worldImage: 'https://reactnative.dev/img/tiny_logo.png',
  hasButton: false,
  isVerified: false,
};

const bellImage = require('../assets/bellFillBlack.png');
const walletImage = require('../assets/walletBlack.png');

const {height, width} = Dimensions.get('window');

export function Profile({navigation}) {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [firstImage, setFirstImage] = useState(0);

  const leftIconPress = () => {
    console.log('LEFT ICON PRESS');
  };

  const rightIconPress = () => {
    navigation.navigate('Wallet');
    // console.log('RIGHT ICON PRESS');
  };

  const renderSliderContent = () => {
    const slides = testImageArray.map((item, index) => {
      return (
        <TouchableOpacity
          onPress={toggleOverlay}
          key={index}
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: 'black',
          }}>
          <Image
            resizeMode="contain"
            style={styles.sliderImageStyle}
            source={item.url}
          />
        </TouchableOpacity>
      );
    });
    return slides;
  };

  const toggleOverlay = () => {
    setOverlayVisible(!overlayVisible);
  };

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={{flexDirection: 'row'}}
        onPress={() => {
          toggleOverlay();
          setFirstImage(index);
        }}>
        <Image
          style={[
            styles.imageStyle,
            {
              borderTopLeftRadius: index === 0 ? 30 : 0,
              borderTopRightRadius: index === 2 ? 30 : 0,
            },
          ]}
          source={item.url}
        />
        <View style={{backgroundColor: 'white', height: 200, width: 1}} />
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{zIndex: 1, position: 'absolute', marginTop: 20}}>
        <HeaderBar
          lefIconName={bellImage}
          rightIconName={walletImage}
          hederTitle="nora.osborn"
          showHeaderTitle={false}
          showHeaderButtons={true}
          leftIconPress={leftIconPress}
          rightIconPress={rightIconPress}
          personalAccountPress={() => {}}
          professionalAccountPress={() =>
            navigation.navigate('LinkAccountScreen')
          }
          isVerified={false}
          showLeftBackground={true}
          colorBackground="white"
          personTextColor="white"
          professionalTextColor="grey"
        />
      </View>
      <OwnProfile item={profile} navigation={navigation} />
      <Overlay
        isVisible={overlayVisible}
        onBackdropPress={toggleOverlay}
        overlayStyle={styles.overLayStyle}>
        <Swiper
          style={styles.wrapper}
          loop={false}
          showsButtons={true}
          // renderPagination={renderPagination}
          showsPagination={false}
          height={200}
          index={firstImage}>
          {renderSliderContent()}
        </Swiper>
      </Overlay>
      <View style={{marginTop: -50}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={3}
          data={testImageArray}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      {/* <ViewProfile item={profile} /> */}
    </ScrollView>
  );

  // return (
  //   <View style={{flex: 1}}>
  //     <View style={{zIndex: 1, position: 'absolute', marginTop: 20}}>
  //       <HeaderBar
  //         lefIconName="bell"
  //         rightIconName="save"
  //         hederTitle="Friendsoftheearth"
  //         showHeaderTitle={false}
  //         leftIconPress={leftIconPress}
  //         rightIconPress={rightIconPress}
  //       />
  //     </View>
  //     <ProjectView
  //       item={profile}
  //       imageHeight={0}
  //       imageWidth={0}
  //       topMargin={100}
  //       bottomMargin={200}
  //     />
  //   </View>
  // );
}

const styles = StyleSheet.create({
  wrapper: {},
  imageStyle: {
    resizeMode: 'cover',
    height: 200,
    width: width / 3,
    // marginTop: -20,
  },
  sliderImageStyle: {
    height: height / 2,
    width: width - 20,
  },
  overLayStyle: {
    backgroundColor: 'black',
    opacity: 1,
  },
});
