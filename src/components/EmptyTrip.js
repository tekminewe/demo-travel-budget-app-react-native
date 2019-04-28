// @flow
import React from 'react';
import {
  View,
  Button,
  Text,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

type PropsType = {
  onAdd: () => void,
}

const EmptyTrip = ({ onAdd }: PropsType) => (
  <View style={styles.container}>
    <Text>You do not have any trip yet.</Text>
    <Button
      title="Add Trip"
      onPress={onAdd}
    />
  </View>
);

export default EmptyTrip;
