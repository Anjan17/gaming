import React from 'react';
import { string } from 'prop-types';

const TextField = ({ text }) => <div className="textfield f4">{text}</div>

TextField.propTypes = {
    text: string.isRequired
};

export default TextField;