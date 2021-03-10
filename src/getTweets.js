import React from 'react';
import LogIn from './logIn';
import LogOut from './logout';
import { Redirect} from 'react-router-dom';
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
        if(!this.state.error && this.props.login){
            return (
                <div>
                    <ul>
                        {this.state.tweets.map(d => (<li key={d.id}>{d.description}</li>))}
                    </ul>
                    <LogOut/>
                </div>
            );
        }
        else if (!this.props.login){
            return (
                <Redirect push to="/login" Component = {<LogIn />}/>
            );
        }
        else{
            return(
                <div>
                    <p>{JSON.stringify(this.state.error.message)}</p>
                    <LogOut/>
                </div>
            );
        }
    }
}

export default GetTweets;