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
import LinearGradient from 'react-native-linear-gradient';
import {DetailHolderView} from './DetailHolderView';
import {Svg, Defs, Stop, Rect} from 'react-native-svg';
import {DonationOverlay} from './DonationOverlay';

const {height, width} = Dimensions.get('window');

const itemsArray = [
  {icon: 'star', title: 'commend'},
  {icon: 'hand', title: 'applaud'},
  {icon: 'sound', title: 'shoutout'},
  {icon: 'message', title: '456'},
];

export function ProjectView({
  item,
  index,
  currentIndex,
  imageWidth,
  imageHeight,
  topMargin,
  bottomMargin,
  navigation,
}) {
  const [showDonation, setShowDonation] = useState(false);

  const toggleOverlay = () => {
    setShowDonation(!showDonation);
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

  const functions = [
    () => {},
    () => {},
    () => {},
    toggleOverlay,
    onShoutPressed,
    onApplaudPressed,
    onMessagePressed,
  ];
  return (
    <View>
      <Image
        style={[
          styles.imageStyle,
          {
            height: height - imageHeight,
            width: width - imageWidth,
            borderTopLeftRadius: index === currentIndex ? 0 : 30,
            borderTopRightRadius: index === currentIndex ? 0 : 30,
          },
        ]}
        source={item.url}
      />
      <Image
        style={[
          styles.imageStyle,
          {
            height: height - imageHeight,
            width: width - imageWidth,
            borderTopLeftRadius: index === currentIndex ? 0 : 30,
            borderTopRightRadius: index === currentIndex ? 0 : 30,
            position: 'absolute',
            zIndex: 1,
          },
        ]}
        source={require('../assets/gradient.png')}
      />
      {/* <View
        style={{
          backgroundColor: 'black',
          opacity: 0.1,
          height: height,
          width: width,
          position: 'absolute',
          bottom: 100,
        }}
      /> */}
      <View style={[styles.overLayView, {bottom: bottomMargin}]}>
        <View style={{marginHorizontal: 20}}>
          <DetailHolderView
            showSettings={false}
            showMail={false}
            showCommend={true}
            showShoutOut={true}
            showApplaud={true}
            showMessage={true}
            showCreateEvent={false}
            functions={functions}
            isProject={true}
          />
        </View>
        {/* <Svg height="100" width={width}>
          <Defs>
            <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
              <Stop offset="0" stopColor="#FFD080" stopOpacity="0" />
              <Stop offset="1" stopColor="black" stopOpacity="0.2" />
            </LinearGradient>
          </Defs>
          <Rect x="0" y="0" width={width} height="100" fill="url(#grad)" /> */}
        {/* <LinearGradient
          colors={['transparent', 'transparent', 'lightgrey']}
          style={styles.linearGradient}> */}
        <View
          style={{
            flexDirection: 'row',
            marginTop: topMargin,
            marginHorizontal: 20,
            alignItems: 'center',
          }}>
          <Image
            style={styles.profileImage}
            source={{
              uri: item.profileImageUrl,
            }}
          />
          <Text
            style={[
              styles.textStyle,
              {fontSize: 16, marginLeft: 5, marginTop: 0},
            ]}>{`@${item.name}`}</Text>
          {item.isVerified && (
            <Image
              source={require('../assets/verifiedPink.png')}
              style={{height: 18, width: 18, marginLeft: 5, marginTop: 2}}
            />
          )}
        </View>
        <Text
          style={[
            styles.textStyle,
            {fontWeight: 'bold', marginHorizontal: 20},
          ]}>
          {item.title}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 20,
          }}>
          <TouchableWithoutFeedback>
            <Text
              style={[
                styles.textStyle,
                {fontSize: 16, width: width - 120, color: '#65D1E8'},
              ]}>
              {`${item.detail.slice(0, 120)}... more`}
            </Text>
          </TouchableWithoutFeedback>
          <Image
            style={[styles.worldImage, {marginTop: 10}]}
            source={item.worldImage}
          />
        </View>
        {item.hasButton && (
          <Button
            title="get involved"
            buttonStyle={{
              backgroundColor: '#FD1053',
              borderRadius: 10,
              width: width - 40,
            }}
            containerStyle={{marginVertical: 10, marginLeft: 20}}
            onPress={() =>
              navigation.navigate('ProjectDetail', {
                isEvent: true,
                project: item,
              })
            }
          />
        )}
        <DonationOverlay
          visible={showDonation}
          toggleOverlay={toggleOverlay}
          isCommend={true}
        />
        {/* </LinearGradient> */}
        {/* </Svg> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
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
  },
  textStyle: {
    color: 'white',
    fontSize: 20,
    marginTop: 10,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});
