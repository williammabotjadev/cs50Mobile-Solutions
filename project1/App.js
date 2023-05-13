import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Alert, TextInput } from 'react-native';
import CountDown from 'react-native-countdown-component';

export default function App() {

  const [runningState, setRunningState] = React.useState(true);
  const [timerValue, setTimerValue] = React.useState(1500);
  const [workValue, setWorkValue] = React.useState(25);
  const [breakValue, setBreakValue] = React.useState(5);
  const [workValueSecs, setWorkValueSecs] = React.useState(0);
  const [breakValueSecs, setBreakValueSecs] = React.useState(0);

  const handleReset = () => {
    setTimerValue(1500);
    console.log("timer value handler")
  }

  React.useEffect(() => {
      handleReset();
  }, [timerValue])

  React.useEffect(() => {
      console.log("running state changed!")
  }, [runningState])
  
  return (
    <View style={styles.container}>
      <Text 
        style={styles.mainText}
      >Work Timer</Text>
      <CountDown
        until={timerValue}
        size={50}
        onFinish={() => alert('Time for a Break!')}
        digitStyle={{backgroundColor: '#FFF'}}
        digitTxtStyle={{
          color: '#000',
          fontSize: 64
        }}
        
        separatorStyle={{
          color: "black",
          fontSize: 64,
          marginBottom: 40
        }}
        running={runningState}
        showSeparator={true}
        timeToShow={['M', 'S']}
        timeLabels={{m: null, s: null}}
      />
      <View style={styles.flexRow}>
        <Pressable
          title={runningState ? "Pause" : "Start" }
          onPress={() => {
              setRunningState(state => !state);
          }}
          style={styles.buttonLeft}
        >
          <Text style={styles.fontStyle}>Start</Text>
        </Pressable>
        <Pressable
          title="Reset"
          onPress={handleReset}
          style={styles.buttonRight}
        >
          <Text style={styles.fontStyle}>Reset</Text>
        </Pressable>
      </View>
      <View style={styles.inputsArea}>
        <View style={styles.workTime}>
              <Text style={styles.workTimeTitle}>Work Time: </Text>
              <Text style={styles.inputLabel}>Mins: </Text>
              <TextInput style={styles.timeInput} value={workValue.toString()} />
              <Text style={styles.inputLabelSecs}>Secs: </Text>
              <TextInput style={styles.timeInputSecs} value={workValueSecs.toString()} />
        </View>
        <View style={styles.breakTime}>
              <Text style={styles.breakTimeTitle}>Break Time: </Text>
              <Text style={styles.inputLabel}>Mins: </Text>
              <TextInput style={styles.timeInput} value={breakValue.toString()} />
              <Text style={styles.inputLabelSecs}>Secs: </Text>
              <TextInput style={styles.timeInputSecs} value={breakValueSecs.toString()} />
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
    color: 'black',
    borderRadius: 10,
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10
  },
  timeInputSecs: {
    width: '15%',
    borderColor: 'black',
    color: 'black',
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
