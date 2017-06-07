import * as React from 'react';
import * as styles from './style.scss';

interface Props {
  count: number;
}

export default (props: Props) => (
  <p className={styles.counter}>
    Count: <span className={styles.count}>{props.count}</span>
  </p>
);
