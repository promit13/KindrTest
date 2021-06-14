import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Icon, Button} from 'react-native-elements';

const {width, height} = Dimensions.get('window');

export function AccountCreated({route, navigation}) {
  const {showButton} = route.params;
  return (
    <View style={styles.mainView}>
      <View style={{marginTop: height / 6}}>
        <Image
          source={require('../assets/confirmPink.png')}
          style={{height: 60, width: 60, alignSelf: 'center'}}
        />
        <Text style={[styles.textSyle, {color: 'black', fontSize: 20}]}>
          {showButton ? 'Account Verified!' : 'Account Created!'}
        </Text>
        {!showButton && (
          <Text style={[styles.textSyle, {fontWeight: 'normal'}]}>
            {`We are checking your information and will get\nback to you as soon as possible allowing your to\nprogress to the app.`}
          </Text>
        )}
      </View>
      <View style={styles.redBoxStyle}>
        <Icon
          name="arrowright"
          type="antdesign"
          color="white"
          size={24}
          onPress={() => {
            if (showButton) {
              navigation.navigate('OrganisationNameWebsite');
              return;
            }
            navigation.navigate('SignedIn');
          }}
        />
      </View>
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
    color: 'lightgrey',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
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
