import React, {useLayoutEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TextInput,
  Dimensions,
} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const {height, width} = Dimensions.get('window');

const profileDetail = {
  image: 'https://homepages.cae.wisc.edu/~ece533/images/boat.png',
  name: 'Nora Osborn',
  username: 'noraosborn',
  bio: 'She/Her. Passionate about platns.',
  location: 'London',
};

export function Account({route, navigation}) {
  const [image, setImage] = useState(null);

  const openGallery = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      setImage(response);
    });
  };
  const openCamera = () => {
    launchCamera({mediaType: 'photo'}, response => {
      console.log(response);
    });
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 20,
          paddingHorizontal: 20,
        }}>
        <Icon
          name="chevron-small-left"
          type="entypo"
          size={30}
          onPress={() => navigation.goBack()}
        />
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Account</Text>
        <Text style={{color: 'white'}}>""</Text>
      </View>
      <View
        style={{
          height: 1,
          width,
          marginBottom: 20,
          marginTop: 10,
          backgroundColor: 'lightgrey',
        }}
      />
      <View style={{paddingHorizontal: 20, flex: 1}}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={{
              uri: image === null ? profileDetail.image : image.uri,
            }}
            style={styles.imageStyle}
          />
          <View style={{marginLeft: 30, justifyContent: 'center'}}>
            <Button
              title="Change Profile Photo"
              buttonStyle={styles.buttonStyle}
              titleStyle={styles.buttonTitleStyle}
              onPress={openGallery}
            />
            <Button
              title="Select an Avatar"
              buttonStyle={styles.buttonStyle}
              titleStyle={styles.buttonTitleStyle}
            />
          </View>
        </View>
        <View style={styles.lineViewStyle} />
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text style={styles.textStyle}>Name</Text>
          <Text>{profileDetail.name}</Text>
        </View>
        <View style={styles.lineViewStyle} />
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.textStyle}>Username</Text>
          <Text>{profileDetail.username}</Text>
        </View>
        <View style={styles.lineViewStyle} />
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.textStyle}>Bio</Text>
          <Text>{profileDetail.bio}</Text>
        </View>
        <View style={styles.lineViewStyle} />
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.textStyle}>Location</Text>
          <Text>{profileDetail.location}</Text>
        </View>
        <View style={styles.lineViewStyle} />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={[styles.textStyle, {fontWeight: 'normal'}]}>
            Select Interest
          </Text>
          <Icon
            name="chevron-small-right"
            type="entypo"
            onPress={() => {
              navigation.navigate('EditInterests');
            }}
          />
        </View>
        <View style={styles.lineViewStyle} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    height: height / 6,
    width: width / 6,
  },
  lineViewStyle: {
    height: 1,
    width: width - 40,
    backgroundColor: 'lightgrey',
    marginVertical: 20,
  },
  inputViewStyle: {
    flexDirection: 'row',
    width: width - 120,
    height: 40,
    opacity: 1,
    alignSelf: 'center',
  },
  textStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    width: 120,
  },
  errorTextStyle: {
    color: 'red',
    fontSize: 10,
  },
  buttonTitleStyle: {
    fontWeight: 'bold',
  },
  buttonStyle: {
    backgroundColor: 'red',
    marginVertical: 20,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
});
