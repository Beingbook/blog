import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import DarkTheme from 'prism-react-renderer/themes/vsDark';
import numericRange from 'parse-numeric-range';

interface Props {
  children: string;
  className?: string;
  live?: boolean;
  highlight?: any;
}

const CodeBlock: React.FC<Props> = ({
  children,
  className = '',
  highlight,
}) => {
  const language = className.replace(/language-/, '');
  const hightlightLines: { [key: number]: true } = highlight
    ? numericRange.parse(highlight.slice(1, -1)).reduce(
        (dict: any, line: any) => {
          dict[line] = true;
          return dict;
        },
        {} as any,
      )
    : {};

  return (
    <Highlight
      {...defaultProps}
      theme={DarkTheme}
      code={children}
      language={language as any}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: 16 }}>
          <code
            style={{
              fontSize: 'inherit',
              float: 'left',
            }}
          >
            {tokens.map(
              (line, i) =>
                tokens[i + 1] && (
                  <div
                    key={i}
                    {...getLineProps({
                      line,
                      key: i,
                      className: hightlightLines[i]
                        ? 'highlight-code-line'
                        : '',
                    })}
                  >
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ),
            )}
          </code>
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
