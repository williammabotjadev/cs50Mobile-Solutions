import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NavBar from './components/NavBar';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {

  return (
    <>
    <NavigationContainer>
         <NavBar />
      </NavigationContainer>
    <View style={styles.container}>
      <Text>Your Movies will appear Here!</Text>
      <StatusBar style="auto" />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
