import React from 'react';
import { string } from 'prop-types';

const TextField = props => <div className="textfield f4">{props.text}</div>

TextField.propTypes = {
    text: string.isRequired
};

export default TextField;