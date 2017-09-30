import React, { PropTypes } from 'react';
import { phonecall } from 'react-native-communications';
import {
  Text,
  Button,
  Icon,
} from 'native-base';
import styles from './styles';

const Person = ({ phone, name }) =>
  <Button
    style={styles.callButton}
    transparent
    onPress={() => { phonecall(phone, true); }}
  >
    <Icon name="ios-call-outline" />
    <Text>{name}</Text>
  </Button>;

Person.propTypes = {
  phone: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Person;
