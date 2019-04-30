// @flow
import React, {
  useState,
  useCallback,
  useRef,
  useEffect,
} from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Form } from 'native-base';

import { createTrip as createTripAction } from '../actions/TripAction';
import TextBox from '../components/common/TextBox';
import Button from '../components/common/Button';

type PropsType = {
  createTrip: typeof createTripAction,
  navigation: any,
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 30,
  },
  formField: {
    marginBottom: 10,
  },
});

export const CreateTripPage = ({ createTrip, navigation }: PropsType) => {
  const [name, setName] = useState('');
  const nameRef = useRef('');

  useEffect(() => {
    nameRef.current = name;
  });

  const onAdd = useCallback(() => {
    createTrip(nameRef.current || '');
    navigation.pop();
  }, [createTrip, navigation, nameRef]);

  return (
    <Container style={styles.container}>
      <Content>
        <Form>
          <TextBox
            testID="tripNameTextInput"
            placeholder="Trip Name"
            onChangeText={setName}
            style={styles.formField}
          />
          <Button
            testID="addButton"
            title="Add"
            onPress={onAdd}
          />
        </Form>
      </Content>
    </Container>
  );
};

CreateTripPage.navigationOptions = {
  title: 'New Trip',
};

const mapDispatchToProps = {
  createTrip: createTripAction,
};

export default connect(null, mapDispatchToProps)(CreateTripPage);
