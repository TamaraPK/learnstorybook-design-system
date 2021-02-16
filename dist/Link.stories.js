import _taggedTemplateLiteral from "/vagrant/storybook_project/learnstorybook-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  && {\n    color: red;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';
import { Icon } from './Icon';
import { Link } from './Link';
import { StoryLinkWrapper } from './StoryLinkWrapper';
var CustomLink = styled(Link)(_templateObject());
var onLinkClick = action('onLinkClick');
export default {
  title: 'Design System/Link',
  component: Link
};
export var All = function All(args) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Link, {
    href: "https://learnstorybook.com"
  }, "Default"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Link, {
    secondary: true,
    href: "https://learnstorybook.com"
  }, "Secondary"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Link, {
    tertiary: true,
    href: "https://learnstorybook.com"
  }, "tertiary"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Link, {
    nochrome: true,
    href: "https://learnstorybook.com"
  }, "nochrome"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Link, {
    href: "https://learnstorybook.com"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "discord",
    "aria-hidden": true
  }), "With icon in front"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Link, {
    containsIcon: true,
    href: "https://learnstorybook.com",
    "aria-label": "Toggle side bar"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "sidebar",
    "aria-hidden": true
  })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Link, {
    containsIcon: true,
    withArrow: true,
    href: "https://learnstorybook.com"
  }, "With arrow behind"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      background: '#333'
    }
  }, /*#__PURE__*/React.createElement(Link, {
    inverse: true,
    href: "https://learnstorybook.com"
  }, "Inverted colors")), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Link, {
    isButton: true,
    onClick: onLinkClick
  }, "is actually a button"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Link, {
    tertiary: true,
    LinkWrapper: StoryLinkWrapper,
    href: "http://storybook.js.org"
  }, "has a LinkWrapper like GatsbyLink or NextLink"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(CustomLink, {
    tertiary: true,
    LinkWrapper: StoryLinkWrapper,
    href: "http://storybook.js.org"
  }, "has a LinkWrapper like GatsbyLink or NextLink with custom styling"));
};