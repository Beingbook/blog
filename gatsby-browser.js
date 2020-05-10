const React = require("react");

const PostListLayout = require("./src/components/PostListLayout").default;

export const wrapPageElement = ({ element, props }) => {
  if (["/", "/tech", "/life"].includes(props.location.pathname)) {
    return <PostListLayout>{element}</PostListLayout>;
  }
  return <>{element}</>;
};

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(`새 글이 올라온 것 같습니다. 새로고침할까요?`);
  if (answer) {
    window.location.reload();
  }
};
