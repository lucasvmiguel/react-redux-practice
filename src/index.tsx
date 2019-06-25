import * as React from 'react';

import * as reactDOM from 'react-dom';
import { Provider } from "react-redux";

import registerServiceWorker from './registerServiceWorker';
import * as store from './store';

import HelloWorld from './components/HelloWorld';
import HelloWorldJS from './components/HelloWorldJS';

reactDOM.render((
  <Provider store={store.store}>
    <HelloWorld text="hey" />
    <HelloWorldJS text="hey" />
  </Provider>
), document.getElementById('root') as HTMLElement);

registerServiceWorker();