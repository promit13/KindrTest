import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Dimensions} from 'react-native';
import {Overlay, Button, Icon} from 'react-native-elements';
import {useForm, Controller} from 'react-hook-form';

const {width, height} = Dimensions.get('window');

export function DonationOverlay({visible, toggleOverlay, isCommend}) {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [donationDone, setIsDonationDone] = useState(false);
  const [donationAmount, setDonationAmount] = useState(0);
  const [donationMessage, setDonationMessage] = useState('');
  const [isSelected, setIsSelected] = useState(false);
  const [optionSelected, setOptionSelected] = useState('');
  const [showDonationDetail, setShowDonationDetail] = useState(false);
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm();
  const onSubmit = data => {
    const {numberOfCoins, message} = data;
    if (!isConfirmed) {
      setIsConfirmed(true);
      setDonationAmount(numberOfCoins);
      setDonationMessage(message);
    } else {
      setIsDonationDone(true);
    }
  };

  const toggleConfirm = () => {
    setIsConfirmed(false);
    setIsDonationDone(false);
    setIsSelected(false);
    setOptionSelected('');
    setShowDonationDetail(false);
  };

  const optionSelectedPress = option => {
    setOptionSelected(option);
    setIsSelected(true);
  };

  const onContinuePressed = () => {
    setShowDonationDetail(true);
  };

  return (
    <Overlay
      isVisible={visible}
      onBackdropPress={toggleOverlay}
      overlayStyle={styles.overLayStyle}>
      {isCommend && !showDonationDetail ? (
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
                onPress={toggleConfirm}
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
          <Text style={[styles.textStyle, {marginTop: isConfirmed ? 20 : 0}]}>
            {isSelected
              ? `Donating to ${optionSelected} will\nonly occur if the financial\ngoal is reached.`
              : ` Do you wish to donate coins\nto the event or to the users\ndonating?`}
          </Text>
          {!isSelected && (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
                marginBottom: 5,
              }}>
              <Button
                title="Event"
                buttonStyle={{
                  backgroundColor: '#FD1053',
                  paddingHorizontal: width / 6 - 15,
                }}
                onPress={() => optionSelectedPress('event')}
              />
              <Button
                title="Users"
                buttonStyle={{
                  backgroundColor: '#FD1053',
                  paddingHorizontal: width / 6 - 15,
                }}
                onPress={() => optionSelectedPress('user')}
              />
            </View>
          )}
          <Button
            title={isSelected ? 'Continue' : 'Both'}
            buttonStyle={{
              backgroundColor: isSelected ? '#FD1053' : '#0CF29E',
              marginTop: isSelected ? 10 : 0,
            }}
            onPress={() => {
              isSelected ? onContinuePressed() : optionSelectedPress('both');
            }}
          />
        </View>
      ) : (
        <View style={styles.mainViewStyle}>
          <View
            style={{
              flexDirection: isConfirmed ? 'row' : 'column',
              justifyContent: 'space-between',
            }}>
            {isConfirmed && (
              <Icon
                name="chevron-small-left"
                type="entypo"
                size={20}
                style={{alignSelf: 'flex-end'}}
                onPress={toggleConfirm}
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
          <Text style={[styles.textStyle, {marginTop: isConfirmed ? 20 : 0}]}>
            {isConfirmed && !donationDone
              ? `donation\nconfirmation`
              : isConfirmed && donationDone
              ? `thank you for your\ndonation!`
              : `enter number of coin(s)\nyou wish to donate`}
          </Text>
          {isConfirmed && !donationDone ? (
            <Text style={[styles.textStyle, {fontSize: 30, marginTop: 20}]}>
              {donationAmount}
            </Text>
          ) : isConfirmed && donationDone ? (
            <View style={styles.circularBackground}>
              <Icon name="check" type="entypo" size={40} color="white" />
            </View>
          ) : (
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  keyboardType="number-pad"
                  style={styles.inputViewStyle}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name="numberOfCoins"
              rules={{required: true}}
              defaultValue=""
            />
          )}
          {errors.numberOfCoins && (
            <Text style={styles.errorTextStyle}>This is required.</Text>
          )}
          <Text style={[styles.textStyle, {marginTop: isConfirmed ? 20 : 0}]}>
            {isConfirmed && donationDone
              ? ''
              : isConfirmed && !donationDone
              ? donationMessage
              : 'leave a message'}
          </Text>

          {!isConfirmed && (
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={[styles.inputViewStyle, {height: 60}]}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                  multiline
                />
              )}
              name="message"
              defaultValue=""
            />
          )}
          {errors.message && (
            <Text style={styles.errorTextStyle}>This is required.</Text>
          )}

          {donationDone ? (
            <Text style={[styles.textStyle, {fontSize: 12}]}>
              (a receipt can be found in your wallet)
            </Text>
          ) : (
            <Button
              title={isConfirmed ? 'confirm coin(s)' : 'donate coin(s)'}
              onPress={handleSubmit(onSubmit)}
              buttonStyle={{
                backgroundColor: '#FD1053',
                width: width - 120,
                alignSelf: 'center',
                marginTop: isConfirmed ? 20 : 0,
                borderRadius: 10,
              }}
            />
          )}
        </View>
      )}
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
    backgroundColor: '#0CF29E',
    marginTop: 20,
  },
});
