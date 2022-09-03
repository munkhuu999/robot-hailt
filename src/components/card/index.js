import React from 'react'
import css from './style.module.css'
const Card =(props)=> {
    return (
        <div className={css.Card} >
            <img src={`https://robohash.org/${props.course.id}?set=set2&size=180x180`} alt=''/>
            <p>{props.course.name}</p>
            <p>{props.course.email}</p>
            <p>{props.course.phone}</p>
            {/* <p>{props.course.address.city}</p> */}
        </div>
    )
}

export default Card;