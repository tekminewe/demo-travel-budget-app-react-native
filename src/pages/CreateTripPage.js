// @flow
import React from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30,
  }
});

const CreateTripPage = () => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Trip Name"
      />
      <Button
        title="Add"
        onPress={() => {}}
      />
    </View>
  );
}

CreateTripPage.navigationOptions = {
  title: 'New Trip',
}

export default CreateTripPage;
