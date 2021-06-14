import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {HorizontalIconHolder} from './HorizontalIconHolder';
import {HorizontalVideoHolder} from './HorizontalVideoHolder';
import {manchesterLogoImage} from '../config/images';

const premImage = require('../assets/prem.jpg');

export function AboutProject({
  showLogo,
  showButton,
  showCommend,
  showMessage,
  project,
}) {
  return (
    <View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {showLogo && (
          <Image style={styles.profileImage} source={manchesterLogoImage} />
        )}
        <View style={{marginLeft: showLogo ? 20 : 0}}>
          {showLogo && <Text style={styles.textStyle}>About Charity</Text>}
          <Text style={[styles.textStyle, {fontSize: 24, marginTop: 10}]}>
            {project.title}
          </Text>
          {!showLogo && (
            <Text style={[styles.textStyle, {marginTop: 10}]}>
              About Project
            </Text>
          )}
        </View>
      </View>
      {!showLogo && (
        <View style={{marginTop: 20}}>
          <HorizontalIconHolder
            showCommend={showCommend}
            showButton={showButton}
            showMessage={showMessage}
          />
        </View>
      )}
      <Text
        style={[
          styles.textStyle,
          {fontWeight: 'normal', marginTop: 20, marginLeft: 0},
        ]}>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum." "Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum."
      </Text>
      {showLogo && (
        <View style={{marginTop: 30}}>
          <HorizontalIconHolder
            showCommend={showCommend}
            showButton={showButton}
          />
        </View>
      )}
      <View style={{marginTop: 10, height: 100}}>
        <HorizontalVideoHolder />
      </View>
      <Text
        style={[
          styles.textStyle,
          {fontWeight: 'normal', marginLeft: 0, marginTop: 30},
        ]}>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum." "Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum." "Lorem ipsum dolor sit
        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum."
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 90 / 2,
    overflow: 'hidden',
  },
  textStyle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
