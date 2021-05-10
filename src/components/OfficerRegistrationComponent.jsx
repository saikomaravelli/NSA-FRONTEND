import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import OfficerService from "../services/OfficerService";
// import { ThemeProvider } from "react-bootstrap";


class OfficerRegistrationComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pvalue: this.props.match.params.id,
            userId: '',
            password: '',
            confirmPassword: '',
            role: 'officer',
            name: '',
            state: 'Assam',
            fuserId: '',
            displayMessage: ''



        }
        this.saveOfficer = this.saveOfficer.bind(this);
        this.cancel = this.cancel.bind(this);

    }

    componentDidMount() {
        if (this.state.pvalue === '_add') {
            return
        } else {
            OfficerService.getOfficerByState(this.state.pvalue).then((res) => {
                let officer = res.data;
                this.setState({
                    userId: officer.userId,
                    fuserId: officer.userId,
                    name: officer.name,
                    password: officer.password,
                    confirmPassword: officer.password,
                    state: officer.state
                });
            });
        }
    }

    changeUserIdHandler = (event) => {
        this.setState({ userId: event.target.value });
        //console.log("this is userid"+this.state.userId);

    }

    changePasswordHandler = (event) => {                 //displays different messages based on password length
        this.setState({ password: event.target.value });
        if (!event.target.value) {
            this.setState({ displayMessage: "" });
        }
        else if (event.target.value.length <= 3) {
            this.setState({ displayMessage: "weak password" });
        }
        else if (event.target.value.length <= 5) {
            this.setState({ displayMessage: "medium password" });
        }
        else if (event.target.value.length <= 8) {
            this.setState({ displayMessage: "strong password" });
        }
    }

    changeConfirmPasswordHandler = (event) => {
        this.setState({ confirmPassword: event.target.value });
    }

    changeRoleHandler = (event) => {
        this.setState({ role: event.target.value });
    }

    changeNameHandler = (event) => {
        this.setState({ name: event.target.value });

    }

    changeStateHandler = (event) => {
        this.setState({ state: event.target.value });

    }

    fieldsCheck = () =>                                    //checks fields are empty or not
    {
        if (this.state.userId.length === 0) {
            alert("userId field cannot be empty");
            document.getElementById("userId").focus();
            return false;
        }
        else if (this.state.password.length === 0) {
            alert("password field cannot be empty")
            document.getElementById("password").focus();
            return false;
        }
        else if (this.state.confirmPassword.length === 0) {
            alert("confirm password field cannot be empty")
            //document.getElementById("confirmPassword").focus();
            return false;
        }
        else if (this.state.name.length === 0) {
            alert("name field cannot be empty")
            document.getElementById("name").focus();
            return false;
        }
        return true;

    }


    saveOfficer = (e) => {
        e.preventDefault();

        if (this.fieldsCheck()) {
            let officer =
            {
                userId: this.state.userId,
                password: this.state.password,
                role: this.state.role,
                name: this.state.name,
                state: this.state.state
            };


            if (this.state.pvalue === '_add') {

                OfficerService.addOfficer(officer).then(res => {
                    alert("Profile Added Successfully")
                    this.props.history.push(`/officerAdminPage/all`);
                });
            }
            else {
                OfficerService.editOfficer(this.state.fuserId, officer).then(res => {
                    alert("Profile Updated Successfully")
                    this.props.history.push(`/officerWelcomePage/${this.state.state}`);
                })
            }
        }

    }
    cancel() {

        console.log("in cancel" + this.state.pvalue)

        if (this.state.pvalue === '_add') {
            console.log("in if cancel")
            this.props.history.push(`/officerAdminPage/all`);
        }
        else {
            console.log("in else cancel")
            this.props.history.push(`/officerWelcomePage/${this.state.state}`);
        }

    };

    validatePassword = () => {
        if (this.state.password !== this.state.confirmPassword) {
            alert("Password doesn't match");
            this.setState({ confirmPassword: "", });
        }
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


            <div className="container">


                <div className="row col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-header text-center">
                            {(this.state.pvalue === "_add") ?

                                <h2>Officer Registration Form</h2> : <h2>Officer Edit Details Form</h2>}
                        </div>
                        <div className="card-body col-md-offset-1">

                            <form onSubmit={this.saveOfficer}>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>USER ID:</td>
                                            <td>
                                                <div className="input-group">
                                                    <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                                    {this.state.pvalue === '_add' ?
                                                        <input type="text" placeholder="Enter new user Id" id="userId" title="Enter User Id" className="form-control" onChange={this.changeUserIdHandler} value={this.state.userId} />
                                                        : (<input type="text" value={this.state.userId} className="form-control" readOnly />)}
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>NEW PASSWORD:</td>
                                            <td>
                                                <div className="input-group">
                                                    <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                                                    <input type="password" placeholder="Enter New Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" id="password" title="password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" className="form-control"
                                                        value={this.state.password} onChange={this.changePasswordHandler} />

                                                </div>
                                            </td>
                                            <td>
                                                {this.state.displayMessage === "weak password" ? (<div style={{ color: "red" }}>{this.state.displayMessage}</div>) : null}
                                                {this.state.displayMessage === "medium password" ? (<div style={{ color: "orange" }}>{this.state.displayMessage}</div>) : null}
                                                {this.state.displayMessage === "strong password" ? (<div style={{ color: "green" }}>{this.state.displayMessage}</div>) : null}

                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td><input type="checkbox" onClick={() => this.showPassword("password")} />show Password</td></tr>


                                        <tr>
                                            <td>CONFIRM PASSWORD:</td>
                                            <td>
                                                <div className="input-group">
                                                    <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                                                    <input type="password" placeholder="Re-enter Password" className="form-control" id="confirmPassword" title="Please enter confirm password"
                                                        value={this.state.confirmPassword} onChange={this.changeConfirmPasswordHandler} onBlur={this.validatePassword} />

                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>ROLE:</td>
                                            <td><input type="text" value="Officer" readOnly className="form-control"
                                                value={this.state.role} onChange={this.changeRoleHandler}
                                            />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>OFFICER NAME:</td>
                                            <td><input type="text" placeholder="Enter Your Name" className="form-control"
                                                value={this.state.name} onChange={this.changeNameHandler} pattern="[A-Za-z ]{2,30}" id="name" title="Enter officer name" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>OFFICER STATE:</td>
                                            <td>
                                                {
                                                    this.state.pvalue === '_add' ?

                                                        (<select className="form-control" value={this.state.state} onChange={this.changeStateHandler}>
                                                            <optgroup label="Select state">

                                                                <option>AndhraPradesh</option>
                                                                <option>Arunachal Pradesh</option>
                                                                <option>Assam</option>
                                                                <option>Bihar</option>
                                                                <option>Chattisgarh</option>
                                                                <option>Goa</option>
                                                                <option>Gujarat</option>
                                                                <option>Haryana</option>
                                                                <option>Himachal Pradesh</option>
                                                                <option>Jharkhand</option>
                                                                <option>Karnataka</option>
                                                                <option>Kerala</option>
                                                                <option>Madhya Pradesh</option>
                                                                <option>Maharashtra</option>
                                                                <option>Manipur</option>
                                                                <option>Meghalaya</option>
                                                                <option>Mizoram</option>
                                                                <option>Nagaland</option>
                                                                <option>Odisha</option>
                                                                <option>Punjab</option>
                                                                <option>Rajasthan</option>
                                                                <option>Sikkim</option>
                                                                <option>Tamil Nadu</option>
                                                                <option>Telangana</option>
                                                                <option>Tripura</option>
                                                                <option>Uttar Pradesh</option>
                                                                <option>Uttarakhand</option>
                                                                <option>West Bengal</option>

                                                            </optgroup>

                                                        </select>) :
                                                        (<input type="text" value={this.state.state} className="form-control" readOnly />)

                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><button type="submit" className="btn btn-outline-success button-round">Save</button></td>
                                            <td><button className="btn btn-outline-danger button-round" type="button" onClick={this.cancel}>Cancel</button></td>

                                        </tr>
                                    </tbody>
                                </table>
                            </form>

                        </div>
                        <div className="card-footer text-right">
                            <small>© National Scholarship App</small>

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default OfficerRegistrationComponent;