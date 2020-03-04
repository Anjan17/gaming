import React from 'react';
import { string } from 'prop-types';
import CardHeader from "./CardHeader";
import Match from "./Match";

const Card = ({ seriesName }) => (
    <div className='card bg-white pl4 pt2 pb3 mb3'>
        <CardHeader title={seriesName} />
        <Match match={{ matchName: 'Qualifier 10', flags: ['Green', 'Red'], text: ['Libya', 'Romania'] }} />
        <Match match={{ matchName: 'Qualifier 10', flags: ['Green', 'Red'], text: ['Libya', 'Romania'] }} />
    </div>
);

Card.propTypes = {
    seriesName: string.isRequired
}

export default Card;