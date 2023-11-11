import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { Typography } from '../../styles';

const Login = () => {
  const { t, i18n } = useTranslation();
  const tr = (key) => t(`loginScreen.${key}`);
  const isRtl = i18n?.dir?.() === 'rtl';

  return (
    <SafeAreaView style={styles.wrapper}>
      <Text style={styles.text}>{tr('hello')} to Login</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
  },
  text: {
    fontSize: Typography.FONT_SIZE_24,
  },
});

Login.prototype = {
  route: PropTypes.shape({
    // eslint-disable-next-line react/forbid-prop-types
    params: PropTypes.any,
  }).isRequired,
};

export default Login;
