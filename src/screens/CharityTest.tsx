import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
} from 'react-native';
import Video from 'react-native-video';
import {Icon} from 'react-native-elements';
import VariableColumnList from 'react-native-variable-list';
import {HeaderBar} from '../components/HeaderBar';
import {AboutProject} from '../components/AboutProject';
import {Funding} from '../components/Funding';
import {ProjectHeaderTabBar} from '../components/ProjectHeaderTabBar';
import {ProjectSingle} from '../components/ProjectSingle';
import {imageArray} from '../config/data';

const {height, width} = Dimensions.get('window');

export function Charity() {
  const [showAbout, setShowAbout] = useState(true);
  const [paused, setPaused] = useState(true);
  const [numberOfColumns, setNumberOfColumns] = useState(3);

  const onAboutPressed = () => setShowAbout(true);
  const onProjectsPressed = () => setShowAbout(false);

  const renderItem = ({item}) => {
    return <ProjectSingle item={item} />;
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{zIndex: 1, position: 'absolute', top: 20}}>
        <HeaderBar
          lefIconName="chevron-small-left"
          rightIconName="save"
          hederTitle="Friendsoftheearth"
          showHeaderTitle={true}
          leftIconPress={() => {}}
          rightIconPress={() => {}}
        />
      </View>
      <View>
        <Video
          paused={paused}
          source={{
            uri: 'https://vjs.zencdn.net/v/oceans.mp4',
          }} // Can be a URL or a local file.
          ref={ref => {
            this.player = ref;
          }} // Store reference
          style={styles.backgroundVideo}
        />
        <View
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
        </View>
      </View>

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
          />
          <Funding totalAmount={15000} amountRaised={9750} />
        </View>
      ) : (
        <FlatList
          numColumns={3}
          data={imageArray}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  textStyle: {color: 'white', fontSize: 18, marginLeft: 10},
  backgroundVideo: {
    width: width,
    height: height / 2,
    backgroundColor: 'black',
  },
});
