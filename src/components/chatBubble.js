import React from 'react';

// This will be used to manage buble design and behavior
class ChatBubble extends React.Component {

// Cannot get my message class to attach, cannot get key working.

    render() {
        let message;

        if (this.props.userName === "Me") {
            message = <div className="my-message" >
                <p>{this.props.userName}: {this.props.message}</p>
            </div>
        } else {
            message = <div className="auto-message">
                <p>{this.props.userName}: {this.props.message}</p>
            </div>
        }

        return (
            <React.Fragment>
                {message}
            </React.Fragment>
        )
    }
}

export default ChatBubble;