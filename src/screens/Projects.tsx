import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
// import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-controls';
import _ from 'lodash';
import {ProjectView} from '../components/ProjectView';
import {HeaderBar} from '../components/HeaderBar';
import {Charity} from './Charity';
import {imageArray} from '../config/data';
import {ProjectSingle} from '../components/ProjectSingle';
import {walletArray, projectArray} from '../config/data';
import {ProjectsDemoView} from '../components/ProjectsDemoView';
import {Loading} from '../components/Loading';
import {useEffect} from 'react';

const profile = {
  url: 'https://homepages.cae.wisc.edu/~ece533/images/watch.png',
  profileImageUrl: 'https://reactnative.dev/img/tiny_logo.png',
  name: 'nora_osborn',
  title: 'Peaceful walk this morning',
  detail: 'Walking through the park earlier, found friendly squirrel ',
  worldImage: 'https://reactnative.dev/img/tiny_logo.png',
  hasButton: true,
  isVerified: false,
};
const {height, width} = Dimensions.get('window');

const bellImage = require('../assets/bellFillWhite.png');
const walletImage = require('../assets/walletWhite.png');

export function Projects({navigation}) {
  //   return (
  //     <View>
  // <VideoPlayer
  //   paused={true}
  //   source={{
  //     uri: 'https://vjs.zencdn.net/v/oceans.mp4',
  //   }} // Can be a URL or a local file.
  //   ref={ref => {
  //     this.player = ref;
  //   }} // Store reference
  //   style={styles.backgroundVideo}
  // />
  //     </View>
  //   );
  // }
  const [showAll, setShowAll] = useState(true);
  const [showPeople, setShowPeople] = useState(false);
  const [showPlanet, setShowPlanet] = useState(false);
  const [showNearMe, setShowNearMe] = useState(false);
  const [loading, setLoading] = useState(true);

  const [projects, setProjects] = useState(projectArray);

  useEffect(() => {
    setLoading(false);
  });

  const leftIconPress = () => {
    console.log('LEFT ICON PRESS');
  };

  const rightIconPress = () => {
    console.log('RIGHT ICON PRESS');
  };
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

  const toggleStates = () => {
    setShowAll(false);
    setShowPeople(false);
    setShowPlanet(false);
    setShowNearMe(false);
  };

  const filterArray = isPlanet => {
    let projects = [];
    if (isPlanet) {
      projects = _.filter(projectArray, o => {
        return o.isPlanet;
      });
    } else {
      projects = _.filter(projectArray, o => {
        return !o.isPlanet;
      });
    }
    console.log(projects);
    setLoading(false);
    setProjects(projects);
  };

  return (
    <View style={{flex: 1, paddingVertical: 10}}>
      <HeaderBar
        lefIconName={bellImage}
        rightIconName={walletImage}
        hederTitle="Projects"
        showHeaderTitle={true}
        showHeaderButtons={false}
        isVerified={false}
        leftIconPress={leftIconPress}
        rightIconPress={rightIconPress}
        showLeftBackground={true}
        colorBackground="black"
      />
      <View
        style={{
          width: Dimensions.get('window').width,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingHorizontal: 30,
          marginVertical: 20,
        }}>
        <TouchableOpacity
          onPress={() => {
            toggleStates();
            setProjects(projectArray);
            setShowAll(true);
          }}>
          <Text style={{color: showAll ? 'black' : 'grey', fontWeight: 'bold'}}>
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            toggleStates();
            setShowPeople(true);
            setLoading(true);
            filterArray(false);
          }}>
          <Text
            style={{color: showPeople ? 'black' : 'grey', fontWeight: 'bold'}}>
            People
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            toggleStates();
            setShowPlanet(true);
            setLoading(true);
            filterArray(true);
          }}>
          <Text
            style={{color: showPlanet ? 'black' : 'grey', fontWeight: 'bold'}}>
            Planet
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            toggleStates();
            setProjects(projectArray);
            setShowNearMe(true);
          }}>
          <Text
            style={{color: showNearMe ? 'black' : 'grey', fontWeight: 'bold'}}>
            Near Me
          </Text>
        </TouchableOpacity>
      </View>
      {loading ? (
        <Loading />
      ) : (
        <ProjectsDemoView navigation={navigation} projects={projects} />
      )}

      {/* <FlatList
        numColumns={3}
        data={walletArray}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      /> */}
      {/* <Charity /> */}
      {/* <View style={{zIndex: 1, position: 'absolute', marginTop: 20}}>
        <HeaderBar
          lefIconName="bell"
          rightIconName="save"
          hederTitle="Friendsoftheearth"
          showHeaderTitle={false}
          leftIconPress={leftIconPress}
          rightIconPress={rightIconPress}
        />
      </View>
      <ProjectView
        item={profile}
        imageHeight={0}
        imageWidth={0}
        topMargin={100}
        bottomMargin={200}
      /> */}
    </View>
  );
}
// var styles = StyleSheet.create({
//   backgroundVideo: {
//     height: Dimensions.get('window').height,
//     width: 400,
//   },
// })

const styles = StyleSheet.create({
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
