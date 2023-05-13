import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Alert, TextInput, DevSettings } from 'react-native';
import CountDown from 'react-native-countdown-component';

export default function App() {

  const [runningState, setRunningState] = React.useState(true);
  const [timerValue, setTimerValue] = React.useState(1500);
  const [workValue, setWorkValue] = React.useState(25);
  const [breakValue, setBreakValue] = React.useState(5);
  const [workValueSecs, setWorkValueSecs] = React.useState(0);
  const [breakValueSecs, setBreakValueSecs] = React.useState(0);
  const [startPauseLabel, setStartPauseLabel] = React.useState(runningState ? "Start" : "Pause");

  const handleReset = () => {
    setTimerValue(1500);
  }

  const handleBreakMins = (e) => {
    // DevSettings.reload();
    if (e["nativeEvent"].text !== "")
      setBreakValue(state => parseInt(e["nativeEvent"].text));
  }

  const handleBreakSecs = (e) => {
    // DevSettings.reload();
    if (e["nativeEvent"].text !== "")
      setBreakValueSecs(state => parseInt(e["nativeEvent"].text));
  }

  const handleWorkMins = (e) => {
    // DevSettings.reload();
    if (e["nativeEvent"].text !== "")
      setWorkValue(state => parseInt(e["nativeEvent"].text));
  }

  const handleWorkSecs = (e) => {
    // DevSettings.reload();
    if (e["nativeEvent"].text !== "")
      setWorkValueSecs(state => parseInt(e["nativeEvent"].text));
  }

  React.useEffect(() => {
      console.log("timer value reset");
  }, [timerValue])

  React.useEffect(() => {
      console.log("running state changed!");
      setStartPauseLabel(state => state === "Start" ? "Pause" : "Start");
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
          marginBottom: 12
        }}
        running={runningState}
        showSeparator={true}
        timeToShow={['M', 'S']}
        timeLabels={{m: null, s: null}}
      />
      <View style={styles.flexRow}>
        <Pressable
          onPress={() => {
              setRunningState(state => !state);
          }}
          style={styles.buttonLeft}
        >
          <Text style={styles.fontStyle}>{startPauseLabel}</Text>
        </Pressable>
        <Pressable
          title="Reset"
          onPress={() => DevSettings.reload()}
          style={styles.buttonRight}
        >
          <Text style={styles.fontStyle}>Reset</Text>
        </Pressable>
      </View>
      <View style={styles.inputsArea}>
        <View style={styles.workTime}>
              <Text style={styles.workTimeTitle}>Work Time: </Text>
              <Text style={styles.inputLabel}>Mins: </Text>
              <TextInput style={styles.timeInput} value={workValue?.toString()} onChange={handleWorkMins} />
              <Text style={styles.inputLabelSecs}>Secs: </Text>
              <TextInput style={styles.timeInputSecs} value={workValueSecs?.toString()} onChange={handleWorkSecs} />
        </View>
        <View style={styles.breakTime}>
              <Text style={styles.breakTimeTitle}>Break Time: </Text>
              <Text style={styles.inputLabel}>Mins: </Text>
              <TextInput style={styles.timeInput} editable={true} value={breakValue?.toString()} onChange={handleBreakMins} />
              <Text style={styles.inputLabelSecs}>Secs: </Text>
              <TextInput style={styles.timeInputSecs} editable={true} value={breakValueSecs?.toString()} onChange={handleBreakSecs} />
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
    paddingRight: 10,
    height: 20
  },
  timeInputSecs: {
    width: '15%',
    borderColor: 'black',
    color: 'black',
    borderRadius: 10,
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    height: 20
  },
  inputLabel: {
    marginLeft: 40
  },
  inputLabelSecs: {
    marginLeft: 10
  }
});
