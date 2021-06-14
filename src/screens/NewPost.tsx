import React, {useLayoutEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  Button,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {useForm, Controller} from 'react-hook-form';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {SettingsRowSingle} from '../components/SettingsRowSingle';
import {newPostItemArray} from '../config/data';
import {useEffect} from 'react';

const {height, width} = Dimensions.get('window');

export function NewPost({route, navigation}) {
  const [image, setImage] = useState({});

  console.log('RESPONSE', image);
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={handleSubmit(onSubmit)} title="Share" color="red" />
      ),
    });
  }, [navigation]);

  const onSubmit = data => {
    console.log(data);
  };

  const openGallery = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      console.log(response);
      setImage(response);
      // navigation.navigate('NewPost', {
      //   image: response,
      // });
    });
  };
  const openCamera = () => {
    // launchCamera({mediaType: 'photo'}, response => {
    //   console.log(response);
    // });
    navigation.navigate('WelcomeScreen');
  };

  const renderItem = ({item}) => <SettingsRowSingle item={item} />;
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 20,
          paddingHorizontal: 20,
        }}>
        <Icon name="chevron-small-left" type="entypo" size={30} />
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>New Post</Text>
        <Text style={{color: '#FD1053'}}>Share</Text>
      </View>
      <View
        style={[styles.lineViewStyle, {width, marginBottom: 20, marginTop: 10}]}
      />
      <View style={{paddingHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={openGallery}
            style={{
              borderColor: 'grey',
              height: height / 6,
              width: width / 6,
              borderWidth: 1,
            }}>
            <Image
              source={{
                uri: image.uri,
              }}
              style={styles.imageStyle}
            />
          </TouchableOpacity>
          <View style={{marginHorizontal: 10}}>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={styles.inputViewStyle}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                  placeholder="Title of post..."
                />
              )}
              name="title"
              rules={{required: true}}
              defaultValue=""
            />
            {errors.title && (
              <Text style={styles.errorTextStyle}>This is required.</Text>
            )}
            <View style={styles.lineViewStyle} />
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={[styles.inputViewStyle, {height: 80}]}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                  placeholder="Write a caption..."
                  multiline={true}
                />
              )}
              name="caption"
              rules={{required: true}}
              defaultValue=""
            />
            {errors.caption && (
              <Text style={styles.errorTextStyle}>This is required.</Text>
            )}
          </View>
        </View>
        <View
          style={[styles.lineViewStyle, {marginTop: 20, width: width - 40}]}
        />
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={[styles.inputViewStyle, {height: 80, width: width - 40}]}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
              placeholder="Create some hashtags..."
              multiline={true}
            />
          )}
          name="hashtags"
          rules={{required: true}}
          defaultValue=""
        />
        {errors.hashtags && (
          <Text style={styles.errorTextStyle}>This is required.</Text>
        )}
        <View
          style={[styles.lineViewStyle, {marginBottom: 10, width: width - 40}]}
        />
        <FlatList
          data={newPostItemArray}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    height: height / 6,
    width: width / 6,
  },
  lineViewStyle: {
    height: 1,
    width: width - 120,
    backgroundColor: 'lightgrey',
    marginTop: 5,
  },
  inputViewStyle: {
    flexDirection: 'row',
    width: width - 120,
    height: 40,
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
});
