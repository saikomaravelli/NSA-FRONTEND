
import React, { Component } from 'react'
import MinisterService from '../services/MinisterService';
// import MinisterService from './MinisterService';
//import 'bootstrap/dist/css/bootstrap.css';


class ViewAllScholarships extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: this.props.match.params.userId,
            scholarshipList: []

        }
        this.cancel = this.cancel.bind(this);


    }
    componentDidMount() {
        MinisterService.ViewAllScholarships().then(res => {
            this.setState({ scholarshipList: res.data });
        })


    }
    cancel(){
        this.props.history.push(`/MinistryWelcomePage/${this.state.userId}`);
  }
 

    render() { 
        return (
            <div className="container-fluid">
            <div className="row">
            <div className="card">
                <div className="container-fluid">
                    <div className="card-header bg-primary text-center">
         
                          <h3>Reviewed Scholarships</h3>
                    </div>
                    <br></br>
                    <div>
                             <button className="btn btn-outline-info" onClick={this.cancel.bind(this)}>
                                 Back
                               </button>
                            </div>
                   
                    <div className="card-body" >
                        <table className=" table-striped table-bordered ">
        
                                
                        <thead>
                               
                        <tr >
                                <th > Scholarship ID</th>
                                <th  > Scheme</th>
                                <th > Field</th>

                                <th  >Course</th>
                                <th >CourseYear</th>
                                <th >SSC score</th>
                                <th >HSC Score</th>
                                <th >FamilyIncome</th>
                                <th >BankName</th> 
                                 <th >BankIFSC</th>
                                <th >AccountNo</th> 
                                <th >Institution status</th>
                                <th >App status</th>
                                <th  >Status</th>


                            
                            </tr>
                                </thead>
                                <tbody>
                               
                                   {
                                       this.state.scholarshipList.map((scholarship) =>
                                       (
                                        <tr >
                                        <td > {scholarship.scholarshipId}  </td>
                                        <td > {scholarship.scholarshipName} </td>
                                        <td> {scholarship.field}</td>
                                        <td> {scholarship.course} </td>
                                        <td> {scholarship.courseYear} </td>
                                        <td> {scholarship.sscScore}</td>
                                        <td> {scholarship.hscScore}</td>
                                        <td> {scholarship.familyIncome} </td>
                                         <td> {scholarship.bankName} </td> 
                                        <td> {scholarship.bankIfsc}</td>
                                        <td> {scholarship.accountNo}</td> 
                                        <td> {scholarship.institute.status}</td>
                                        <td> {scholarship.appStatus}</td>
                                        <td ><b> {scholarship.approval}</b></td>
    
    
    
    
    
    
                                    </tr>

                                       ))

                                   }
                               
                            </tbody>
                        </table>
                    </div>
                </div>
                </div>
            </div>
        </div>
          );
    }
}
  

export default ViewAllScholarships;
