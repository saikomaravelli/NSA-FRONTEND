import { Component } from "react";
import InstituteService from "../services/InstituteService";

class ViewInstituteApprovalStatus extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userId: this.props.match.params.userId,
      institute: '',
      approvalMessage: ''
    }
  }
  componentDidMount() {
    InstituteService.statusUpdate(this.state.userId).then((resp) => {
      let institute = resp.data
      this.setState({
        institute: institute,
        approvalMessage: institute.status
      })
    });
  }
  back = () => {
    this.props.history.push(`/instituteWelcomePage/${this.state.institute.userId}`);
  }
  render() {
    return (
      <div>
        <div className=" card container">
          <table>
            <tr>
          <td><h2 className="text-center" style={{ color: '#1fdee3' }}>Your institution status is {this.state.approvalMessage}</h2></td>
          {/* <td><button >X</button></td> */}
          </tr>
          </table>
        </div>
        <br />
        <div style={{ backgroundColor: '#F2FEFF' }} className="card col-md-5 offset-md-3 p-3 mb-2 text-dark">
          <h2 className="text-center"> Profile:</h2>

          <br></br>
          <div className="card col-md-8 offset-md-2 ">
            <table className="table table-borderless" >
              <thead>
                <tr key={this.state.institute.userId}>
                  <tr>
                  <th> User ID:</th>
                  <td> {this.state.institute.userId} </td>
                  </tr>
                  <tr>
                    <th> Code:</th>
                    <td> {this.state.institute.code} </td>
                  </tr>
                  <tr>
                    <th>Approval status:</th>
                    <td>{this.state.institute.status}</td>
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
      </div>);
  }
}

export default ViewInstituteApprovalStatus;