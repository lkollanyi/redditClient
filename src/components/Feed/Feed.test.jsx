import React from 'react';
import { render, screen } from "@testing-library/react";
import Feed from './Feed';

// for mocking the store
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import feedReducer from '../../store/feedSlice';
import sampleFeed from '../../data/sampleFeed.json';

//set up mock store
const listing = sampleFeed.data.children;

const mockStore = configureStore({
    reducer: {
        feed: feedReducer,
    }, 
    preloadedState: {
        feed: {
            posts: listing,
        },
    },
});



//----- ACTUAL TESTS START HERE ------

test('Feed renders anything', () => {
    render(
        <Provider store={mockStore}>
            <Feed />
        </Provider>
    );

    const feed = screen.getByTestId('feed');
    expect(feed).toBeInTheDocument()

});

test('Feed renders more posts', () => {
    render(
        <Provider store={mockStore}>
            <Feed />
        </Provider>
    );

    const posts = screen.getAllByTestId('post');  // Assuming you added `data-testid="post"` in Post component
    expect(posts.length).toBeGreaterThan(1);

});