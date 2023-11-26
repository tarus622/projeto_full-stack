import Formulario from './components/Formulario';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Usuarios from './components/Usuarios';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Usuarios />}></Route>
        <Route path='register' element={<Formulario />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
