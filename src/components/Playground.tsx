import * as React from 'react';
// @ts-ignore
import MDXRuntime from '@mdx-js/runtime';

import { mdComponents } from './Typography';

interface Props {
  initialCode: string;
}
const Playground: React.FC<Props> = ({ initialCode }) => {
  const [code, setCode] = React.useState(initialCode);
  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) =>
      setCode(event.target!.value),
    [setCode],
  );
  return (
    <>
      <textarea onChange={onChange} value={code} />
      <MDXRuntime components={mdComponents}>{code}</MDXRuntime>
    </>
  );
};

export default Playground;
