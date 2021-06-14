import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon, Button} from 'react-native-elements';

export function EventDetail() {
  return (
    <View>
      <Text style={styles.textStyle}>Details</Text>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
        <Icon name="clock" type="entypo" size={40} />
        <View style={styles.detailViewStyle}>
          <Text style={styles.textStyle}>Wednesday May 5th</Text>
          <Text style={styles.textStyle}>10:00am - 13:00pm</Text>
          <Text style={[styles.textStyle, {color: 'red'}]}>
            Add to calendar
          </Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
        <Icon name="location" type="entypo" size={40} />
        <View style={styles.detailViewStyle}>
          <Text style={styles.textStyle}>5 Miles Away</Text>
          <Text style={styles.textStyle}>5 Hornsby Street NG7</Text>
          <Text style={[styles.textStyle, {color: 'red'}]}>View on maps</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
        <Icon name="people" type="ionicon" size={40} />
        <View style={styles.detailViewStyle}>
          <Text style={styles.textStyle}>Event Capacity</Text>
          <Text style={styles.textStyle}>100 Places Overall</Text>
          <Text style={[styles.textStyle, {color: 'red'}]}>50 Spaces Left</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailViewStyle: {
    marginLeft: 15,
  },
  textStyle: {
    fontSize: 16,
  },
});
