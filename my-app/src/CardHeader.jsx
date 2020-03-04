import React from 'react';
import { node } from 'prop-types';

const CardHeader = props => <div className="header">{props.title}</div>

CardHeader.propTypes = {
    title: node.isRequired
};

export default CardHeader;