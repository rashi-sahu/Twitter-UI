import React from 'react';
import { Link} from 'react-router-dom';

class LogOut extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        localStorage.removeItem('login');
    }

    render() {
        return (
            <div className="container">
                <div className="col-sm-3 ">
                    <Link to="/login" className="btn btn-warning btn-lg" onClick={this.handleSubmit} >LogOut</Link>
                </div>
            </div>
        );
    }
}

export default LogOut;