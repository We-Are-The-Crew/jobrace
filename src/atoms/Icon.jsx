import React from 'react';
import logo from '../assets/logo.svg';

const icons = (name, props) => ({
  logo: () => <img src={logo} alt="svg icon" {...props} />,
}[name]());

const Icon = ({ is, ...props }) => icons(is, props);

export default Icon;