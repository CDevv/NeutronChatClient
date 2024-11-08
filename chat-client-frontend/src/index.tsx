/* @refresh reload */
import { render } from 'solid-js/web'
import './index.css'
import App from './App'
import { createRoot } from 'solid-js'

const root = document.getElementById('root')!

render(() => <App />, root)
