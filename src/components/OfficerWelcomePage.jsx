import { Component } from "react";
import OfficerService from "../services/OfficerService";

class OfficerWelcomePage extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            
            state:this.props.match.params.state,
            officer:''
            //state:'AndhraPradesh'

        }
        this.logout=this.logout.bind(this);
        this.viewOfficerProfile=this.viewOfficerProfile.bind(this);
        this.reviewInstitute=this.reviewInstitute.bind(this);
        this.reviewScholarship=this.reviewScholarship.bind(this);
        this.viewStateInstitutes=this.viewStateInstitutes.bind(this);
        this.viewStateScholarships=this.viewStateScholarships.bind(this);
        this.changeOfficerPassword=this.changeOfficerPassword.bind(this);

    }
    componentDidMount()
    {
        OfficerService.getOfficerByState(this.state.state).then((res)=>
        {
            this.setState({officer:res.data})
        });

    }

    viewOfficerProfile()
    {
        this.props.history.push(`/viewOfficerProfile/${this.state.officer.state}`)
    }


    changeOfficerPassword()
    {
        this.props.history.push(`/changeOfficerPassword/${this.state.state}`)
    }

    viewStateInstitutes()
    {
        this.props.history.push(`/viewStateInstitutes/${this.state.state}`)
    }

    viewStateScholarships()
    {
        this.props.history.push(`/viewStateScholarships/${this.state.state}`)
    }

    reviewInstitute()
    {
        this.props.history.push(`/reviewInstituteByOfficer/${this.state.officer.name}/${this.state.state}`)
    }

    reviewScholarship()
    {
        this.props.history.push(`/reviewScholarshipByOfficer/${this.state.officer.name}/${this.state.state}`)
    }

    

    logout()
    {
        this.props.history.push('/login')
    }
    render() { 
        return ( 
        <div>
            <h2 className="text-center">Welcome {this.state.officer.name}</h2>
                <div className="text-right">
                    <button className="btn btn-outline-danger" onClick={this.logout}>
                        Logout
          </button>
                </div>

                <div className="text-center">
                    <div style={{ border: 'none' }} className="card col-md-8 mx-auto table-borderless">
                        <button className="btn btn-outline-primary mr-5" onClick={this.viewOfficerProfile} >
                            View my Profile
            </button>
                       

            <br></br>
                        <button className="btn btn-outline-primary mr-5" onClick={this.changeOfficerPassword} >
                            Change Password
            </button>

            <br></br>
                        <button className="btn btn-outline-primary mr-5" onClick={this.viewStateInstitutes} >
                            View Institutes
            </button>

           

            <br></br>
                        <button className="btn btn-outline-primary mr-5" onClick={this.viewStateScholarships} >
                            View Scholarships
            </button>


                        <br></br>
                        <button className="btn btn-outline-primary mr-5" onClick={this.reviewInstitute} >
                            Review Institutes
            </button>

                        <br></br>
                        <button className="btn btn-outline-primary mr-5" onClick={this.reviewScholarship}>
                            Review Scholarships
            </button>
                    </div>
                </div>
        </div> );
    }
}
 
export default OfficerWelcomePage;