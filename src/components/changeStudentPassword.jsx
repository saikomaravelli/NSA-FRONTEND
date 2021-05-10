import { Component } from "react";
import StudentService from "../services/StudentService";


class ChangeStudentPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uid: this.props.match.params.uid1,
            oldPassword: '',
            newPassword: '',
            confirmNewPassword: '',

            student: ''
        }
        this.changeOldPasswordHandler = this.changeOldPasswordHandler.bind(this);
        this.changeNewPasswordHandler = this.changeNewPasswordHandler.bind(this);
        this.changeConfirmNewPasswordHandler = this.changeConfirmNewPasswordHandler.bind(this);
    }
    componentDidMount() {
        StudentService.getStudentbyUserId(this.state.uid).then(resp => {
            this.setState({ student: resp.data }, () => this.state.student);
        });
    }
    checkEmpty = () => {
        if (this.state.oldPassword.length === 0) {
            alert("old password cannot be empty ");
            document.getElementById("oldPassword").focus();
            return false;
        }
        else if (this.state.newPassword.length === 0) {
            alert("New Password cannot be empty");
            document.getElementById("newPassword").focus();
            return false;
        }
        else if (this.state.confirmNewPassword.length === 0) {
            alert("Confirm New Password cannot be empty");
            document.getElementById("confirmNewPassword").focus();
            return false;
        }
        return true;
    }
    comparePassword = () => {
        if (this.state.newPassword !== this.state.confirmNewPassword) {
            alert("New password and confirm new password does not match");
            this.setState({ confirmNewPassword: '' });
            return false;
        }
        return true;
    }
    changePassword = (e) => {
        e.preventDefault();

        if (this.checkEmpty() && this.comparePassword()) {
            if (this.state.student.password === this.state.oldPassword) {
                let student = {
                    password: this.state.newPassword,
                    userId: this.state.uid
                }
                StudentService.editStudent(student).then(() => {
                    alert("password changed successfully");
                    this.props.history.push(`/StudentHomePage/${this.state.uid}`);
                });
            }
            else {
                alert("Invalid Old password");
            }
        }
    }
    back = () => {
        this.props.history.push(`/StudentHomePage/${this.state.uid}`);
    }
    changeOldPasswordHandler(event) {
        this.setState({ oldPassword: event.target.value });
    }
    changeNewPasswordHandler(event) {
        this.setState({ newPassword: event.target.value });
    }
    changeConfirmNewPasswordHandler(event) {
        this.setState({ confirmNewPassword: event.target.value });
    }
    showPassword = (s) => {
        let f = document.getElementById(s);
        if (f.type === "password") {
            f.type = "text"
        }
        else {
            f.type = "password"
        }
    }
    render() {
        return (
            <div className="container offset-md-4">
                <form onSubmit={this.changePassword}>
                    <h2 style={{ color: '#1fdee3' }}>Change Password Here</h2>
                    <table>
                        <tbody>
                            <br />
                            <tr>
                                <td><label htmlFor="oldPassword">OLD PASSWORD</label></td>
                                <td><input type="password" id="oldPassword" className="form-control" onChange={this.changeOldPasswordHandler} value={this.state.oldPassword} /></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><input type="checkbox" onClick={() => this.showPassword("oldPassword")} />show Password</td></tr>

                            <tr>
                                <td><label htmlFor="newPassword">NEW PASSWORD</label></td>
                                <td><input type="password" id="newPassword" pattern="(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{3,15}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 3 or more characters" className="form-control" onChange={this.changeNewPasswordHandler} value={this.state.newPassword} /></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><input type="checkbox" onClick={() => this.showPassword("newPassword")} />show Password</td></tr>


                            <tr>
                                <td><label htmlFor="confirmNewPassword">CONFIRM NEW PASSWORD</label></td>
                                <td><input type="password" id="confirmNewPassword" className="form-control" onChange={this.changeConfirmNewPasswordHandler} value={this.state.confirmNewPassword} /></td>
                            </tr>



                            <tr>
                                <td><button type="submit" className="btn btn-outline-success">Save</button></td>
                                <td><button type="button" className="btn btn-outline-danger" onClick={this.back}>Cancel</button></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        );
    }
}

export default ChangeStudentPassword;