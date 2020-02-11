import React from 'react';
import ChatText from './chatText';
import ChatBubble from './chatBubble';
import {post1, post2, post3} from './textStorage';


class UserChatBubble extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            texts: [post1, post2, post3]
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleSubmit(event) {
        this.setState({texts: [...this.state.texts, this.state.value ] });
        this.setState({value: ''});
        event.preventDefault();
        // need this to return a component
    }

    render() {
        const bubbledItems = this.state.texts.map((item) =>
            <ChatBubble value={item} />
        );

        return (
            <React.Fragment>
                <ChatText >
                    {bubbledItems}
                </ChatText>
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