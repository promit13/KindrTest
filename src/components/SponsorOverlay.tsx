import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Dimensions} from 'react-native';
import {Overlay, Button, Icon} from 'react-native-elements';
import {useForm, Controller} from 'react-hook-form';

const {width, height} = Dimensions.get('window');

export function SponsorOverlay({visible, toggleOverlay}) {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const onSubmit = data => {
    const {numberOfCoins, message} = data;
  };

  const toggleConfirm = () => {
    setIsConfirmed(false);
    setIsSelected(false);
  };

  const optionSelectedPress = () => {
    setIsSelected(true);
  };

  const onConfirmPressed = () => {
    setIsConfirmed(true);
  };

  return (
    <Overlay isVisible={visible} overlayStyle={styles.overLayStyle}>
      <View style={styles.mainViewStyle}>
        <View
          style={{
            flexDirection: isSelected ? 'row' : 'column',
            justifyContent: 'space-between',
          }}>
          {isSelected && (
            <Icon
              name="chevron-small-left"
              type="entypo"
              size={20}
              style={{alignSelf: 'flex-end'}}
              onPress={() => setIsSelected(false)}
            />
          )}
          <Icon
            name="cross"
            type="entypo"
            size={20}
            style={{alignSelf: 'flex-end'}}
            onPress={() => {
              toggleOverlay();
              toggleConfirm();
            }}
          />
        </View>
        <Text style={[styles.textStyle, {marginTop: 20}]}>
          {!isSelected
            ? `Donate 2000 coins up front\n to become a sponsor`
            : isConfirmed
            ? `Thank you for your\ndonation!`
            : `Confirm your\nsponsorship`}
        </Text>
        {isSelected ? (
          <Icon
            name={isConfirmed ? 'traffic-cone' : 'pencil'}
            type="entypo"
            size={30}
            iconStyle={{marginVertical: 10}}
          />
        ) : (
          <Text
            style={{
              textAlign: 'center',
              marginTop: 10,
            }}>{`By donating you will appear as a sponsor on the \nproject page`}</Text>
        )}
        {isSelected && isConfirmed ? (
          <Text style={{textAlign: 'center', marginTop: 10}}>
            (a receipt can be found in your wallet)
          </Text>
        ) : (
          <Button
            title={isSelected ? 'Confirm' : 'Continue'}
            buttonStyle={{
              backgroundColor: 'red',
              marginTop: 10,
            }}
            onPress={() => {
              isSelected ? onConfirmPressed() : optionSelectedPress();
            }}
          />
        )}
      </View>
    </Overlay>
  );
}

const styles = StyleSheet.create({
  overLayStyle: {
    backgroundColor: 'lightgrey',
    opacity: 1,
    borderRadius: 20,
    paddingVertical: 30,
  },
  mainViewStyle: {
    width: width - 100,
  },
  inputViewStyle: {
    marginVertical: 20,
    flexDirection: 'row',
    width: width - 120,
    height: 40,
    padding: 10,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'white',
    opacity: 1,
    alignSelf: 'center',
  },
  textStyle: {
    fontSize: 16,
    textAlign: 'center',
  },
  errorTextStyle: {
    color: 'red',
    fontSize: 10,
  },
  circularBackground: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    overflow: 'hidden',
    backgroundColor: 'green',
    marginTop: 20,
  },
});
