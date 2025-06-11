import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

export default function App() {
  return (
    <View>
      <SignUp/>
      <SignIn/>
    </View>
  );
}

