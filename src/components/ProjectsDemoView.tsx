import React from 'react';
import {
  View,
  ImageBackground,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {projectArray} from '../config/data';

const {height, width} = Dimensions.get('window');

export function ProjectsDemoView({navigation, projects}) {
  console.log('DEMO', projects);
  const renderItem = (item, index, isTwo) => {
    // return <ProjectSingle item={item} />;
    if (item === undefined) {
      return;
    }
    return (
      <TouchableOpacity
        style={{flexDirection: 'row'}}
        onPress={() =>
          navigation.navigate('ProjectPage', {projectItem: item, index})
        }>
        <ImageBackground
          style={[
            styles.imageStyle,
            {width: isTwo ? width / 2 : width / 3, height: isTwo ? 250 : 200},
          ]}
          source={item.url}>
          <View style={styles.overLayView}>
            <Text style={[styles.textStyle, {fontSize: 14}]}>{item.title}</Text>
            <View
              style={{
                flexDirection: 'row',
                width: width / 3 - 20,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={[styles.textStyle, {fontSize: 12}]}>
                {item.time}
              </Text>
              <Image style={[styles.worldImage]} source={item.projectTypeUrl} />
            </View>
          </View>
        </ImageBackground>
        <View style={{backgroundColor: 'white', height: 200, width: 2}} />
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView>
      <View style={{flexDirection: 'row'}}>
        {renderItem(projects[0], 0, false)}
        {renderItem(projects[1], 1, false)}
        {renderItem(projects[2], 2, false)}
      </View>
      <View style={{backgroundColor: 'white', width: width, height: 2}} />
      <View style={{flexDirection: 'row'}}>
        {renderItem(projects[3], 3, true)}
        {renderItem(projects[4], 4, true)}
      </View>
      <View style={{backgroundColor: 'white', width: width, height: 2}} />
      <View style={{flexDirection: 'row'}}>
        {renderItem(projects[5], 5, false)}
        {renderItem(projects[6], 6, false)}
        {renderItem(projects[7], 7, false)}
      </View>
      <View style={{backgroundColor: 'white', width: width, height: 2}} />
      <View style={{flexDirection: 'row'}}>
        {renderItem(projects[8], 8, true)}
        {renderItem(projects[9], 9, true)}
      </View>
      <View style={{flexDirection: 'row'}}>
        {renderItem(projects[10], 10, false)}
        {renderItem(projects[11], 11, false)}
        {renderItem(projects[12], 12, false)}
      </View>
      <View style={{flexDirection: 'row'}}>
        {renderItem(projects[13], 13, true)}
        {renderItem(projects[14], 14, true)}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    resizeMode: 'cover',
    height: 200,
    width: width / 3,
    // marginTop: -20,
  },
  profileImage: {
    width: 24,
    height: 24,
    borderRadius: 24 / 2,
    overflow: 'hidden',
  },
  worldImage: {
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    overflow: 'hidden',
  },
  overLayView: {
    zIndex: 1,
    position: 'absolute',
    bottom: 5,
    marginHorizontal: 5,
  },
  textStyle: {
    color: 'white',
    fontSize: 20,
    marginTop: 10,
  },
});
