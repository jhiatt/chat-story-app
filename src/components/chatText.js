import React from 'react';

// use this to generate random texts 
// treat textStorage as a dumb source only

//To Do:
//  How create different timing for each item
//  How do we get our new submission onto the list
//  How to randomize texts
//  Add usernames to these texts (chirpy instead of twitter?)
class ChatText extends React.Component {

    render() {
        
        return(
            <div>
                {this.props.children}
            </div>
        ) 
    }
};

export default ChatText;