import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function App() {
  return (
    // eslint-disable-next-line
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
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
