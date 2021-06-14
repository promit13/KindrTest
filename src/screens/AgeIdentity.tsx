import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Button} from 'react-native-elements';

const {heigh, width} = Dimensions.get('window');

export function AgeIdentity({navigation}) {
  const [isUnder16, setIsUnder16] = useState(false);
  const [isAgeConfirmed, setIsAgeConfirmed] = useState(false);
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.textStyle}>
        {isAgeConfirmed
          ? `Choose your form\nof ID to verify\nyourself`
          : `What best\ndescibes you?`}
      </Text>
      {isAgeConfirmed && (
        <Text
          style={{
            color: 'lightgrey',
            marginTop: 20,
            textAlign: 'center',
          }}>{`You won't be able to create an account until we have\nverified your identification as a real user`}</Text>
      )}
      <View
        style={{
          position: 'absolute',
          bottom: 40,
          width: width - 40,
          alignSelf: 'center',
        }}>
        <Button
          title={isAgeConfirmed ? 'Driving Licence' : 'Over 16'}
          buttonStyle={styles.buttonStyle}
          onPress={() => {
            if (isAgeConfirmed) {
              navigation.navigate('UploadDocument', {
                documentType: 'licence',
              });
              return;
            }
            setIsAgeConfirmed(true);
          }}
        />
        <Text
          style={{alignSelf: 'center', color: 'lightgrey', marginVertical: 15}}>
          -- Or --
        </Text>
        <Button
          title={isAgeConfirmed ? 'Passport' : 'Under 16'}
          buttonStyle={styles.buttonStyle}
          onPress={() => {
            if (isAgeConfirmed) {
              navigation.navigate('UploadDocument', {
                documentType: 'passport',
              });
              return;
            }
            navigation.navigate('AddName');
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  textStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center',
  },
  buttonStyle: {
    backgroundColor: '#FD1053',
    borderRadius: 10,
  },
});
