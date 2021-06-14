import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Icon, Button, Overlay} from 'react-native-elements';

export function EventConfirmation({title}) {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const toggleOverlay = () => {
    setOverlayVisible(!overlayVisible);
  };

  return (
    <View style={{justifyContent: 'center'}}>
      {overlayVisible ? (
        <Overlay
          isVisible={overlayVisible}
          onBackdropPress={toggleOverlay}
          overlayStyle={styles.overLayStyle}>
          <View>
            <Icon
              name="cross"
              type="entypo"
              size={20}
              style={{alignSelf: 'flex-end'}}
              onPress={() => {
                toggleOverlay();
              }}
            />
            <Text
              style={[
                styles.textStyle,
                {marginTop: 0},
              ]}>{`You can view your QR codes\nwithin your inbox on your profile.`}</Text>
            <Icon
              name="envelope"
              type="evilicon"
              color="white"
              size={100}
              onPress={() => {
                toggleOverlay();
              }}
            />
            <Button
              title="continue"
              buttonStyle={{
                paddingHorizontal: 20,
                borderRadius: 5,
                marginTop: 20,
                backgroundColor: 'red',
                alignSelf: 'center',
              }}
              onPress={toggleOverlay}
            />
          </View>
        </Overlay>
      ) : (
        <View>
          <Text style={styles.textStyle}>
            {`You received a confirmation email with all the\ndetails for this event.`}
          </Text>
          <Text style={styles.textStyle}>
            {`Here is your QR code for the event. The event\norganiser will ask for this when you arrive.`}
          </Text>
          <Image
            source={require('../assets/qrTest.png')}
            style={{
              height: 200,
              width: 300,
              marginTop: 20,
              alignSelf: 'center',
            }}
          />
          <Text
            style={
              styles.textStyle
            }>{`We look forward to seeing you at\n${title}`}</Text>
          <Button
            title="continue"
            buttonStyle={{marginTop: 20, backgroundColor: 'red'}}
            onPress={toggleOverlay}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  detailViewStyle: {
    marginLeft: 15,
  },
  textStyle: {
    fontSize: 14,
    marginTop: 20,
    alignSelf: 'center',
  },
  overLayStyle: {
    backgroundColor: 'lightgrey',
    opacity: 1,
    borderRadius: 20,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
});
