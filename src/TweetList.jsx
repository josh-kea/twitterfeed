// import React, { Component } from 'react';

import React from 'react';
// import App from './App';
/*
class TweetList extends Component {
    this.setState({
        tweets
    })
    render() {
        return(
            <h1>{this.state}</h1>
        );
    }
}

export default TweetList;

*/

import Tweet from './Tweet'

// Function has to be exported instead of creating a new component that extends 
export default function TweetList (props) {
    //props.tweets
    const mytweets = props.tweets.map(oneTweet => {
        //console.log(oneTweet)
        return <Tweet tweet={oneTweet} />
    })
    return(
        <section className="tweetlist">
            <h1>I am TweetList</h1>
            {mytweets}
        </section>
    );
}

