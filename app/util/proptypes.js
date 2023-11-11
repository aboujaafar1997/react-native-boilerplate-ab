import PropTypes from 'prop-types';

export const navigationType = PropTypes.shape({
  navigate: PropTypes.func.isRequired,
  state: PropTypes.shape({
    routeName: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    params: PropTypes.object.isRequired,
  }).isRequired,
  setParams: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
}).isRequired;
