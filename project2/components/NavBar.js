import { createStackNavigator } from '@react-navigation/stack';
import { View, Button, TextInput, StyleSheet } from 'react-native';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TextInput style={styles.inputBox} />
        <Button
          title="Search Movies"
          onPress={() => navigation.navigate('Search')}
        />
      </View>
    );
  }

export default function NavBar() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
    inputBox: {
        borderWidth: 1,
        width: 120,
        height: 40,
        padding: 10,
        fontSize: 16,
        color: 'black'
    }
  });
  