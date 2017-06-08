import * as React from 'react';

interface Props {
  count: number;
}

const Count: React.StatelessComponent<Props> = (props: Props) => (
  <p>
    Count: <span>{props.count}</span>
  </p>
);

export default Count;
