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
  Footer,
  FooterTab,
} from 'native-base';
import styles from './styles';

class WantRide extends Component {
  static navigationOptions = {
    header: null,
  };
  static propTypes = {
    navigation: PropTypes.object.isRequired // eslint-disable-line
  };
  constructor() {
    super();
    this.state = { isJoined: false };
    this.handleJoinPress = this.handleJoinPress.bind(this);
  }
  handleJoinPress() {
    this.setState({ isJoined: true });
    AsyncStorage.setItem('isJoined', 'true');
  }
  render() {
    const { name } = this.props.navigation.state.params;
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.goBack()}
            >
              <Icon name="ios-arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>{name}</Title>
          </Body>
          <Right />
        </Header>
        {this.state.isJoined
          ? <Content>
            <Icon name="ios-checkmark-circle-outline" style={styles.successIcon} />
            <View style={styles.successContent}>
              <Text style={styles.successText}>
                Úspešne ste sa pripojili k jazde, prosím počkajte na potvrdenie od šoféra.
              </Text>
              <Button
                style={styles.successButton}
                block
                transparent
                onPress={() => this.props.navigation.navigate('Home')}
              >
                <Text>Domov</Text>
              </Button>
            </View>
          </Content>
          : <Content>
            <Text style={styles.heading}>
              Chcete vyuziť Car sharing ako spôsob dopravy do zavodu nasledujúci deň?
            </Text>
          </Content>}
        {!this.state.isJoined &&
          <Footer>
            <FooterTab>
              <Button
                style={styles.button}
                full
                primary
                onPress={this.handleJoinPress}
              >
                <Text style={styles.joinText}>
                Pripojiť sa k jazde
              </Text>
              </Button>
            </FooterTab>
          </Footer>}
      </Container>
    );
  }
}

export default WantRide;
