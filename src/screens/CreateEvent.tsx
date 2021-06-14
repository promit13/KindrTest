import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import {Button, Icon, Overlay, Switch} from 'react-native-elements';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useForm, Controller} from 'react-hook-form';
import {WelcomeScreen} from './WelcomeScreen';

const {width, height} = Dimensions.get('window');

export function CreateEvent({route, navigation}) {
  const [isImageSelected, setIsImageSelected] = useState(false);
  const [showSelectOptions, setShowSelectOptions] = useState(false);
  const [image, setImage] = useState(null);

  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm();

  const openGallery = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      setImage(response);
      setIsImageSelected(true);
    });
  };
  const openCamera = () => {
    launchCamera({mediaType: 'photo'}, response => {
      console.log(response);
    });
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white', paddingBottom: 80}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 20,
          paddingHorizontal: 20,
        }}>
        <Icon
          name="chevron-small-left"
          type="entypo"
          size={30}
          onPress={() => navigation.goBack()}
        />
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Create Event</Text>
        <Text style={{color: 'white'}}>""</Text>
      </View>
      <View
        style={{
          height: 1,
          width,
          marginTop: 10,
          backgroundColor: 'lightgrey',
        }}
      />
      <ScrollView
        contentContainerStyle={{
          backgroundColor: 'white',
          paddingHorizontal: 20,
          marginBottom: 40,
        }}>
        <View style={{marginTop: 50, alignItems: 'center'}}>
          {isImageSelected ? (
            <Image
              source={{
                uri: image.uri,
              }}
              resizeMode="contain"
              style={{width: width / 4, height: 140}}
            />
          ) : (
            <View
              style={[
                styles.iconBackViewStyle,
                {width: width / 4, marginLeft: 0},
              ]}>
              <Icon
                name="camera"
                type="entypo"
                size={50}
                color="grey"
                onPress={() => {
                  setShowSelectOptions(true);
                }}
              />
            </View>
          )}
          <Text style={[styles.textStyle, {color: 'grey'}]}>
            Add Main Image
          </Text>
        </View>
        <View style={styles.blockViewStyle}>
          <Text style={styles.textStyle}>Create Event Title</Text>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                style={styles.inputViewStyle}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="Event Title"
                multiline={true}
              />
            )}
            name="numberOfCoins"
            rules={{required: true}}
            defaultValue=""
          />

          {errors.numberOfCoins && (
            <Text style={styles.errorTextStyle}>This is required.</Text>
          )}
        </View>
        <View style={styles.blockViewStyle}>
          <Text style={styles.textStyle}>Create Event Description</Text>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                style={[styles.inputViewStyle, {height: 120}]}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="Description"
                multiline={true}
              />
            )}
            name="numberOfCoins"
            rules={{required: true}}
            defaultValue=""
          />

          {errors.numberOfCoins && (
            <Text style={styles.errorTextStyle}>This is required.</Text>
          )}
        </View>
        <View style={styles.blockViewStyle}>
          <Text style={styles.textStyle}>Additional Notes</Text>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                style={[styles.inputViewStyle, {height: 120}]}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="(footwear, water, sunscreen, etc)"
                multiline={true}
              />
            )}
            name="numberOfCoins"
            rules={{required: true}}
            defaultValue=""
          />

          {errors.numberOfCoins && (
            <Text style={styles.errorTextStyle}>This is required.</Text>
          )}
        </View>
        <View style={styles.blockViewStyle}>
          <Text style={styles.textStyle}>Add Videos/Photos</Text>
          <View style={styles.rowBlockViewStyle}>
            <View>
              <View style={styles.iconBackViewStyle}>
                <Icon
                  name="plus"
                  type="entypo"
                  size={50}
                  color="grey"
                  onPress={() => {
                    setShowSelectOptions(true);
                  }}
                />
              </View>
              <TextInput
                style={styles.captionInputStyle}
                placeholder="Add a caption..."
                multiline={true}
              />
            </View>
            <View>
              <View style={styles.iconBackViewStyle}>
                <Icon
                  name="plus"
                  type="entypo"
                  size={50}
                  color="grey"
                  onPress={() => {
                    setShowSelectOptions(true);
                  }}
                />
              </View>
              <TextInput
                style={styles.captionInputStyle}
                placeholder="Add a caption..."
                multiline={true}
              />
            </View>
          </View>
          <View style={styles.rowBlockViewStyle}>
            <View>
              <View style={styles.iconBackViewStyle}>
                <Icon
                  name="plus"
                  type="entypo"
                  size={50}
                  color="grey"
                  onPress={() => {
                    setShowSelectOptions(true);
                  }}
                />
              </View>
              <TextInput
                style={styles.captionInputStyle}
                placeholder="Add a caption..."
                multiline={true}
              />
            </View>
            <View>
              <View style={styles.iconBackViewStyle}>
                <Icon
                  name="plus"
                  type="entypo"
                  size={50}
                  color="grey"
                  onPress={() => {
                    setShowSelectOptions(true);
                  }}
                />
              </View>
              <TextInput
                style={styles.captionInputStyle}
                placeholder="Add a caption..."
                multiline={true}
              />
            </View>
          </View>
          <View style={styles.rowBlockViewStyle}>
            <View>
              <View style={styles.iconBackViewStyle}>
                <Icon
                  name="plus"
                  type="entypo"
                  size={50}
                  color="grey"
                  onPress={() => {
                    setShowSelectOptions(true);
                  }}
                />
              </View>
              <TextInput
                style={styles.captionInputStyle}
                placeholder="Add a caption..."
                multiline={true}
              />
            </View>
            <View>
              <View style={styles.iconBackViewStyle}>
                <Icon
                  name="plus"
                  type="entypo"
                  size={50}
                  color="grey"
                  onPress={() => {
                    setShowSelectOptions(true);
                  }}
                />
              </View>
              <TextInput
                style={styles.captionInputStyle}
                placeholder="Add a caption..."
                multiline={true}
              />
            </View>
          </View>
        </View>
        <View style={styles.blockViewStyle}>
          <Text style={styles.textStyle}>Enter Event Capacity</Text>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                style={styles.inputViewStyle}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="Enter how many people can attend this event"
                multiline={true}
              />
            )}
            name="numberOfCoins"
            rules={{required: true}}
            defaultValue=""
          />

          {errors.numberOfCoins && (
            <Text style={styles.errorTextStyle}>This is required.</Text>
          )}
        </View>
        <View style={styles.lineViewStyle} />
        <View style={[styles.rowBlockViewStyle, {marginTop: 0}]}>
          <Text style={styles.textStyle}>Is this event free?</Text>
          <Switch
            value={true}
            trackColor={{false: '#767577', true: 'red'}}
            ios_backgroundColor="lightgrey"
            onValueChange={() => {}}
          />
        </View>
        <View>
          <Text style={styles.textStyle}>Enter Co</Text>
          <TextInput style={styles.inputViewStyle} multiline={true} />
        </View>
        <View style={styles.lineViewStyle} />
        <View style={[styles.rowBlockViewStyle, {marginTop: 0}]}>
          <Text style={styles.textStyle}>Location</Text>
          <Icon name="chevron-small-right" type="entypo" />
        </View>
        <View style={styles.lineViewStyle} />
        <View style={[styles.rowBlockViewStyle, {marginTop: 0}]}>
          <Text style={styles.textStyle}>Date</Text>
          <Text style={styles.textStyle}>DD/MM/YYYY</Text>
        </View>
        <View style={styles.lineViewStyle} />
        <View style={[styles.rowBlockViewStyle, {marginTop: 0}]}>
          <Text style={styles.textStyle}>Time</Text>
          <Text style={styles.textStyle}>00:00am</Text>
        </View>
        <View style={styles.lineViewStyle} />
        <View style={[styles.rowBlockViewStyle, {marginTop: 0}]}>
          <Text style={styles.textStyle}>People</Text>
          <Switch
            value={true}
            trackColor={{false: '#767577', true: 'red'}}
            ios_backgroundColor="lightgrey"
            onValueChange={() => {}}
          />
        </View>
        <View style={styles.lineViewStyle} />
        <View style={[styles.rowBlockViewStyle, {marginTop: 0}]}>
          <Text style={styles.textStyle}>Planet</Text>
          <Switch
            value={true}
            trackColor={{false: '#767577', true: 'red'}}
            ios_backgroundColor="lightgrey"
            onValueChange={() => {}}
          />
        </View>
        <View style={styles.lineViewStyle} />
        <View style={[styles.rowBlockViewStyle, {marginTop: 0}]}>
          <Text style={styles.textStyle}>Save for later?</Text>
          <Switch
            value={true}
            trackColor={{false: '#767577', true: 'red'}}
            ios_backgroundColor="lightgrey"
            onValueChange={() => {}}
          />
        </View>
        <Button
          title="create event"
          buttonStyle={{
            backgroundColor: 'red',
            marginVertical: 30,
            borderRadius: 10,
            paddingVertical: 20,
          }}
          titleStyle={{fontWeight: 'bold'}}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  lineViewStyle: {
    height: 1,
    width: width - 40,
    backgroundColor: 'lightgrey',
    marginVertical: 20,
  },
  textStyle: {
    marginTop: 10,
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  iconBackViewStyle: {
    width: width / 2 - 30,
    borderRadius: 10,
    backgroundColor: 'lightgrey',
    height: height / 5,
    justifyContent: 'center',
  },
  buttonStyle: {
    backgroundColor: 'white',
    width: width - 100,
    borderRadius: 10,
  },
  redBoxStyle: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: 'red',
    borderRadius: 5,
    position: 'absolute',
    bottom: 60,
  },
  inputViewStyle: {
    marginTop: 20,
    flexDirection: 'row',
    width: width - 40,
    height: 60,
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'lightgrey',
    opacity: 1,
    alignSelf: 'center',
    paddingTop: 10,
  },

  errorTextStyle: {
    color: 'red',
    fontSize: 10,
  },
  blockViewStyle: {
    marginTop: 20,
  },
  captionInputStyle: {
    width: width / 2 - 40,
    height: 40,
    marginLeft: 10,
  },
  rowBlockViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});
