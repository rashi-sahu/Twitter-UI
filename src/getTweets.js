import React from 'react';
const axios = require("axios");

class GetTweets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tweets: [],
            error: null
        };
    }

    callApi = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/rashi`, { crossDomain: true });
            this.setState({
                tweets: response.data,
            });
        }
        catch (e) {
            this.setState({
                error: e,
            });
        }
    }

    componentDidMount() {
        this.callApi();
    }

    render() {
        if(!this.state.error){
            return (
                <ul>
                    {this.state.tweets.map(d => (<li>{d.description}</li>))}
                </ul>
            );
        }
        else{
            return(
                <p>{JSON.stringify(this.state.error.message)}</p>
            );
        }
    }
}

export default GetTweets;