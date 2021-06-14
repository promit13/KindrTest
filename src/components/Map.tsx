import React from 'react';
import {View, Dimensions} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {Button} from 'react-native-elements';

const {height, width} = Dimensions.get('window');

export function Map({buttonTitle}) {
  return (
    <View>
      <MapView
        initialRegion={{
          latitude: 51.5074,
          longitude: 0.1278,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        scrollEnabled={false}
        style={{height: 200, width: width - 40}}>
        <Marker coordinate={{latitude: 51.5055, longitude: 0.0754}} />
      </MapView>
      <Button
        title={buttonTitle}
        buttonStyle={{
          backgroundColor: '#FD1053',
          marginTop: 10,
          borderRadius: 10,
        }}
      />
    </View>
  );
}
