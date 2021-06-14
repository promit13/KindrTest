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

export function AddName({navigation}) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  return (
    <View style={styles.mainView}>
      <View style={{marginTop: 100}}>
        <Text style={{color: 'lightgrey', alignSelf: 'center'}}>Step 1/7</Text>
        <Text style={[styles.textSyle, {marginTop: 100}]}>
          What is your name?
        </Text>
        <TextInput
          style={styles.inputViewStyle}
          onChangeText={value => setFirstName(value)}
          value={firstName}
          placeholder="First Name"
        />
        <TextInput
          style={[styles.inputViewStyle, {marginTop: 10}]}
          onChangeText={value => setLastName(value)}
          value={lastName}
          placeholder="Last Name"
        />
      </View>
      <Button
        title="Continue"
        disabled={firstName === '' || lastName === '' ? true : false}
        buttonStyle={{
          backgroundColor: '#FD1053',
          width: width - 40,
          borderRadius: 10,
        }}
        containerStyle={{position: 'absolute', bottom: 40}}
        disabledStyle={{backgroundColor: '#FD1053', opacity: 0.3}}
        disabledTitleStyle={{color: 'white'}}
        onPress={() => navigation.navigate('ParentsContactInfo')}
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
    marginTop: 20,
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
