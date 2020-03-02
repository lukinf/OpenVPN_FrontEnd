import React, { Component } from 'react';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: 'lukas@fridl.cz',
            password: '123456'
        }

        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);

        this.onButtonLoginClick = this.onButtonLoginClick.bind(this);
        this.handleResponse = this.handleResponse.bind(this);
    };

    handleChangeEmail(event) {
        this.setState({ email: event.target.value });
    }

    handleChangePassword(event) {
        this.setState({ password: event.target.value });
    }

    onButtonLoginClick(event) {

        console.warn(event.target.id);

        const requestOptions = {
            // mode: "no-cors",
            method: 'GET',
            headers: {
                'Authorization': 'Basic ' + btoa(this.state.email + ':' + this.state.password)
            }
        };

        fetch('account', requestOptions).then((response) => response.json()).then((responseJson) => {
            console.log(responseJson);
        })
    }

    handleResponse(response) {
        console.log(response.json());
    }

    render() {
        return (
            <div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email"
                        value={this.state.email} onChange={this.handleChangeEmail} />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
                        value={this.state.password} onChange={this.handleChangePassword} />
                </div>
                <button type="submit" class="btn btn-primary" onClick={this.onButtonLoginClick}>Login</button>
            </div>
        );
    }
}

export default Login;