/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

const About = () => {
  return (
    <SafeAreaView>
      <Text>About Page</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view1: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  view2: {
    //backgroundColor: 'blue',
  },
});

About.prototype = {
  route: PropTypes.shape({
    params: PropTypes.any,
  }).isRequired,
};

export default About;
