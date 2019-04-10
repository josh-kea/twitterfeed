import React from 'react';
import User from './User';

export default function Tweet (props) {
    
    return (
        <article className="tweet">
            
            <User username={props.tweet.user.name}/>
            <blockquote>{props.tweet.text}</blockquote>
        </article>
    )
}