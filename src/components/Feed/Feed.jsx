import React from 'react';
import { NavLink} from 'react-router-dom';
import Post from '../Post/Post';




const Feed = ({listing}) => {
    const postList = listing.map((item) => {
        return (<Post post={item} key={item.id}/>)
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