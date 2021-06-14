import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {Button, Icon, Overlay} from 'react-native-elements';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {WelcomeScreen} from './WelcomeScreen';

const {width, height} = Dimensions.get('window');

export function UploadDocument({route, navigation}) {
  const {documentType} = route.params;

  const [isImageSelected, setIsImageSelected] = useState(false);
  const [showSelectOptions, setShowSelectOptions] = useState(false);
  const [image, setImage] = useState(null);

  const openGallery = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      setImage(response);
      setIsImageSelected(true);
    });
  };
  const openCamera = () => {
    launchCamera({mediaType: 'photo'}, response => {
      console.log(response);
    });
  };

  return (
    <View style={{flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
      <View style={{marginTop: 100}}>
        <Text style={{color: 'lightgrey', alignSelf: 'center'}}>Step 1/7</Text>
        <Text style={styles.textStyle}>
          {`Upload a clear picture of the\nfront of your ${documentType}`}
        </Text>

        {isImageSelected ? (
          <Image
            source={{
              uri: image.uri,
            }}
            resizeMode="contain"
            style={{
              width: width - 100,
              height: 140,
              marginTop: 20,
            }}
          />
        ) : (
          <View style={styles.iconBackViewStyle}>
            <Icon
              name="camera"
              type="entypo"
              size={50}
              color="grey"
              onPress={() => {
                setShowSelectOptions(true);
              }}
            />
          </View>
        )}
      </View>

      {/* <Overlay isVisible={true}> */}
      {showSelectOptions && !isImageSelected && (
        <View style={{position: 'absolute', bottom: 30}}>
          <Button
            title="Camera"
            buttonStyle={styles.buttonStyle}
            onPress={openCamera}
            titleStyle={{color: 'blue'}}
          />
          <View style={{height: 1, backgroundColor: 'lightgrey'}} />
          <Button
            title="Photo & Video Gallery"
            buttonStyle={styles.buttonStyle}
            onPress={openGallery}
            titleStyle={{color: 'blue'}}
          />
          <Button
            title="Cancel"
            buttonStyle={[styles.buttonStyle, {marginTop: 10}]}
            onPress={() => navigation.navigate('Settings')}
            titleStyle={{color: 'blue'}}
          />
        </View>
      )}
      {/* </Overlay> */}

      <View style={[styles.redBoxStyle, {opacity: isImageSelected ? 1 : 0.2}]}>
        <Icon
          name="arrowright"
          type="antdesign"
          color="white"
          size={24}
          onPress={() => {
            if (!isImageSelected) {
              return;
            }
            navigation.navigate('EmailMobileUpload');
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 100,
  },
  iconBackViewStyle: {
    marginTop: 20,
    width: width - 100,
    borderRadius: 10,
    backgroundColor: 'lightgrey',
    height: 140,
    justifyContent: 'center',
  },
  buttonStyle: {
    backgroundColor: 'white',
    width: width - 100,
    borderRadius: 10,
  },
  redBoxStyle: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: '#FD1053',
    borderRadius: 5,
    position: 'absolute',
    bottom: 60,
  },
});
