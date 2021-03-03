import React from 'react';

class GetTweets extends React.Component {

    renderTweets(i) {
        return (
            <li>{`Tweets${i}`}</li>
        );
    }

    render() {
        return (
        <div>
            {this.renderTweets(0)}
            {this.renderTweets(1)}
            {this.renderTweets(2)}
            {this.renderTweets(3)}
            {this.renderTweets(4)}
            {this.renderTweets(5)}
            {this.renderTweets(6)}
            {this.renderTweets(7)}
            {this.renderTweets(8)}
        </div>
        );
    }
}

export default GetTweets;