import { createStackNavigator } from '@react-navigation/stack';
import { View, Button } from 'react-native';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Go to Profile"
          onPress={() => navigation.navigate('Profile')}
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