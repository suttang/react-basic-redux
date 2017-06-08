import * as React from 'react';
import * as styles from './button.scss';
console.log(styles);
interface Props {
  label: string;
  onClick: () => void;
}

const Button: React.StatelessComponent<Props> = (props: Props) => (
  <button className={styles.button} onClick={ props.onClick }>{ props.label }</button>
);

export default Button;
