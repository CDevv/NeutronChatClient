import { JSX, type Component } from "solid-js";
import { createSignal } from 'solid-js'
import { Route, Router } from '@solidjs/router'
import Layout from './components/Layout'
import MainPage from './pages/MainPage'
import './App.css'
import JoinPage from './pages/JoinPage'
import HostPage from './pages/HostPage'

declare global {
  let hostServer: (hostname: string) => Promise<boolean>
}

const App: Component = () => {
  return (
    <>
      <Router root={Layout}>
        <Route path="/" component={MainPage}></Route>
        <Route path="/join" component={JoinPage}></Route>
        <Route path="/host" component={HostPage}></Route>
      </Router>
    </>
  )
}

export default App
