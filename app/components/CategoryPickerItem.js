import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from './Icon';
import Text from './Text';

export default function CategoryPickerItem({ item, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Icon
          backgroundColor={item.backgroundColor}
          name={item.icon}
          size={65}
        />
        <Text style={styles.label}>{item.label}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    alignItems: 'center',
    width: '33%',
    textAlign: 'center',
  },
  label: {
    marginTop: 5,
    fontSize: 16,
    textAlign: 'center',
  },
});
