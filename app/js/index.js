/* styling */
require('styles/main.scss');
/* js */
import { log, logTitle } from 'logger';
/* your imports */
import React, { Component} from 'react';
import { render } from 'react-dom';

logTitle('React and ES6');


class MainComponent extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <h1> Hello World </h1>
    );
  }
}

const mountNode = document.getElementById('mountNode');

render(<MainComponent/>, mountNode);