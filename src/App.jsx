
import './App.css'
import { ApiCall } from './components/ApiCall'
import { ThemeProvider, ThemeToggler } from './components/ContextExample'
import { Debounce } from './components/Debounce'
import BallFollowMouse from './components/MouseMove'
import UseRefExample from './components/Ref'
import { ThrottleExample } from './components/Throttle'

function App() {

  return (
    <ThemeProvider>
      {/* <ApiCall /> */}
      {/* <Debounce /> */}
      {/* <ThrottleExample /> */}
      {/* <UseRefExample /> */}
      <ThemeToggler />
      <BallFollowMouse />
    </ThemeProvider>
  )
}

export default App
