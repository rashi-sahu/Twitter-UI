import React from 'react';
import { Link, Redirect} from 'react-router-dom';
import GetTweets from './getTweets';

class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {email:"", password:"", login:false};
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.email);
        console.log(this.state.password);
        fetch('http://127.0.0.1:8000/api/login', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'*'
            },
            body: JSON.stringify(this.state),
        }).then(
            response => response.json()
        ).then(data => {
            localStorage.setItem('login', JSON.stringify({
                login:true,
                token:data.token
            }))
            this.setState({login:true});
        });
    }

    componentDidMount(){
        let store = JSON.parse(localStorage.getItem('login'));
        if(store && store.login){
            this.setState({login: store.login});
        }
    }

    render() {
        const isLoggedIn = this.state.login;
        console.log("is logged in ");
        console.log(isLoggedIn);
        if(!isLoggedIn){
        return (
            <div className="container">
                <div className="col-sm-6 col-sm-offset-3">

                    <h1><span className="fa fa-sign-in"></span> Login</h1>

                    <form className="needs-validation" noValidate>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" className="form-control" onChange={this.handleChange} id="email" name="email" placeholder="name@example.com" required />
                            <div className="invalid-feedback">Please fill out email.</div>
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" onChange={this.handleChange} id="password" name="password" placeholder="password" required />
                            <div className="invalid-feedback">Please fill out password.</div>
                        </div>

                        <Link to="/login" className="btn btn-warning btn-lg" onClick={this.handleSubmit} >Login</Link>
                    </form>

                    <hr />

                    <p>Need an account? <a href="/signup">Signup</a></p>
                    <p>Or go <a href="/">home</a></p>

                </div>
            </div>
        );
        }
        else{
            return ( 
                <Redirect push to="/gettweets" Component = {<GetTweets login={this.state.login}/>}/>
            );
        }
    }
}

export default LogIn;