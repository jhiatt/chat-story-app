import React from 'react';
import ChatBubble from './chatBubble';
import {post1, post2, post3} from './textStorage';

// use this to generate random texts 
// treat textStorage as a dumb source only

//To Do:
//  How create different timing for each item
//  How do we get our new submission onto the list
//  How to randomize texts
//  Add usernames to these texts (chirpy instead of twitter?)
class ChatText extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const bubbledItems = [post1, post2, post3].map((item) =>
            <ChatBubble value={item} />
        );
        
        return(
            <div>
                {bubbledItems}
                {this.props.children}
            </div>
        ) 
    }
};

export default ChatText;