import { createSignal } from 'solid-js'
import MainPage from './pages/MainPage'
import './App.css'

function App() {
  return (
    <>
      <div class="m-0 w-screen h-screen min-h-full min-w-full top-0 left-0 fixed">
        <MainPage></MainPage>
      </div>
    </>
  )
}

export default App
