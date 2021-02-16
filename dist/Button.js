import _objectWithoutProperties from "/vagrant/storybook_project/learnstorybook-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties";
import _taggedTemplateLiteral from "/vagrant/storybook_project/learnstorybook-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  border: 10px solid red;\n  border-radius: 3em;\n  cursor: pointer;\n  display: inline-block;\n  overflow: hidden;\n  padding: ", ";\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  transition: all 150ms ease-out;\n  transform: translate3d(0,0,0);\n  vertical-align: top;\n  white-space: nowrap;\n  user-select: none;\n  opacity: 1;\n  margin: 0;\n  background: transparent;\n\n  font-size: 20px;\n  font-weight: ", ";\n  line-height: 1;\n\n  ", "\n\n  ", " {\n    transform: scale3d(1,1,1) translate3d(0,0,0);\n    transition: transform 700ms ", ";\n    opacity: 1;\n  }\n\n  ", " {\n    transform: translate3d(0, 100%, 0);\n  }\n\n  svg {\n    height: ", "px;\n    width: ", "px;\n    vertical-align: top;\n    margin-right: ", "px;\n    margin-top: ", "px;\n    margin-bottom: ", "px;\n\n    /* Necessary for js mouse events to not glitch out when hovering on svgs */\n    pointer-events: none;\n  }\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", ";\n\n    ", ";\n\n    ", ";\n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  opacity: 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  vertical-align: top;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React, { Fragment } from 'react';
import styled from 'styled-components';
import { darken, rgba } from 'polished';
import { color, typography } from './shared/styles';
import { easing } from './shared/animation';
var Text = styled.span(_templateObject());
var Loading = styled.span(_templateObject2());
var APPEARANCES = {
  PRIMARY: 'primary',
  PRIMARY_OUTLINE: 'primaryOutline',
  SECONDARY: 'secondary',
  SECONDARY_OUTLINE: 'secondaryOutline',
  TERTIARY: 'tertiary',
  OUTLINE: 'outline'
};
var SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium'
};
var StyledButton = styled.button(_templateObject3(), function (props) {
  return props.size === SIZES.SMALL ? '8px 16px' : '13px 20px';
}, typography.weight.extrabold, function (props) {
  return !props.isLoading && "\n      &:hover {\n        transform: translate3d(0, -2px, 0);\n        box-shadow: rgba(0, 0, 0, 0.2) 0 2px 6px 0;\n      }\n\n      &:active {\n        transform: translate3d(0, 0, 0);\n      }\n\n      &:focus {\n        box-shadow: ".concat(rgba(color.primary, 0.4), " 0 1px 9px 2px;\n      }\n\n      &:focus:hover {\n        box-shadow: ").concat(rgba(color.primary, 0.2), " 0 8px 18px 0px;\n      }\n    ");
}, Text, easing.rubber, Loading, function (props) {
  return props.size === SIZES.SMALL ? '14' : '16';
}, function (props) {
  return props.size === SIZES.SMALL ? '14' : '16';
}, function (props) {
  return props.size === SIZES.SMALL ? '4' : '6';
}, function (props) {
  return props.size === SIZES.SMALL ? '-1' : '-2';
}, function (props) {
  return props.size === SIZES.SMALL ? '-1' : '-2';
}, function (props) {
  return props.disabled && "\n      cursor: not-allowed !important;\n      opacity: 0.5;\n      &:hover {\n        transform: none;\n      }\n    ";
}, function (props) {
  return props.isUnclickable && "\n      cursor: default !important;\n      pointer-events: none;\n      &:hover {\n        transform: none;\n      }\n    ";
}, function (props) {
  return props.isLoading && "\n      cursor: progress !important;\n      opacity: 0.7;\n\n      ".concat(Loading, " {\n        transition: transform 700ms ").concat(easing.rubber, ";\n        transform: translate3d(0, -50%, 0);\n        opacity: 1;\n      }\n\n      ").concat(Text, " {\n        transform: scale3d(0, 0, 1) translate3d(0, -100%, 0);\n        opacity: 0;\n      }\n\n      &:hover {\n        transform: none;\n      }\n    ");
}, function (props) {
  return props.containsIcon && "\n      svg {\n        display: block;\n        margin: 0;\n      }\n      padding: ".concat(props.size === SIZES.SMALL ? '7' : '12', "px;\n    ");
}, function (props) {
  return props.appearance === APPEARANCES.PRIMARY && "\n      background: ".concat(color.primary, ";\n      color: ").concat(color.lightest, ";\n\n      ").concat(!props.isLoading && "\n          &:hover {\n            background: ".concat(darken(0.05, color.primary), ";\n          }\n          &:active {\n            box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;\n          }\n          &:focus {\n            box-shadow: ").concat(rgba(color.primary, 0.4), " 0 1px 9px 2px;\n          }\n          &:focus:hover {\n            box-shadow: ").concat(rgba(color.primary, 0.2), " 0 8px 18px 0px;\n          }\n        "), "\n    ");
}, function (props) {
  return props.appearance === APPEARANCES.SECONDARY && "\n      background: ".concat(color.secondary, ";\n      color: ").concat(color.lightest, ";\n\n      ").concat(!props.isLoading && "\n          &:hover {\n            background: ".concat(darken(0.05, color.secondary), ";\n          }\n          &:active {\n            box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;\n          }\n          &:focus {\n            box-shadow: ").concat(rgba(color.secondary, 0.4), " 0 1px 9px 2px;\n          }\n          &:focus:hover {\n            box-shadow: ").concat(rgba(color.secondary, 0.2), " 0 8px 18px 0px;\n          }\n        "), "\n    ");
}, function (props) {
  return props.appearance === APPEARANCES.TERTIARY && "\n      background: ".concat(color.tertiary, ";\n      color: ").concat(color.darkest, ";\n\n      ").concat(!props.isLoading && "\n          &:hover {\n            background: ".concat(darken(0.05, color.tertiary), ";\n          }\n          &:active {\n            box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;\n          }\n          &:focus {\n            box-shadow: ").concat(rgba(color.tertiary, 0.4), " 0 1px 9px 2px;\n          }\n          &:focus:hover {\n            box-shadow: ").concat(rgba(color.tertiary, 0.2), " 0 8px 18px 0px;\n          }\n        "), "\n    ");
}, function (props) {
  return props.appearance === APPEARANCES.OUTLINE && "\n      box-shadow: ".concat(color.medium, " 0 0 0 1px inset;\n      color: ").concat(color.dark, ";\n      background: transparent;\n\n      ").concat(!props.isLoading && "\n          &:hover {\n            box-shadow: ".concat(color.mediumdark, " 0 0 0 1px inset;\n          }\n\n          &:active {\n            background: ").concat(color.medium, ";\n            box-shadow: ").concat(color.medium, " 0 0 0 1px inset;\n            color: ").concat(color.darkest, ";\n          }\n          &:focus {\n            box-shadow: ").concat(color.medium, " 0 0 0 1px inset, ").concat(rgba(color.secondary, 0.4), " 0 1px 9px 2px;\n          }\n          &:focus:hover {\n            box-shadow: ").concat(color.medium, " 0 0 0 1px inset, ").concat(rgba(color.secondary, 0.2), " 0 8px 18px 0px;\n          }\n        "), ";\n    ");
}, function (props) {
  return props.appearance === APPEARANCES.PRIMARY_OUTLINE && "\n        box-shadow: ".concat(color.primary, " 0 0 0 1px inset;\n        color: ").concat(color.primary, ";\n\n        &:hover {\n          box-shadow: ").concat(color.primary, " 0 0 0 1px inset;\n          background: transparent;\n        }\n\n        &:active {\n          background: ").concat(color.primary, ";\n          box-shadow: ").concat(color.primary, " 0 0 0 1px inset;\n          color: ").concat(color.lightest, ";\n        }\n        &:focus {\n          box-shadow: ").concat(color.primary, " 0 0 0 1px inset, ").concat(rgba(color.primary, 0.4), " 0 1px 9px 2px;\n        }\n        &:focus:hover {\n          box-shadow: ").concat(color.primary, " 0 0 0 1px inset, ").concat(rgba(color.primary, 0.2), " 0 8px 18px 0px;\n        }\n      ");
}, function (props) {
  return props.appearance === APPEARANCES.SECONDARY_OUTLINE && "\n        box-shadow: ".concat(color.secondary, " 0 0 0 1px inset;\n        color: ").concat(color.secondary, ";\n\n        &:hover {\n          box-shadow: ").concat(color.secondary, " 0 0 0 1px inset;\n          background: transparent;\n        }\n\n        &:active {\n          background: ").concat(color.secondary, ";\n          box-shadow: ").concat(color.secondary, " 0 0 0 1px inset;\n          color: ").concat(color.lightest, ";\n        }\n        &:focus {\n          box-shadow: ").concat(color.secondary, " 0 0 0 1px inset,\n            ").concat(rgba(color.secondary, 0.4), " 0 1px 9px 2px;\n        }\n        &:focus:hover {\n          box-shadow: ").concat(color.secondary, " 0 0 0 1px inset,\n            ").concat(rgba(color.secondary, 0.2), " 0 8px 18px 0px;\n        }\n      ");
});
var ButtonLink = StyledButton.withComponent('a');

var applyStyle = function applyStyle(ButtonWrapper) {
  return ButtonWrapper && StyledButton.withComponent(function (_ref) {
    var containsIcon = _ref.containsIcon,
        isLoading = _ref.isLoading,
        isUnclickable = _ref.isUnclickable,
        rest = _objectWithoutProperties(_ref, ["containsIcon", "isLoading", "isUnclickable"]);

    return /*#__PURE__*/React.createElement(ButtonWrapper, rest);
  });
};

export function Button(_ref2) {
  var isDisabled = _ref2.isDisabled,
      isLoading = _ref2.isLoading,
      loadingText = _ref2.loadingText,
      isLink = _ref2.isLink,
      children = _ref2.children,
      ButtonWrapper = _ref2.ButtonWrapper,
      props = _objectWithoutProperties(_ref2, ["isDisabled", "isLoading", "loadingText", "isLink", "children", "ButtonWrapper"]);

  var buttonInner = /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(Text, null, children), isLoading && /*#__PURE__*/React.createElement(Loading, null, loadingText || 'Loading...'));
  var StyledButtonWrapper = React.useMemo(function () {
    return applyStyle(ButtonWrapper);
  }, [ButtonWrapper]);
  var SelectedButton = StyledButton;

  if (ButtonWrapper) {
    SelectedButton = StyledButtonWrapper;
  } else if (isLink) {
    SelectedButton = ButtonLink;
  }

  return /*#__PURE__*/React.createElement(SelectedButton, Object.assign({
    isLoading: isLoading,
    disabled: isDisabled
  }, props), buttonInner);
}
Button.defaultProps = {
  isLoading: false,
  loadingText: null,
  isLink: false,
  appearance: APPEARANCES.TERTIARY,
  isDisabled: false,
  isUnclickable: false,
  containsIcon: false,
  size: SIZES.MEDIUM,
  ButtonWrapper: undefined
};