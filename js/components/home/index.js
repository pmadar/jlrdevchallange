import React, { Component, PropTypes } from 'react';
import { AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';
import styles from './styles';

class Home extends Component {
  static navigationOptions = {
    header: null,
  };
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };
  constructor() {
    super();
    this.state = {
      list: [
        { name: 'Car sharing', toPage: 'CarSharing' },
        { name: 'Dalsi sposob 1', toPage: 'DetailSharing' },
        { name: 'Dalsi sposob 2', toPage: 'DetailSharing' },
      ],
      isCarShareSelected: false,
    };
  }
  componentDidMount() {
    AsyncStorage.getItem('isCreated').then((isCreated) => {
      if (isCreated === 'true') {
        this.setState({ isCarShareSelected: true });
      }
    });
    AsyncStorage.getItem('isJoined').then((isJoined) => {
      if (isJoined === 'true') {
        this.setState({ isCarShareSelected: true });
      }
    });
  }
  render() {
    const { isCarShareSelected } = this.state;
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => {
                AsyncStorage.removeItem('employeeId').then(() => {
                  NavigationActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({ routeName: 'Home' })],
                  });
                });
              }}
            >
              <Icon active name="power" />
            </Button>
          </Left>
          <Body>
            <Title>JLR</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Grid style={styles.mt}>
            {this.state.list.map(({ name, toPage }) => (
              <Row key={name}>
                <Button
                  disabled={isCarShareSelected && toPage !== 'CarSharing'}
                  bordered={!(isCarShareSelected && toPage === 'CarSharing')}
                  style={styles.row}
                  onPress={() => this.props.navigation.navigate(toPage, { name })}
                >
                  <Text style={styles.text}>{name}</Text>
                </Button>
              </Row>
            ))}
          </Grid>
        </Content>
      </Container>
    );
  }
}

export default Home;
