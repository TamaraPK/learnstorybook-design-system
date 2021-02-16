import _objectWithoutProperties from "/vagrant/storybook_project/learnstorybook-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties";
import _taggedTemplateLiteral from "/vagrant/storybook_project/learnstorybook-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    font-size: ", "px;\n    line-height: ", "px;\n  "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    font-size: ", "px;\n    line-height: ", "px;\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    font-size: ", "px;\n    line-height: ", "px;\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  text-align: center;\n\n  font-size: ", "px;\n  line-height: ", "px;\n\n  ", "\n\n  ", "\n\n  ", "\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      background: ", ";\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      height: ", "px;\n      width: ", "px;\n      line-height: ", "px;\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      height: ", "px;\n      width: ", "px;\n      line-height: ", "px;\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      height: ", "px;\n      width: ", "px;\n      line-height: ", "px;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  border-radius: 50%;\n  display: inline-block;\n  vertical-align: top;\n  overflow: hidden;\n  text-transform: uppercase;\n\n  height: ", "px;\n  width: ", "px;\n  line-height: ", "px;\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  img {\n    width: 100%;\n    height: auto;\n    display: block;\n  }\n\n  svg {\n    position: relative;\n    bottom: -2px;\n    height: 100%;\n    width: 100%;\n    vertical-align: top;\n  }\n\n  path {\n    fill: ", ";\n    animation: ", " 1.5s ease-in-out infinite;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

// src/Avatar.js

/**
- Use an avatar for attributing actions or content to specific users.
- The user's name should always be present when using Avatar – either printed beside the avatar or in a tooltip.
**/
import React from 'react';
import styled, { css } from 'styled-components';
import { color, typography } from './shared/styles';
import { glow } from './shared/animation';
import { Icon } from './Icon';
export var sizes = {
  large: 40,
  medium: 28,
  small: 20,
  tiny: 16
};
var Image = styled.div(_templateObject(), function (props) {
  return !props.loading ? 'transparent' : color.light;
}, sizes.medium, sizes.medium, sizes.medium, function (props) {
  return props.size === 'tiny' && css(_templateObject2(), sizes.tiny, sizes.tiny, sizes.tiny);
}, function (props) {
  return props.size === 'small' && css(_templateObject3(), sizes.small, sizes.small, sizes.small);
}, function (props) {
  return props.size === 'large' && css(_templateObject4(), sizes.large, sizes.large, sizes.large);
}, function (props) {
  return !props.src && css(_templateObject5(), !props.loading && '#37D5D3');
}, color.medium, glow); // prettier-ignore

var Initial = styled.div(_templateObject6(), color.lightest, typography.size.s2, sizes.medium, function (props) {
  return props.size === "tiny" && css(_templateObject7(), typography.size.s1 - 2, sizes.tiny);
}, function (props) {
  return props.size === "small" && css(_templateObject8(), typography.size.s1, sizes.small);
}, function (props) {
  return props.size === "large" && css(_templateObject9(), typography.size.s3, sizes.large);
});
/**
 * Use an avatar for attributing actions or content to specific users.
 *   The user’s name should always be present when using Avatar – either printed beside
 *   the avatar or in a tooltip.
 **/

export function Avatar(_ref) {
  var loading = _ref.loading,
      username = _ref.username,
      src = _ref.src,
      size = _ref.size,
      props = _objectWithoutProperties(_ref, ["loading", "username", "src", "size"]);

  var avatarFigure = /*#__PURE__*/React.createElement(Icon, {
    icon: "useralt"
  });
  var a11yProps = {};

  if (loading) {
    a11yProps['aria-busy'] = true;
    a11yProps['aria-label'] = 'Loading avatar ...';
  } else if (src) {
    avatarFigure = /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: username
    });
  } else {
    a11yProps['aria-label'] = username;
    avatarFigure = /*#__PURE__*/React.createElement(Initial, {
      size: size,
      "aria-hidden": "true"
    }, username.substring(0, 1));
  }

  return /*#__PURE__*/React.createElement(Image, Object.assign({
    size: size,
    loading: loading,
    src: src
  }, a11yProps, props), avatarFigure);
}
Avatar.defaultProps = {
  loading: false,
  username: 'loading',
  src: null,
  size: 'medium'
};