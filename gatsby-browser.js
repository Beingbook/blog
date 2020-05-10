require("prismjs/themes/prism-okaidia.css");
require("prismjs/plugins/line-numbers/prism-line-numbers.css");

const React = require("react");

const PostListLayout = require("./src/components/PostListLayout").default;

exports.wrapPageElement = ({ element, props }) => {
  if (["/", "/tech", "/life"].includes(props.location.pathname)) {
    return <PostListLayout>{element}</PostListLayout>;
  }
  return <>{element}</>;
};

exports.onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(`새 글이 올라온 것 같습니다. 새로고침할까요?`);
  if (answer) {
    window.location.reload();
  }
};
