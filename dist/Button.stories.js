import _taggedTemplateLiteral from "/vagrant/storybook_project/learnstorybook-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border: 1px solid green;\n  background: lightgreen;\n  color: rebeccapurple;\n  padding: 1em;\n  font-size: 1.2em;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { Icon } from './Icon';
import { StoryLinkWrapper } from './StoryLinkWrapper';
var CustomButton = styled.button(_templateObject());

function ButtonWrapper(props) {
  return /*#__PURE__*/React.createElement(CustomButton, props);
}

export default {
  title: 'Design System/Button',
  component: Button
};
export var AllButtons = function AllButtons(args) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    appearance: "primary"
  }, "Primary"), /*#__PURE__*/React.createElement(Button, {
    appearance: "secondary"
  }, "Secondary"), /*#__PURE__*/React.createElement(Button, {
    appearance: "tertiary"
  }, "Tertiary"), /*#__PURE__*/React.createElement(Button, {
    appearance: "outline"
  }, "Outline"), /*#__PURE__*/React.createElement(Button, {
    appearance: "primaryOutline"
  }, "Outline primary"), /*#__PURE__*/React.createElement(Button, {
    appearance: "secondaryOutline"
  }, "Outline secondary"), /*#__PURE__*/React.createElement(Button, {
    appearance: "primary",
    isDisabled: true
  }, "Disabled"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Button, {
    appearance: "primary",
    isLoading: true
  }, "Primary"), /*#__PURE__*/React.createElement(Button, {
    appearance: "secondary",
    isLoading: true
  }, "Secondary"), /*#__PURE__*/React.createElement(Button, {
    appearance: "tertiary",
    isLoading: true
  }, "Tertiary"), /*#__PURE__*/React.createElement(Button, {
    appearance: "outline",
    isLoading: true
  }, "Outline"), /*#__PURE__*/React.createElement(Button, {
    appearance: "outline",
    isLoading: true,
    loadingText: "Custom..."
  }, "Outline"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Button, {
    appearance: "primary",
    size: "small"
  }, "Primary"), /*#__PURE__*/React.createElement(Button, {
    appearance: "secondary",
    size: "small"
  }, "Secondary"), /*#__PURE__*/React.createElement(Button, {
    appearance: "tertiary",
    size: "small"
  }, "Tertiary"), /*#__PURE__*/React.createElement(Button, {
    appearance: "outline",
    size: "small"
  }, "Outline"), /*#__PURE__*/React.createElement(Button, {
    appearance: "primary",
    isDisabled: true,
    size: "small"
  }, "Disabled"), /*#__PURE__*/React.createElement(Button, {
    appearance: "outline",
    size: "small",
    containsIcon: true
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "link",
    "aria-label": "Link"
  })), /*#__PURE__*/React.createElement(Button, {
    appearance: "outline",
    size: "small"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "link"
  }), "Link"));
};
AllButtons.storyName = 'all buttons';
export var buttonWrapper = function buttonWrapper(args) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ButtonWrapper, null, "Original Button Wrapper"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Button, {
    ButtonWrapper: ButtonWrapper,
    appearance: "primary"
  }, "Primary"), /*#__PURE__*/React.createElement(Button, {
    ButtonWrapper: ButtonWrapper,
    appearance: "secondary"
  }, "Secondary"), /*#__PURE__*/React.createElement(Button, {
    ButtonWrapper: ButtonWrapper,
    appearance: "tertiary"
  }, "Tertiary"), /*#__PURE__*/React.createElement(Button, {
    ButtonWrapper: ButtonWrapper,
    appearance: "outline"
  }, "Outline"), /*#__PURE__*/React.createElement(Button, {
    ButtonWrapper: ButtonWrapper,
    appearance: "primaryOutline"
  }, "Outline primary"), /*#__PURE__*/React.createElement(Button, {
    ButtonWrapper: ButtonWrapper,
    appearance: "secondaryOutline"
  }, "Outline secondary"), /*#__PURE__*/React.createElement(Button, {
    ButtonWrapper: ButtonWrapper,
    appearance: "primary",
    isDisabled: true
  }, "Disabled"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Button, {
    ButtonWrapper: ButtonWrapper,
    appearance: "primary",
    isLoading: true
  }, "Primary"), /*#__PURE__*/React.createElement(Button, {
    ButtonWrapper: ButtonWrapper,
    appearance: "secondary",
    isLoading: true
  }, "Secondary"), /*#__PURE__*/React.createElement(Button, {
    ButtonWrapper: ButtonWrapper,
    appearance: "tertiary",
    isLoading: true
  }, "Tertiary"), /*#__PURE__*/React.createElement(Button, {
    ButtonWrapper: ButtonWrapper,
    appearance: "outline",
    isLoading: true
  }, "Outline"), /*#__PURE__*/React.createElement(Button, {
    ButtonWrapper: ButtonWrapper,
    appearance: "outline",
    isLoading: true,
    loadingText: "Custom..."
  }, "Outline"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Button, {
    ButtonWrapper: ButtonWrapper,
    appearance: "primary",
    size: "small"
  }, "Primary"), /*#__PURE__*/React.createElement(Button, {
    ButtonWrapper: ButtonWrapper,
    appearance: "secondary",
    size: "small"
  }, "Secondary"), /*#__PURE__*/React.createElement(Button, {
    ButtonWrapper: ButtonWrapper,
    appearance: "tertiary",
    size: "small"
  }, "Tertiary"), /*#__PURE__*/React.createElement(Button, {
    ButtonWrapper: ButtonWrapper,
    appearance: "outline",
    size: "small"
  }, "Outline"), /*#__PURE__*/React.createElement(Button, {
    ButtonWrapper: ButtonWrapper,
    appearance: "primary",
    isDisabled: true,
    size: "small"
  }, "Disabled"), /*#__PURE__*/React.createElement(Button, {
    ButtonWrapper: ButtonWrapper,
    appearance: "outline",
    size: "small",
    containsIcon: true
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "link",
    "aria-label": "Link"
  })), /*#__PURE__*/React.createElement(Button, {
    ButtonWrapper: ButtonWrapper,
    appearance: "outline",
    size: "small"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "link"
  }), "Link"));
};
buttonWrapper.storyName = 'button wrapper';
export var AnchorWrapper = function AnchorWrapper(args) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(StoryLinkWrapper, {
    to: "http://storybook.js.org"
  }, "Original Link Wrapper"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Button, {
    ButtonWrapper: StoryLinkWrapper,
    appearance: "primary",
    href: "http://storybook.js.org"
  }, "Primary"), /*#__PURE__*/React.createElement(Button, {
    ButtonWrapper: StoryLinkWrapper,
    appearance: "secondary",
    href: "http://storybook.js.org"
  }, "Secondary"), /*#__PURE__*/React.createElement(Button, {
    ButtonWrapper: StoryLinkWrapper,
    appearance: "tertiary",
    href: "http://storybook.js.org"
  }, "Tertiary"), /*#__PURE__*/React.createElement(Button, {
    ButtonWrapper: StoryLinkWrapper,
    appearance: "outline",
    href: "http://storybook.js.org"
  }, "Outline"), /*#__PURE__*/React.createElement(Button, {
    ButtonWrapper: StoryLinkWrapper,
    appearance: "primaryOutline",
    href: "http://storybook.js.org"
  }, "Outline primary"), /*#__PURE__*/React.createElement(Button, {
    ButtonWrapper: StoryLinkWrapper,
    appearance: "secondaryOutline",
    href: "http://storybook.js.org"
  }, "Outline secondary"), /*#__PURE__*/React.createElement(Button, {
    ButtonWrapper: StoryLinkWrapper,
    appearance: "primary",
    isDisabled: true,
    href: "http://storybook.js.org"
  }, "Disabled"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Button, {
    ButtonWrapper: StoryLinkWrapper,
    appearance: "primary",
    isLoading: true,
    href: "http://storybook.js.org"
  }, "Primary"), /*#__PURE__*/React.createElement(Button, {
    ButtonWrapper: StoryLinkWrapper,
    appearance: "secondary",
    isLoading: true,
    href: "http://storybook.js.org"
  }, "Secondary"), /*#__PURE__*/React.createElement(Button, {
    ButtonWrapper: StoryLinkWrapper,
    appearance: "tertiary",
    isLoading: true,
    href: "http://storybook.js.org"
  }, "Tertiary"), /*#__PURE__*/React.createElement(Button, {
    ButtonWrapper: StoryLinkWrapper,
    appearance: "outline",
    isLoading: true,
    href: "http://storybook.js.org"
  }, "Outline"), /*#__PURE__*/React.createElement(Button, {
    ButtonWrapper: StoryLinkWrapper,
    appearance: "outline",
    isLoading: true,
    loadingText: "Custom...",
    href: "http://storybook.js.org"
  }, "Outline"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Button, {
    ButtonWrapper: StoryLinkWrapper,
    appearance: "primary",
    size: "small",
    href: "http://storybook.js.org"
  }, "Primary"), /*#__PURE__*/React.createElement(Button, {
    ButtonWrapper: StoryLinkWrapper,
    appearance: "secondary",
    size: "small",
    href: "http://storybook.js.org"
  }, "Secondary"), /*#__PURE__*/React.createElement(Button, {
    ButtonWrapper: StoryLinkWrapper,
    appearance: "tertiary",
    size: "small",
    href: "http://storybook.js.org"
  }, "Tertiary"), /*#__PURE__*/React.createElement(Button, {
    ButtonWrapper: StoryLinkWrapper,
    appearance: "outline",
    size: "small",
    href: "http://storybook.js.org"
  }, "Outline"), /*#__PURE__*/React.createElement(Button, {
    ButtonWrapper: StoryLinkWrapper,
    appearance: "primary",
    isDisabled: true,
    size: "small",
    href: "http://storybook.js.org"
  }, "Disabled"), /*#__PURE__*/React.createElement(Button, {
    ButtonWrapper: StoryLinkWrapper,
    appearance: "outline",
    size: "small",
    containsIcon: true,
    href: "http://storybook.js.org"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "link",
    "aria-label": "Link"
  })), /*#__PURE__*/React.createElement(Button, {
    ButtonWrapper: StoryLinkWrapper,
    appearance: "outline",
    size: "small",
    href: "http://storybook.js.org"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "link"
  }), "Link"));
};
AnchorWrapper.storyName = 'anchor wrapper';