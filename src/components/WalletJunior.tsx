import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Button, Icon} from 'react-native-elements';

const virtualCardImage = require('../assets/virtualCard.png');
const natwestCardImage = require('../assets/natwestCard.png');
const santanderCardImage = require('../assets/santanderCard.png');

export function WalletJunior() {
  return (
    <View
      style={{
        paddingHorizontal: 30,
        paddingVertical: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
        }}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            textAlign: 'center',
            marginLeft: 20,
          }}>
          Louis
        </Text>
        <Icon name="chevron-small-down" type="entypo" color="grey" />
      </View>
      <View
        style={{alignSelf: 'center', marginVertical: 5, alignItems: 'center'}}>
        <Text style={{fontSize: 20, alignSelf: 'center'}}>105</Text>
        <Text>Coins</Text>
      </View>
      <Button
        title="Add Money"
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
        <Text style={{fontSize: 10}}>Weekly Allowance</Text>
        <View style={{backgroundColor: 'grey', height: 1, width: 90}} />
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={natwestCardImage}
              style={styles.imageStyle}
              resizeMode="stretch"
            />
            <Text style={styles.textStyle}>Set a weekly allowance</Text>
          </View>
          <Icon name="chevron-small-right" type="entypo" />
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
