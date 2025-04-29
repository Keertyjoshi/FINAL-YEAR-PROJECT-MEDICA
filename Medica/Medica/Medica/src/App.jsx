import './App.css'
import {Route,Routes} from 'react-router-dom'
import Navbar from "./components/Navbar.jsx"
import Mainlanding from './components/Mainlanding.jsx'
import About from './components/About.jsx'
import Chatbot from './components/Chatbot.jsx'


function App() {
  
  return (
    <>
      <Navbar></Navbar>
      <Routes>
          <Route path="/" element={
            <>
              
              <Mainlanding></Mainlanding>
            </>}></Route>
            <Route path='/About' element={
              <>
                <About></About>
              
              </>}></Route>
              <Route path='/Chatbot' element={
              <>
                <Chatbot></Chatbot>
              </>}></Route>
              <Route path='/Contributors' element={
              <>
               
              </>}></Route>
      </Routes>
      
      
    </>
  )
}

export default App
