import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';

export function ProjectHeaderTabBar({
  firstTabTitle,
  secondTabTitle,
  thirdTabTitle,
  showThirdTab,
  firstTabPress,
  secondTabPress,
  thirdTabPress,
  textColor,
}) {
  return (
    <View
      style={{
        width: Dimensions.get('window').width,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      <TouchableOpacity onPress={firstTabPress}>
        <Text style={{color: textColor}}>{firstTabTitle}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={secondTabPress}>
        <Text style={{color: textColor}}>{secondTabTitle}</Text>
      </TouchableOpacity>
      {showThirdTab && (
        <TouchableOpacity onPress={thirdTabPress}>
          <Text style={{color: textColor}}>{thirdTabTitle}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    borderRadius: 30,
    width: 45,
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: 'white',
    alignItems: 'center',
  },
  itemContainerStyle: {
    flexDirection: 'column',
    marginTop: 5,
  },
  itemTextStyle: {
    color: 'white',
    fontSize: 8,
    textAlign: 'center',
  },
});
