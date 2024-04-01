import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from '../navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const webClientId = "857520856039-5s6eee8cga33q3q7q5ea6chp7fuhicqc.apps.googleusercontent.com";

GoogleSignin.configure({
  scopes: ["email", "profile"],
  webClientId: webClientId,
});

const LoginScreen = ({ navigation }: Props) => {

  async function handleGoogleSignIn() {
    try {
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();
      const { idToken } = response;
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Law Uncle</Text>
      <Text style={styles.tagline}>Know Your Rights</Text>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => { navigation.navigate("Home") }}
      >
        <Text style={styles.buttonText}>LOG IN</Text>
      </TouchableOpacity>
      <Text style={styles.description}><Text style={styles.underline}>By DevUncles</Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  logo: {
    fontSize: 60,
    fontWeight: "bold",
    color: "#3333ff",
    marginBottom: 0, // Adjusted marginBottom to bring closer
  },
  tagline: {
    fontSize: 20,
    color: "#3333ff",
    marginBottom: 10, // Adjusted marginBottom to bring closer
  },
  loginButton: {
    backgroundColor: "#3333ff",
    width: "65%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    marginTop: 20,
    color: "#3333ff",
    fontSize: 12,
  },
  underline: {
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
