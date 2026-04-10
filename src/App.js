import React,{useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import QuestionPage from './pages/QuestionPage';
import {fetchTaskById} from './api/client';
import './App.css';
function App() {
  // useEffect(()=>{
  //   const testApi = async()=>{
  //     const data = await fetchTaskById("1");
  //     console.log("Test API Response:",data);
  //   };
  //   testApi();
  // },[]);
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/task/:id" element={<QuestionPage />} />
        
      </Routes>
    </Router>
    // <div className = "App">
    //   <h1> Testing API</h1>
    // </div>
  );
}

export default App;
