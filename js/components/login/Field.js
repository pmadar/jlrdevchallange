import React, { PropTypes } from 'react';
import {
  Item,
  Input,
  Icon,
  Text,
} from 'native-base';

const Field = ({ onChange, value, iconName, placeholder, error = null, isPassword = false }) =>
  <Item error={!!error}>
    <Icon active name={iconName} />
    <Input
      placeholder={placeholder}
      value={value}
      onChangeText={onChange}
      secureTextEntry={isPassword}
    />
    {error
      ? <Item style={{ borderColor: 'transparent' }}>
        <Text style={{ fontSize: 15, color: 'red' }}>{error}</Text>
      </Item>
      : <Text />}
  </Item>;

Field.propTypes = {
  value: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  isPassword: PropTypes.bool,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Field;
