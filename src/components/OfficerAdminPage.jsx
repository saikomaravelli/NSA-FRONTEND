import { Component } from "react";
import OfficerService from "../services/OfficerService";


class OfficerAdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

            pvalue:'_add',
            // state:'all',
            state: this.props.match.params.state,    
            officer:''

            

        }
        this.addofficer=this.addofficer.bind(this);
        this.viewOfficerProfile=this.viewOfficerProfile.bind(this);
        this.updateofficer=this.updateofficer.bind(this);
        this.logout=this.logout.bind(this);
        this.changeOfficerPassword=this.changeOfficerPassword.bind(this);
    }
    componentDidMount()
    {
        OfficerService.getOfficerByState(this.state.state).then(res=>
            {
                this.setState({officer:res.data})
            });
    }

    viewOfficerProfile()
    {
        this.props.history.push(`/viewOfficerProfile/${this.state.state}`)
    }

    updateofficer()
    {
        this.props.history.push(`/officerAdminUpdate/${this.state.state}`)
    }

    changeOfficerPassword()
    {
        this.props.history.push(`/changeOfficerPassword/${this.state.state}`)
    }
    addofficer()
    {
        this.props.history.push(`/officerRegistrationPage/${this.state.pvalue}`)
    }

    logout()
    {
        this.props.history.push('/login')               //redirects to login page
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Welcome To {this.state.officer.name}</h2>

                <div className="text-right" >

                    <button className="btn btn-outline-danger" onClick={this.logout}>
                        Logout</button>
                        </div>
                <div style={{ border: 'none' }} className="card col-md-8 mx-auto table-borderless">
                        <button className="btn btn-outline-primary mr-5" onClick={this.viewOfficerProfile} >
                            View my Profile

                         </button>
                         <br></br>
                         
                        <button className="btn btn-outline-primary mr-5" onClick={this.changeOfficerPassword} >
                            Change Password
                        </button>
                         <br></br>
                        <button className="btn btn-outline-primary mr-5" onClick={this.addofficer}>
                            Add Officer
                        </button>
                        
                </div>

            </div>
        );
    }
}

export default OfficerAdminPage;