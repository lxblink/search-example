// @flow
import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import styles from './Input.module.scss';

type TProps = {
  /**
   * Classname to apply
   */
  className?: string,
  type?: string,
  autoFocus?: boolean,
}

const defaultProps = {
  autoFocus: false,
  className: undefined,
  type: 'text',
};


/**
 * Input
 */
const Input = (props: TProps) => {
  const { className, autoFocus, ...rest } = props;
  const elRef = useRef();

  useEffect(() => {
    if (autoFocus) {
      elRef.current.focus();
    }
  }, [autoFocus]);

  const Tag = rest.type === 'textarea' ? 'textarea' : 'input';

  return (
    <Tag
      ref={elRef}
      className={classNames(
        styles.Input,
        className,
        `IBC_${Input.displayName}`,
      )}
      {...rest}
    />
  );
};

Input.displayName = 'Input';
Input.defaultProps = defaultProps;


export default Input;
