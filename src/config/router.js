import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Button,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {Icon} from 'react-native-elements';
import {Home} from '../screens/Home';
import {Profile} from '../screens/Profile';
import {Projects} from '../screens/Projects';
import {Search} from '../screens/Search';
import {Add} from '../screens/Add';
import {Settings} from '../screens/Settings';
import {Notifications} from '../screens/Notifications';
import {PrivacyAndSecurity} from '../screens/PrivacyAndSecurity';
import {ConnectToSocials} from '../screens/ConnectToSocials';
import {HelpAndSupport} from '../screens/HelpAndSupport';
import {About} from '../screens/About';
import {NewPost} from '../screens/NewPost';
import {WelcomeScreen} from '../screens/WelcomeScreen';
import {Introduction} from '../screens/Introduction';
import {AgeIdentity} from '../screens/AgeIdentity';
import {UploadDocument} from '../screens/UploadDocument';
import {EmailMobileUpload} from '../screens/EmailMobileUpload';
import {VerifyAccount} from '../screens/VerifyAccount';
import {CreateUsername} from '../screens/CreateUsername';
import {EnableLocation} from '../screens/EnableLocation';
import {AccountCreated} from '../screens/AccountCreated';
import {AddName} from '../screens/AddName';
import {ParentsContactInfo} from '../screens/ParentsContactInfo';
import {WelcomeUnderSixteen} from '../screens/WelcomeUnderSixteen';
import {VerifyParentsAccount} from '../screens/VerifyParentsAccount';
import {Interests} from '../screens/Interests';
import {Account} from '../screens/Account';
import {LinkAccountScreen} from '../screens/LinkAccountScreen';
import {OrganisationRegEmail} from '../screens/OrganisationRegEmail';
import {OrganisationNameWebsite} from '../screens/OrganisationNameWebsite';
import {OrganisationAddPicture} from '../screens/OrganisationAddPicture';
import {EditInterests} from '../screens/EditInterests';
import {ManagePayments} from '../screens/ManagePayments';
import {CreateEvent} from '../screens/CreateEvent';
import {Inbox} from '../screens/Inbox';
import {Wallet} from '../screens/Wallet';
import {ProjectDetail} from '../screens/ProjectDetail';
import {Charity} from '../screens/Charity';
import {ProjectPage} from '../screens/ProjectPage';
import {SignUp} from '../screens/SignUp';

import {
  homeImageBlack,
  searchImageBlack,
  createImageBlack,
  projectsImageBlack,
  homeImagePink,
  searchImagePink,
  createImagePink,
  projectsImagePink,
  profileImageBlack,
  profileImagePink,
} from './images';

const Tab = createBottomTabNavigator();
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function SignupStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signup"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Add" component={Add} options={{headerShown: false}} />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NewPost"
        component={NewPost}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Introduction"
        component={Introduction}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AgeIdentity"
        component={AgeIdentity}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UploadDocument"
        component={UploadDocument}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EmailMobileUpload"
        component={EmailMobileUpload}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="VerifyAccount"
        component={VerifyAccount}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreateUsername"
        component={CreateUsername}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EnableLocation"
        component={EnableLocation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AccountCreated"
        component={AccountCreated}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddName"
        component={AddName}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ParentsContactInfo"
        component={ParentsContactInfo}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="WelcomeUnderSixteen"
        component={WelcomeUnderSixteen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="VerifyParentsAccount"
        component={VerifyParentsAccount}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Interests"
        component={Interests}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Wallet"
        component={Wallet}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProjectDetail"
        component={ProjectDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Projects"
        component={Projects}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Charity"
        component={Charity}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LinkAccountScreen"
        component={LinkAccountScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AccountCreated"
        component={AccountCreated}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OrganisationRegEmail"
        component={OrganisationRegEmail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OrganisationNameWebsite"
        component={OrganisationNameWebsite}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OrganisationAddPicture"
        component={OrganisationAddPicture}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreateEvent"
        component={CreateEvent}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Inbox"
        component={Inbox}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PrivacyAndSecurity"
        component={PrivacyAndSecurity}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ConnectToSocials"
        component={ConnectToSocials}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HelpAndSupport"
        component={HelpAndSupport}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ManagePayments"
        component={ManagePayments}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Account"
        component={Account}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditInterests"
        component={EditInterests}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Wallet"
        component={Wallet}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Charity"
        component={Charity}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function SearchStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={Search}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Project"
        component={Projects}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LinkAccountScreen"
        component={LinkAccountScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AccountCreated"
        component={AccountCreated}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OrganisationRegEmail"
        component={OrganisationRegEmail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OrganisationNameWebsite"
        component={OrganisationNameWebsite}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OrganisationAddPicture"
        component={OrganisationAddPicture}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreateEvent"
        component={CreateEvent}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Inbox"
        component={Inbox}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PrivacyAndSecurity"
        component={PrivacyAndSecurity}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ConnectToSocials"
        component={ConnectToSocials}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HelpAndSupport"
        component={HelpAndSupport}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ManagePayments"
        component={ManagePayments}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Account"
        component={Account}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditInterests"
        component={EditInterests}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Wallet"
        component={Wallet}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProjectDetail"
        component={ProjectDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProjectPage"
        component={ProjectPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Charity"
        component={Charity}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function ProjectStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Project"
        component={Projects}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LinkAccountScreen"
        component={LinkAccountScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AccountCreated"
        component={AccountCreated}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OrganisationRegEmail"
        component={OrganisationRegEmail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OrganisationNameWebsite"
        component={OrganisationNameWebsite}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OrganisationAddPicture"
        component={OrganisationAddPicture}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreateEvent"
        component={CreateEvent}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Inbox"
        component={Inbox}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PrivacyAndSecurity"
        component={PrivacyAndSecurity}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ConnectToSocials"
        component={ConnectToSocials}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HelpAndSupport"
        component={HelpAndSupport}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ManagePayments"
        component={ManagePayments}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Account"
        component={Account}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditInterests"
        component={EditInterests}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Wallet"
        component={Wallet}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProjectDetail"
        component={ProjectDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProjectPage"
        component={ProjectPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Charity"
        component={Charity}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Project"
        component={Projects}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LinkAccountScreen"
        component={LinkAccountScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AccountCreated"
        component={AccountCreated}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OrganisationRegEmail"
        component={OrganisationRegEmail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OrganisationNameWebsite"
        component={OrganisationNameWebsite}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OrganisationAddPicture"
        component={OrganisationAddPicture}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreateEvent"
        component={CreateEvent}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Inbox"
        component={Inbox}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PrivacyAndSecurity"
        component={PrivacyAndSecurity}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ConnectToSocials"
        component={ConnectToSocials}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HelpAndSupport"
        component={HelpAndSupport}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ManagePayments"
        component={ManagePayments}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Account"
        component={Account}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditInterests"
        component={EditInterests}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Wallet"
        component={Wallet}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProjectDetail"
        component={ProjectDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Charity"
        component={Charity}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProjectPage"
        component={ProjectPage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

// function ProfileStack() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Profile" component={Profile} />
//       <Tab.Screen name="LinkAccountScreen" component={LinkAccountScreen} />
//       <Tab.Screen name="AccountCreated" component={AccountCreated} />
//       <Tab.Screen
//         name="OrganisationRegEmail"
//         component={OrganisationRegEmail}
//       />
//       <Tab.Screen
//         name="OrganisationNameWebsite"
//         component={OrganisationNameWebsite}
//       />
//       <Tab.Screen
//         name="OrganisationAddPicture"
//         component={OrganisationAddPicture}
//       />
//       <Tab.Screen name="CreateEvent" component={CreateEvent} />
//       <Tab.Screen name="Inbox" component={Inbox} />
//       <Tab.Screen name="Settings" component={Settings} />
//       <Tab.Screen name="Notifications" component={Notifications} />
//       <Tab.Screen name="PrivacyAndSecurity" component={PrivacyAndSecurity} />
//       <Tab.Screen name="ConnectToSocials" component={ConnectToSocials} />
//       <Tab.Screen name="HelpAndSupport" component={HelpAndSupport} />
//       <Tab.Screen name="ManagePayments" component={ManagePayments} />
//       <Tab.Screen name="About" component={About} />
//       <Tab.Screen name="Account" component={Account} />
//       <Tab.Screen name="EditInterests" component={EditInterests} />
//     </Tab.Navigator>
//   );
// }

function AddStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NewPost"
        component={NewPost}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProjectDetail"
        component={ProjectDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarLabel: () => {
          if (route.name === 'add') {
            return null;
          }
          return (
            <Text style={{fontSize: 14, marginTop: -5, marginBottom: 5}}>
              {route.name}
            </Text>
          );
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let imageSize;
          if (route.name === 'home') {
            iconName = focused ? homeImagePink : homeImageBlack;
            imageSize = 30;
          } else if (route.name === 'search') {
            iconName = focused ? searchImagePink : searchImageBlack;
            imageSize = 30;
          } else if (route.name === 'add') {
            iconName = focused ? createImagePink : createImageBlack;
            imageSize = 40;
          } else if (route.name === 'projects') {
            iconName = focused ? projectsImagePink : projectsImageBlack;
            imageSize = 30;
          } else if (route.name === 'profile') {
            iconName = focused ? profileImagePink : profileImageBlack;
            imageSize = 30;
          }
          return (
            <Image
              source={iconName}
              style={{height: imageSize, width: imageSize}}
            />
          );
        },
      })}
      tabBarOptions={{
        style: {
          borderRadius: 20,
          backgroundColor: 'white',
          position: 'absolute',
          bottom: 40,
          marginHorizontal: 20,
          height: 60,
        },
        activeTintColor: 'red',
        inactiveTintColor: 'black',
        labelStyle: {fontSize: 12, marginTop: -5, marginBottom: 5},
      }}>
      <Tab.Screen
        name="home"
        component={HomeStack}
        // options={() => ({
        //   tabBarLabel: 'home',
        //   tabBarIcon: ({color}) => (
        //     <Image source={homeImageBlack} style={{height: 30, width: 30}} />
        //   ),
        // })}
      />
      <Tab.Screen
        name="search"
        component={SearchStack}
        // options={{
        //   tabBarLabel: 'search',
        //   tabBarIcon: ({color}) => (
        //     <Image source={searchImageBlack} style={{height: 30, width: 30}} />
        //   ),
        // }}
      />
      <Tab.Screen
        name="add"
        component={AddStack}
        // options={{
        //   tabBarLabel: () => null,
        //   tabBarIcon: ({color}) => (
        //     <Image source={createImageBlack} style={{height: 50, width: 50}} />
        //   ),
        // }}
      />
      <Tab.Screen
        name="projects"
        component={ProjectStack}
        // options={route => ({
        //   tabBarVisible: (route => {
        //     const routeName = getFocusedRouteNameFromRoute(route) ?? '';

        //     if (routeName === 'Projects') {
        //       return true;
        //     }

        //     return false;
        //   })(route),
        //   tabBarLabel: 'projects',
        //   tabBarIcon: ({color}) => (
        //     <Image
        //       source={projectsImageBlack}
        //       style={{height: 30, width: 30}}
        //     />
        //   ),
        // })}
      />
      <Tab.Screen
        name="profile"
        component={ProfileStack}
        // options={{
        //   tabBarVisible: false,
        // }}

        //options={({route}) => ({
        // tabBarVisible: route.state.index > 0 ? false : true,
        // tabBarVisible: (route => {
        //   const routeName = getFocusedRouteNameFromRoute(route) ?? '';

        //   if (routeName === 'Profile') {
        //     return true;
        //   }

        //   return false;
        // })(route),
        //   tabBarLabel: 'profile',
        //   tabBarIcon: () => (
        //     <Image
        //       style={styles.image}
        //       source={{
        //         uri: 'https://reactnative.dev/img/tiny_logo.png',
        //       }}
        //     />
        //   ),
        // })}
      />
    </Tab.Navigator>
  );
}

export function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Signup"
        component={SignupStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignedIn"
        component={MyTabs}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function MyTabBar({state, descriptors, navigation}) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View
      style={{
        flexDirection: 'row',
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        console.log(options.title);
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1}}>
            <Text style={{color: isFocused ? '#673ab7' : '#222'}}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 24,
    height: 24,
    borderRadius: 24 / 2,
    overflow: 'hidden',
  },
});
