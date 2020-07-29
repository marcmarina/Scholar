import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ListingsScreen from '../screens/ListingsScreen';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';

const { Navigator, Screen } = createStackNavigator();

export default FeedNavigator = () => (
  <Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Screen name="Listings" component={ListingsScreen} />
    <Screen name="ListingDetails" component={ListingDetailsScreen} />
  </Navigator>
);
