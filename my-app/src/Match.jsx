import React from 'react';
import TimeStatus from "./TimeStatus";
import FlagWithName from "./FlagWithName";
import TextField from "./TextField";

const Match = props => (
    <div className="match">
        <TextField text={props.match.matchName}/>
        <FlagWithName countryFlag={props.match.flags[0]} name={props.match.text[0]}/>
        <FlagWithName countryFlag={props.match.flags[1]} name={props.match.text[1]}/>
        <TimeStatus status='15 min to toss' />
    </div>
)

export default Match;