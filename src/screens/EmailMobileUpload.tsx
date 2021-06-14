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

const {width, height} = Dimensions.get('window');

export function EmailMobileUpload({navigation}) {
  const [isEmail, setIsEmail] = useState(true);
  const [textInputValue, setTextInputValue] = useState('');
  return (
    <View style={styles.mainView}>
      <View style={{marginTop: 100}}>
        <Text style={{color: 'lightgrey', alignSelf: 'center'}}>Step 2/7</Text>
        <Text style={[styles.textSyle, {marginTop: 100}]}>
          {isEmail
            ? `What's your email address?`
            : `What's your mobile number?`}
        </Text>
        <TextInput
          style={styles.inputViewStyle}
          onChangeText={value => setTextInputValue(value)}
          value={textInputValue}
          placeholder={isEmail ? 'Email address' : 'Mobile number'}
        />
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            alignItems: 'center',
          }}>
          <Icon
            name={isEmail ? 'phone' : 'mail'}
            type="fontawesome"
            color="#FD1053"
          />
          <TouchableOpacity onPress={() => setIsEmail(!isEmail)}>
            <Text
              style={[
                styles.textSyle,
                {fontWeight: 'normal', marginLeft: 5, color: 'grey'},
              ]}>
              {isEmail ? 'User your mobile number' : 'Use your email address'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Button
        title="Continue"
        disabled={textInputValue === '' ? true : false}
        buttonStyle={{
          backgroundColor: '#FD1053',
          width: width - 40,
          borderRadius: 10,
        }}
        containerStyle={{position: 'absolute', bottom: 40}}
        disabledStyle={{backgroundColor: '#FD1053', opacity: 0.3}}
        disabledTitleStyle={{color: 'white'}}
        onPress={() =>
          navigation.navigate('VerifyAccount', {
            textInputValue,
            isUnderSixteen: false,
          })
        }
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
    backgroundColor: '#F2F2F2',
    opacity: 1,
    alignSelf: 'center',
  },
  textSyle: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
