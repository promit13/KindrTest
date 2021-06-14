import React, {useState} from 'react';
import {View, FlatList, StyleSheet, Dimensions, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import VideoPlayer from 'react-native-video-controls';
import Video from 'react-native-video';

const {width, height} = Dimensions.get('window');

const videoArray = [
  {videoUrl: 'https://vjs.zencdn.net/v/oceans.mp4', id: 1},
  {videoUrl: 'https://vjs.zencdn.net/v/oceans.mp4', id: 2},
  {videoUrl: 'https://vjs.zencdn.net/v/oceans.mp4', id: 3},
  {videoUrl: 'https://vjs.zencdn.net/v/oceans.mp4', id: 4},
];
export function HorizontalVideoHolder() {
  const [isCurrentIndex, setIsCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(true);

  const onPlay = index => {
    // setIsCurrentIndex(index + 1);
    setIsPaused(false);
  };

  const renderItem = ({item, index}) => (
    <View style={{marginLeft: index > 0 ? 10 : 0}}>
      <Video
        paused={isPaused}
        source={{
          uri: item.videoUrl,
        }} // Can be a URL or a local file.
        ref={ref => {
          this.player = ref;
        }} // Store reference
        style={styles.backgroundVideo}
      />
      <View
        style={{
          flexDirection: 'row',
          zIndex: 1,
          position: 'absolute',
          bottom: 10,
          marginLeft: 10,
        }}>
        <Text style={{color: 'white'}}>Our network friends</Text>
        <Icon
          name="controller-play"
          type="entypo"
          size={20}
          color="white"
          iconStyle={{marginLeft: 40}}
          onPress={onPlay}
        />
      </View>
    </View>
  );
  return (
    <View style={{height: 100, width: width, paddingRight: 10}}>
      {/* <View style={{flex: 1}}> */}
      <FlatList
        data={videoArray}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundVideo: {
    width: width / 2,
    height: 100,
  },
});
