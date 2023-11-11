import { createRef } from 'react';

export const navigationRef = createRef();

const navigate = (name, params) => {
  if (navigationRef.current) {
    return navigationRef.current.navigate(name, params);
  }
  return null;
};

const goBack = () => {
  if (navigationRef.current) {
    return navigationRef.current.goBack();
  }
  return null;
};

const reset = (name, params) => {
  if (navigationRef.current) {
    return navigationRef.current.reset({
      index: 0,
      routes: [
        {
          name,
          params,
        },
      ],
    });
  }
  return null;
};

export default {
  navigate,
  reset,
  goBack
};
