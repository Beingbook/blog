import React from 'react';

const Example2 = () => {
  const [state, setState] = React.useState(100);
  const handler = () => {
    for (let i = 0; i < 5; i += 1) {
      setState((prevState) => prevState + 10);
    }
  };
  return (
    <div>
      올바른 상태: {state} <button onClick={handler}>+ 10 * 5</button>
    </div>
  );
};

export default Example2;
