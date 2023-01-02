import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <main>
          <Header></Header>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App;
