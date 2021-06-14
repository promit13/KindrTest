import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import {Button} from 'react-native-elements';
import {WalletCards} from './WalletCards';
import {WalletJunior} from './WalletJunior';

const peopleImage = require('../assets/peoplePink.png');
const planetImage = require('../assets/planetBlue.png');

const {width, height} = Dimensions.get('window');
export function WalletTop() {
  const [showCards, setShowCards] = useState(false);
  const [showJunior, setShowJunior] = useState(false);
  const [showAccount, setShowAccount] = useState(true);

  return (
    <View style={styles.containerView}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <TouchableOpacity
          onPress={() => {
            setShowAccount(true);
            setShowJunior(false);
            setShowCards(false);
          }}>
          <Text
            style={[styles.textStyle, {color: showAccount ? 'black' : 'grey'}]}>
            Account
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setShowAccount(false);
            setShowJunior(false);
            setShowCards(true);
          }}>
          <Text
            style={[styles.textStyle, {color: showCards ? 'black' : 'grey'}]}>
            Cards
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setShowAccount(false);
            setShowJunior(true);
            setShowCards(false);
          }}>
          <Text
            style={[styles.textStyle, {color: showJunior ? 'black' : 'grey'}]}>
            Junior
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.lineViewStyle} />
      {showCards && <WalletCards />}
      {showJunior && <WalletJunior />}
      {showAccount && (
        <View>
          <View style={{marginTop: 10}}>
            <Text
              style={[styles.textStyle, {fontSize: 24, fontWeight: 'bold'}]}>
              Your Balance
            </Text>
            <Text style={[styles.textStyle, {fontSize: 24, marginTop: 10}]}>
              204
            </Text>
            <Text style={styles.textStyle}>Coins</Text>
          </View>
          <Button
            title="ADD Money"
            buttonStyle={{
              backgroundColor: '#FD1053',
              width: width / 2 - 60,
              alignSelf: 'center',
              borderRadius: 10,
              marginTop: 10,
            }}
          />
          <Text style={[styles.textStyle, {fontSize: 18, marginTop: 10}]}>
            Coins Given
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              marginVertical: 10,
            }}>
            <View>
              <Image source={peopleImage} style={styles.worldImage} />
              <Text style={[styles.textStyle, {fontSize: 18, marginTop: 5}]}>
                323
              </Text>
              <Text style={styles.textStyle}>People</Text>
            </View>
            <View style={{marginLeft: 60}}>
              <Image source={planetImage} style={styles.worldImage} />
              <Text style={[styles.textStyle, {fontSize: 18, marginTop: 5}]}>
                450
              </Text>
              <Text style={styles.textStyle}>Planet</Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  containerView: {
    backgroundColor: 'white',
    borderRadius: 20,
  },
  textStyle: {
    color: 'black',
    textAlign: 'center',
    fontSize: 14,
  },
  lineViewStyle: {
    height: 1,
    width: width - 30,
    backgroundColor: 'grey',
    marginTop: 5,
  },
  worldImage: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    overflow: 'hidden',
  },
});
