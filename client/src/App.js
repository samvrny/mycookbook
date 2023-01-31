import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Group from './components/Group';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';

//TODO: Will probably need to check 'is session logged in' auth in order to access
//certain parts of the website.... Or at least, upon clicking BUTTONS instead of the 
//Link element that will trigger a function to check, every time, if a session is
//expired or not. 
function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <main>
          <Header></Header>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/group' element={<Group />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App;
