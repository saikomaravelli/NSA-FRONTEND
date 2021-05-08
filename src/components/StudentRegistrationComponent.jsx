import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import StudentService from "../services/StudentService";



class StudentRegistrationComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: '',
            password: '',
            confirmPassword: '',
            role: 'student',
            studentId: '',
            fullName: '',
            gender: '',
            birthdate: '',
            mobile: '',
            email: '',
            address: '',
            city: '',
            aadhar: '',
            displayMessage:''
        }
    }
    saveStudent = (e) => {
        e.preventDefault();
        if(this.fieldsCheck()){
        let student = { userId: this.state.userId, password: this.state.password, role: this.state.role, studentId: this.state.studentId, fullName: this.state.fullName, gender: this.state.gender, birthdate: this.state.birthdate, mobile: this.state.mobile, email: this.state.email, address: this.state.address, city: this.state.city, aadhar: this.state.aadhar };

        console.log('student => ' + JSON.stringify(student));
        StudentService.addStudent(student).then((resp) => {
            console.log("Student registered sucessfully");
            alert("Student Registered Successfully");
            this.props.history.push('/login');
        }
        );
    }
    }
    back(){
        this.props.history.push('/login');
    }
    fieldsCheck = ()=>{          
        if(this.state.userId.length === 0){
            alert("userId field cannot be empty");
            document.getElementById("userId").focus();
            return false;
        }
        else if(this.state.password.length === 0){
            alert("password field cannot be empty");
            document.getElementById("password").focus();
            return false;
        }
        else if(this.state.confirmPassword.length === 0){
             alert("confirm password field cannot be empty");
             document.getElementById("confirmpassword").focus();
             return false;
         }
        else if(this.state.studentId.length === 0){
            alert("StudentId field cannot be empty");
            document.getElementById("studentId").focus();
            return false;
        }
        else if(this.state.fullName.length === 0){
            alert("fullName field cannot be empty");
            document.getElementById("fullName").focus();
            return false;
        }
        else if(this.state.gender.length === 0){
            alert("gender field cannot be empty");
            document.getElementById("gender").focus();
            return false;
        }
        else if(this.state.birthdate.length === 0){
            alert("birthdate field cannot be empty");
            document.getElementById("birthdate").focus();
            return false;
        }
        else if(this.state.mobile.length === 0){
            alert("mobile field cannot be empty");
            document.getElementById("mobile").focus();
            return false;
        }
        else if(this.state.email.length === 0){
            alert("email field cannot be empty");
            document.getElementById("email").focus();
            return false;
        }
        else if(this.state.address.length === 0){
            alert("length field cannot be empty");
            document.getElementById("address").focus();
            return false;
        }
        else if(this.state.city.length === 0){
            alert("city field cannot be empty");
            document.getElementById("city").focus();
            return false;
        }
        else if(this.state.aadhar.length === 0){
            alert("aadhar field cannot be empty");
            document.getElementById("aadhar").focus();
            return false;
        }
        return true;
    }
    validatePassword = ()=>{                                            
        if(this.state.password !== this.state.confirmPassword){
            alert("password doesn't match");
            this.setState({confirmPassword : "",});
        }
    }
    changeUidHandler = (event) => {
        this.setState({ userId: event.target.value });
    }
    changePasswordHandler = (event) => {
        this.setState({ password: event.target.value });
        if(!event.target.value){
            this.setState({displayMessage:""});
        }
        else if(event.target.value.length <= 5){
            this.setState({displayMessage:"weak password"});
        }
        else if(event.target.value.length <= 8){
            this.setState({displayMessage:"medium password"})
        }
        else if(event.target.value.length <= 12){
            this.setState({displayMessage:"strong password"})
        }
    }
    changeConfirmPasswordHandler = (event) => {
        this.setState({ confirmPassword: event.target.value });
    }
    changeRoleHandler = (event) => {
        this.setState({ role: event.target.value });
    }
    changeStIdHandler = (event) => {
        this.setState({ studentId: event.target.value });
    }
    changefullNameHandler = (event) => {
        this.setState({ fullName: event.target.value });
    }
    changeGenderHandler = (event) => {
        this.setState({ gender: event.target.value });
    }
    changeDateHandler = (event) => {
        this.setState({ birthdate: event.target.value });
    }
    changeMobileHandler = (event) => {
        this.setState({ mobile: event.target.value });
    }
    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value });
    }
    changeAddressHandler = (event) => {
        this.setState({ address: event.target.value });
    }
    changeCityHandler = (event) => {
        this.setState({ city: event.target.value });
    }
    changeAadharHandler = (event) => {
        this.setState({ aadhar: event.target.value });
    }
    render() {
        return (
            <div className="container">
                <div className="row  col-md-6 offset-md-3">
                    <div className="card">

                        <div className="card-header text-center  text-white " style={{ backgroundColor: '#1fdee3' }}>
                            <h2>Student Registration Form</h2>
                        </div>
                        <div className="card-body" >
                            <form onSubmit={this.saveStudent}>
                                <table>
                                    <tbody className="offset-md-1">
                                        <tr>
                                            <td>UserId:</td>
                                            <td> <input type="text" id="userId" placeholder="Enter new userId" className="form-control" onChange={this.changeUidHandler}></input></td>
                                        </tr>
                                        <tr>
                                            <td>Password:</td>
                                            <td><input type="password" id="password" placeholder="Enter new password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{3,15}" className="form-control" title="Must contain at least one number and one uppercase and lowercase letter and at least 8 or more characters" onChange={this.changePasswordHandler}></input></td>
                                            <td>
                                                {this.state.displayMessage ==="weak password"?(<div style={{color:"red"}}>{this.state.displayMessage}</div>):null}
                                                {this.state.displayMessage ==="medium password"?(<div style={{color:"orange"}}>{this.state.displayMessage}</div>):null}
                                                {this.state.displayMessage ==="strong password"?(<div style={{color:"green"}}>{this.state.displayMessage}</div>):null}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Confirm Password:</td>
                                            <td>
                                                <div className="input-group">
                                                
                                                    <input type="password" id="confirmpassword" placeholder="Re-enter the password" className="form-control" onBlur  ={this.validatePassword} onChange={this.changeConfirmPasswordHandler} value={this.state.confirmPassword} />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Role:</td>
                                            <td> <input type="text"  value={this.state.role} readOnly className="form-control" onChange={this.changeRoleHandler}></input></td>
                                        </tr>
                                        <tr>
                                            <td>StudentId:</td>
                                            <td> <input type="text" id="studentId" placeholder="Enter StudentId" className="form-control"  onChange={this.changeStIdHandler}></input></td>
                                        </tr>
                                        <tr>
                                            <td>Fullname:</td>
                                            <td> <input type="text" id="fullName" placeholder="Enter full name" className="form-control" pattern="[A-Za-z ]{2,30}" title="Must contain only characters and size should be between 2 to 30" onChange={this.changefullNameHandler}></input></td>
                                        </tr>
                                         <tr>
                                            <td>Gender:</td>
                                            <td><select id="gender" className="form-control" onChange={this.changeGenderHandler}>
                                                <option>Select Gender</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                            </select></td>
                                        </tr>
                                        <tr>
                                            <td>Birthdate:</td>
                                            <td> <input type="date" id="birthdate" className="form-control" onChange={this.changeDateHandler}></input ></td>
                                        </tr>
                                        <tr>
                                            <td>Mobile:</td>
                                            <td> <input type="text" id="mobile" placeholder="Enter mobile no" className="form-control" pattern="(^$|[0-9]{10})" title="Mobile no should be of 10 digits" onChange={this.changeMobileHandler}></input></td>
                                        </tr>
                                        <tr>
                                            <td>Email:</td>
                                            <td><input type="email" id="email" placeholder="Enter email" className="form-control" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Must be in format abc@gmail.com" onChange={this.changeEmailHandler}></input></td>
                                        </tr>

                                        <tr>
                                            <td>Address:</td>
                                            <td><input type="text" id="address" placeholder="Enter address" className="form-control" onChange={this.changeAddressHandler}></input></td>
                                        </tr>
                                        <tr>
                                            <td>City:</td>
                                            <td><input type="text" id="city" placeholder="Enter city" className="form-control" onChange={this.changeCityHandler}></input></td>
                                        </tr>
                                        <tr>
                                            <td>Aadhar:</td>
                                            <td><input type="text" id="aadhar" placeholder="Enter Aadhar" className="form-control" pattern="(^$|[0-9]{12})" title="Aadhar no should be of 12 digits" onChange={this.changeAadharHandler}></input></td>
                                        </tr>
                                        <br></br>
                                        <tr>
                                            <td><button type="submit" className="btn btn-outline-success button-round" >Save</button></td>
                                            <td><button className="btn btn-danger" onClick={this.back.bind(this)}>Cancel</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default StudentRegistrationComponent;