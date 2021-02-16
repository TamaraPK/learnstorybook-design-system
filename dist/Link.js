import _objectWithoutProperties from "/vagrant/storybook_project/learnstorybook-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties";
import _taggedTemplateLiteral from "/vagrant/storybook_project/learnstorybook-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n      ", ";\n    "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  /* reset button styles */\n  background: none;\n  color: inherit;\n  border: none;\n  padding: 0;\n  font: inherit;\n  cursor: pointer;\n  outline: inherit;\n\n  ", ";\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n      > svg:last-of-type {\n        height: 0.7em;\n        width: 0.7em;\n        margin-right: 0;\n        margin-left: 0.25em;\n        bottom: auto;\n        vertical-align: inherit;\n      }\n    "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n      border: 0;\n      border-radius: 0;\n      background: none;\n      padding: 0;\n      font-size: inherit;\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n      color: ", ";\n\n      &:hover {\n        color: ", ";\n      }\n\n      &:active {\n        color: ", ";\n      }\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      color: inherit;\n\n      &:hover,\n      &:active {\n        color: inherit;\n        text-decoration: underline;\n      }\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      color: ", ";\n\n      &:hover {\n        color: ", ";\n      }\n\n      &:active {\n        color: ", ";\n      }\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      color: ", ";\n\n      &:hover {\n        color: ", ";\n      }\n\n      &:active {\n        color: ", ";\n      }\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      svg {\n        height: 1em;\n        width: 1em;\n        vertical-align: middle;\n        position: relative;\n        bottom: 0;\n        margin-right: 0;\n      }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  transition: transform 150ms ease-out, color 150ms ease-out;\n  text-decoration: none;\n\n  color: ", ";\n\n  &:hover,\n  &:focus {\n    cursor: pointer;\n    transform: translateY(-1px);\n    color: ", ";\n  }\n  &:active {\n    transform: translateY(0);\n    color: ", ";\n  }\n\n  svg {\n    display: inline-block;\n    height: 1em;\n    width: 1em;\n    vertical-align: text-top;\n    position: relative;\n    bottom: -0.125em;\n    margin-right: 0.4em;\n  }\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React, { Fragment } from 'react';
import styled, { css } from 'styled-components';
import { darken } from 'polished';
import { Icon } from './Icon';
import { color } from './shared/styles';
var linkStyles = css(_templateObject(), color.secondary, darken(0.07, color.secondary), darken(0.1, color.secondary), function (props) {
  return props.containsIcon && css(_templateObject2());
}, function (props) {
  return props.secondary && css(_templateObject3(), color.mediumdark, color.dark, color.darker);
}, function (props) {
  return props.tertiary && css(_templateObject4(), color.dark, color.darkest, color.mediumdark);
}, function (props) {
  return props.nochrome && css(_templateObject5());
}, function (props) {
  return props.inverse && css(_templateObject6(), color.lightest, color.lighter, color.light);
}, function (props) {
  return props.isButton && css(_templateObject7());
});
var LinkInner = styled.span(_templateObject8(), function (props) {
  return props.withArrow && css(_templateObject9());
});
var LinkA = styled.a(_templateObject10(), linkStyles);
var LinkButton = styled.button(_templateObject11(), linkStyles);

var applyStyle = function applyStyle(LinkWrapper) {
  return LinkWrapper && styled(function (_ref) {
    var containsIcon = _ref.containsIcon,
        inverse = _ref.inverse,
        nochrome = _ref.nochrome,
        secondary = _ref.secondary,
        tertiary = _ref.tertiary,
        linkWrapperRest = _objectWithoutProperties(_ref, ["containsIcon", "inverse", "nochrome", "secondary", "tertiary"]);

    return /*#__PURE__*/React.createElement(LinkWrapper, linkWrapperRest);
  })(_templateObject12(), linkStyles);
};
/**
 * Links can contains text and/or icons. Be careful using only icons, you must provide a text alternative via aria-label for accessibility.
 */


export function Link(_ref2) {
  var isButton = _ref2.isButton,
      withArrow = _ref2.withArrow,
      LinkWrapper = _ref2.LinkWrapper,
      children = _ref2.children,
      rest = _objectWithoutProperties(_ref2, ["isButton", "withArrow", "LinkWrapper", "children"]);

  var content = /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(LinkInner, {
    withArrow: withArrow
  }, children, withArrow && /*#__PURE__*/React.createElement(Icon, {
    icon: "arrowright"
  })));
  var StyledLinkWrapper = applyStyle(LinkWrapper);
  var SelectedLink = LinkA;

  if (LinkWrapper) {
    SelectedLink = StyledLinkWrapper;
  } else if (isButton) {
    SelectedLink = LinkButton;
  }

  return /*#__PURE__*/React.createElement(SelectedLink, rest, content);
}
Link.defaultProps = {
  isButton: false,
  children: null,
  withArrow: false,
  containsIcon: false,
  LinkWrapper: undefined,
  inverse: false,
  nochrome: false,
  secondary: false,
  tertiary: false
};