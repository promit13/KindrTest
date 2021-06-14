import React, {useState} from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';

import {HeaderBar} from '../components/HeaderBar';
import {ViewProfile} from './ViewProfile';
import {OwnProfile} from './OwnProfile';
import {Icon} from 'react-native-elements/dist/icons/Icon';

const {height, width} = Dimensions.get('window');

const profile = {
  url: 'https://homepages.cae.wisc.edu/~ece533/images/fruits.png',
  profileImageUrl: 'https://reactnative.dev/img/tiny_logo.png',
  name: 'Nora_osborn',
  number_of_followers: '129',
  detail: 'She/Her. Passionate about plants. Lets make a positive change!',
  worldImage: 'https://reactnative.dev/img/tiny_logo.png',
  hasButton: false,
  isVerified: false,
};

const bellImage = require('../assets/bellFillWhite.png');
const walletImage = require('../assets/walletWhite.png');

export function LinkAccountScreen({navigation}) {
  const leftIconPress = () => {
    console.log('LEFT ICON PRESS');
    navigation.goBack();
  };

  const rightIconPress = () => {
    console.log('RIGHT ICON PRESS');
  };

  return (
    <View style={{flex: 1}}>
      <View style={{zIndex: 1, position: 'absolute', marginTop: 20}}>
        <HeaderBar
          lefIconName={bellImage}
          rightIconName={walletImage}
          hederTitle="nora.osborn"
          showHeaderTitle={false}
          showHeaderButtons={true}
          leftIconPress={leftIconPress}
          rightIconPress={rightIconPress}
          personalAccountPress={() => navigation.goBack()}
          professionalAccountPress={() => {}}
          isVerified={false}
          showLeftBackground={true}
          colorBackground="black"
          professionalTextColor="black"
          personTextColor="grey"
        />
      </View>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Icon name="pencil" type="entypo" size={60} />
        {/* <Image source={require('../assets/'.png)} style={{height: 60, width: 60, marginTop: 40}}/> */}
        <Text
          style={
            styles.textStyle
          }>{`There is no\nprofessional\naccount linked`}</Text>
        <Text
          style={[
            styles.textStyle,
            {
              color: 'grey',
              fontSize: 12,
              fontWeight: 'normal',
            },
          ]}>{`Your professional account can allow you to create\nevents, take donations and create administators.`}</Text>
      </View>
      <Button
        title="Create Account"
        buttonStyle={{
          backgroundColor: '#FD1053',
          width: width - 40,
          borderRadius: 10,
        }}
        containerStyle={{position: 'absolute', bottom: 40, alignSelf: 'center'}}
        onPress={() => navigation.navigate('OrganisationRegEmail')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
  },
});
