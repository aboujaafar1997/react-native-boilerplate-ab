/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Typography } from '../../styles';

const Home = () => (
  <View style={styles.wrapper}>
    <Text style={styles.text}>Home</Text>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    height: '100%',
  },
  text: {
    fontSize: Typography.FONT_SIZE_24,
  },
});

Home.prototype = {
  route: PropTypes.shape({
    params: PropTypes.any,
  }).isRequired,
};

export default Home;
