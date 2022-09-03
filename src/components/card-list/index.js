import React from 'react'
import Card from '../card';
import css from './style.module.css';

const CardList = (props) => {
    return (
        <div className={css.CardList}>
             {props.data.map(element => <Card key={element.id} course={element} /> )}
        </div>
    );
}

export default CardList;
