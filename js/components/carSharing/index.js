import React, { Component, PropTypes } from 'react';
import { View, AsyncStorage } from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Right,
  Body,
  H2,
  H3,
} from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';
import Person from './Person';
import Map from './Map';
import styles from './styles';

const options = [
  { name: 'Chcem sa odviesť', toPage: 'WantRide' },
  { name: 'Môžem odviesť', toPage: 'GiveRide' },
];

const persons = [
  { phone: '0918 111 440', name: 'Igor Minar', position: { latitude: 48.366740, longitude: 18.016979 } },
  { phone: '0918 626 111', name: 'Miro Zaba', position: { latitude: 48.385440, longitude: 18.062984 } },
  { phone: '0918 126 140', name: 'Jaroslav Zminak', position: { latitude: 48.378713, longitude: 18.122379 } },
  { phone: '0914 626 111', name: 'Pavol Zaba', position: { latitude: 48.441498, longitude: 18.025219 } },
];

class CarSharing extends Component {
  static navigationOptions = {
    header: null,
  };
  static propTypes = {
    navigation: PropTypes.object.isRequired // eslint-disable-line
  };
  constructor() {
    super();
    this.state = { isJoined: false, isCreated: false };
  }
  componentDidMount() {
    AsyncStorage.getItem('isJoined').then((isJoined) => {
      if (isJoined === 'true') {
        this.setState({ isJoined: true });
      }
    });
    AsyncStorage.getItem('isCreated').then((isJoined) => {
      if (isJoined === 'true') {
        this.setState({ isCreated: true });
      }
    });
  }
  render() {
    const { isJoined, isCreated } = this.state;
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate('Home')}
            >
              <Icon name="ios-arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Car sharing</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          {isJoined &&
          <View>
            <Icon name="ios-car" style={styles.successIcon} />
            <View style={styles.successContent}>
              <H2 style={styles.h2}>
                Vaša najbližšia jazda: 1.10.2017, 07:30 (spolujazdca)
              </H2>
              <H3 style={styles.h3}>
                Vodič:
              </H3>
              <Person phone="0918 636 430" name="Jozef Mrkvicka" />
              <H3 style={styles.h3}>
                Automobil:
              </H3>
              <Text>Jaguar F-Type (biela)</Text>
              <H3 style={styles.h3}>
                SPZ:
              </H3>
              <Text>KE123CX</Text>
              <Button
                style={styles.successButton}
                block
                danger
                onPress={() => {
                  AsyncStorage.removeItem('isJoined').then(() => {
                    this.props.navigation.navigate('CarSharing');
                  });
                }}
              >
                <Text>Zrušit jazdu</Text>
              </Button>
            </View>
          </View>}
          {isCreated &&
          <View>
            <Icon name="ios-car" style={styles.successIcon} />
            <View style={styles.successContent}>
              <H2 style={styles.h2}>
                Vaša najbližšia jazda: 1.10.2017, 07:30 (vodič)
              </H2>
              <H3 style={styles.h3}>
                Spolujazdci:
              </H3>
              {persons.map(({ phone, name }) =>
                <Person key={name} phone={phone} name={name} />)}
              <Button
                style={styles.successButton}
                block
                danger
                onPress={() => {
                  AsyncStorage.removeItem('isCreated').then(() => {
                    this.props.navigation.navigate('CarSharing');
                  });
                }}
              >
                <Text>Zrušit jazdu</Text>
              </Button>
            </View>
          </View>}
          {isCreated && <Map persons={persons} />}
          {(!isCreated && !isJoined) &&
            <Grid style={styles.mt}>
              {options.map(({ name, toPage }) => (
                <Row key={name}>
                  <Button
                    bordered
                    style={styles.row}
                    onPress={() => this.props.navigation.navigate(toPage, { name })}
                  >
                    <Text style={styles.text}>{name}</Text>
                  </Button>
                </Row>
            ))}
            </Grid>}
        </Content>
      </Container>
    );
  }
}

export default CarSharing;
