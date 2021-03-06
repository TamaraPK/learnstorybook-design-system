import _objectSpread from "/vagrant/storybook_project/learnstorybook-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2";
import React from 'react';
import { Page } from './Page';
import * as HeaderStories from './Header.stories';
export default {
  title: 'Example/Page',
  component: Page
};

var Template = function Template(args) {
  return /*#__PURE__*/React.createElement(Page, args);
};

export var LoggedIn = Template.bind({});
LoggedIn.args = _objectSpread({}, HeaderStories.LoggedIn.args);
export var LoggedOut = Template.bind({});
LoggedOut.args = _objectSpread({}, HeaderStories.LoggedOut.args);