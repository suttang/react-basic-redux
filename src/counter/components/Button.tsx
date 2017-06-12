import * as React from 'react';
import * as styles from './Button.scss';

interface Props extends React.Props<{}> {
  label: string;
  onClick: () => void;
}

const Button: React.SFC<Props> = (props: Props) => (
  <button className={styles.button} onClick={props.onClick}>{props.label}</button>
);

export default Button;
