import { Dimensions } from 'react-native';

const window = Dimensions.get('window');

export default {
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FBFAFA',
  },
  bg: {
    flex: 1,
    alignSelf: 'center',
    width: window.width * 0.9,
    marginTop: window.height / 3,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 30,
  },
  input: {
    marginBottom: 20,
  },
  btn: {
    marginTop: 40,
  },
};
