import React from 'react';

class ChatBubble extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <h1>Hello</h1>
        )
    }
}

export default ChatBubble;