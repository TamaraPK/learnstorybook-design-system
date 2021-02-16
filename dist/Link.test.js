//src/Link.test.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from './Link'; // A straightforward link wrapper that renders an <a> with the passed props. What we are testing
// here is that the Link component passes the right props to the wrapper and itself.

var LinkWrapper = function LinkWrapper(props) {
  return /*#__PURE__*/React.createElement("a", props);
}; // eslint-disable-line jsx-a11y/anchor-has-content


it('has a href attribute when rendering with linkWrapper', function () {
  var div = document.createElement('div');
  ReactDOM.render( /*#__PURE__*/React.createElement(Link, {
    href: "https://learnstorybook.com",
    LinkWrapper: LinkWrapper
  }, "Link Text"), div);
  expect(div.querySelector('a[href="https://learnstorybook.com"]')).not.toBeNull();
  expect(div.textContent).toEqual('Link Text');
  ReactDOM.unmountComponentAtNode(div);
});