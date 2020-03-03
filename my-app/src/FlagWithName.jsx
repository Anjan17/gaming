import React from 'react';
import Flag from "./Flag";
import TextField from "./TextField";

const FlagWithName = props =>
    <div className="pa2" style={{ display: 'flex' }}>
        <Flag countryFlag={props.countryFlag} />
        <TextField text={props.name} />
    </div>

export default FlagWithName;