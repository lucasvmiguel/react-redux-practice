import * as React from 'react';

import * as reactDOM from 'react-dom';
import * as renderer from 'react-test-renderer';

import HelloWorld from './HelloWorld';

it('renders without crashing', () => {
  const div = document.createElement('div');
  reactDOM.render(<HelloWorld text="hey" />, div);
  reactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const tree = renderer
    .create(<HelloWorld text="hey" />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});