import { Component } from "react";
import InstituteService from "../services/InstituteService";

class ViewInstituteProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instituteCode: this.props.match.params.instituteCode,
      institute: ''
    }

  }
  componentDidMount() {
    InstituteService.getInstitute(this.state.instituteCode).then(resp => {   //here institute details are fetched
      this.setState({ institute: resp.data });
    });
  }
  back = () => {                                                                          //redirects back to home page
    this.props.history.push(`/instituteWelcomePage/${this.state.institute.userId}`);
  }
  render() {
    return (
      <div>
        <div style={{ backgroundColor: '#F2FEFF' }} className="card col-md-5 offset-md-3 p-3 mb-2 text-dark">
          <h2 className="text-center">My Profile:</h2>

          <br></br>
          <div className="card col-md-8 offset-md-2 ">
            <table className="table table-borderless" >
              <thead>
                <tr key={this.state.institute.userId}>
                  <tr>
                    <th> User ID:</th>
                    <td> {this.state.institute.userId} </td>
                  </tr>
                  {/* <tr>
                        <th> Password:</th>
                        <td> {this.state.institute.password} </td>
                      </tr> */}
                  <tr>
                    <th> Code:</th>
                    <td> {this.state.institute.code} </td>
                  </tr>
                  <tr>
                    <th> Type:</th>
                    <td> {this.state.institute.type}</td>
                  </tr>
                  <tr>
                    <th> Name:</th>
                    <td> {this.state.institute.name}</td>
                  </tr>
                  <tr>
                    <th> University:</th>
                    <td> {this.state.institute.university}</td>
                  </tr>
                  <tr>
                    <th> Address:</th>
                    <td> {this.state.institute.address}</td>
                  </tr>
                  <tr>
                    <th> City:</th>
                    <td> {this.state.institute.city}</td>
                  </tr>
                  <tr>
                    <th> State:</th>
                    <td> {this.state.institute.state}</td>
                  </tr>
                  <tr>
                    <th> YearOpen:</th>
                    <td> {this.state.institute.yearOpen}</td>
                  </tr>
                  <tr>
                    <th> Telephone:</th>
                    <td> {this.state.institute.telephone}</td>
                  </tr>
                  <tr>
                    <th> Principal:</th>
                    <td> {this.state.institute.principal}</td>
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

export default ViewInstituteProfile;