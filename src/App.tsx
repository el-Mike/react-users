import React from 'react';
import { Provider } from "react-redux";
import './App.css';

import {
  Layout,
} from './components/Layout';

import {
  store,
} from './+state';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Layout/>
    </div>
    </Provider>
  );
}

export default App;
