import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {imageArray} from '../config/data';

const {height, width} = Dimensions.get('window');

export function Interests() {
  const renderListItem = ({item}) => {
    return (
      <View>
        <Image
          source={{uri: item.url}}
          style={{
            height: 200,
            width: width / 2 - 40,
            borderRadius: 20,
            marginLeft: 10,
            marginBottom: 10,
          }}
        />
        <View
          style={{
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
            width: width / 2 - 40,
            height: 200,
          }}>
          <Image
            source={{uri: item.profileImageUrl}}
            style={{height: 40, width: 40}}
          />
          <Text
            style={{
              alignSelf: 'center',
              color: 'white',
              width: 100,
              textAlign: 'center',
            }}>
            {item.interest}
          </Text>
        </View>
        {/* <View
          style={{
            backgroundColor: 'white',
            opacity: 0.5,
            height: 200,
            width: width / 2 - 20,
            position: 'absolute',
            borderRadius: 20,
          }}>
          <Icon
            name="check"
            type="entypo"
            color="black"
            iconStyle={{alignSelf: 'flex-start'}}
          />
        </View> */}
      </View>
    );
  };
  return (
    <View style={{flex: 1, paddingHorizontal: 20}}>
      <Text style={styles.textStyle}>What are you interested in?</Text>
      <FlatList data={imageArray} renderItem={renderListItem} numColumns={2} />
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 40,
    alignSelf: 'center',
  },
  imageContainerViewStyle: {
    height: 200,
    width: width / 2,
    borderRadius: 20,
  },
});
