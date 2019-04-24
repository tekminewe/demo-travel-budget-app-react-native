// @flow
import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { createTrip as createTripAction, type TripActionType } from '../actions/TripAction';

type PropsType = {
  createTrip: typeof createTripAction,
  navigation: any,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30,
  }
});

export const CreateTripPage = ({ createTrip, navigation }: PropsType) => {
  const [ name, setName ] = useState('');

  const onAdd = () => {
    createTrip(name);
    navigation.pop();
  }

  return (
    <View style={styles.container}>
      <TextInput
        testID="tripNameTextInput"
        placeholder="Trip Name"
        onChangeText={setName}
      />
      <Button
        testID="addButton"
        title="Add"
        onPress={onAdd}
      />
    </View>
  );
}

CreateTripPage.navigationOptions = {
  title: 'New Trip',
}

const mapDispatchToProps = {
  createTrip: createTripAction,
}

export default connect(null, mapDispatchToProps)(CreateTripPage);
