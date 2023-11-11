import { Dimensions, PixelRatio } from 'react-native';

export const WINDOW_WIDTH = Dimensions.get('window').width;
export const WINDOW_HEIGHT = Dimensions.get('window').height;

export const TABLET_SIZE = 768;
export const TABLET_HEIGHT = 900;

// export const TABLET_SIZE = 600;
if (TABLET_SIZE) {
  console.log('WINDOW_WIDTH', WINDOW_WIDTH);
  console.log('WINDOW_HEIGHT', WINDOW_HEIGHT);
}

const guidelineBaseWidth = 375;

export const scaleSize = (size) => (WINDOW_WIDTH / guidelineBaseWidth) * size;

export const scaleFont = (size) => size * PixelRatio.getFontScale();

export const fontSize = (TabletSize, phoneSize) =>
  WINDOW_WIDTH >= TABLET_SIZE ? scaleFont(TabletSize) : scaleFont(phoneSize);

export const spacing = (TabletSize, phoneSize) =>
  WINDOW_WIDTH >= TABLET_SIZE ? scaleSize(TabletSize) : scaleSize(phoneSize);

function dimensions(property, top, right = top, bottom = top, left = right) {
  const styles = {};

  styles[`${property}Top`] = top;
  styles[`${property}Right`] = right;
  styles[`${property}Bottom`] = bottom;
  styles[`${property}Left`] = left;

  return styles;
}

export function margin(top, right, bottom, left) {
  return dimensions('margin', top, right, bottom, left);
}

export function padding(top, right, bottom, left) {
  return dimensions('padding', top, right, bottom, left);
}

export function boxShadow(color, offset = { height: 2, width: 2 }, radius = 8, opacity = 0.2) {
  return {
    shadowColor: color,
    shadowOffset: offset,
    shadowOpacity: opacity,
    shadowRadius: radius,
    elevation: radius,
  };
}
