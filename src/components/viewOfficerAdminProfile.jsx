import { Component } from "react";
import OfficerService from "../services/OfficerService";

class viewOfficerAdminProfile extends Component {
    constructor(props)
    {
        super(props);
        this.state={

            state:this.props.match.params.state,
            officer:''

        }
         this.back=this.back.bind(this);
    }

    componentDidMount()
    {
        OfficerService.getOfficerByState(this.state.state).then((res)=>
        {
            this.setState({officer:res.data})                             //fetches office admin data
        });
    }

    back()
    {
        this.props.history.push(`/officerAdminPage/${this.state.state}`)
    }
    
    render() { 
        return (
            <div>
                     <div style={{ backgroundColor: '#F2FEFF' }} className="card col-md-6 offset-md-3 offset-md-3 p-3 mb-2 text-dark">
          <h2 className="text-center">Your Profile:</h2>

          <br></br>
          <div className="card col-md-8 offset-md-2 ">
            <table className="table table-borderless">
              <thead>
                <tr key={this.state.officer.state}>
                  <tr>
                    <th> ID:</th>
                    <td> {this.state.officer.userId} </td>
                  </tr>
                  <tr>
                    <th> Name:</th>
                    <td> {this.state.officer.name}</td>
                  </tr>
                  <tr>
                    <th> State:</th>
                    <td> {this.state.officer.state}</td>
                  </tr>
                 
                </tr>
              </thead>
            </table>
            <div className="text-center">
              <button className="btn btn-outline-info" onClick={this.back}>
                Back
              </button>
            </div>
          </div>
        </div>
            </div>
        );
    }
}
 
export default ViewOfficerAdminProfile;