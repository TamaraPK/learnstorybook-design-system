// src/Avatar.stories.js
import React from "react";
import { Avatar } from "./Avatar";
export default {
  title: "Design System/Avatar",
  component: Avatar,
  parameters: {
    componentSubtitle: 'Displays an image that represents a user or organization'
  }
};
export var Standard = function Standard(args) {
  return /*#__PURE__*/React.createElement(Avatar, args);
};
Standard.args = {
  size: "large",
  username: "Tom Coleman",
  src: "https://avatars2.githubusercontent.com/u/132554"
};
export var Sizes = function Sizes(args) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Avatar, Object.assign({}, args, {
    size: "large"
  })), /*#__PURE__*/React.createElement(Avatar, Object.assign({}, args, {
    size: "medium"
  })), /*#__PURE__*/React.createElement(Avatar, Object.assign({}, args, {
    size: "small"
  })), /*#__PURE__*/React.createElement(Avatar, Object.assign({}, args, {
    size: "tiny"
  })));
};
Sizes.args = {
  username: "Tom Coleman",
  src: "https://avatars2.githubusercontent.com/u/132554"
};
Sizes.parameters = {
  docs: {
    // The story now contains a description
    storyDescription: '4 sizes are supported.'
  }
};
export var Initials = function Initials(args) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Avatar, {
    username: "Tom Coleman"
  }), /*#__PURE__*/React.createElement(Avatar, {
    username: "Dominic Nguyen"
  }), /*#__PURE__*/React.createElement(Avatar, {
    username: "Kyle Suss"
  }), /*#__PURE__*/React.createElement(Avatar, {
    username: "Michael Shilman"
  }));
};
export var Loading = function Loading(args) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Avatar, Object.assign({}, args, {
    size: "large"
  })), /*#__PURE__*/React.createElement(Avatar, Object.assign({}, args, {
    size: "medium"
  })), /*#__PURE__*/React.createElement(Avatar, Object.assign({}, args, {
    size: "small"
  })), /*#__PURE__*/React.createElement(Avatar, Object.assign({}, args, {
    size: "tiny"
  })));
};
Loading.args = {
  loading: true
};
export var Large = function Large(args) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Avatar, {
    loading: true,
    size: "large"
  }), /*#__PURE__*/React.createElement(Avatar, {
    size: "large",
    username: "Tom Coleman"
  }), /*#__PURE__*/React.createElement(Avatar, {
    size: "large",
    username: "Tom Coleman",
    src: "https://avatars2.githubusercontent.com/u/132554"
  }));
}; // New story using controls

var Template = function Template(args) {
  return /*#__PURE__*/React.createElement(Avatar, args);
};

export var Controls = Template.bind({});
Controls.args = {
  loading: false,
  size: 'tiny',
  username: 'Dominic Nguyen',
  src: 'https://avatars2.githubusercontent.com/u/263385'
};