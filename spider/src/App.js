import React from 'react'
import  {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/order' element={<Order/>}/> */}
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
