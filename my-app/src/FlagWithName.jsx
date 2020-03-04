import React from 'react';
import Flag from "./Flag";
import TextField from "./TextField";

const FlagWithName = ({ countryFlag, name }) =>
    <div className="pa2" style={{ display: 'flex' }}>
        <Flag countryFlag={countryFlag} />
        <TextField text={name} />
    </div>

export default FlagWithName;