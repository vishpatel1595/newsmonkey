import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';
import News from './component/News';

import React, { Component } from 'react'

export default class App extends Component {
  c = 'john';
  render() {
    return (
      <div>
        <Navbar/>
        <News/>
      </div>
    )
  }
}