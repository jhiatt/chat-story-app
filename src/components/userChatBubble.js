import React from 'react';
import ChatText from './chatText';
import ChatBubble from './chatBubble';


class UserChatBubble extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.saveTextbubble = this.saveTextbubble.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleSubmit(event) {
        // <ChatText >
        //     <ChatBubble value={this.state.value} />;
        // </ChatText>
        event.preventDefault();
        // need this to return a component
    }


    saveTextbubble(text) {
        // Pass down to componant
    }

    render() {
        return (
            <React.Fragment>
                <ChatText />
                <div >
                    {this.state.value}
                </div>
                {/* This needs the same class as chatbubble*/}
                <form onSubmit={this.handleSubmit} >
                    <input value={this.state.value} onChange={this.handleChange} />
                    <input type="submit" value="enter" />
                </form>
            </React.Fragment>
        )
    }
}

export default UserChatBubble;