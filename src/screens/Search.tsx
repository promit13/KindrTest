import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Image,
  ImageBackground,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {ProjectSingle} from '../components/ProjectSingle';
import {searchArray} from '../config/data';

const {height, width} = Dimensions.get('window');

const searchImage = require('../assets/searchWhite.png');
const crossImage = require('../assets/crossBlack.png');

// const renderFlatListItem = ({item}) =>
{
  /* <View style={{flex: 1}}>
<ImageBackground
  style={styles.imageStyle}
  source={{
    uri: item.url,
  }}
/>
<View style={styles.overLayView}>
  <Text style={[styles.textStyle, {fontSize: 14}]}>{item.title}</Text>
  <View
    style={{
      paddingVertical: 5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
    <Text style={[styles.textStyle, {fontSize: 12}]}>{item.time}</Text>
    <Image
      style={[styles.worldImage, {marginTop: 10}]}
      source={{
        uri: item.profileImageUrl,
      }}
    />
  </View>
</View>
</View> */
}

export function Search({navigation}) {
  const renderFlatListItem = ({item, index}) => (
    <TouchableOpacity
      style={{marginTop: 10, flexDirection: 'row'}}
      onPress={() =>
        navigation.navigate('ProjectPage', {projectItem: item, index})
      }>
      {/* <ProjectSingle item={item} /> */}
      <View style={{flex: 1}}>
        <Image style={styles.imageStyle} source={item.url} />
        <Image
          style={[styles.imageStyle, {position: 'absolute', zIndex: 1}]}
          source={require('../assets/topCardGradient.png')}
        />
        <View style={styles.overLayView}>
          <Text style={[styles.textStyle, {fontSize: 14}]}>{item.title}</Text>
          <View
            style={{
              paddingVertical: 5,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={[styles.textStyle, {fontSize: 12}]}>{item.time}</Text>
            <Image style={styles.worldImage} source={item.projectTypeUrl} />
          </View>
        </View>
      </View>
      <View style={{backgroundColor: 'white', width: 2}} />
    </TouchableOpacity>
  );

  const renderItems = () => {
    const items = searchArray.map(item => {
      const {title, total, images} = item;
      return (
        <View style={{marginVertical: 10}}>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 20,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.iconBackgroundView}>
                <Icon name="hash" type="feather" color="white" />
              </View>
              <Text style={{marginLeft: 10}}>{`#${title}`}</Text>
            </View>
            <Text>{`${total} >`}</Text>
          </View>
          <FlatList
            horizontal={true}
            data={images}
            renderItem={renderFlatListItem}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      );
    });
    return items;
  };

  return (
    <ScrollView
      contentContainerStyle={{marginVertical: 20}}
      showsVerticalScrollIndicator={false}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'lightgrey',
          borderRadius: 40,
          marginHorizontal: 20,
          alignItems: 'center',
          paddingHorizontal: 10,
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              backgroundColor: 'black',
              width: 50,
              height: 50,
              borderRadius: 50 / 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {/* <Icon name="search" type="feather" color="white" /> */}
            <Image style={{height: 30, width: 30}} source={searchImage} />
          </View>
          <TextInput
            style={styles.inputViewStyle}
            placeholder="Looking for something specific?"
            placeholderTextColor="black"
            multiline={true}
          />
        </View>
        {/* <Icon name="cross" type="entypo" iconStyle={{alignSelf: 'flex-end'}} /> */}
        <Image
          style={{height: 24, width: 24, marginRight: 5}}
          source={crossImage}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          marginTop: 20,
        }}>
        <TouchableOpacity>
          <Text>Top</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Near Me</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Users</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Projects</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Hashtags</Text>
        </TouchableOpacity>
      </View>
      {renderItems()}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  inputViewStyle: {
    marginTop: 20,
    flexDirection: 'row',
    width: width / 2 + 50,
    height: 50,
    padding: 10,
    borderRadius: 5,
    opacity: 1,
    alignSelf: 'center',
    paddingTop: 10,
    fontSize: 14,
    fontWeight: 'bold',
  },
  iconBackgroundView: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    overflow: 'hidden',
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  imageStyle: {
    resizeMode: 'cover',
    height: height / 4 + 50,
    width: width / 2 - 30,
    marginTop: 10,
  },
  overLayView: {
    zIndex: 1,
    position: 'absolute',
    bottom: 10,
    width: width / 2 - 30,
    paddingHorizontal: 10,
  },
  worldImage: {
    width: 24,
    height: 24,
    borderRadius: 24 / 2,
    overflow: 'hidden',
  },
  textStyle: {
    color: 'white',
    fontSize: 20,
  },
});
