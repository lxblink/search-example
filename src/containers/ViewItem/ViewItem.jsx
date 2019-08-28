// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './ViewItem.module.scss';

type TProps = {
  /**
   * Classname to apply
   */
  className?: string,
}

const defaultProps = {
  className: undefined,
};


/**
 * ViewItem
 *
 * @return {Node}
 */
const ViewItem = ({ className, item, onClose }: TProps) => {
  return (
    <div
      className={classNames(
        styles.ViewItem,
        className,
        `lxblink${ViewItem.displayName}`,
      )}
      onClick={onClose}
    >
      <div className={styles.Content}>
        <div className={styles.Header}>
          <div className={styles.Name}>{item.name}</div>
          <div className={styles.Price}>{item.price}</div>
        </div>
        <div className={styles.Descripion}>{item.description}</div>
      </div>
    </div>
  );
};

ViewItem.displayName = 'ViewItem';
ViewItem.defaultProps = defaultProps;


export default ViewItem;
