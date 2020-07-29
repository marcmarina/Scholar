import React from 'react';
import Text from '../Text';
import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

export default function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;

  return <Text style={styles.error}>{error}</Text>;
}
const styles = StyleSheet.create({
  error: { color: colors.danger, fontSize: 16 },
});
