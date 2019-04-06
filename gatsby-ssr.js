import React from 'react';
import { renderToString } from 'react-dom/server';
import MuiProvider, { getPageContext } from './src/container/MuiProvider';

const withRootElement = ({ element }) => {
  return <MuiProvider>{element}</MuiProvider>;
};

const replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  // Get the context of the page to collected side effects.
  const muiPageContext = getPageContext();

  const bodyHTML = renderToString(
    <JssProvider registry={muiPageContext.sheetsRegistry}>
      {bodyComponent}
    </JssProvider>,
  );

  replaceBodyHTMLString(bodyHTML);
  setHeadComponents([
    <style
      type="text/css"
      id="jss-server-side"
      key="jss-server-side"
      dangerouslySetInnerHTML={{
        __html: muiPageContext.sheetsRegistry.toString(),
      }}
    />,
  ]);
};

export { withRootElement, replaceRenderer };
