import * as React from 'react';

import * as reactDOM from 'react-dom';
import * as renderer from 'react-test-renderer';

import HelloWorldJS from './HelloWorldJS';

it('renders without crashing', () => {
  const div = document.createElement('div');
  reactDOM.render(<HelloWorldJS text="hey" />, div);
  reactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const tree = renderer
    .create(<HelloWorldJS text="hey" />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});