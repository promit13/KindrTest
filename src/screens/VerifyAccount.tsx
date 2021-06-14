import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Icon, Button} from 'react-native-elements';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';

const {width, height} = Dimensions.get('window');

export function VerifyAccount({route, navigation}) {
  const {textInputValue, isUnderSixteen} = route.params;
  const [inputCode, setInputCode] = useState('');

  const _checkCode = code => {
    console.log('INPUT CODE', code);
    if (isUnderSixteen) {
      navigation.navigate('WelcomeUnderSixteen');
    } else navigation.navigate('CreateUsername');
  };

  return (
    <View style={styles.mainView}>
      <View style={{marginTop: 100}}>
        <Text style={{color: 'lightgrey', alignSelf: 'center'}}>Step 3/7</Text>
        <Text style={[styles.textSyle, {marginTop: 100}]}>
          {isUnderSixteen ? 'Input Access Code' : 'Verify your account'}
        </Text>
        <Text
          style={[
            styles.textSyle,
            {fontWeight: 'normal', marginLeft: 5, color: 'grey'},
          ]}>
          {isUnderSixteen
            ? `Please input the access code provided from your\nparent or guardian.`
            : `Please use the one time password sent to\n${textInputValue}`}
        </Text>
      </View>
      <SmoothPinCodeInput
        ref={this.pinInput}
        value={inputCode}
        onTextChange={code => setInputCode(code)}
        // onFulfill={_checkCode}
        onBackspace={this._focusePrevInput}
      />
      <Button
        title="Continue"
        disabled={inputCode.length === 4 ? false : true}
        buttonStyle={{
          backgroundColor: '#FD1053',
          width: width - 40,
          borderRadius: 10,
        }}
        containerStyle={{position: 'absolute', bottom: 40}}
        disabledStyle={{backgroundColor: '#FD1053', opacity: 0.3}}
        disabledTitleStyle={{color: 'white'}}
        onPress={_checkCode}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  inputViewStyle: {
    marginVertical: 20,
    flexDirection: 'row',
    width: width - 40,
    height: 40,
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'lightgrey',
    opacity: 1,
    alignSelf: 'center',
  },
  textSyle: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
});
