import React from 'react';
import ChatText from './chatText';
import ChatBubble from './chatBubble';
import allPosts from './textStorage';


class UserChatBubble extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            texts: [],
            textsCounter: -1,
            posts: allPosts,
            intervals: [1000,2000,3000,5000,10000,15000]
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.randomPost = this.randomPost.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleSubmit(event) {
        let newChat = {
            userName: "Me",
            message: this.state.value,
        };
        this.setState({texts: [...this.state.texts, newChat ] });
        this.setState({value: ''});
        event.preventDefault();
    }

    randomPost() {
        this.setState({textsCounter: this.state.textsCounter + 1});
        this.setState({texts: [...this.state.texts, this.state.posts[this.state.textsCounter] ] });
        if ((this.state.textsCounter + 1) < this.state.posts.length) {
            setTimeout(this.randomPost, this.state.intervals[Math.floor(Math.random() * this.state.intervals.length)]);
        }
    }

    render() {
        const bubbledItems = this.state.texts.map((item, index) =>
            <ChatBubble message={item.message} userName={item.userName} key={index} />
        );

        if (this.state.textsCounter === -1) {
            setTimeout(this.randomPost, 2000);
        }

        return (
            <React.Fragment>
                <ChatText >
                    {bubbledItems}
                </ChatText>
                <form onSubmit={this.handleSubmit} className="chat-submit" >
                    <input value={this.state.value} onChange={this.handleChange} />
                    <input type="submit" value="enter" />
                </form>
            </React.Fragment>
        )
    }
}

export default UserChatBubble;