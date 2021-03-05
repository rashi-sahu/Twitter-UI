import React from 'react';
const axios = require("axios");

class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {email:"", password:""};
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
            crossDomain: true,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state),
        }).then(response => response.json()).then(data => console.log(data));
    }

    render() {
        return (
            <div class="container">
                <div class="col-sm-6 col-sm-offset-3">

                    <h1><span class="fa fa-sign-in"></span> Login</h1>

                    <form onSubmit={this.handleSubmit} class="needs-validation" novalidate>
                        <div class="form-group">
                            <label>Email</label>
                            <input type="text" class="form-control" onChange={this.handleChange} id="email" name="email" placeholder="name@example.com" required />
                            <div class="invalid-feedback">Please fill out email.</div>
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" class="form-control" onChange={this.handleChange} id="password" name="password" placeholder="password" required />
                            <div class="invalid-feedback">Please fill out password.</div>
                        </div>

                        <button type="submit" class="btn btn-warning btn-lg">Login</button>
                    </form>

                    <hr />

                    <p>Need an account? <a href="/signup">Signup</a></p>
                    <p>Or go <a href="/">home</a></p>

                </div>
            </div>
        );
    }
}

export default LogIn;