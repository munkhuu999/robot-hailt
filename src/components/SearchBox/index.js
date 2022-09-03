import React from 'react';
import styles from './style.module.css';

 const SearchBox = (props) => {
    return (
         <div>
            <input 
                className={styles.SearchBox} 
                type='search' 
                placeholder='хайх утгаа оруулна уу!'
                onChange={props.onSearch}
                ></input>
        </div>
    )
}

export default  SearchBox;