import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <main>
          <Header></Header>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App;
