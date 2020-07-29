import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Image } from 'react-native';
import Button from '../components/Button';
import routes from '../navigation/routes';

export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.background}
      blurRadius={0.6}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Login"
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
        <Button
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate(routes.REGISTER)}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonContainer: {
    padding: 20,
    width: '100%',
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  tagline: {
    color: '#000000',
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-medium',
    paddingVertical: 20,
  },
  title: {
    color: '#f6f6f6',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-medium',
  },
});
