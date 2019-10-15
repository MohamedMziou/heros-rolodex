import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';

export const CardList = props => (
    //console.log(props);
    <div className='card-list'>
    {props.heros.map(hero =>(
        <Card key={hero.id} hero={hero}/>      
    ))}
    </div>
);