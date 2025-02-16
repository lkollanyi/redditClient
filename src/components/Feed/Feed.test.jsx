import React from 'react';
import { render, screen } from "@testing-library/react";
import Feed from './Feed';
import sampleFeed from '../../data/sampleFeed.json';

const listing = sampleFeed.data.children;

test('Feed renders anything', () => {
    render(
        <Feed listing={listing}/>
    );

    const feed = screen.getByTestId('feed');
    expect(feed).toBeInTheDocument()

});

test('Feed renders more posts', () => {
    render(
        <Feed listing={listing}/>
    );

    const posts = screen.getAllByTestId('post');  // Assuming you added `data-testid="post"` in Post component
    expect(posts.length).toBeGreaterThan(1);

});