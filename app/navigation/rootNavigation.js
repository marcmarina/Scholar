import React from 'react';

export const navigationRef = React.createRef();

export const navigate = (name, props) =>
  navigationRef.current?.navigate(name, props);

export default {
  navigate,
};
