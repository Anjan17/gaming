import React from 'react';
import { string } from 'prop-types';

const TimeStatus = ({ status }) => (
    <div className="status-bar">{status}</div>
)

TimeStatus.propTypes = {
    status: string.isRequired
};
export default TimeStatus;