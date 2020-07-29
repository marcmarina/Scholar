import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AccountScreen from '../screens/AccountScreen';
import MessagesScreen from '../screens/MessagesScreen';
import { View } from 'react-native';

const { Navigator, Screen } = createStackNavigator();

export default AccountNavigator = () => (
  <Navigator>
    <Screen
      options={{ headerShown: false }}
      name="Account"
      component={AccountScreen}
    />
    <Screen
      options={{
        headerTitleStyle: {
          alignSelf: 'center',
        },
        headerTitleContainerStyle: {
          left: 0,
        },
      }}
      name="Messages"
      component={MessagesScreen}
    />
  </Navigator>
);
