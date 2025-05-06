import { useNavigation } from '@react-navigation/native'
import { View, Text, Alert, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth'
import { GoogleSignin } from '@react-native-google-signin/google-signin';


const SignupScreen = () => {
  const navigation = useNavigation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  GoogleSignin.configure({
    webClientId: '49476995375-gko8935aoabfglgijlhhsip1gl58e2lv.apps.googleusercontent.com',
  });

// signupwithgoogle
const handleGoogleSignup = async () => {
  try {
    await GoogleSignin.hasPlayServices()
    const { idToken } = await GoogleSignin.signIn()
    const googleCredential = auth.GoogleAuthProvider.credential(idToken)
    const userCredential = await auth().signInWithCredential(googleCredential)
    
    const user = userCredential.user
    Alert.alert('Success', `Welcome, ${user.email}!`)
    navigation.replace('MainApp');
  } catch (error) {
    console.log('Google Signup Error:', error)
    Alert.alert('Google Signup Error', error.message)
  }
}



  const handleSignup = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password')
      return
    }

    try {
      const userCredential = await auth().createUserWithEmailAndPassword(email, password)
      const user = userCredential.user
      Alert.alert('Success', `Welcome, ${user.email}!`)
      setEmail('')
      setPassword('')
      navigation.replace('MainApp');
    } catch (error) {
      console.log(error)
      Alert.alert('Signup Error', error.message)
    }
  }


  return (
    <View style={{ padding: 20 }}>
      <Text>Signup Screen</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        style={{ borderWidth: 1, marginVertical: 10, padding: 8 }}
      />
      
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderWidth: 1, marginVertical: 10, padding: 8 }}
      />
      
      
      <View style={{ marginVertical: 10 }}>
        <Button title="Signup" onPress={handleSignup} />
      </View>
      
      <View style={{ marginVertical: 10 }}>
        <Button title="Signup with Google" onPress={handleGoogleSignup} />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={{ marginTop: 20, color: 'blue' }}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SignupScreen