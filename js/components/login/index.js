import React, { Component, PropTypes } from 'react';
import { AsyncStorage } from 'react-native';
import {
  Container,
  Content,
  Button,
  View,
  Text,
} from 'native-base';
import styles from './styles';
import Field from './Field';

class Login extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };
  constructor() {
    super();
    this.state = {
      isLoading: true,
      employeeId: '',
      password: '',
      clientIdError: null,
      passwordError: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    AsyncStorage.getItem('employeeId')
    .then((employeeId) => {
      if (employeeId) {
        this.props.navigation.navigate('Home');
      } else {
        this.setState({ isLoading: false });
      }
    });
  }
  async handleSubmit() {
    const { employeeId, password } = this.state;
    if (!employeeId) {
      this.setState({ clientIdError: 'Required' });
    } else if (!password) {
      this.setState({ passwordError: 'Required' });
    } else {
      await AsyncStorage.setItem('employeeId', employeeId);
      this.setState({
        employeeId: '',
        password: '',
        clientIdError: null,
        passwordError: null,
      });
      this.props.navigation.navigate('Home');
    }
  }
  render() {
    if (this.state.isLoading) {
      return null;
    }
    const { employeeId, password, clientIdError, passwordError } = this.state;
    return (
      <Container>
        <View style={styles.container}>
          <Content>
            <View style={styles.bg}>
              <Field
                value={employeeId}
                iconName="person"
                placeholder="Employee ID"
                error={clientIdError}
                onChange={value => this.setState({ employeeId: value })}
              />
              <Field
                value={password}
                iconName="unlock"
                placeholder="Password"
                error={passwordError}
                isPassword
                onChange={value => this.setState({ password: value })}
              />
              <Button
                block
                style={styles.btn}
                onPress={this.handleSubmit}
              >
                <Text style={styles.btnText}>Login</Text>
              </Button>
            </View>
          </Content>
        </View>
      </Container>
    );
  }
}

Login.navigationOptions = {
  header: null,
};

export default Login;
