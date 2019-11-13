/* eslint-disable global-require */

import React from 'react'
import ReactDOM from 'react-dom'

import { App } from './components/App/App'

import './index.css'

function start(RootComponent: React.ElementType, node: HTMLElement) {
  ReactDOM.render(<RootComponent />, node)
}

const elem = document.getElementById('root')

if (!elem) {
  throw new Error('no DOM element')
}

start(App, elem)

if (module.hot) {
  module.hot.accept(['./components/App/App'], () => {
    const { App: NextRoot } = require('./components/App/App')
    start(NextRoot, elem)
  })
}
