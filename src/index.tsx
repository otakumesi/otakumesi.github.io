import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser'

import App from './components/App'

Sentry.init({
  dsn: 'https://f5497c43516f4e43a310946567f57149@sentry.io/1267803'
})

window.onerror = (msg, file, line, col, error) => {
  Sentry.captureMessage(`Message: "${msg}" ${file}:${line}:${col}`)
  Sentry.captureException(error)
}

const DOMRenderingId = 'root';
const targetDOM = document.getElementById(DOMRenderingId)

if (targetDOM !== null) {
  ReactDOM.render(
    <App />,
    targetDOM
  )
}
