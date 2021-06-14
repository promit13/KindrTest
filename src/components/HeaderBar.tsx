import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Icon, Button} from 'react-native-elements';

const verifiedImage = require('../assets/verifiedPink.png');

export function HeaderBar({
  lefIconName,
  rightIconName,
  hederTitle,
  showHeaderTitle,
  leftIconPress,
  rightIconPress,
  showHeaderButtons,
  personalAccountPress,
  professionalAccountPress,
  isVerified,
  showLeftBackground,
  colorBackground,
  personTextColor,
  professionalTextColor,
}) {
  const [isPersonalSelected, setIsPersonalSelected] = useState(true);
  return (
    <View
      style={{
        width: Dimensions.get('window').width,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
      }}>
      <View
        style={
          showLeftBackground
            ? [styles.circularBackground, {backgroundColor: colorBackground}]
            : null
        }>
        {/* <Icon
          name={lefIconName}
          type="entypo"
          color="black"
          size={24}
          onPress={leftIconPress}
        // /> */}
        <TouchableOpacity onPress={leftIconPress}>
          <Image source={lefIconName} style={{height: 20, width: 20}} />
        </TouchableOpacity>
      </View>
      {showHeaderTitle && (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              color: colorBackground,
              fontWeight: 'bold',
              fontSize: 18,
            }}>{`${hederTitle}`}</Text>
          {isVerified && (
            <Image
              source={verifiedImage}
              style={{height: 16, width: 16, marginLeft: 5}}
            />
          )}
        </View>
      )}
      {showHeaderButtons && (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Button
            title="Personal"
            buttonStyle={{backgroundColor: 'transparent'}}
            titleStyle={{
              color: personTextColor,
              fontWeight: 'bold',
            }}
            onPress={() => personalAccountPress()}
          />
          <View style={{width: 2, height: 30, backgroundColor: 'grey'}} />
          <Button
            title="Professional"
            buttonStyle={{backgroundColor: 'transparent'}}
            titleStyle={{
              color: professionalTextColor,
              fontWeight: 'bold',
            }}
            onPress={() => {
              setIsPersonalSelected(false);
              professionalAccountPress();
            }}
          />
        </View>
      )}
      <View
        style={[styles.circularBackground, {backgroundColor: colorBackground}]}>
        {/* <Icon
          name={rightIconName}
          type="entypo"
          color="black"
          size={24}
          onPress={rightIconPress}
        /> */}
        <TouchableOpacity onPress={rightIconPress}>
          <Image source={rightIconName} style={{height: 20, width: 20}} />
        </TouchableOpacity>
      </View>
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
  circularBackground: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 36,
    height: 36,
    borderRadius: 36 / 2,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  buttonTitleStyle: {
    color: 'white',
  },
});
