import { Component } from "react";
import StudentService from "../services/StudentService";



class UpdateStudentComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            uid: this.props.match.params.uid1,
            userId: '',
            password: '',
            confirmPassword: '',
            role: '',
            studentId: '',
            fullName: '',
            gender: '',
            birthdate: '',
            mobile: '',
            email: '',
            address: '',
            city: '',
            aadhar: ''
        }
    }
    componentDidMount() {
        StudentService.getStudentbyUserId(this.state.uid).then((res) => {
            let student1 = res.data;
            this.setState({ userId: student1.userId, password: student1.password,confirmPassword: student1.password, role: student1.role, studentId: student1.studentId, fullName: student1.fullName, gender: student1.gender, birthdate: student1.birthdate, mobile: student1.mobile, email: student1.email, address: student1.address, city: student1.city, aadhar: student1.aadhar });
        });
    }
    updateStudent = (e) => {
        e.preventDefault();
        if(this.fieldsCheck()){
        let student2 = { userId: this.state.userId, password: this.state.password, role: this.state.role, studentId: this.state.studentId, fullName: this.state.fullName, gender: this.state.gender, birthdate: this.state.birthdate, mobile: this.state.mobile, email: this.state.email, address: this.state.address, city: this.state.city, aadhar: this.state.aadhar };

        console.log('student2 => ' + JSON.stringify(student2));
        StudentService.editStudent(student2).then(res=>{
            console.log("Student Details Updated");
            alert("Student Details Updated Successfully");
            this.props.history.push(`/StudentHomePage/${this.state.uid}`);
        }
        );
    }
    }
    
    back = (e) => {
        this.props.history.push(`/StudentHomePage/${this.state.uid}`);
      };
    
    fieldsCheck = ()=>{          
        if(this.state.userId.length === 0){
            alert("userId field cannot be empty");
            document.getElementById("userId").focus();
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
            <div className="row  col-md-7 offset-md-3">
                <div className="card">

                    <div className="card-header text-center  text-white " style={{backgroundColor:'#1fdee3'}}>
                        <h2>Update Student Details</h2>
                    </div>
                    <div className="card-body offset-md-1" style={{ color: 'black' }}>
                            <form onSubmit={this.updateStudent}>
                            <table>
                                    <tbody>
                                <tr>
                                <td>UserId:</td>
                                <td><input type="text" id="userId" value={this.state.userId} className="form-control" readOnly></input></td>
                                </tr>
                                
                                <tr>
                                <td>Role:</td>
                                <td><input type="text" id="role" value={this.state.role} className="form-control" readOnly></input></td>
                                </tr>
                                {/* <tr>
                                <td>StudentId:</td>
                                <td><input type="text" id="studentId" value={this.state.studentId} className="form-control" pattern="[0-9]{4}" title="Must be a four digit number" onChange={this.changeStIdHandler}></input></td>
                                </tr> */}
                                <tr>
                                <td>Fullname:</td>
                                <td><input type="text" id="fullName" value={this.state.fullName} className="form-control" pattern="[A-Za-z ]{2,30}" title="Must contain only characters and size should be between 2 to 30" onChange={this.changefullNameHandler}></input></td>
                                </tr>
                                {/* <tr>
                                <td>Gender:</td>
                                <td><select id="gender" className="form-control" value={this.state.gender} onChange={this.changeGenderHandler}>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select></td>
                                </tr>
                                <tr>
                                <td>Birthdate:</td>
                                <td><input type="date" id="birthdate" className="form-control" value={this.state.birthdate} onChange={this.changeDateHandler}></input ></td>
                                </tr> */}
                                <tr>
                                <td>Mobile:</td>
                                <td><input type="text" id="mobile" value={this.state.mobile} className="form-control" pattern="(^$|[0-9]{10})" title="Mobile no should be of 10 digits" onChange={this.changeMobileHandler}></input></td>
                                </tr>
                                <tr>
                                <td>Email:</td>
                                <td><input type="email" id="email" value={this.state.email} className="form-control" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Must be in format abc@gmail.com" onChange={this.changeEmailHandler}></input></td>
                                </tr>

                                <tr>
                                <td>Address:</td>
                                <td><input type="text" id="address" value={this.state.address} className="form-control" onChange={this.changeAddressHandler}></input></td>
                                </tr>
                                <tr>
                                <td>City:</td>
                                <td><input type="text" id="city" value={this.state.city} className="form-control" onChange={this.changeCityHandler}></input></td>
                                </tr>
                                {/* <tr>
                                <td>Aadhar:</td>
                                <td><input type="text" id="aadhar" value={this.state.aadhar} className="form-control" pattern="(^$|[0-9]{12})" title="Aadhar no should be of 12 digits" onChange={this.changeAadharHandler}></input></td>
                                </tr> */}
                                <tr>
                                <td><button type="submit" className="btn btn-outline-success button-round" >Save</button></td>
                                <td><button className="btn btn-danger" style={{ marginLeft: "10px" }} onClick={this.back}>Cancel</button></td>
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

export default UpdateStudentComponent;