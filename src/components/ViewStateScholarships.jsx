import { Component } from "react";
import OfficerService from "../services/OfficerService";


class ViewStateScholarships extends Component {

    constructor(props)
    {   
        super(props);
        this.state={
            
            state:this.props.match.params.state,
            scholarshipList:[]

        }
        this.back=this.back.bind(this);
    }

    componentDidMount()
    {
        OfficerService.viewScholarshipByState(this.state.state).then(res=>
            {
                this.setState({scholarshipList:res.data},()=>console.log(this.state.scholarshipList))
            });

    }

    back()
    {
        this.props.history.push(`/officerWelcomePage/${this.state.state}`)
    }
    
    render() { 
        return (
            <div className="container-fluid">
            <div className="row">
                <div className="card">
                    <div className="card-header bg-primary text-center">
                          <h3>Review Scholarships</h3>
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
                                   <th>Scholarship ID</th>
                                   <th> Scholarship Name</th>
                                   <th>Field Of Study</th>
                                   <th>Course</th>
                                   <th>CourseYear</th>
                                   <th>SSC Score</th>
                                   <th>HSC Score</th>
                                   <th>FamilyIncome</th>
                                   <th>Student ID</th>
                                   <th> Bank Name</th>
                                   <th> Student Name</th>
                                   <th>Institute Code</th>
                                   <th> Institute Name</th>
                                   <th> Institute Status</th>
                                   <th>App Status</th>
                                   <th>Approval</th>
                                   
                                </tr>
                                </thead>
                              <tbody>
                                   {
                                       this.state.scholarshipList.map((scholarship)=>
                                       (
                                        <tr key={scholarship.scholarshipId}>
                                           <td>{scholarship.scholarshipId}</td>
                                           <td>{scholarship.scholarshipName}</td>
                                           <td>{scholarship.field}</td>
                                           <td>{scholarship.course}</td>
                                           <td>{scholarship.courseYear}</td>
                                           <td>{scholarship.sscScore}</td>
                                           <td>{scholarship.hscScore}</td>
                                           <td>{scholarship.familyIncome}</td>
                                           <td>{scholarship.student.studentId}</td>
                                           <td>{scholarship.bankName}</td>
                                           <td>{scholarship.student.fullName}</td>
                                           <td>{scholarship.institute.code}</td>
                                           <td>{scholarship.institute.name}</td>
                                           <td>{scholarship.institute.status}</td>
                                           <td>{scholarship.appStatus}</td>
                                           <td>{scholarship.approval}</td>
                                            
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
 
export default ViewStateScholarships;