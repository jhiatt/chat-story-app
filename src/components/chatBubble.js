import React from 'react';

// This will be used to manage buble design and behavior
class ChatBubble extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: this.props.value};
    }


    render() {
        return (
        <h1>{this.state.value}</h1>
        )
    }
}

export default ChatBubble;