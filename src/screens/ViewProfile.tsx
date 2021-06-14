import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import {Icon, Button} from 'react-native-elements';
import {DetailHolderView} from '../components/DetailHolderView';
import {ProfileIconHolderView} from '../components/ProfileIconHolderView';

import {DonationOverlay} from '../components/DonationOverlay';

const {height, width} = Dimensions.get('window');

const itemsArray = [
  {icon: 'star', title: 'commend'},
  {icon: 'sound', title: 'shoutout'},
];

export function ViewProfile({item}) {
  const [followed, setFollowed] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setOverlayVisible(!overlayVisible);
  };

  const onShoutPressed = () => {
    console.log('profile onShoutPressed');
  };

  const onApplaudPressed = () => {
    console.log('profile onShoutPressed');
  };
  const onMessagePressed = () => {
    console.log('profile onShoutPressed');
  };

  const functions = [
    () => {},
    () => {},
    toggleOverlay,
    onShoutPressed,
    onApplaudPressed,
    onMessagePressed,
  ];

  return (
    <View style={{flex: 1}}>
      <Image
        style={styles.imageStyle}
        source={{
          uri: item.url,
        }}
      />
      <DonationOverlay
        visible={overlayVisible}
        toggleOverlay={toggleOverlay}
        isCommend={true}
      />
      <View style={styles.overLayView}>
        <DetailHolderView
          showCommend={true}
          showShoutOut={true}
          functions={functions}
        />
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{width: width / 2 + 50}}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 100,
              }}>
              <Text
                style={[
                  styles.textStyle,
                  {fontSize: 20, fontWeight: 'bold'},
                ]}>{`@${item.name}`}</Text>
              {item.isVerified && (
                <Icon
                  name="verified"
                  type="materialicon"
                  size={12}
                  color="#00adb5"
                  iconStyle={{marginLeft: 5, marginTop: 5}}
                />
              )}
            </View>
            <Text
              style={
                styles.textStyle
              }>{`${item.number_of_followers}k followers`}</Text>
            <Text style={[styles.textStyle, {fontSize: 16, marginTop: 10}]}>
              {`${item.detail.slice(0, 120)}... more`}
            </Text>
          </View>
          <View
            style={{
              marginTop: 100,
              width: width / 4,
              marginLeft: 10,
            }}>
            <ProfileIconHolderView />
            <Button
              title={followed ? 'following' : 'follow'}
              buttonStyle={{backgroundColor: followed ? 'green' : 'red'}}
              containerStyle={{marginTop: 5}}
              onPress={() => setFollowed(!followed)}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    resizeMode: 'cover',
    height: height,
    width: width,
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
    bottom: 100,
  },
  textStyle: {
    color: 'white',
    fontSize: 14,
    marginTop: 5,
    marginLeft: 5,
  },
});
