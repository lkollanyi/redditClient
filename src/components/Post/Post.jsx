import React from 'react';

const Post = ({post}) => {
    const title = post.data.title;
    const text = post.data.selftext;
    const author = post.data.author;
    const commentCount = post.data.num_comments;
    return (
        <div data-testid="post" className='post'>
            <h4>{title}</h4>
            {post.data.post_hint !== "hosted:video" && post.data.thumbnail && post.data.thumbnail !== '' && (
                <img src={post.data.thumbnail} alt="Post Thumbnail" data-testid="post-image" />
            )}
            <p>{text}</p>
            <div className='post-footer'>
                <p>{author}</p>
                <p>{commentCount}</p>
            </div>
            
        </div>

        
    );
};

export default Post;