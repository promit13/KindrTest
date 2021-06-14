import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Icon, Button} from 'react-native-elements';

import {
  commendImageBlack,
  shoutoutImageBlack,
  applaudImageBlack,
  commentImageBlack,
} from '../config/images';

export function HorizontalIconHolder({showCommend, showButton, showMessage}) {
  return (
    <View style={{flexDirection: 'row'}}>
      {showCommend && (
        <View>
          <Image source={commendImageBlack} style={{height: 30, width: 30}} />
          <Text style={styles.textStyle}>commend</Text>
        </View>
      )}
      <View style={styles.iconTextViewStyle}>
        <Image source={applaudImageBlack} style={{height: 30, width: 30}} />
        <Text style={styles.textStyle}>applaud</Text>
      </View>
      <View style={styles.iconTextViewStyle}>
        <Image source={shoutoutImageBlack} style={{height: 30, width: 30}} />
        <Text style={styles.textStyle}>shoutout</Text>
      </View>
      {showMessage && (
        <View style={styles.iconTextViewStyle}>
          <Image source={commentImageBlack} style={{height: 30, width: 30}} />
          <Text style={styles.textStyle}>456</Text>
        </View>
      )}
      {showButton && (
        <Button title="commend" buttonStyle={styles.buttonStyle} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  iconTextViewStyle: {
    marginLeft: 10,
  },
  textStyle: {
    fontSize: 10,
    textAlign: 'center',
  },
  buttonStyle: {
    backgroundColor: 'red',
    paddingHorizontal: 40,
    marginLeft: 40,
    borderRadius: 10,
  },
});
