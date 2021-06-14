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

const profilImage = require('../assets/profileImage.jpg');

const {height, width} = Dimensions.get('window');

const itemsArray = [
  {icon: 'star', title: 'commend'},
  {icon: 'sound', title: 'shoutout'},
];

export function OwnProfile({item, navigation}) {
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

  const onCreateEventPressed = () => {
    navigation.navigate('CreateEvent');
  };

  const onMailPressed = () => {
    navigation.navigate('Inbox');
  };

  const onSettingsPressed = () => {
    navigation.navigate('Settings');
  };

  const functions = [
    onSettingsPressed,
    onMailPressed,
    onCreateEventPressed,
    onApplaudPressed,
    onMessagePressed,
  ];

  return (
    <View style={{flex: 1}}>
      <Image style={styles.imageStyle} source={profilImage} />
      <Image
        style={[styles.imageStyle, {position: 'absolute', zIndex: 1}]}
        source={require('../assets/gradient.png')}
      />
      <View style={styles.overLayView}>
        <View style={{marginHorizontal: 20}}>
          <DetailHolderView
            showSettings={true}
            showMail={true}
            showCreateEvent={false}
            showCommend={false}
            showShoutOut={false}
            showApplaud={false}
            showMessage={false}
            functions={functions}
            isProject={false}
          />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
          }}>
          <View style={{width: width / 2 + 50, marginHorizontal: 20}}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 80,
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
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    resizeMode: 'cover',
    height: height - height / 4,
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
    bottom: 80,
  },
  textStyle: {
    color: 'white',
    fontSize: 14,
    marginTop: 5,
    marginLeft: 5,
  },
});
