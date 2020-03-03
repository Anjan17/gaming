import React from 'react';
import CardHeader from "./CardHeader";

const Card = props => (
    <div className='card bg-white pl4 pt2'>
        <CardHeader title='some match'/>
        {props.children}
    </div>
);

export default Card;