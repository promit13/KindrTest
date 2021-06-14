import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableWithoutFeedback,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {Icon, Button} from 'react-native-elements';
import {DetailHolderView} from './DetailHolderView';

const {height, width} = Dimensions.get('window');

const itemsArray = [
  {icon: 'star', title: 'commend'},
  {icon: 'hand', title: 'applaud'},
  {icon: 'sound', title: 'shoutout'},
  {icon: 'message', title: '456'},
];

export function ProjectSingle({item, index}) {
  const onCommendPressed = () => {
    console.log('HOME onShoutPressed');
  };
  const onShoutPressed = () => {
    console.log('HOME onShoutPressed');
  };

  const onApplaudPressed = () => {
    console.log('HOME onShoutPressed');
  };
  const onMessagePressed = () => {
    console.log('HOME onShoutPressed');
  };

  return (
    <View style={{flex: 1}}>
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
      <View style={styles.overLayView}>
        <Text style={[styles.textStyle, {fontSize: 14}]}>{item.title}</Text>
        <View
          style={{
            flexDirection: 'row',
            width: width / 3 - 20,
            justifyContent: 'space-between',
          }}>
          <Text style={[styles.textStyle, {fontSize: 12}]}>{item.time}</Text>
          <Image
            style={[styles.worldImage, {marginTop: 10}]}
            source={{
              uri: item.profileImageUrl,
            }}
          />
        </View>
      </View>
    </View>

    // <View style={{flex: 1}}>
    //   <ImageBackground
    //     style={styles.imageStyle}
    //     source={{
    //       uri: item.url,
    //     }}
    //   />
    //   <View style={styles.overLayView}>
    //     <Text style={[styles.textStyle, {fontSize: 14}]}>{item.title}</Text>
    //     <View
    //       style={{
    //         paddingVertical: 5,
    //         flexDirection: 'row',
    //         alignItems: 'center',
    //         justifyContent: 'space-between',
    //       }}>
    //       <Text style={[styles.textStyle, {fontSize: 12}]}>{item.time}</Text>
    //       <Image
    //         style={[styles.worldImage, {marginTop: 10}]}
    //         source={{
    //           uri: item.profileImageUrl,
    //         }}
    //       />
    //     </View>
    //   </View>
    // </View>
  );
}

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
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    overflow: 'hidden',
  },
  overLayView: {
    zIndex: 1,
    position: 'absolute',
    marginHorizontal: 20,
    bottom: 0,
  },
  textStyle: {
    color: 'white',
    fontSize: 20,
    marginTop: 10,
  },
});
