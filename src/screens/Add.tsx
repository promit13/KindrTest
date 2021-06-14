import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements/dist/buttons/Button';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {WelcomeScreen} from './WelcomeScreen';

import {EventDetail} from '../components/EventDetail';
import {EventConfirmation} from './EventConfirmation';

export function Add({navigation}) {
  const openGallery = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      console.log(response);
      navigation.navigate('NewPost', {
        image: response,
      });
    });
  };
  const openCamera = () => {
    // launchCamera({mediaType: 'photo'}, response => {
    //   console.log(response);
    // });
    navigation.navigate('WelcomeScreen');
  };

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <View style={{flexDirection: 'row', marginVertical: 10}}>
        <Button
          title="Sign up"
          buttonStyle={{backgroundColor: 'grey', marginLeft: 10}}
          onPress={openCamera}
        />
        <View style={{height: 1, backgroundColor: 'lightgrey'}} />
        <Button
          title="Show Project"
          buttonStyle={{backgroundColor: 'grey', marginLeft: 10}}
          onPress={() => navigation.navigate('ProjectDetail', {isEvent: false})}
        />
        <View style={{height: 1, backgroundColor: 'lightgrey'}} />
        <Button
          title="Show Event"
          buttonStyle={{backgroundColor: 'grey', marginLeft: 10}}
          onPress={() => navigation.navigate('ProjectDetail', {isEvent: true})}
        />
        <View style={{height: 1, backgroundColor: 'lightgrey'}} />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Button
          title="Show Charity"
          buttonStyle={{backgroundColor: 'grey'}}
          onPress={() => navigation.navigate('Charity')}
        />
        <View style={{height: 1, backgroundColor: 'lightgrey'}} />
        <Button
          title="Create Post"
          buttonStyle={{backgroundColor: 'grey', marginLeft: 10}}
          onPress={openGallery}
        />
        <Button
          title="Wallet"
          buttonStyle={{backgroundColor: 'grey', marginLeft: 10}}
          onPress={() => {
            navigation.navigate('Wallet');
          }}
        />
      </View>
      <EventConfirmation title="Community Food Connection Schema" />
    </View>
  );
}

const styles = StyleSheet.create({});
