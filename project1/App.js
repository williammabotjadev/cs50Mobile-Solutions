import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Alert, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text 
        style={styles.mainText}
      >Work Timer</Text>
      <Text 
        style={styles.clockText}
      >00:00</Text>
      <View style={styles.flexRow}>
        <Pressable
          title="Start"
          onPress={() => Alert.alert('Left button pressed')}
          style={styles.buttonLeft}
        >
          <Text style={styles.fontStyle}>Start</Text>
        </Pressable>
        <Pressable
          title="Reset"
          onPress={() => Alert.alert('Right button pressed')}
          style={styles.buttonRight}
        >
          <Text style={styles.fontStyle}>Reset</Text>
        </Pressable>
      </View>
      <View style={styles.inputsArea}>
        <View style={styles.workTime}>
              <Text style={styles.workTimeTitle}>Work Time: </Text>
              <Text style={styles.inputLabel}>Mins: </Text>
              <TextInput style={styles.timeInput} />
              <Text style={styles.inputLabelSecs}>Secs: </Text>
              <TextInput style={styles.timeInput} />
        </View>
        <View style={styles.breakTime}>
              <Text style={styles.breakTimeTitle}>Break Time: </Text>
              <Text style={styles.inputLabel}>Mins: </Text>
              <TextInput style={styles.timeInput} />
              <Text style={styles.inputLabelSecs}>Secs: </Text>
              <TextInput style={styles.timeInput} />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainText: {
    fontSize: 48,
    fontWeight: 600
  },
  clockText: {
    fontSize: 80,
    fontWeight: 400
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonRight: {
    marginLeft: 24,
    backgroundColor: '#89CFF0',
    color: 'white',
    padding: 20
  },
  buttonLeft: {
    backgroundColor: '#89CFF0',
    color: 'white',
    padding: 20
  },
  fontStyle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 400
  },
  workTime: {
    display: 'flex',
    flexDirection: 'row'
  },
  breakTime: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20
  },
  workTimeTitle: {
    fontWeight: 600,
    marginLeft: 20
  },
  breakTimeTitle: {
    fontWeight: 600,
    marginLeft: 20
  },
  inputsArea: {
    marginTop: 40
  },
  timeInput: {
    width: '15%',
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10
  },
  inputLabel: {
    marginLeft: 40
  },
  inputLabelSecs: {
    marginLeft: 10
  }
});
