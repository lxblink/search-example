// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './Results.module.scss';
import Item from './components/Item';


/**
 * Results
 *
 * @return {Node}
 */
const Results = ({ className, selectItem, itemsList, loading }) => {
  const handleSetSelectedItem = (item) => () => selectItem(item);

  return (
    <div
      className={classNames(
        styles.Results,
        className,
        `lxblink${Results.displayName}`,
      )}
    >
      {
        loading
          ? <i className={styles.Loading}>Loading...</i>
          : (
            itemsList.map((i) => <Item item={i} key={i.id} onClick={handleSetSelectedItem(i)} />)
          )
      }
    </div>
  );
};

Results.displayName = 'Results';

export default Results;
