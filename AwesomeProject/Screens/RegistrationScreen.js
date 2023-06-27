import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Button,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import * as Font from 'expo-font';
import { useEffect, useState } from 'react';

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

  const [login, setLogin] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const onRegister = () => {
    console.log("UserName:", login)
    console.log('Email:', email )
    console.log('Password', password)
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.body}>
      <Image source={require('./images/background.jpg')} style={styles.backgroundImage} />
      <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
        <View style={styles.container}>
        <View style={styles.avatar}></View>
        <Text style={styles.title}>{'Registration'}</Text>
        <TextInput
          style={[styles.input, styles.firstInput]}
          onChangeText={setLogin}
          placeholder="User Name"
        />
            <TextInput
              keyboardType='email-address'
          style={styles.input}
          onChangeText={setEmail}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          placeholder="Password"
        />
        <TouchableOpacity style={styles.button} onPress={() => onRegister()}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.link} onPress={() => console.log('Button pressed')}>
          <Text style={styles.linkText}>Already have an account? Sign In</Text>
        </TouchableOpacity>
        
        </View>
      </KeyboardAvoidingView>  
      </View>
      </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'flex-end',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  backgroundImage: {
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  container: {
    paddingBottom: 48,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    width: '100%',
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
