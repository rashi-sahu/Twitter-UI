import React from 'react';
import ReactDOM from 'react-dom';
import LogIn from './logIn';
import GetTweets from './getTweets';
import { BrowserRouter, Route} from 'react-router-dom';

ReactDOM.render((
  <BrowserRouter>
    <Route exact path = "/" component = {LogIn} />
    <Route path = "/gettweets" component = { props => (<GetTweets login = {(JSON.parse(localStorage.getItem('login'))?.login ) ?? false} />)} />
    <Route path = "/login" component = {LogIn} />
  </BrowserRouter>
), document.getElementById('root'))
