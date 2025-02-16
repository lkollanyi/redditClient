
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';  // Import Routes, Route, Link
import './App.css'
import AppLayout from './components/App Layout/AppLayout';
import Feed from './components/Feed/Feed' ;
import sampleFeed from './data/sampleFeed.json';

const listing = sampleFeed.data.children;

function App() {


  return (
    <>
    <Routes>
        <Route path="/" element={<AppLayout/>} >
          <Route index element={<Feed listing={listing}/>}/>
        </Route>
    </Routes>
    </>
    
  )
}

export default App;
