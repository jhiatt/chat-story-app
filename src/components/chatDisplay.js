import React from 'react';


class ChatDisplay extends React.Component {

    render() {
        
        return(
            <div id="chat-group">
                <div id="first-div" />
                {this.props.children}
                <div id="last-div" />
            </div>
        ) 
    }
};

export default ChatDisplay;