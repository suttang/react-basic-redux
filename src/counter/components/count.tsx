import * as React from 'react';
import * as styles from './count.scss';

interface Props {
  count: number;
}

const Count: React.StatelessComponent<Props> = (props: Props) => (
  <p className={styles.counter}>
    Count: <span className={styles.count}>{props.count}</span>
  </p>
);

export default Count;
