import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
class MinistryWelcomePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: this.props.match.params.userId
        }
        this.grantScholarships = this.grantScholarships.bind(this);
        this.ViewAllScholarships = this.ViewAllScholarships.bind(this);

    }



    grantScholarships() {
        this.props.history.push(`/grantScholarships/${this.state.userId}`);
    }
    ViewAllScholarships() {
        this.props.history.push(`/viewAllScholarships/${this.state.userId}`);
    }
    logout = () => {
        this.props.history.push('/login');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Welcome Minister</h2>
                <div className="text-right">
                    <button className="btn btn-outline-danger" onClick={this.logout}>
                        Logout
                    </button>
                </div>

                <div className="text-center">
                    <div style={{ border: 'none' }} className="card col-md-8 mx-auto table-borderless">
                        <button className="btn btn-outline-primary mr-5" onClick={this.grantScholarships}>
                            GrantScholarships
                         </button>
                        <br></br>
                        <button className="btn btn-outline-primary mr-5" onClick={this.ViewAllScholarships} >
                            View All Scholarships
                        </button>
                        <br></br>

                    </div>
                </div>
            </div>
        );
    }
}

export default MinistryWelcomePage;