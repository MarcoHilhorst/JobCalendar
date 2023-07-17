import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from 'react'
import  Home  from "./pages/home";
import  Cal  from './pages/cal'
import NavBar from './components/NavBar'
import Joblist from './pages/joblist'
import CheekyNav from './components/CheekyNav';


function App() {

  const [jobs, setJobs] = useState([])

  useEffect(() => {
    fetchJobs()
  }, [])

  const fetchJobs = async() => {
    try {
      const res = await fetch('//localhost:3001/joblist')
      const data = await res.json()
      setJobs(data) 
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
          <Route path='/cal' element={<Cal jobs={jobs} fetchJobs={fetchJobs}/>} />
          <Route path='/joblist' element={<Joblist />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
