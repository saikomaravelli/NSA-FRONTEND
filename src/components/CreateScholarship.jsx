import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ScholarshipService from "../services/ScholarshipService";
// import ScholarshipService from "./ScholarshipService";

class CreateScholarship extends Component {

    constructor(props) {
        super(props);

        this.state = {
            //  pvalue: this.props.match.params.scholarshipId,


            scholarshipName: '',
            field: '',
            course: '',
            courseYear: new Date().getFullYear(),
            sscScore: '',
            hscScore: '',
            familyIncome: '',
            bankName: '',
            bankIfsc: '',
            accountNo: '',
            userId: this.props.match.params.studUserId,
            //    userId:'s5',
            instituteCode: '',


        }
        this.createScholarship = this.createScholarship.bind(this);
        this.cancel = this.cancel.bind(this);
    }





    changeScholarshipNameHandler = (event) => {
        this.setState({ scholarshipName: event.target.value });

    }
    changeSscScoreHandler = (event) => {
        this.setState({ sscScore: event.target.value });

    }
    changeHscScoreHandler = (event) => {
        this.setState({ hscScore: event.target.value });

    }
    changeFamilyIncomeHandler = (event) => {
        this.setState({ familyIncome: event.target.value });

    }
    changeBankNameHandler = (event) => {
        this.setState({ bankName: event.target.value });

    }
    changeBankIfscHandler = (event) => {
        this.setState({ bankIfsc: event.target.value });

    }
    changeAccountNoHandler = (event) => {
        this.setState({ accountNo: event.target.value });

    }
    changeCourseHandler = (event) => {
        this.setState({ course: event.target.value });

    }
    changeFieldHandler = (event) => {
        this.setState({ field: event.target.value });

    }
    changeInstituteCodeHandler = (event) => {
        this.setState({ instituteCode: event.target.value });

    }


    fieldsCheck = () => {                                 //method to validate whether all the input fields are empty or not
        if (this.state.scholarshipName.length === 0) {
            alert("scholarshipName cannot be empty");
            document.getElementById("scholarshipName").focus();
            return false;
        }


        else if (this.state.course.length === 0) {
            alert("Course  cannot be empty");
            document.getElementById("course").focus();
            return false;
        }

        else if (this.state.sscScore.length === 0) {
            alert("sscScore  cannot be empty");
            document.getElementById("sscScore").focus();
            return false;
        }
        else if (this.state.hscScore.length === 0) {
            alert("hscScore  cannot be empty");
            document.getElementById("hscScore").focus();
            return false;
        }
        else if (this.state.familyIncome.length === 0) {
            alert("familyIncome cannot be empty");
            document.getElementById("familyIncome").focus();
            return false;
        }
        else if (this.state.familyIncome < 0) {
            alert("familyIncome should not be less than zero");
            document.getElementById("familyIncome").focus();
            return false;
        }
        else if (this.state.bankName.length === 0) {
            alert("bankName  cannot be empty");
            document.getElementById("bankName").focus();
            return false;
        }
        else if (this.state.bankIfsc.length === 0) {
            alert("bank Ifsc field cannot be empty");
            document.getElementById("bankIfsc").focus();
            return false;
        }
        else if (this.state.accountNo.length === 0) {
            alert("accountNo field cannot be empty");
            document.getElementById("accountNo").focus();
            return false;
        }
        else if (this.state.instituteCode.length === 0) {
            alert("instituteCode cannot be empty");
            document.getElementById("instituteCode").focus();
            return false;
        }
        else if (this.state.field.length === 0) {
            alert("field cannot be empty");
            document.getElementById("field").focus();
            return false;
        }

        return true;
    }










    createScholarship = (event) => {
        event.preventDefault();
        if (this.fieldsCheck()) {
            let scholarship = {
                scholarshipId: this.state.scholarshipId,
                scholarshipName: this.state.scholarshipName,
                field: this.state.field,
                course: this.state.course,
                category: this.state.category,
                courseYear: this.state.courseYear,
                sscScore: this.state.sscScore,
                hscScore: this.state.hscScore,
                familyIncome: this.state.familyIncome,
                bankName: this.state.bankName,
                bankIfsc: this.state.bankIfsc,
                accountNo: this.state.accountNo,

                student: { userId: this.state.userId },
                institute: { code: this.state.instituteCode }

            };

            console.log('scholarship => ' + JSON.stringify(scholarship));

            // if(this.state.pvalue === '_add')

            ScholarshipService.createScholarship(scholarship).then(res => {
                console.log("scholarsip added sucessfully");
                alert("You have successfully applied for scholarship");
                this.props.history.push(`/StudentHomePage/${this.state.userId}`);

            }
            );
        }


    }



    cancel() {
        this.props.history.push(`/StudentHomePage/${this.state.userId}`);
    }


    render() {
        return (

            <div className="container">
                <div className="row  col-md-7 offset-md-3">
                    <div className="card">

                        <div className="card-header text-center  text-white " style={{ backgroundColor: '#1fdee3' }}>
                            <h2>Scholarship Registration Form</h2>
                        </div>
                        <div className="card-body offset-md-1">
                            <form onSubmit={this.createScholarship}>
                                <table>
                                    <tbody>




                                        <tr>
                                            <td>ScholarshipName:</td>
                                            <td><input type="text" placeholder="Enter scholarship Name" id="scholarshipName" className="form-control" onChange={this.changeScholarshipNameHandler} value={this.state.scholarshipName} /></td>
                                        </tr>


                                        <tr>
                                            <td>SSC Score:</td>
                                            <td><input type="number" min="0" max="100" placeholder="Enter ssc score" id="sscScore" className="form-control" onChange={this.changeSscScoreHandler} value={this.state.sscScore} /></td>
                                        </tr>

                                        <tr>
                                            <td>HSC Score:</td>
                                            <td><input type="number" min="0" max="100" placeholder="Enter hsc score" id="hscScore" className="form-control" onChange={this.changeHscScoreHandler} value={this.state.hscScore} /></td>
                                        </tr>

                                        <tr>
                                            <td>FamilyIncome:</td>
                                            <td><input type="text" placeholder="Enter Family Income" id="familyIncome" className="form-control" onChange={this.changeFamilyIncomeHandler} value={this.state.familyIncome} /></td>
                                        </tr>

                                        <tr>
                                            <td>BankName:</td>
                                            <td><input type="text" placeholder="Enter BankName" id="bankName" className="form-control" onChange={this.changeBankNameHandler} value={this.state.bankName} /></td>
                                        </tr>

                                        <tr>
                                            <td>BankIFSC:</td>
                                            <td><input type="text" placeholder="Enter Bank IFSC" id="bankIfsc" className="form-control" onChange={this.changeBankIfscHandler} value={this.state.bankIfsc} /></td>
                                        </tr>

                                        <tr>
                                            <td>Account no:</td>
                                            <td><input type="text" placeholder="Enter acc no" pattern="(^$|[0-9]{12})" title="account no should be 12 digits" id="accountNo" className="form-control" onChange={this.changeAccountNoHandler} value={this.state.accountNo} /></td>
                                        </tr>

                                        <tr>
                                            <td>Institute code:</td>
                                            <td><input type="tel" pattern="[0-9]{4}" title="Please enter a four digit institute code" placeholder="Enter institution code" id="instituteCode" className="form-control" onChange={this.changeInstituteCodeHandler} value={this.state.instituteCode} /></td>
                                        </tr>


                                        <tr>
                                            <td>Course:</td>
                                            <td>
                                                <select className="form-control" placeholder="select course" id="course" onChange={this.changeCourseHandler} value={this.state.course}>
                                                    <optgroup label="select type">
                                                        <option>select</option>
                                                        <option>LLB</option>
                                                        <option>MBA</option>
                                                        <option>MBBS</option>
                                                        <option>BE</option>
                                                        <option>BTech</option>
                                                        <option>MTech</option>
                                                        <option>BCA</option>
                                                    </optgroup>
                                                </select>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>Course Year:</td>
                                            <td>
                                                <input type="number" className="form-control" value={this.state.courseYear} readOnly />
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>Field:</td>
                                            <td>
                                                <select className="form-control" placeholder="select field" id="field" onChange={this.changeFieldHandler} value={this.state.field}>
                                                    <optgroup label="select type">
                                                        <option>select</option>
                                                        <option>Medical</option>
                                                        <option>Law</option>
                                                        <option>Engineering</option>
                                                    </optgroup>
                                                </select>
                                            </td>
                                        </tr>









                                        <tr>
                                            <td><button type="submit" className="btn btn-outline-success button-round" >Save</button></td>
                                            <td><button type="button" id="hov" className="btn btn-danger button-round" onClick={this.cancel.bind(this)}>Cancel</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </form>

                        </div>


                    </div>
                </div>
            </div >
        );
    }
}

export default CreateScholarship;