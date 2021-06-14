import React, {useEffect, useState, useRef} from 'react';
import {
  Image,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Animated,
  ImageBackground,
} from 'react-native';
import Video from 'react-native-video';
import {Icon} from 'react-native-elements';
import VariableColumnList from 'react-native-variable-list';
import {HeaderBar} from '../components/HeaderBar';
import {AboutProject} from '../components/AboutProject';
import {Funding} from '../components/Funding';
import {ProjectHeaderTabBar} from '../components/ProjectHeaderTabBar';
import {ProjectSingle} from '../components/ProjectSingle';
import {Map} from '../components/Map';
import {imageArray, projectArray} from '../config/data';
import {charityImage} from '../config/images';
import {walletArray} from '../config/data';
import {ProjectsDemoView} from '../components/ProjectsDemoView';

const {height, width} = Dimensions.get('window');

const HEADER_EXPANDED_HEIGHT = height / 2;
const HEADER_COLLAPSED_HEIGHT = 30;

const HEADER_SCROLL_DISTANCE = HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT;

const leftChevronImage = require('../assets/leftChevronWhite.png');
const walletImage = require('../assets/walletBlack.png');

export function Charity({route, navigation}) {
  const {isEvent, project} = route.params;
  const [showAbout, setShowAbout] = useState(true);
  const [paused, setPaused] = useState(true);
  const [numberOfColumns, setNumberOfColumns] = useState(3);
  const [scrollY, setScrollY] = useState(new Animated.Value(0));

  const scrollOffsetY = useRef(new Animated.Value(0)).current;

  const onAboutPressed = () => setShowAbout(true);
  const onProjectsPressed = () => setShowAbout(false);

  // const renderItem = ({item}) => {
  //   return <ProjectSingle item={item} />;
  // };

  const renderItem = ({item, index}) => {
    // return <ProjectSingle item={item} />;
    return (
      <View style={{flexDirection: 'row'}}>
        <ImageBackground style={styles.imageStyle} source={item.url}>
          <View style={styles.overLayView}>
            <Text style={[styles.textStyle, {fontSize: 14}]}>{item.title}</Text>
            <View
              style={{
                flexDirection: 'row',
                width: width / 3 - 20,
                justifyContent: 'space-between',
              }}>
              <Text style={[styles.textStyle, {fontSize: 12}]}>
                {item.time}
              </Text>
              <Image
                style={[styles.worldImage]}
                source={require('../assets/planetBlue.png')}
              />
            </View>
          </View>
        </ImageBackground>
        <View style={{backgroundColor: 'white', height: 200, width: 2}} />
      </View>
    );
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
    <View style={{flex: 1}}>
      <Animated.View style={{height: headerScrollHeight}}>
        <Animated.View style={{zIndex: 1, position: 'absolute', top: 20}}>
          <HeaderBar
            lefIconName={leftChevronImage}
            rightIconName={walletImage}
            hederTitle="Friendsoftheearth"
            showHeaderTitle={true}
            leftIconPress={() => {}}
            rightIconPress={() => {}}
            isVerified={true}
          />
        </Animated.View>
        {/* <Video
            paused={paused}
            source={{
              uri: 'https://vjs.zencdn.net/v/oceans.mp4',
            }} // Can be a URL or a local file.
            ref={ref => {
              this.player = ref;
            }} // Store reference
            style={[styles.backgroundVideo, {height: headerScrollHeight}]}
          /> */}
        <Animated.Image
          source={charityImage}
          style={[
            styles.backgroundVideo,
            {
              height: headerScrollHeight,
              opacity: imageOpacity,
              transform: [{translateY: imageTranslate}],
            },
          ]}
        />
        <Animated.View
          style={{
            zIndex: 1,
            position: 'absolute',
            top: height / 2 - 50,
            alignSelf: 'flex-end',
          }}>
          <Icon
            name={paused ? 'volume-up' : 'volume-mute'}
            type="font-awesome-5"
            color="white"
            iconStyle={{marginRight: 20}}
            onPress={() => setPaused(!paused)}
          />
        </Animated.View>
      </Animated.View>
      <ScrollView
        showsVerticalScrollIndicator={false}
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
        <View style={{marginTop: 10}}>
          <ProjectHeaderTabBar
            firstTabTitle="about"
            secondTabTitle="projects"
            thirdTabTitle=""
            showThirdTab={false}
            firstTabPress={onAboutPressed}
            secondTabPress={onProjectsPressed}
            thirdTabPress={onAboutPressed}
            textColor="black"
          />
        </View>
        <View
          style={{
            width: width,
            backgroundColor: 'grey',
            height: 1,
            marginTop: 10,
          }}
        />

        {showAbout ? (
          <View style={{padding: 20}}>
            <AboutProject
              showLogo={true}
              showButton={true}
              showCommend={false}
              showMessage={false}
              project={project}
            />
          </View>
        ) : (
          // <FlatList
          //   numColumns={3}
          //   data={walletArray}
          //   renderItem={renderItem}
          //   keyExtractor={item => item.id}
          // />
          <ProjectsDemoView navigation={navigation} projects={projectArray} />
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  // textStyle: {color: 'white', fontSize: 18, marginLeft: 10},
  backgroundVideo: {
    width: width,
    backgroundColor: 'black',
    resizeMode: 'cover',
  },
  imageStyle: {
    resizeMode: 'cover',
    height: 200,
    width: width / 3,
    // marginTop: -20,
  },
  profileImage: {
    width: 24,
    height: 24,
    borderRadius: 24 / 2,
    overflow: 'hidden',
  },
  worldImage: {
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    overflow: 'hidden',
  },
  overLayView: {
    zIndex: 1,
    position: 'absolute',
    bottom: 5,
    marginHorizontal: 5,
  },
  textStyle: {
    color: 'white',
    fontSize: 20,
    marginTop: 10,
  },
});
