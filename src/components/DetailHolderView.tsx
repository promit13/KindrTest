import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import {
  commendImage,
  shoutoutImage,
  applaudImage,
  commentImage,
  emailImage,
  settingsImage,
  plusImage,
} from '../config/images';

export function DetailHolderView({
  showApplaud,
  showCommend,
  showShoutOut,
  showMessage,
  showSettings,
  showCreateEvent,
  showMail,
  functions,
  isProject,
}) {
  return (
    <View style={styles.mainView}>
      {showSettings && (
        <TouchableOpacity
          style={styles.itemContainerStyle}
          onPress={functions[0]}>
          <Image source={settingsImage} style={{height: 30, width: 30}} />
        </TouchableOpacity>
      )}
      {showMail && (
        <TouchableOpacity
          style={styles.itemContainerStyle}
          onPress={functions[1]}>
          <Image source={emailImage} style={{height: 30, width: 30}} />
        </TouchableOpacity>
      )}
      {showCreateEvent && (
        <TouchableOpacity
          style={styles.itemContainerStyle}
          onPress={functions[2]}>
          <Image source={plusImage} style={{height: 30, width: 30}} />
        </TouchableOpacity>
      )}
      {showCommend && (
        <TouchableOpacity
          style={styles.itemContainerStyle}
          onPress={functions[3]}>
          <Image source={commendImage} style={{height: 30, width: 30}} />
          {isProject && <Text style={styles.itemTextStyle}>346</Text>}
        </TouchableOpacity>
      )}
      {showApplaud && (
        <TouchableOpacity
          style={styles.itemContainerStyle}
          onPress={functions[4]}>
          <Image source={applaudImage} style={{height: 30, width: 30}} />
          {isProject && <Text style={styles.itemTextStyle}>1238</Text>}
        </TouchableOpacity>
      )}
      {showShoutOut && (
        <TouchableOpacity
          style={styles.itemContainerStyle}
          onPress={functions[5]}>
          <Image source={shoutoutImage} style={{height: 30, width: 30}} />
          {isProject && <Text style={styles.itemTextStyle}>42</Text>}
        </TouchableOpacity>
      )}
      {showMessage && (
        <TouchableOpacity
          style={styles.itemContainerStyle}
          onPress={functions[6]}>
          <Image source={commentImage} style={{height: 30, width: 30}} />
          {isProject && <Text style={styles.itemTextStyle}>456</Text>}
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
    marginTop: 10,
  },
  itemTextStyle: {
    color: 'white',
    fontSize: 10,
    textAlign: 'center',
  },
});
