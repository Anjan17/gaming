import React from 'react';
import { node } from 'prop-types';

const CardHeader = ({ title }) => <div className="header">{title}</div>

CardHeader.propTypes = {
    title: node.isRequired
};

export default CardHeader;