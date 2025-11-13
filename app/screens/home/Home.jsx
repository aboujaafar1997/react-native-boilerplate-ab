/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
  ScrollView,
  Image,
  Button,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/authentification/actions';

const Home = ({ route, navigation }) => {
  const data = route.params;
  const dispatch = useDispatch();
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={'green'} />
      <Text>Home</Text>
      <TouchableOpacity onPress={() => dispatch(logout())}>
        <Text>Logout</Text>
      </TouchableOpacity>
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

Home.prototype = {
  route: PropTypes.shape({
    params: PropTypes.any,
  }).isRequired,
};

export default Home;
