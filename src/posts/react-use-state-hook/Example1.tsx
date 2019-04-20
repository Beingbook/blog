import React from 'react';

const Example1 = () => {
  const [state, setState] = React.useState(100);
  const handler = () => {
    for (let i = 0; i < 5; i += 1) {
      setState(state + 10);
    }
  };
  return (
    <div>
      멍청한 상태: {state} <button onClick={handler}>+ 10 * 5</button>
    </div>
  );
};

export default Example1;
