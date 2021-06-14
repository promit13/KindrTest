import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {SettingsRowSingle} from '../components/SettingsRowSingle';
import {inboxArray} from '../config/data';

const {height, width} = Dimensions.get('window');

const profileimage = require('../assets/search9.jpg');

export function Inbox({navigation}) {
  const renderItem = ({item, index}) => {
    const {name, type, time, profileImageUrl} = item;
    return (
      <View style={{paddingHorizontal: 10}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 10,
            alignItems: 'center',
            marginTop: index == 0 ? 10 : 0,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={profileimage} style={styles.imageStyle} />
            <View style={{marginLeft: 20}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{color: 'black', fontSize: 18}}>{name}</Text>
                <Text style={{marginLeft: 5, color: 'lightgrey'}}>{time}</Text>
              </View>
              <Text style={{color: 'lightgrey'}}>{`Sent you a ${type}!`}</Text>
            </View>
          </View>
          <Icon
            name="chevron-small-right"
            type="entypo"
            color="black"
            size={40}
          />
        </View>
        <View style={styles.lineViewStyle} />
      </View>
    );
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
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Inbox</Text>
        <Text style={{color: 'white'}}>""</Text>
      </View>
      <View
        style={{
          height: 1,
          width,
          marginTop: 10,
          backgroundColor: 'lightgrey',
        }}
      />
      <View style={{paddingHorizontal: 20, flex: 1}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={inboxArray}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    overflow: 'hidden',
  },
  lineViewStyle: {
    height: 1,
    width: width - 40,
    backgroundColor: 'lightgrey',
    marginVertical: 10,
  },
});
