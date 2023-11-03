import './App.css'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import { Home } from './components/Home'
import Signup  from './components/Signup'
import Login from './components/Login'




function App() {

  return (
    <div className=" max-w-full mx-auto bg-black ">      
     <Router>
      <Routes>
        <Route path='/'  Component={Home} />
        <Route path='/login'  Component={Login} />
        <Route path='/signup' Component={Signup} />
      </Routes>
     </Router>
    </div>
  )
}

export default App
