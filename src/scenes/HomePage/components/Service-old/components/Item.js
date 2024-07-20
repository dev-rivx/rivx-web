import React from 'react';

import styles from './Item.module.scss';

const Item = ({ title, description }) => {
    return (<div className={styles.container}>
        <h3 className={styles.title} >{title}</h3>
        <p className={styles.description} >{description}</p>
    </div>)
};

export default Item;