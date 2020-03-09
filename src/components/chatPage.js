import React from 'react';
import ChatDisplay from './chatDisplay';
import ChatBubble from './chatBubble';
import allPosts from './textStorage';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

//To Do's:
// Bubbled Items (state.texts) needs to show different chat streams
// Need to create a chat stream for one user
// How do we make this dry and optimize performance?

class ChatPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            texts: [],
            textsCounter: -1,
            posts: allPosts,
            intervals: [1000,1250,1877,2000,2111,2457,2876,3000,3547,5045,6256,9250,10000,12000,15000],
            time: Date(Date.now()),
            unread: 0
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.nextPost = this.nextPost.bind(this);
        this.trackUnread = this.trackUnread.bind(this);
    }

    // handles
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

    // !!!! syncrous code issue
    handleClick(event) {
        this.setState({unread: 0});
        this.trackUnread();
    }
    
    //other
    nextPost() {
        this.setState({textsCounter: this.state.textsCounter + 1});
        let nextMessage = this.state.posts[this.state.textsCounter];
        nextMessage.time = Date(Date.now());
        this.setState({texts: [...this.state.texts, nextMessage ] });
        this.setState({unread: this.state.unread + 1})
        if ((this.state.textsCounter + 1) < this.state.posts.length) {
            setTimeout(this.nextPost, this.state.intervals[Math.floor(Math.random() * this.state.intervals.length)]);
        }
        this.trackUnread();
    }
    
    trackUnread() {
        let unread = this.state.unread;
        this.props.callUnread(unread);
    }

    //lifecycles
    componentDidUpdate() {
        document.getElementById("last-div").scrollIntoView();
    };
    
    componentDidMount() {
        setTimeout(this.nextPost, 2000);
        // this.trackUnread();
    }

    render() {
        const bubbledItems = this.state.texts.map((item, index) =>
            <ChatBubble message={item.message} userName={item.userName} key={index} ai={item.ai} time={item.time} userSubmitted={item.userSubmitted} />
        );

        const bubbledItemsUser1 = [{
            message: "Want a cupcake?",
            userName: "Jeremy",
            time: Date(Date.now),
            }].map((item, index) =>
                <ChatBubble message={item.message} userName={item.userName} key={index} ai={item.ai} time={item.time} userSubmitted={item.userSubmitted} />
        );

        return (
            <React.Fragment>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/">
                            <ChatDisplay >
                                {bubbledItems}
                            </ChatDisplay>
                        </Route>
                        <Route exact path="/Jeremy">
                            <ChatDisplay >
                                {bubbledItemsUser1}
                            </ChatDisplay>
                        </Route>
                    </Switch>
                </BrowserRouter>
                <form onSubmit={this.handleSubmit} onClick={this.handleClick} className="chat-submit" id="test">
                    <input value={this.state.value} onChange={this.handleChange} />
                    <input type="submit" value="enter" />
                </form>
            </React.Fragment>
        )
    }
}

export default ChatPage;