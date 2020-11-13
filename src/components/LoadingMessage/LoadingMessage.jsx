import React from 'react';
import { bool, string } from 'prop-types';

const LoadingMessage = ({ message, visible = true }) => {
  if (!visible) { return null }

  return (
    <div>{message}</div>
  );
};

LoadingMessage.propTypes = {
  message: string.isRequired,
  visible: bool,
};

export default LoadingMessage;
