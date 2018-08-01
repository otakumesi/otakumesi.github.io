import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './components/App'

const DOMRenderingId = 'root';
const targetDOM = document.getElementById(DOMRenderingId)

if (targetDOM !== null) {
  ReactDOM.render(
    <App />,
    targetDOM
  )
}
