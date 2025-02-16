import React from 'react';
import { render, screen } from "@testing-library/react";
import Post from './Post';
import samplePost from '../../data/samplePost.json';

test('renders anything', () => {
    render(
        <Post post={samplePost}/>
    );

    const post = screen.getByTestId('post');
    expect(post).toBeInTheDocument()

});

test('renders title from sample data', () => {
    render(
        <Post post={samplePost}/>
    );

    const postTitle = screen.getByText(samplePost.data.title);
    const postText = screen.getByText(samplePost.data.selftext);

    expect(postTitle).toBeInTheDocument();
    expect(postText).toBeInTheDocument();

});

test('renders image if thumbnail exists', () => {
    // Render the Post component with the samplePost data
    render(<Post post={samplePost} />);
    
    // Assert that the image is rendered if thumbnail exists
    const postImage = screen.getByTestId('post-image');
    expect(postImage).toBeInTheDocument();
    expect(postImage).toHaveAttribute('src', samplePost.data.thumbnail);  // Check if the image URL matches the thumbnail URL
  });

  test('does not render image if thumbnail is absent', () => {
    // Modify the samplePost to remove the thumbnail for this test
    const postWithoutThumbnail = { ...samplePost, data: { ...samplePost.data, thumbnail: null } };
  
    // Render the Post component without the thumbnail
    render(<Post post={postWithoutThumbnail} />);
    
    // Assert that the image is not rendered
    const postImage = screen.queryByTestId('post-image');  // Use queryByTestId to avoid throwing an error if not found
    expect(postImage).toBeNull();  // Ensure the image is not in the document
  });

