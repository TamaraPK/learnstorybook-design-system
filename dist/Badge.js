import _taggedTemplateLiteral from "/vagrant/storybook_project/learnstorybook-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n      color: ", ";\n      background: ", ";\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      color: ", ";\n      background: ", ";\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      color: ", ";\n      background: ", ";\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      color: ", ";\n      background: ", ";\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      color: ", ";\n      background: ", ";\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  vertical-align: top;\n  font-size: 11px;\n  line-height: 12px;\n  padding: 4px 12px;\n  border-radius: 3em;\n  font-weight: ", ";\n\n  svg {\n    height: 12px;\n    width: 12px;\n    margin-right: 4px;\n    margin-top: -2px;\n  }\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from 'react';
import styled, { css } from 'styled-components';
import { background, color, typography } from './shared/styles';
var BadgeWrapper = styled.div(_templateObject(), typography.weight.bold, function (props) {
  return props.status === 'positive' && css(_templateObject2(), color.positive, background.positive);
}, function (props) {
  return props.status === 'negative' && css(_templateObject3(), color.negative, background.negative);
}, function (props) {
  return props.status === 'warning' && css(_templateObject4(), color.warning, background.warning);
}, function (props) {
  return props.status === 'error' && css(_templateObject5(), color.lightest, color.negative);
}, function (props) {
  return props.status === 'neutral' && css(_templateObject6(), color.dark, color.mediumlight);
});
/**
 * **Badges?!** We don't need no stinkin' badges!!
 */

export function Badge(_ref) {
  var props = Object.assign({}, _ref);
  return /*#__PURE__*/React.createElement(BadgeWrapper, props);
}
Badge.defaultProps = {
  status: 'neutral'
};