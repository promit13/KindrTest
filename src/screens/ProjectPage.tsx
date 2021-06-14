import React from 'react';
import {View} from 'react-native';
import {ProjectDetail} from './ProjectDetail';
import {ProjectView} from '../components/ProjectView';
import {HeaderBar} from '../components/HeaderBar';

const leftChevronImage = require('../assets/leftChevronWhite.png');
const rightDotImage = require('../assets/leftChevronWhite.png');

export function ProjectPage({route, navigation}) {
  const {projectItem, index} = route.params;
  console.log('PROJECT ITEM', projectItem);

  const leftIconPress = () => {
    navigation.goBack();
  };

  const rightIconPress = () => {
    navigation.goBack();
  };
  return (
    <View style={{flex: 1}}>
      <View style={{zIndex: 1, position: 'absolute', marginTop: 20}}>
        <HeaderBar
          lefIconName={leftChevronImage}
          rightIconName={rightDotImage}
          hederTitle="nora.osborn"
          showHeaderTitle={false}
          showHeaderButtons={false}
          leftIconPress={leftIconPress}
          rightIconPress={rightIconPress}
          personalAccountPress={() => {}}
          professionalAccountPress={() => {}}
          isVerified={false}
          showLeftBackground={false}
          colorBackground="white"
        />
      </View>
      <ProjectView
        item={projectItem}
        index={index}
        currentIndex={index}
        imageWidth={0}
        imageHeight={0}
        topMargin={40}
        bottomMargin={200}
        navigation={navigation}
      />
    </View>
  );
}
