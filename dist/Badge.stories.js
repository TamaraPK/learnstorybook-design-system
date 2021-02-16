import React from 'react';
import { Badge } from './Badge';
import { Icon } from './Icon';
export default {
  title: 'Design System/Badge',
  component: Badge
};
export var AllBadges = function AllBadges(args) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    status: "positive"
  }, "Positive"), /*#__PURE__*/React.createElement(Badge, {
    status: "negative"
  }, "Negative"), /*#__PURE__*/React.createElement(Badge, {
    status: "neutral"
  }, "Neutral"), /*#__PURE__*/React.createElement(Badge, {
    status: "error"
  }, "Error"), /*#__PURE__*/React.createElement(Badge, {
    status: "warning"
  }, "Warning"), /*#__PURE__*/React.createElement(Badge, {
    status: "positive"
  }, /*#__PURE__*/React.createElement(Icon, args), "with icon"));
};
AllBadges.args = {
  icon: 'facehappy',
  inline: true
};
AllBadges.storyName = "all badges";
export var Positive = function Positive() {
  return /*#__PURE__*/React.createElement(Badge, {
    status: "positive"
  }, "Positive");
};
export var Negative = function Negative() {
  return /*#__PURE__*/React.createElement(Badge, {
    status: "negative"
  }, "Negative");
};
export var Warning = function Warning() {
  return /*#__PURE__*/React.createElement(Badge, {
    status: "warning"
  }, "Warning");
};
export var Neutral = function Neutral() {
  return /*#__PURE__*/React.createElement(Badge, {
    status: "neutral"
  }, "Neutral");
};
export var Error = function Error() {
  return /*#__PURE__*/React.createElement(Badge, {
    status: "error"
  }, "Error");
};
export var WithIcon = function WithIcon(args) {
  return /*#__PURE__*/React.createElement(Badge, args, /*#__PURE__*/React.createElement(Icon, args), "with icon");
};
WithIcon.args = {
  status: "warning",
  icon: "check",
  inline: true
};
WithIcon.storyName = "with icon";