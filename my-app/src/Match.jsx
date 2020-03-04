import React from 'react';
import { string, array } from 'prop-types';
import TimeStatus from "./TimeStatus";
import FlagWithName from "./FlagWithName";
import TextField from "./TextField";

const Match = ({ match }) => (
    <div className="match">
        <TextField text={match.matchName}/>
        <FlagWithName countryFlag={match.flags[0]} name={match.text[0]}/>
        <FlagWithName countryFlag={match.flags[1]} name={match.text[1]}/>
        <TimeStatus status='15 min to toss' />
    </div>
)

Match.propTypes = {
  match: {
      matchName: string,
      countryFlag: array,
      name: array
  }.isRequired  
};

export default Match;