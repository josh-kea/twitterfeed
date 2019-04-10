import React, { Component } from 'react';
import TweetList from './TweetList';

class App extends Component {
    state = {
      tweets: [],
      hashtag: ""
    };

componentDidMount(){
  //done once
  
}
  stuffChanged = evt => {
    console.log(evt)
    this.setState({
      hashtag: evt.target.value
    });
    if (evt.target.value.length > 1) {
        fetch("https://kea-alt-del.dk/twitter/api/?hashtag="+ evt.target.value +"&count=10").then(res => res.json()).then(data => {
        this.setState({
          tweets: data.statuses
        });
      });
    } 
  }
  render() {
    // const tweets = data.map(tweet => {})
    return (
      <main>
        <h1>#TwitterFeed</h1>
        <p>Searching for #{this.state.hashtag}</p>
        <input 
        type="text"
        onChange={this.stuffChanged} 
        name="search" 
        value={this.state.hashtag} />
        <TweetList  tweets={this.state.tweets} />
      </main>
    );
  }
}



export default App;
