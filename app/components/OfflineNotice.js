import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';

import Text from './Text';
import colors from '../config/colors';

export default function OfflineNotice(props) {
  const netInfo = useNetInfo();
  if (netInfo.type !== 'unknown' && netInfo.isInternetReachable === false) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No internet connection</Text>
      </View>
    );
  }
  return null;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    position: 'absolute',
    height: 50,
    width: '100%',
    zIndex: 1,
    top: StatusBar.currentHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.white,
  },
});
