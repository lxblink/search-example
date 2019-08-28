// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './Item.module.scss';

/**
 * Item
 *
 * @return {Node}
 */
const Item = ({ className, item, onClick }) => {
  return (
    <div
      className={classNames(
        styles.Item,
        className,
        `lxblink${Item.displayName}`,
      )}
      onClick={onClick}
    >
      <div className={styles.Header}>
        <div className={styles.Name}>{item.name}</div>
        <div className={styles.Price}>{item.price}</div>
      </div>
      <div className={styles.Descripion}>{item.description}</div>
    </div>
  );
};

Item.displayName = 'Item';

export default Item;
