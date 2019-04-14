import * as React from 'react';

type ChangeEvent = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>;

const useInputState = <T>(
  initialState: T,
): [
  T,
  (event: ChangeEvent) => void,
  React.Dispatch<React.SetStateAction<T>>
] => {
  const [state, setState] = React.useState(initialState);
  const inputHandler = React.useCallback(
    (event: any) =>
      setState(
        event.target.type === 'checkbox'
          ? event.target.checked
          : event.target.value,
      ),
    [setState],
  );
  return [state, inputHandler, setState];
};

export default useInputState;
