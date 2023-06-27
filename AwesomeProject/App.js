import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Button, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform } from 'react-native';
import * as Font from 'expo-font';
import { useEffect, useState } from 'react';

export default function Login() {
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

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const onLogin = () => {
    console.log('Email:', email )
    console.log('Password:', password)
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.body}>
      <Image source={require('./images/background.jpg')} style={styles.backgroundImage} />
      <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
      
        <View style={styles.container}>
        
        <Text style={styles.title}>{'Sign In'}</Text>
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
        <TouchableOpacity style={styles.button} onPress={() => onLogin()}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.link} onPress={() => console.log('Button pressed')}>
          <Text style={styles.linkText}>Don't have an account? Sign up</Text>
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
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    width: '100%',
    paddingBottom: 144,
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
