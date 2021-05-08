import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import StudentService from "../services/StudentService";


class StudentHomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // uid: 'S7',
            uid: this.props.match.params.userId,
            student: '',
        };
        this.UpdateDetails = this.UpdateDetails.bind(this);
    }
    componentDidMount() {
        StudentService.getStudentbyUserId(this.state.uid).then((res) => {
            this.setState({ student: res.data });
        });
    }
    logout = (e) => {
        this.props.history.push("/login");
    }
    UpdateDetails = (e) => {
        this.props.history.push(`/updatestudent/${this.state.uid}`);
    }
    ViewProfile = (e) => {
        this.props.history.push(`/viewstudentprofile/${this.state.uid}`);
    }
    applyScholarship = ()=>{
        this.props.history.push(`/createscholarship/${this.state.uid}`);
    }
    viewStudentScholarship= ()=>{
        this.props.history.push(`/viewStudentScholarship/${this.state.uid}`);
    }
    changePassword=(e)=>{
        this.props.history.push(`/changepassword/${this.state.uid}`);
    }
    render() {
        return (
            <div >
                <h2 className="text-center font-weight-bold">Welcome {this.state.student.fullName}</h2>
                <div className="offset-md-11">
                    <button className="btn btn-outline-danger" onClick={this.logout}>Logout</button>
                </div>
                <div className="text-center">
                    <div style={{ border: 'none' }} className="card col-md-8 mx-auto table-borderless">
                        
                            
                                <button className="btn btn-outline-primary mr-5" onClick={this.ViewProfile}>View Profile</button>
                          
                            <br></br>
                            
                                <button className="btn btn-outline-primary mr-5" onClick={this.UpdateDetails}>Update Details</button>
                            <br></br>
                            
                                <button className="btn btn-outline-primary mr-5" onClick={this.changePassword}>Change Password</button>
                            <br></br>
                            
                                <button className="btn btn-outline-primary mr-5" onClick={this.applyScholarship} >Apply Scholarship</button>
                            
                            <br></br>
                           
                                <button className="btn btn-outline-primary mr-5" onClick={this.viewStudentScholarship}>View Scholarship Status</button>
                            
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default StudentHomePage;