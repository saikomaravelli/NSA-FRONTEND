import { Component } from "react";
import InstituteService from "../services/InstituteService";
import "bootstrap/dist/css/bootstrap.min.css";
class InstituteWelcomePageComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: this.props.match.params.userId,
            //  userId: 'I2',
            institute: ''
        }
        this.viewProfile = this.viewProfile.bind(this);
        this.updateProfile = this.updateProfile.bind(this);
        this.viewApprovalStatus = this.viewApprovalStatus.bind(this);
    }

    componentDidMount() {
        InstituteService.statusUpdate(this.state.userId).then((resp) => {
            this.setState({ institute: resp.data });
        });
    }

    logout = (e) => {
        console.log("in logout");
        this.setState({userId:''});
        this.props.history.push("/login");
    }
    viewProfile() {
        this.props.history.push(`/viewInstituteProfile/${this.state.institute.code}`);
    }
    changeInstitutePassword = ()=>{
        this.props.history.push(`/changeInstitutePassword/${this.state.institute.code}`)
    }
    updateProfile(){
        this.props.history.push(`/instituteRegistration/${this.state.institute.userId}`)
    }
    viewApprovalStatus(){
        this.props.history.push(`/viewInstituteStatus/${this.state.institute.userId}`);
    }
    render() {
        return (
            <div>
                <h2 className="text-center">Welcome {this.state.institute.name}</h2>
                <div className="text-right">
                    <button className="btn btn-outline-danger" onClick={this.logout}>
                        Logout
                    </button>
                </div>

                <div className="text-center">
                    <div style={{ border: 'none' }} className="card col-md-8 mx-auto table-borderless">
                        <button className="btn btn-outline-primary mr-5" onClick={this.viewProfile}>
                            View my Profile
                         </button>
                         <br></br>
                        <button className="btn btn-outline-primary mr-5" onClick={this.changeInstitutePassword} >
                            Change Password
                        </button>
                        <br></br>
                        <button className="btn btn-outline-primary mr-5" onClick={this.updateProfile} >
                            Update my Profile
                        </button>
                        <br></br>
                        <button className="btn btn-outline-primary mr-5" onClick={this.viewApprovalStatus}>
                            view Approval status
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default InstituteWelcomePageComponent;