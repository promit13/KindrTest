import React from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import {SettingsRowSingle} from '../components/SettingsRowSingle';
import {helpItemsArray} from '../config/data';
import {Icon} from 'react-native-elements';

const {height, width} = Dimensions.get('window');

export function HelpAndSupport({navigation}) {
  const renderItem = ({item}) => <SettingsRowSingle item={item} />;
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
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Settings</Text>
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
        <FlatList
          data={helpItemsArray}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        <View
          style={{
            flexDirection: 'row',
            marginTop: 40,
            position: 'absolute',
            bottom: 20,
            alignSelf: 'center',
          }}>
          <Text style={{fontSize: 10}}>Copyright 2021.All Rights Reserved</Text>
          <Text style={{fontSize: 10, marginLeft: 40}}>
            Terms & Conditions | Privacy Policy
          </Text>
        </View>
      </View>
    </View>
  );
}
