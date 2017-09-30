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
  ListItem,
  Radio,
} from 'native-base';
import styles from './styles';

const seats = [1, 2, 3, 4, 5, 6];

class GiveRide extends Component {
  static navigationOptions = {
    header: null,
  };
  static propTypes = {
    navigation: PropTypes.object.isRequired // eslint-disable-line
  };
  constructor() {
    super();
    this.state = { selectedSeat: seats[0], isCreated: false };
    this.handleGivePress = this.handleGivePress.bind(this);
  }
  handleGivePress() {
    this.setState({ isCreated: true });
    AsyncStorage.setItem('isCreated', 'true');
  }
  render() {
    const { name } = this.props.navigation.state.params;
    const { isCreated } = this.state;
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
        {isCreated
        ? <Content>
          <Icon name="ios-checkmark-circle-outline" style={styles.successIcon} />
          <View style={styles.successContent}>
            <Text style={styles.successText}>
              Úspešne ste vytvorili jazdu, prosím počkajte na potvrdenie od spolujazdcov.
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
            Počet voľných miest
          </Text>
          {seats.map(seat =>
            <ListItem key={seat} onPress={() => this.setState({ selectedSeat: seat })}>
              <Text style={styles.text}>{seat}</Text>
              <Right>
                <Radio selected={this.state.selectedSeat === seat} />
              </Right>
            </ListItem>)}
        </Content>}
        {!isCreated &&
          <Footer>
            <FooterTab>
              <Button
                style={styles.button}
                full
                primary
                onPress={this.handleGivePress}
              >
                <Text style={styles.joinText}>
                  Vytvoriť jazdu
                </Text>
              </Button>
            </FooterTab>
          </Footer>}
      </Container>
    );
  }
}

export default GiveRide;
