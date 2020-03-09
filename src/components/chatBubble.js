import React from 'react';

// This will be used to manage buble design and behavior
class ChatBubble extends React.Component {

    render() {
        let classNameUsed
        if (this.props.userSubmitted) {
            classNameUsed = "my-message message"
        } else if (this.props.ai) {
            classNameUsed = "auto-message message ai"
        } else {
            classNameUsed = "auto-message message"
        }

        let FullCurrentTime = this.props.time.toString();
        let x = FullCurrentTime.indexOf("GMT");
        let currentTime = FullCurrentTime.substring(x-9,x-4);

        let message = <div className={classNameUsed} >
                <p>
                    <span className="user-name">{this.props.userName}:</span>
                    {this.props.message}
                </p>
                <p className="time-stamp">Sent: {currentTime}</p>
            </div>


        return (
            <React.Fragment>
                {message}
            </React.Fragment>
        )
    }
}

export default ChatBubble;