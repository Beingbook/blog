const React = require("react");

const PostListLayout = require("./src/components/PostListLayout").default;

exports.wrapPageElement = ({ element, props }) => {
  if (["/", "/tech", "/life"].includes(props.location.pathname)) {
    return <PostListLayout>{element}</PostListLayout>;
  }
  return <>{element}</>;
};
