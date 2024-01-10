import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from 'react'
import  Home  from "./pages/home";
import  Cal  from './pages/cal'
import Joblist from './pages/joblist'
import CheekyNav from './components/CheekyNav'
import User from './pages/user';
import Dnd from './components/Dnd';


function App() {

  const [jobs, setJobs] = useState([])

  useEffect(() => {
    fetchJobs()
  }, [])

  const fetchJobs = async() => {
    try {
      const res = await fetch(`//localhost:3001/joblist?user=${localStorage.getItem('userID')}`)
      const data = await res.json()
      setJobs(data) 
      console.log(data)
      
    }
    catch (err){
      console.error(err)
    }
  }


  return (
    <Router>
    <div className="App">   
    <CheekyNav />
    {/* <NavBar /> */}
        <Routes>
          <Route path='/' element={<Home jobs={jobs} fetchJobs={fetchJobs}/>} />
          {/* <Route path='/cal' element={<Cal jobs={jobs} fetchJobs={fetchJobs}/>} /> */}
          <Route path='/cal' element={<Dnd/>} />
          <Route path='/joblist' element={<Joblist tasks={jobs}refreshList={fetchJobs}/>} />
          <Route path='/user' element={<User />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
