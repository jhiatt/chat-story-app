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

        let message = <div className={classNameUsed} >
                <p>
                    <span className="user-name">{this.props.userName}:</span>
                    {this.props.message}
                </p>
                <p className="time-stamp">{this.props.time.toString()}</p>
            </div>


        return (
            <React.Fragment>
                {message}
            </React.Fragment>
        )
    }
}

export default ChatBubble;