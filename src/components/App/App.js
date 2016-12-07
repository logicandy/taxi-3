import React from 'react';
import RouterConfig from '../../config/RouterConfig';
import './../../../node_modules/spectre.css/dist/spectre.css';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <main>
        {RouterConfig}
      </main>
    );
  }
}
