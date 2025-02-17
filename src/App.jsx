
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPosts} from './store/feedSlice';
import { Routes, Route, Link } from 'react-router-dom';  // Import Routes, Route, Link
import './App.css'
import AppLayout from './components/App Layout/AppLayout';
import Feed from './components/Feed/Feed' ;
//import sampleFeed from './data/sampleFeed.json';

// const listing = sampleFeed.data.children;

function App() {
  const dispatch = useDispatch();
  const currentSub = useSelector((state) => state.feed.currentSub);


  useEffect(() => {
    const fetchPosts = async () => {
      const sub = currentSub ? `r/${currentSub}` : '';
      const response = await fetch(`https://www.reddit.com/${sub}.json`);
      const data = await response.json();

      //trim 'listing' type response object to get only the posts array
      const posts = data.data.children;

      dispatch(setPosts(posts));
    }
  
    fetchPosts();
  }, [dispatch, currentSub])
  



  return (
    <>
    <Routes>
        <Route path="/" element={<AppLayout/>} >
          <Route index element={<Feed/>}/>
          <Route path="r/:subreddit" element={<Feed/>} />
        </Route>
    </Routes>
    </>
    
  )
}

export default App;
