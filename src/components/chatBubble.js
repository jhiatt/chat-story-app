import React from 'react';

// This will be used to manage buble design and behavior
class ChatBubble extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.myMessage);
    }
// Cannot get my message class to attach, cannot get key working.

    render() {

        return (
            <div className={(this.props.myMessage) ? "my-message" : "" } key={this.props.key} >
                <p>{this.props.userName}: {this.props.message}</p>
            </div>
        )
    }
}

export default ChatBubble;