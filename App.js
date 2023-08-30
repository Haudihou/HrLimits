import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState(0);
  const [hrlimits, setHrLimits] = useState('');

  const calculate = () => {
    const calculatedAge = isNaN(age) ? 0 : age;
    const lower = (220 - calculatedAge) * 0.65;
    const upper = (220 - calculatedAge) * 0.85;
    setHrLimits(`${lower.toFixed(0)} - ${upper.toFixed(0)}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Age</Text>
      <TextInput
        placeholder='Enter your age'
        value={age === 0 ? '' : age.toString()}  // Handle initial value correctly
        onChangeText={inputAge => setAge(inputAge)}
        keyboardType='numeric'  // Add keyboardType to restrict input to numbers
        style={styles.field}
      />
      <Text style={styles.label}>Hr Limits</Text>
      <Text style={styles.field}>{hrlimits}</Text>
      <Button title='Calculate' onPress={calculate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
    marginLeft: 10,
    marginRight: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  field: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
  },
});
