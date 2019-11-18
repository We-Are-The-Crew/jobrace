import React from 'react';
import logo from '../assets/logo.svg';
import jobtracker from '../assets/jobtracker.svg';

const icons = (name, props) => ({
  logo: () => <img src={logo} alt="svg icon" {...props} />,
  jobtracker: () => <img src={jobtracker} alt="Tracking jobs" {...props} />,
}[name]());

const Icon = ({ is, ...props }) => icons(is, props);

export default Icon;