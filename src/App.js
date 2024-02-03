import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Create from './Components/Create';
import { Routes, Route} from 'react-router';
import Read from './Components/Read';
import Edit from './Components/Edit';

function App() {
  return (
    <div className='container'>
      <h1>CRUD APPLICATION</h1>
      <Routes>
        <Route exact path = "/" element = {<Read />} />
        <Route exact path = "/Create" element = {<Create />} />
        <Route exact path = "/Edit" element = {<Edit />} />
      </Routes>
    </div>
  )
}

export default App
