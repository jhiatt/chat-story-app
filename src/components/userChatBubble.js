import React, { useEffect } from 'react';
import ChatBubble from './chatBubble';

class UserChatBubble extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleSubmit(event) {
        alert(this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
                <ChatBubble value={this.state.value} />
                {/* Why isn't this working? ^^^^ This isn't updating after we load (useEffect?)*/}
                <form onSubmit={this.handleSubmit} >
                    <input value={this.state.value} onChange={this.handleChange} />
                    <input type="submit" value="enter" />
                </form>
            </React.Fragment>
        )
    }
}

export default UserChatBubble;