import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Image,
  ImageBackground,
} from 'react-native';
import _ from 'lodash';
import {Icon} from 'react-native-elements';
import {ProjectSingle} from '../components/ProjectSingle';
import {walletArray} from '../config/data';
import {Chart} from './Chart';
import {Loading} from './Loading';

const {height, width} = Dimensions.get('window');

export function WalletDown() {
  const [projects, setProjects] = useState(walletArray);
  const [showGraph, setShowGraph] = useState(false);
  const [showPeople, setShowPeople] = useState(false);
  const [showPlanet, setShowPlanet] = useState(false);
  const [showAll, setShowAll] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  });

  const renderFlatListItem = ({item}) => {
    if (item === undefined) {
      return;
    }
    return (
      <View style={{flexDirection: 'row', paddingHorizontal: 30}}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image style={styles.imageStyle} source={item.url} />
          <Image
            style={[styles.imageStyle, , {position: 'absolute', zIndex: 1}]}
            source={require('../assets/topCardGradient.png')}
          />
          <Text
            style={[
              styles.textStyle,
              {color: 'white', fontSize: 24, position: 'absolute', zIndex: 2},
            ]}>
            {item.coins}
          </Text>
        </View>
        <View
          style={{
            marginLeft: 10,
            justifyContent: 'center',
          }}>
          <Text style={[styles.textStyle, {fontSize: 12}]}>{item.date}</Text>
          <View style={[styles.lineViewStyle, {width: 50}]} />
          <Text style={[styles.textStyle, {fontSize: 18}]}>
            {`You spent ${item.coin} coins on:`}
          </Text>
          <Text style={[styles.textStyle, {fontSize: 18}]}>{item.title}</Text>
        </View>
      </View>
    );
  };

  const filterArray = isPlanet => {
    let projects = [];
    if (isPlanet) {
      projects = _.filter(walletArray, o => {
        return o.isPlanet;
      });
    } else {
      projects = _.filter(walletArray, o => {
        return !o.isPlanet;
      });
    }
    console.log(projects);
    setLoading(false);
    setProjects(projects);
  };

  const toggleStates = () => {
    setShowAll(false);
    setShowPeople(false);
    setShowPlanet(false);
  };

  return (
    <View style={styles.mainViewContainer}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 40,
          paddingVertical: 20,
        }}>
        <TouchableOpacity
          onPress={() => {
            toggleStates();
            setShowAll(true);
            setProjects(walletArray);
          }}>
          <Text style={[styles.textStyle, {color: showAll ? 'black' : 'grey'}]}>
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            toggleStates();
            setShowPeople(true);
            filterArray(true);
          }}>
          <Text
            style={[styles.textStyle, {color: showPeople ? 'black' : 'grey'}]}>
            People
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            toggleStates();
            setShowPlanet(true);
            filterArray(false);
          }}>
          <Text
            style={[styles.textStyle, {color: showPlanet ? 'black' : 'grey'}]}>
            Planet
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.lineViewStyle} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 30,
          marginTop: 20,
          marginBottom: 10,
        }}>
        {!showGraph && (
          <View>
            <TouchableOpacity>
              <Text>Transactions</Text>
            </TouchableOpacity>
            <View style={[styles.lineViewStyle, {width: 80}]} />
          </View>
        )}
        <View>
          <TouchableOpacity onPress={() => setShowGraph(!showGraph)}>
            <Text>{showGraph ? `less info  >` : `more info >`}</Text>
          </TouchableOpacity>
          <View style={[styles.lineViewStyle, {width: 80}]} />
        </View>
      </View>
      {showGraph && (
        <View>
          <Chart />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 10,
            }}>
            <TouchableOpacity style={styles.touchableStyle}>
              <Text style={{color: 'grey', fontSize: 14, marginTop: 0}}>
                day
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableStyle}>
              <Text style={{color: 'grey', fontSize: 14, marginTop: 0}}>
                week
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableStyle}>
              <Text style={{color: 'grey', fontSize: 14, marginTop: 0}}>
                month
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.touchableStyle,
                {borderRightColor: 'lightgrey', borderRightWidth: 1},
              ]}>
              <Text style={{color: 'grey', fontSize: 14, marginTop: 0}}>
                year
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      {loading ? (
        <Loading />
      ) : (
        <FlatList
          data={projects}
          renderItem={renderFlatListItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  mainViewContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'white',
  },
  imageStyle: {
    resizeMode: 'cover',
    height: 100,
    width: 100,
    marginTop: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: 'black',
    fontSize: 16,
    marginTop: 10,
  },
  lineViewStyle: {
    height: 1,
    width: width,
    backgroundColor: 'grey',
  },
  touchableStyle: {
    borderLeftColor: 'lightgrey',
    borderLeftWidth: 1,
    width: width / 4,
    alignItems: 'center',
  },
});
