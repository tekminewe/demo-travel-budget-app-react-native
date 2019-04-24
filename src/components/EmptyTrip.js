// @flow
import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

type PropsType = {
  onAdd: () => void,
}

export const EmptyTrip = ({ onAdd }: PropsType) => {
  return (
    <View style={styles.container}>
      <Text>You do not have any trip yet.</Text>
      <Button
        title="Add Trip"
        onPress={onAdd}
      />
    </View>
  )
};


export default EmptyTrip;
