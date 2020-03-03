import React from 'react';
import CardHeader from "./CardHeader";
import Match from "./Match";

const Card = props => (
    <div className='card bg-white pl4 pt2 pb3 mb3'>
        <CardHeader title={props.seriesName} />
        <Match match={{ matchName: 'Qualifier 10', flags: ['Green', 'Red'], text: ['Libya', 'Romania'] }} />
        <Match match={{ matchName: 'Qualifier 10', flags: ['Green', 'Red'], text: ['Libya', 'Romania'] }} />
    </div>
);

export default Card;