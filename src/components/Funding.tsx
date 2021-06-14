import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import * as Progress from 'react-native-progress';

const {width, height} = Dimensions.get('window');

export function Funding({
  totalAmount,
  amountRaised,
  commendPress,
  sponsorPress,
}) {
  const amountRaisedPercentage = ((amountRaised / totalAmount) * 100) / 100;
  console.log(amountRaisedPercentage);
  return (
    <View>
      <Text style={[styles.textStyle, {fontSize: 18}]}>Funding Goal</Text>
      <Text style={[styles.textStyle, {fontWeight: 'normal'}]}>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </Text>
      <Text style={[styles.textStyle, {fontSize: 16}]}>Progress</Text>

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text
          style={[
            styles.textStyle,
            {fontSize: 20, color: '#FD1053'},
          ]}>{`£${totalAmount}`}</Text>
        <Text
          style={[
            styles.textStyle,
            {color: '#FD1053', fontSize: 12, marginTop: 10, marginLeft: 10},
          ]}>
          Goal
        </Text>
      </View>
      <View style={{marginTop: 10}}>
        <Progress.Bar
          progress={amountRaisedPercentage}
          width={width - 40}
          height={15}
          borderRadius={8}
          color="#FD1053"
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text
            style={[
              styles.textStyle,
              {fontSize: 20},
            ]}>{`£${amountRaised}`}</Text>
          <Text style={[styles.textStyle, {fontSize: 12, marginTop: 5}]}>
            Raised
          </Text>
        </View>
        <View>
          <Text style={[styles.textStyle, {fontSize: 20}]}>{`£${
            totalAmount - amountRaised
          }`}</Text>
          <Text style={[styles.textStyle, {fontSize: 12, marginTop: 5}]}>
            Goal
          </Text>
        </View>
      </View>
      {/* <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <Progress.Circle
          unfilledColor="gray"
          progress={amountRaisedPercentage}
          size={120}
          thickness={10}
          color="red"
          borderWidth={0}
        />
        <Text
          style={{
            textAlign: 'center',
            zIndex: 1,
            position: 'absolute',
          }}>{`£${totalAmount}\nGoal`}</Text>
      </View> */}
      <View style={{marginTop: 20}}>
        <TouchableOpacity style={styles.touchableStyle} onPress={commendPress}>
          <Text style={styles.touchableTextStyle}>Commend</Text>
          <Icon
            name="star"
            type="entypo"
            color="white"
            iconStyle={{marginLeft: 10}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={sponsorPress}
          style={[styles.touchableStyle, {backgroundColor: '#0CF29E'}]}>
          <Text style={styles.touchableTextStyle}>Sponsor</Text>
          <Icon
            name="handshake-o"
            type="font-awesome"
            color="white"
            iconStyle={{marginLeft: 10}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
  },
  touchableStyle: {
    backgroundColor: '#FD1053',
    borderRadius: 10,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  touchableTextStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
