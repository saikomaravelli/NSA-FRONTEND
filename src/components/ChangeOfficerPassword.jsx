import { Component } from "react";

import OfficerService from "../services/OfficerService";

class ChangeOfficerPassword  extends Component {
    constructor(props){
        super(props);
        this.state = {
            state: this.props.match.params.state,
            oldPassword:'',
            newPassword:'',
            confirmNewPassword:'',
            officer: ''
        }
        this.changeOldPasswordHandler = this.changeOldPasswordHandler.bind(this);
        this.changeNewPasswordHandler = this.changeNewPasswordHandler.bind(this);
        this.changeConfirmNewPasswordHandler = this.changeConfirmNewPasswordHandler.bind(this);
    }
    componentDidMount(){
            OfficerService.getOfficerByState(this.state.state).then(resp=>{
            this.setState({officer:resp.data},()=>this.state.officer);
        });
    }
    checkEmpty = ()=>{                                          //checks whether the fields are empty or not
        if(this.state.oldPassword.length === 0){
            alert("old password cannot be empty ");
            document.getElementById("oldPassword").focus();
            return false;
        }
        else if(this.state.newPassword.length === 0){
            alert("New Password cannot be empty");
            document.getElementById("newPassword").focus();
            return false;
        }
        else if(this.state.confirmNewPassword.length === 0){
            alert("Confirm New Password cannot be empty");
            document.getElementById("confirmNewPassword").focus();
            return false;
        }
        return true;
    }
    comparePassword = ()=>{                                             //compares whether both passwords are same or not
            if(this.state.newPassword !== this.state.confirmNewPassword){
                alert("New password and confirm new password does not match");
                this.setState({confirmNewPassword:''});
                return false;
            }
            return true;
    }
    changePassword = (e)=>{                                             //saves data into database
        e.preventDefault();

        if(this.checkEmpty() && this.comparePassword()){
        if(this.state.officer.password === this.state.oldPassword){
            let officer = {
                password: this.state.newPassword
            }
            OfficerService.editOfficer(this.state.officer.userId,officer).then(()=>{
                alert("password changed successfully");
                if(this.state.state==="all")
                {
                    this.props.history.push(`/officerAdminPage/${this.state.officer.state}`)
                }
                else
                {
                this.props.history.push(`/officerWelcomePage/${this.state.officer.state}`);
                }
            });
        }
        else{
            alert("Invalid Old password");
        }
    }
    }
    back = ()=>{
        if(this.state.state==="all")
        {
            this.props.history.push(`/officerAdminPage/${this.state.state}`)
        }
        else
        {
            this.props.history.push(`/officerWelcomePage/${this.state.officer.state}`);
        }
    }
    changeOldPasswordHandler(event){
            this.setState({oldPassword:event.target.value});
    }
    changeNewPasswordHandler(event){
            this.setState({newPassword:event.target.value});
    }
    changeConfirmNewPasswordHandler(event){
            this.setState({confirmNewPassword:event.target.value});
    }
    showPassword = (s)=>{
        let f = document.getElementById(s);
        if(f.type === "password"){
            f.type="text"
        }
        else{
            f.type="password"
        }
    }
    render() { 
        return (
            <div className="container offset-md-4">
                <form onSubmit={this.changePassword}>
                 <h2 style={{ color: '#1fdee3' }}>Change Password Here</h2>
                    <table>
                        <tbody>
                            <br/>
                            <tr>
                                <td><label  htmlFor="oldPassword">OLD PASSWORD</label></td>
                                <td><input type="password" id="oldPassword" className="form-control" onChange={this.changeOldPasswordHandler} value={this.state.oldPassword}/></td>
                            </tr>
                            <tr>
                                <td></td>
                            <td><input type="checkbox" onClick={()=>this.showPassword("oldPassword")}/>show Password</td></tr>
                           
                            <tr>
                                <td><label  htmlFor="newPassword">NEW PASSWORD</label></td>
                                <td><input type="password" id="newPassword" pattern="(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{3,15}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 3 or more characters" className="form-control" onChange={this.changeNewPasswordHandler} value={this.state.newPassword}/></td>
                            </tr>
                            <tr>
                                <td></td>
                            <td><input type="checkbox" onClick={()=>this.showPassword("newPassword")}/>show Password</td></tr>


                            <tr>
                                <td><label  htmlFor="confirmNewPassword">CONFIRM NEW PASSWORD</label></td>
                                <td><input type="password" id="confirmNewPassword" className="form-control" onChange={this.changeConfirmNewPasswordHandler} value={this.state.confirmNewPassword}/></td>
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
 
export default ChangeOfficerPassword;