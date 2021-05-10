import { Component } from "react";
import OfficerService from "../services/OfficerService";

class ReviewInstituteByOfficer extends Component {

    constructor(props)
    {
        super(props);
        this.state={
            name:this.props.match.params.name,
            state:this.props.match.params.state,
            instituteList:[]

        }
        this.back=this.back.bind(this);
    }

    componentDidMount()
    {
        OfficerService.reviewInstitute(this.state.name,this.state.state).then(res=>
            {
                this.setState({instituteList:res.data})
            });

    }

    back()
    {
        this.props.history.push(`/officerWelcomePage/${this.state.state}`)      //redirects back to homepage
    }
    
    render() { 
        return (
            <div className="container-fluid">
            <div className="row">
                <div className="card">
                    <div className="card-header bg-primary text-center">
                          <h3>Review Institutes</h3>
                    </div>
                    <br></br>
                    <div>
                             <button className="btn btn-outline-info" onClick={this.back}>
                                 Back
                               </button>
                            </div>
                    <br></br>
                    <div className="card-body" >
                        <table className="table table-striped table-bordered">
                                
                        <thead>
                               
                                <tr>
                                   <th>Institute Code</th>
                                   <th>Institute Category</th>
                                   <th>Institute Type</th>
                                   <th>Institute Name</th>
                                   <th>Institute University</th>
                                   <th>Institute Address</th>
                                   <th>Institute City</th>
                                   <th>Institute State</th>
                                   <th>Institute YearOpen</th>
                                   <th>Institute Telephone</th>
                                   <th>Institute Principal</th>
                                   <th>Institute Status</th>
                                </tr>
                                </thead>
                                <tbody>
                               
                                   {
                                       this.state.instituteList.map((institute)=>
                                       (
                                        <tr>
                                            <td>{institute.code}</td>
                                            <td>{institute.category}</td>
                                            <td>{institute.type}</td>
                                            <td>{institute.name}</td>
                                            <td>{institute.university}</td>
                                            <td>{institute.address}</td>
                                            <td>{institute.city}</td>
                                            <td>{institute.state}</td>  
                                            <td>{institute.yearOpen}</td>
                                            <td>{institute.telephone}</td>
                                            <td>{institute.principal}</td>
                                            <td>{institute.status}</td>
                                        </tr>

                                       ))

                                   }
                               
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
          );
    }
}
 
export default ReviewInstituteByOfficer;