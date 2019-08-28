// @flow
import React from 'react';
import classNames from 'classnames';
import Input from '../../components/Input';
import styles from './Search.module.scss';


/**
 * Search
 *
 * @return {Node}
 */
const Search = ({ className, onInput, inputText }) => {

  const handleChange = ({ target: { value } }) => onInput(value);

  return (
    <div
      className={classNames(
        styles.Search,
        className,
        `lxblink${Search.displayName}`,
      )}
    >
      <Input
        className={styles.Input}
        onChange={handleChange}
        value={inputText}
        autoFocus
      />
    </div>
  );
};

Search.displayName = 'Search';

export default Search;
