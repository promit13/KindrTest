import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

export function ProfileIconHolderView() {
  return (
    <View style={styles.itemContainerStyle}>
      <Icon name="foot" type="foundation" color="white" size={30} />
      <Icon
        name="align-horizontal-middle"
        type="entypo"
        color="white"
        size={30}
      />
      <Icon name="plus" type="foundation" color="white" size={30} />
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
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  itemTextStyle: {
    color: 'white',
    fontSize: 8,
    textAlign: 'center',
  },
});
