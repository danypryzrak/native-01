import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Button } from 'react-native';
import * as Font from 'expo-font';
import { useEffect } from 'react';

export default function Register() {
  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'Roboto-Bold': require('./assets/fonts/RobotoBold.ttf'),
        'Roboto-Medium': require('./assets/fonts/RobotoMedium.ttf'),
        'Roboto': require('./assets/fonts/RobotoRegular.ttf'),
        'Inter-Medium': require('./assets/fonts/InterMedium.ttf'),
      });
    };

    loadFonts();
  }, []);

  return (
    <View style={styles.body}>
      <Image source={require('./images/background.jpg')} style={styles.backgroundImage} />
      <View style={styles.container}>
        <View style={styles.avatar}></View>
        <Text style={styles.title}>{'Registration'}</Text>
        <TextInput
          style={[styles.input, styles.firstInput]}
          placeholder="User Name"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
        />
        <TouchableOpacity style={styles.button} onPress={() => console.log('Button pressed')}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.link} onPress={() => console.log('Button pressed')}>
          <Text style={styles.linkText}>Already have an account? Sign In</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: '#fff',
    alignItems: 'center',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25
  },
  backgroundImage: {
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    width: '100%',
    height: '66%',
  },
  avatar: {
    width: 120,
    height: 120,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
    marginTop: -60,
  },
  title: {
    marginTop: 32,
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
  },
  firstInput: {
    marginTop: 32,
  },
  input: {
    marginTop: 16,
    padding: 16,
    width: 343,
    height: 50,
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
  },
  button: {
    marginTop: 43,
    width: 343,
    height: 51,
    backgroundColor: '#FF6C00',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
  },
  link: {
    marginTop: 16,
  },
  linkText: {
    color: '#1B4371',
    marginTop: 16,
    fontFamily: 'Roboto',
    
  },
});
