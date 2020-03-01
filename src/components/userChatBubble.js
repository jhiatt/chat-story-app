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
            intervals: [1000,1250,1877,2000,2111,2457,2876,3000,3547,5045,6256,9250,10000,12000,15000],
            time: Date(Date.now())
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.nextPost = this.nextPost.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleSubmit(event) {
        let newChat = {
            userName: "Me",
            message: this.state.value,
            time: Date(Date.now),
            userSubmitted: true
        };
        this.setState({texts: [...this.state.texts, newChat ] });
        this.setState({value: ''});
        event.preventDefault();
    }

    nextPost() {
        this.setState({textsCounter: this.state.textsCounter + 1});
        let nextMessage = this.state.posts[this.state.textsCounter];
        nextMessage.time = Date(Date.now());
        this.setState({texts: [...this.state.texts, nextMessage ] });
        if ((this.state.textsCounter + 1) < this.state.posts.length) {
            setTimeout(this.nextPost, this.state.intervals[Math.floor(Math.random() * this.state.intervals.length)]);
        }
    }
    
    componentDidUpdate() {
        document.getElementById("last-div").scrollIntoView();
    };
    
    componentDidMount() {
        setTimeout(this.nextPost, 2000);
    }

    render() {
        const bubbledItems = this.state.texts.map((item, index) =>
            <ChatBubble message={item.message} userName={item.userName} key={index} ai={item.ai} time={item.time} userSubmitted={item.userSubmitted} />
        );

        return (
            <React.Fragment>
                <ChatText >
                    {bubbledItems}
                </ChatText>
                <form onSubmit={this.handleSubmit} className="chat-submit" id="test">
                    <input value={this.state.value} onChange={this.handleChange} />
                    <input type="submit" value="enter" />
                </form>
            </React.Fragment>
        )
    }
}

export default UserChatBubble;