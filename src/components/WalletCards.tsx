import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';

const virtualCardImage = require('../assets/virtualCard.png');
const natwestCardImage = require('../assets/natwestCard.png');
const santanderCardImage = require('../assets/santanderCard.png');

export function WalletCards() {
  return (
    <View style={{paddingHorizontal: 30, paddingVertical: 20}}>
      <Button
        title="Add Card"
        buttonStyle={{
          backgroundColor: '#FD1053',
          width: 160,
          alignSelf: 'center',
          borderRadius: 10,
        }}
      />
      <View style={{marginTop: 20}}>
        <Text style={{fontSize: 10}}>Virtual Cards</Text>
        <View style={{backgroundColor: 'grey', height: 1, width: 60}} />
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Image
            source={virtualCardImage}
            style={styles.imageStyle}
            resizeMode="stretch"
          />
          <Text style={styles.textStyle}>Disposable Virtual Card</Text>
        </View>
      </View>
      <View style={{marginTop: 20}}>
        <Text style={{fontSize: 10}}>Physical Cards</Text>
        <View style={{backgroundColor: 'grey', height: 1, width: 70}} />
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Image
            source={natwestCardImage}
            style={styles.imageStyle}
            resizeMode="stretch"
          />
          <Text style={styles.textStyle}>Original **4509</Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Image
            source={santanderCardImage}
            style={styles.imageStyle}
            resizeMode="stretch"
          />
          <Text style={styles.textStyle}>Original **7542</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    height: 40,
    width: 70,
  },
  textStyle: {
    color: 'black',
    fontSize: 16,
    marginTop: 5,
    marginLeft: 10,
  },
});
