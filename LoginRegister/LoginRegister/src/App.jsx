import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './layout/Header'
import Home from './pages/Home'
import Register from './pages/Register'

const App=()=> {

  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Register' element={<Register/>}/>
      </Routes>

    </div>
  )
}

export default App
