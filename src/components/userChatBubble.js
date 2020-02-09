import React from 'react';


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
        // need this to return a component
    }

    render() {
        return (
            <React.Fragment>
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