import React from "react";
import PropTypes from 'prop-types';

import style from './Notification.module.css';

export const Notification = ({ message }) => {
    return (
      <div>
        <h1 className={style.message}>{message}</h1>
      </div>
    );
  };

  Notification.propTypes = {
    message: PropTypes.string.isRequired,
  };
