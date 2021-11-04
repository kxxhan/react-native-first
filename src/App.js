import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import MyButton from './MyButton';

const App = () => {
  const [addition, setAddition] = useState(0);
  const [multiple, setMultiple] = useState(1);
  // state가 변경되면 component가 rerendring된다.

  return (
    <View style={styles.container}>
      <TextInput onChange={event => console.log(event.nativeEvent)}
      style={{borderWidth: 1, padding: 10, fontSize: 20}}
      />
      {/* <Text style={{ fontSize: 20 }}>{addition}</Text>
      <Text style={{ fontSize: 20 }}>{multiple}</Text>
      <MyButton title="addition" onPress={() => setAddition(addition + 2)} />
      <MyButton title="multiple" onPress={() => setMultiple(multiple * 2)} /> */}

    </View>
  );
};

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
