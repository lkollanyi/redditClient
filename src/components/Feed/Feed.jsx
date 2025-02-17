import React from 'react';
import Post from '../Post/Post';
import {useParams } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { setCurrentSub} from '../../store/feedSlice';





const Feed = () => {
    const dispatch = useDispatch();
    const listing = useSelector((state) => state.feed.posts);
    const currentSub = useSelector((state) => state.feed.currentSub);
    let { subreddit } = useParams();
    if (subreddit != currentSub) {
        if (subreddit) {
            dispatch(setCurrentSub(subreddit));
        } else { 
            dispatch(setCurrentSub(""));
        };
    };


    const postList = listing.map((item) => {
        return (<Post post={item} key={item.data.id}/>)
    })

    return (
        <div data-testid="feed">
            <p>Feed content</p>
            {postList}
        </div>
        //sidebar: list of links
        
    );
};

export default Feed;