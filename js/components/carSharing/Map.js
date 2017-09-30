/* eslint react/no-unused-prop-types: off */
import React, { PropTypes } from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';
import styles from './styles';

const Map = ({ persons }) =>
  <View style={styles.container}>
    <MapView
      initialRegion={{
        latitude: 48.332058,
        longitude: 18.064529,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      {persons.map(person =>
        <MapView.Marker
          key={person.name}
          coordinate={person.position}
          title={person.name}
          description={person.phone}
        />)}
    </MapView>
  </View>;

Map.propTypes = {
  persons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      position: PropTypes.shape({
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
};

export default Map;
