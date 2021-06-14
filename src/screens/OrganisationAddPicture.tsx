import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Icon, Button} from 'react-native-elements';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const {width, height} = Dimensions.get('window');

export function OrganisationAddPicture({navigation}) {
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
    <View style={styles.mainView}>
      <View style={{marginTop: 100}}>
        <Text style={{color: 'lightgrey', alignSelf: 'center'}}>Step 6</Text>
        <Text style={[styles.textSyle, {marginTop: 100}]}>
          {`Add profile picture for your\organisation`}
        </Text>
        {isImageSelected ? (
          <Image
            source={{
              uri: image.uri,
            }}
            resizeMode="cover"
            style={styles.imageStyle}
          />
        ) : (
          <View style={styles.iconBackViewStyle}>
            <Icon
              name="camera"
              type="entypo"
              size={50}
              color="grey"
              onPress={() => setShowSelectOptions(true)}
            />
          </View>
        )}
      </View>
      <View style={{position: 'absolute', bottom: 20}}>
        <Button
          title="Create Profile"
          buttonStyle={{
            backgroundColor: '#FD1053',
            width: width - 40,
            borderRadius: 10,
          }}
          disabledStyle={{backgroundColor: '#FD1053', opacity: 0.3}}
          disabledTitleStyle={{color: 'white'}}
          onPress={() => {}}
        />
        <Button
          title="Not Now"
          buttonStyle={{
            backgroundColor: 'transparent',
            width: width - 40,
          }}
          titleStyle={{color: 'grey', fontSize: 12}}
          onPress={() => {}}
        />
      </View>
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
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  inputViewStyle: {
    marginVertical: 20,
    flexDirection: 'row',
    width: width - 40,
    height: 40,
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'lightgrey',
    opacity: 1,
    alignSelf: 'center',
  },
  textSyle: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imageStyle: {
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    overflow: 'hidden',
    alignSelf: 'center',
    marginTop: 20,
  },
  iconBackViewStyle: {
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    overflow: 'hidden',
    backgroundColor: '#E8E8E8',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonStyle: {
    backgroundColor: 'white',
    width: width - 100,
    borderRadius: 10,
  },
});
