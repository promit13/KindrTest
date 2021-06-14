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

export function OrganisationRegEmail({navigation}) {
  const [textInputValue, setTextInputValue] = useState('');
  const [isRegNumberUploaded, setIsRegNumberUploaded] = useState(false);
  return (
    <View style={styles.mainView}>
      <View style={{marginTop: 100}}>
        <Text style={{color: 'lightgrey', alignSelf: 'center'}}>
          {isRegNumberUploaded ? 'Step 2' : 'Step 1'}
        </Text>
        <Text style={[styles.textSyle, {marginTop: 100}]}>
          {isRegNumberUploaded
            ? `What's your organisation email\naddress?`
            : `What's your organisation\nregistration number?`}
        </Text>
        <TextInput
          style={styles.inputViewStyle}
          onChangeText={value => setTextInputValue(value)}
          value={textInputValue}
          placeholder={
            isRegNumberUploaded ? 'Email address' : 'Registration number'
          }
        />
        {isRegNumberUploaded && (
          <Text style={[styles.textSyle, {fontWeight: 'normal'}]}>
            Email must be a registered domain to be accepted
          </Text>
        )}
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
        onPress={() => {
          if (isRegNumberUploaded) {
            navigation.navigate('AccountCreated', {
              showButton: true,
            });
          }
          setTextInputValue('');
          setIsRegNumberUploaded(true);
        }}
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
