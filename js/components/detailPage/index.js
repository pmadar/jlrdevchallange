import React, { Component, PropTypes } from 'react';
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
} from 'native-base';
import styles from './styles';

class DetailPage extends Component {
  static navigationOptions = {
    header: null,
  };
  static propTypes = {
    navigation: PropTypes.object.isRequired // eslint-disable-line
  };
  render() {
    const { item } = this.props.navigation.state.params;
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="ios-arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>{item}</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Text>
            {item}
          </Text>
        </Content>
      </Container>
    );
  }
}

export default DetailPage;
