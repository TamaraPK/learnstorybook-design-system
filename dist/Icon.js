import _objectWithoutProperties from "/vagrant/storybook_project/learnstorybook-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties";
import _taggedTemplateLiteral from "/vagrant/storybook_project/learnstorybook-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  fill: currentColor;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: ", ";\n  vertical-align: middle;\n\n  shape-rendering: inherit;\n  transform: translate3d(0, 0, 0);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from 'react';
import styled from 'styled-components';
import { icons } from './shared/icons';
var Svg = styled.svg(_templateObject(), function (props) {
  return props.block ? 'block' : 'inline-block';
});
var Path = styled.path(_templateObject2());
/**
 * An Icon is a piece of visual element, but we must ensure its accessibility while using it.
 * It can have 2 purposes:
 *
 * - *decorative only*: for example, it illustrates a label next to it. We must ensure that it is ignored by screen readers, by setting `aria-hidden` attribute (ex: `<Icon icon="check" aria-hidden />`)
 * - *non-decorative*: it means that it delivers information. For example, an icon as only child in a button. The meaning can be obvious visually, but it must have a proper text alternative via `aria-label` for screen readers. (ex: `<Icon icon="print" aria-label="Print this document" />`)
 */

export function Icon(_ref) {
  var icon = _ref.icon,
      block = _ref.block,
      props = _objectWithoutProperties(_ref, ["icon", "block"]);

  return /*#__PURE__*/React.createElement(Svg, Object.assign({
    viewBox: "0 0 1024 1024",
    width: "20px",
    height: "20px",
    block: block
  }, props), /*#__PURE__*/React.createElement(Path, {
    d: icons[icon]
  }));
}
Icon.defaultProps = {
  block: false
};