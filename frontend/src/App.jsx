import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Investors from './components/Investors'
import AD from './components/AD'
import Nav from './components/Nav'
import Graph from './components/Graph'

function App() {
  const [todo, settodo] = useState([])

  const [pop, setpop] = useState(false)
  const [pop1, setpop1] =useState(false)
  const [pop2, setpop2] =useState(false)
  const [pop3, setpop3] =useState(false)
  const [pop4, setpop4] =useState(false)




  const f1 = (pr, gd, mp, cd, ct, vt, pic) => {

    if (pic) {
      const a = URL.createObjectURL(pic)

      const as = [...todo, { a, pr, gd, mp, cd, ct, vt }]
      settodo(as)

      localStorage.setItem("key",JSON.stringify (as))

    }



  }
  useEffect(() => {

    const d = JSON.parse(localStorage.getItem("key"))
    if (d) {
      settodo(d)

    }


  },[]) 



  return (
    <>

      <BrowserRouter>
      
      
        <Nav pop={pop} setpop={setpop} pop1={pop1} setpop1={setpop1} pop2={pop2} setpop2={setpop2} pop3={pop3} setpop3={setpop3} pop4={pop4} setpop4={setpop4} />
        <Routes>
          <Route path='/ad' element={<AD f1={f1} />} />
          <Route path='/' element={<Home pop={pop} setpop={setpop} pop1={pop1} setpop1={setpop1} pop2={pop2} setpop2={setpop2} pop3={pop3} setpop3={setpop3} pop4={pop4} setpop4={setpop4} todo={todo} />} />
          <Route path='/investors' element={<Investors />} />
          <Route path='/contact' element={<h1></h1>}/>
          <Route path='/profile' element={<h1></h1>}/>
          <Route path='/location' element={<h1></h1>}/> 
        </Routes>
      </BrowserRouter>


      

    </>
  )
}

export default App
