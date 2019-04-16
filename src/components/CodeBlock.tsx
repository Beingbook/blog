import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import DarkTheme from 'prism-react-renderer/themes/vsDark';

interface Props {
  children: string;
  className?: string;
  live?: boolean;
}

const CodeBlock: React.FC<Props> = ({ children, className = '' }) => {
  const language = className.replace(/language-/, '');

  return (
    <Highlight
      {...defaultProps}
      theme={DarkTheme}
      code={children}
      language={language as any}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={[className, 'gatsby-highlight'].join(' ')}
          style={{ ...style, padding: '20px' }}
        >
          {tokens.map(
            (line, i) =>
              tokens[i + 1] && (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ),
          )}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
