import './App.css'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import { Home } from './components/Home'
import Login from './components/Login'
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import { useRef } from 'react';



function App() {
  const tawkMessengerRef = useRef();

  const handleMinimize = () => {
      tawkMessengerRef.current.minimize();
  };
  return (
    <div className=" max-w-full mx-auto bg-black "> 
      <div>
        <button onClick={handleMinimize}>Let's chat!!</button>
      </div>     
     <Router>
      <Routes>
        <Route path='/'  Component={Home} />
        <Route path='/login'  Component={Login} />
      </Routes>
     </Router>
     
     <TawkMessengerReact
                propertyId="654b6064f2439e1631ed0e0e"
                widgetId="1hen71b2l"
                useRef={tawkMessengerRef}/>
    </div>
  )
}

export default App
