import PropTypes from 'prop-types';
import React, { useCallback, useEffect } from 'react';
import { Animated, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useDispatch } from 'react-redux';
import { toggleToaster } from '../../store/toaster/actions';
import { Colors, Spacing } from '../../styles';
import { fontSize } from '../../styles/mixins';
import { FONT_SIZE_S } from '../../styles/typography';
import {BTN_DANGER, BTN_VALIDATE} from "../../styles/colors";

const Toaster = ({ text = 'Quelque chose mal passé', type = 'danger', visible = true }) => {
  const dispatch = useDispatch();
  let backgroundColor = Colors.BTN_VALIDATE;
  switch (type) {
    case 'danger':
      backgroundColor = Colors.BTN_DANGER;
      break;

    default:
      break;
  }

  const onClose = useCallback(() => {
    dispatch(
      toggleToaster({
        text: '',
        type: 'danger',
        visible: false,
      })
    );
  }, [dispatch]);

  useEffect(() => {
    const timeout = Animated.delay(3000);
    if (visible) {
      timeout.start(onClose);
    } else {
      timeout.stop();
    }
  }, [visible, text, onClose]);

  return (
    <Modal transparent visible={visible} animationType="slide">
      <TouchableOpacity activeOpacity={1} onPress={onClose} style={styles.container}>
        <View style={[styles.alert, { backgroundColor }]}>
          <Text style={[styles.alertText]}>{text}</Text>
          <AntDesign
            name="close"
            size={fontSize(26, 20)}
            style={styles.icon}
            color={Colors.FONT_WHITE}
          />
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

Toaster.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  visible: PropTypes.bool,
};
Toaster.defaultProps = {
  text: 'Quelque chose mal passé',
  type: 'danger',
  visible: true,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Spacing.SCALE_24,
    paddingBottom: Spacing.SCALE_50,
    justifyContent: 'flex-end',
  },
  alert: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: Colors.BTN_VALIDATE,
    borderRadius: 10,
    shadowColor: 'rgba(0, 64, 128, 0.2)',
    shadowOffset: {
      width: 0,
      height: Spacing.SCALE_10,
    },
    shadowRadius: 40,
    shadowOpacity: 1,
  },
  alertText: {
    fontSize: FONT_SIZE_S,
    color: Colors.FONT_WHITE,
    textAlign: 'center',
  },
  icon: {
    opacity: 0.4,
    width: Spacing.SCALE_14,
    height: Spacing.SCALE_14,
  },
});

export default Toaster;
