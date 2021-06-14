import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {Button} from 'react-native-elements';
import {HeaderBar} from '../components/HeaderBar';
import {AboutProject} from '../components/AboutProject';
import {Funding} from '../components/Funding';
import {EventDetail} from '../components/EventDetail';
import {Map} from '../components/Map';
import {SponsorOverlay} from '../components/SponsorOverlay';
import {DonationOverlay} from '../components/DonationOverlay';
const {height, width} = Dimensions.get('window');

const chevronImage = require('../assets/leftChevronWhite.png');
const walletImage = require('../assets/walletBlack.png');

export function ProjectDetail({route, navigation}) {
  const {isEvent, project} = route.params;

  const [showSponsor, setShowSponsor] = useState(false);
  const [showDonation, setShowDonation] = useState(false);

  const toggleOverlay = () => {
    setShowSponsor(!showSponsor);
  };

  const toggleDonationOverlay = () => {
    setShowDonation(!showDonation);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{zIndex: 2, position: 'absolute', top: 20}}>
        <HeaderBar
          lefIconName={chevronImage}
          rightIconName={walletImage}
          hederTitle={`@${project.name}`}
          showHeaderTitle={true}
          leftIconPress={() => navigation.goBack()}
          rightIconPress={() => navigation.navigate('Wallet')}
          colorBackground="white"
          showLeftBackground={false}
        />
      </View>
      <Image
        source={project.url}
        style={{height: height / 2, width: width}}
        resizeMode="cover"
      />
      <Image
        source={require('../assets/gradient.png')}
        style={{
          height: height / 2,
          width: width,
          position: 'absolute',
          zIndex: 1,
        }}
        resizeMode="cover"
      />
      <View
        style={{
          zIndex: 1,
          position: 'absolute',
          top: height / 2 - 100,
          flexDirection: 'row',
          width: width,
        }}>
        <View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={[styles.textStyle, {fontWeight: 'bold'}]}>
              {`@${project.name}`}
            </Text>
            <Image
              source={require('../assets/verifiedPink.png')}
              style={{height: 18, width: 18, marginLeft: 5, marginTop: 5}}
            />
          </View>
          <Text style={styles.textStyle}>129k followers</Text>
        </View>
        <Button
          title="commend"
          buttonStyle={{
            backgroundColor: '#FD1053',
            borderRadius: 10,
            marginLeft: 20,
            paddingHorizontal: 20,
          }}
          onPress={toggleDonationOverlay}
        />
      </View>
      <View style={{padding: 20}}>
        <AboutProject
          showLogo={false}
          showCommend={true}
          showButton={false}
          showMessage={true}
          project={project}
        />
        {isEvent && (
          <View style={{marginTop: 10}}>
            <EventDetail />
          </View>
        )}

        <View style={{marginVertical: 10}}>
          <Map
            buttonTitle={isEvent ? 'register to volunteer' : 'get involved'}
          />
        </View>
        <View style={{marginBottom: 100}}>
          <Funding
            totalAmount={15000}
            amountRaised={9750}
            commendPress={toggleDonationOverlay}
            sponsorPress={toggleOverlay}
          />
        </View>
        <SponsorOverlay visible={showSponsor} toggleOverlay={toggleOverlay} />
        <DonationOverlay
          visible={showDonation}
          toggleOverlay={toggleDonationOverlay}
          isCommend={true}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  textStyle: {color: 'white', fontSize: 18, marginLeft: 10},
});
