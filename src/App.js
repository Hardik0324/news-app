import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import LoadingBar from 'react-top-loading-bar'
import{
  BrowserRouter as Router,
  Routes,
  Route,
}from "react-router-dom";
import News from './components/News';

const App = ()=> {

  const [progress, setProgress] = useState(0)
    return (
      <div>
        <Router> 
        <NavBar/>
        <LoadingBar
        height= {3}
        color='#f11946'
        progress={progress}
        />
        <Routes>
        <Route path="/" element={<News setProgress={setProgress} key="general" pageSize={15} country="in" category="general"/>}/>
        <Route path="/business" element={<News setProgress={setProgress} key="business" pageSize={15} country="in" category="business"/>}/>
        <Route path="/entertainment" element={<News setProgress={setProgress} key="entertainment" page Size={15} country="in" category="entertainment"/>}/>
        <Route path="/health" element={<News setProgress={setProgress} key="health" pageSize={15} country="in" category="health"/>}/>
        <Route path="/science" element={<News setProgress={setProgress} key="science" pageSize={15} country="in" category="science"/>}/>
        <Route path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={15} country="in" category="sports"/>}/>
        <Route path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={15} country="in" category="technology"/>}/>
        </Routes>
        </Router>
      </div>
    )
}

export default App;