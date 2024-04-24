import './App.css'
import Home from './pages/home/Home'
import Chat from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/SignUp'

function App() {

  return (
    <div className='h-screen flex items-center justify-center'>
      {/* <Signup /> */}
      {/* <Login /> */}
      <Home />
    </div>
  )
}

export default App