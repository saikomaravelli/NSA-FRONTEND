import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import StudentService from '../services/StudentService';


class ViewStudentProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            uid: this.props.match.params.uid1,
            studentprofile: []

        }
    }
    componentDidMount() {
        StudentService.getStudentbyUserId(this.state.uid).then(res => {
            this.setState({ studentprofile: res.data });
        });
    }
    back = (e) => {
        this.props.history.push(`/StudentHomePage/${this.state.uid}`);
      };
    render() {
        return (
            <div>
                <div style={{ backgroundColor: '#F2FEFF' }} className="card col-md-6 offset-md-3 offset-md-3 p-3 mb-2 text-dark">
                <h2 className="text-center font-weight-bold">{this.state.studentprofile.fullName} Profile</h2>

                <div className="card col-md-6 offset-md-3">
                
                    <table className="offset-md-1">
                        <tr>
                        <tr>
                            <th>UserId: </th><td >{this.state.studentprofile.userId}</td>
                        </tr>
                        <tr>
                            <th>StudentId: </th><td>{this.state.studentprofile.studentId}</td>
                        </tr>
                        <tr>
                            <th>Full Name: </th><td>{this.state.studentprofile.fullName}</td>
                        </tr>
                        <tr>
                            <th>Birthdate: </th><td>{this.state.studentprofile.birthdate}</td>
                        </tr>
                        <tr>
                            <th>Gender: </th><td>{this.state.studentprofile.gender}</td>
                        </tr>
                        <tr>
                            <th>Mobile: </th><td>{this.state.studentprofile.mobile}</td>
                        </tr>
                        <tr>
                            <th>Email: </th><td>{this.state.studentprofile.email}</td>
                        </tr>
                        <tr>
                            <th>Address: </th><td>{this.state.studentprofile.address}</td>
                        </tr>
                        <tr>
                            <th>City: </th><td>{this.state.studentprofile.city}</td>
                        </tr>
                        <tr>
                            <th>Aadhar: </th><td>{this.state.studentprofile.aadhar}</td>
                        </tr>
                        </tr>
                    </table>
                    
                </div>
                <div className="text-center">
                       <button className="btn btn-outline-info" onClick={this.back}>Back</button>
                </div>
                </div>
            </div>




        )
    }
}

export default ViewStudentProfile;