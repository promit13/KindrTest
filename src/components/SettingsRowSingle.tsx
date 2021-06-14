import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Icon, Switch} from 'react-native-elements';

export function SettingsRowSingle({item}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(!isEnabled);
  const {
    iconType,
    iconName,
    title,
    showLeftIcon,
    showRightIcon,
    onPress,
  } = item;
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {showLeftIcon && (
            <View style={{width: 30}}>
              <Icon name={iconName} type={iconType} color="black" size={24} />
            </View>
          )}
          <Text style={{marginLeft: 10, fontSize: 16}}>{title}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          {showRightIcon ? (
            <Icon
              name="chevron-small-right"
              type="entypo"
              color="black"
              size={24}
              iconStyle={{alignSelf: 'flex-end'}}
              onPress={onPress}
            />
          ) : (
            <Switch
              value={isEnabled}
              trackColor={{false: '#767577', true: 'red'}}
              ios_backgroundColor="lightgrey"
              onValueChange={toggleSwitch}
            />
          )}
        </View>
      </View>
      <View
        style={{height: 1, backgroundColor: 'lightgrey', marginVertical: 10}}
      />
    </View>
  );
}
