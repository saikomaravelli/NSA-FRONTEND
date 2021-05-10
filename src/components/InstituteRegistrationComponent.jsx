import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import InstituteService from "../services/InstituteService";
class InstituteRegistrationComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pvalue: this.props.match.params.id,
            userId: '',
            password: '',
            confirmPassword: '',
            role: 'institution',
            code: '',
            category: 'Government',
            type: 'Medical',
            name: '',
            university: '',
            address: '',
            city: '',
            state: 'AndhraPradesh',
            yearOpen: '',
            telephone: '',
            principal: '',
            displayMessage: ''
        }
        this.saveOrUpdateInstitute = this.saveOrUpdateInstitute.bind(this);
    }

    componentDidMount() {
        if (this.state.pvalue === '_add') {
            return
        }
        else {
            InstituteService.statusUpdate(this.state.pvalue).then(resp => {
                let institute = resp.data;
                this.setState({
                    userId: institute.userId,
                    password: institute.password,
                    confirmPassword: institute.password,
                    role: 'institute',
                    code: institute.code,
                    category: institute.category,
                    type: institute.type,
                    name: institute.name,
                    university: institute.university,
                    address: institute.address,
                    city: institute.city,
                    state: institute.state,
                    yearOpen: institute.yearOpen,
                    telephone: institute.telephone,
                    principal: institute.principal
                });
            });
        }
    }
    changeUserIdHandler = (event) => {
        this.setState({ userId: event.target.value });
    }
    changePasswordHandler = (event) => {                        //this method is to display weak, medium, strong on UI depending on password length
        this.setState({ password: event.target.value });
        if (!event.target.value) {
            this.setState({ displayMessage: "" });
        }
        else if (event.target.value.length <= 5) {
            this.setState({ displayMessage: "weak password" });
        }
        else if (event.target.value.length <= 8) {
            this.setState({ displayMessage: "medium password" })
        }
        else if (event.target.value.length <= 12) {
            this.setState({ displayMessage: "strong password" })
        }
    }
    changeConfirmPasswordHandler = (event) => {
        this.setState({ confirmPassword: event.target.value });
    }
    changeRoleHandler = (event) => {
        this.setState({ role: event.target.value });
    }
    changeCodeHandler = (event) => {
        this.setState({ code: event.target.value });
    }
    changeCategoryHandler = (event) => {
        this.setState({ category: event.target.value });
    }
    changeTypeHandler = (event) => {
        this.setState({ type: event.target.value });
    }
    changeNameHandler = (event) => {
        this.setState({ name: event.target.value });
    }
    changeUniversityHandler = (event) => {
        this.setState({ university: event.target.value });
    }
    changeAddressHandler = (event) => {
        this.setState({ address: event.target.value });
    }
    changeCityHandler = (event) => {
        this.setState({ city: event.target.value });
    }
    changeStateHandler = (event) => {
        this.setState({ state: event.target.value });
    }
    changeYearOpenHandler = (event) => {
        this.setState({ yearOpen: event.target.value });
    }
    changeTelephoneHandler = (event) => {
        this.setState({ telephone: event.target.value });
    }
    changePrincipalHandler = (event) => {
        this.setState({ principal: event.target.value });
    }
    fieldsCheck = () => {                                 //method to validate whether all the input fields are empty or not
        if (this.state.userId.length === 0) {
            alert("userId field cannot be empty");
            document.getElementById("userId").focus();
            return false;
        }
        else if (this.state.password.length === 0) {
            alert("password field cannot be empty");
            document.getElementById("password").focus();
            return false;
        }
        else if (this.state.confirmPassword.length === 0) {
            alert("confirm password field cannot be empty");
            // document.getElementById("confirmPassword").focus();
            return false;
        }
        else if (this.state.code.length === 0) {
            alert("Institution code field cannot be empty");
            document.getElementById("code").focus();
            return false;
        }
        else if (this.state.name.length === 0) {
            alert("name field cannot be empty");
            document.getElementById("name").focus();
            return false;
        }
        else if (this.state.university.length === 0) {
            alert("university field cannot be empty");
            document.getElementById("university").focus();
            return false;
        }
        else if (this.state.address.length === 0) {
            alert("address field cannot be empty");
            document.getElementById("address").focus();
            return false;
        }
        else if (this.state.city.length === 0) {
            alert("city field cannot be empty");
            document.getElementById("city").focus();
            return false;
        }
        else if (this.state.yearOpen.length === 0) {
            alert("yearOpen field cannot be empty");
            document.getElementById("yearOpen").focus();
            return false;
        }
        else if (this.state.telephone.length === 0) {
            alert("telephone field cannot be empty");
            document.getElementById("telephone").focus();
            return false;
        }
        else if (this.state.principal.length === 0) {
            alert("principal field cannot be empty");
            document.getElementById("principal").focus();
            return false;
        }
        return true;
    }
    saveOrUpdateInstitute = (event) => {            //method to store values into database
        event.preventDefault();

        if (this.fieldsCheck()) {                     //fieldsCheck checks whether all fields are empty or not

            let institute = {
                userId: this.state.userId,
                password: this.state.password,
                role: this.state.role,
                code: this.state.code,
                category: this.state.category,
                type: this.state.type,
                name: this.state.name,
                university: this.state.university,
                address: this.state.address,
                city: this.state.city,
                state: this.state.state,
                yearOpen: this.state.yearOpen,
                telephone: this.state.telephone,
                principal: this.state.principal,
            };
            if (this.state.pvalue === "_add") {
                console.log("in saveorupdate");
                InstituteService.addInstitute(institute).then((resp) => {
                    console.log("institute added sucessfully");
                    alert("You have successfully registered");
                    this.props.history.push('/login');
                }
                );
            }
            else {
                InstituteService.editInstitute(this.state.pvalue, institute).then((resp) => {
                    alert("Your have successfully edited your details");
                    this.props.history.push(`/instituteWelcomePage/${this.state.pvalue}`);
                });
            }
        }
    }
    cancel() {
        if (this.state.pvalue === "_add") {
            this.props.history.push("/login");
        }
        else {
            this.props.history.push(`/instituteWelcomePage/${this.state.pvalue}`);
        }
    }
    validatePassword = () => {                                            //this methods checks whether both password and confirm password match or not
        if (this.state.password !== this.state.confirmPassword) {
            alert("password doesn't match");
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
                <div className="row  col-md-7 offset-md-3">
                    <div className="card">

                        <div className="card-header text-center  text-white " style={{ backgroundColor: '#1fdee3' }}>
                            {(this.state.pvalue === "_add") ?
                                <h2>Institution Registration Form</h2> : <h2>Institution Edit Details Form</h2>
                            }
                        </div>
                        <div className="card-body offset-md-1">
                            <form onSubmit={this.saveOrUpdateInstitute}>
                                <table>
                                    <tbody>

                                        <tr>
                                            <td>User Id:</td>
                                            <td>
                                                <div className="input-group">
                                                    {this.state.pvalue === '_add' ?
                                                        (<input type="text" title="this is userId" placeholder="Enter new user Id" id="userId" className="form-control" onChange={this.changeUserIdHandler} value={this.state.userId} />)
                                                        : (<input type="text" value={this.state.userId} className="form-control" readOnly />)}
                                                </div>
                                            </td>
                                        </tr>


                                        <tr>
                                            <td>{this.state.pvalue === '_add' ?
                                                (<label>New Password:</label>) : null}</td>
                                            <td>
                                                <div className="input-group">
                                                    {this.state.pvalue === '_add' ?
                                                        <input type="password" placeholder="Enter a new Password" id="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{3,15}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 3 or more characters" className="form-control" onChange={this.changePasswordHandler} value={this.state.password} />
                                                        : null}
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
                                            <td>{this.state.pvalue === '_add' ?
                                                <input type="checkbox" onClick={() => this.showPassword("password")} /> : null}
                                                {this.state.pvalue === '_add' ? <label>show Password</label> : null}
                                            </td></tr>
                                        <tr>
                                            <td>
                                                {this.state.pvalue === '_add' ?
                                                    (<label>Confirm Password:</label>) : null}</td>
                                            <td>
                                                <div className="input-group">
                                                    {this.state.pvalue === '_add' ?
                                                        <input type="password" placeholder="Re-enter the password" id="confirmPassword" className="form-control" onBlur={this.validatePassword} onChange={this.changeConfirmPasswordHandler} value={this.state.confirmPassword} />
                                                        : null}
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Role:</td>
                                            <td><input type="text" value="Institution" readOnly className="form-control" onChange={this.changeRoleHandler} value={this.state.role} /></td>
                                        </tr>
                                        <tr>
                                            <td>{this.state.pvalue === '_add' ?
                                                (<label>Institution Code:</label>) : null}</td>
                                            <td>{this.state.pvalue === '_add' ?
                                                <input type="tel" pattern="[0-9]{4}" id="code" placeholder="enter your institution code" title="Please enter a four digit institute code" className="form-control" onChange={this.changeCodeHandler} value={this.state.code} />
                                                : null}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>{this.state.pvalue === '_add' ?
                                                (<label>Category</label>) : null}</td>
                                            <td>
                                                {this.state.pvalue === '_add' ?
                                                    (<select className="form-control" onChange={this.changeCategoryHandler} value={this.state.category}>
                                                        <optgroup label="select category">
                                                            <option>Government</option>
                                                            <option>Private</option>
                                                            <option>Autonomous</option>
                                                        </optgroup>
                                                    </select>) : null}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>{this.state.pvalue === '_add' ?
                                                (<label>Type:</label>) : null}</td>
                                            <td>{this.state.pvalue === '_add' ?
                                                (<select className="form-control" onChange={this.changeTypeHandler} value={this.state.type}>
                                                    <optgroup label="select type">
                                                        <option>Medical</option>
                                                        <option>Law</option>
                                                        <option>Engineering</option>
                                                    </optgroup>
                                                </select>) : null}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>{this.state.pvalue === '_add' ?
                                                (<label>Name:</label>) : null}</td>
                                            <td>{this.state.pvalue === '_add' ?
                                                <input type="text" id="name" placeholder="Enter your college Name" className="form-control" onChange={this.changeNameHandler} value={this.state.name} />
                                                : null}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>{this.state.pvalue === '_add' ?
                                                (<label>University:</label>) : null}</td>
                                            <td>{this.state.pvalue === '_add' ?
                                                <input type="text" id="university" placeholder="Enter the university name" className="form-control" onChange={this.changeUniversityHandler} value={this.state.university} />
                                                : null}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>{this.state.pvalue === '_add' ?
                                                <label>Address:</label> : null}</td>
                                            <td>{this.state.pvalue === '_add' ?
                                                <textarea rows="5" cols="20" id="address" placeholder="Enter the institution address" className="form-control" onChange={this.changeAddressHandler} value={this.state.address}></textarea>
                                                : null}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>{this.state.pvalue === '_add' ?
                                                (<label>City:</label>) : null}</td>
                                            <td>{this.state.pvalue === '_add' ?
                                                <input type="text" id="city" placeholder="Enter City Name" className="form-control" onChange={this.changeCityHandler} value={this.state.city} />
                                                : null}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>{this.state.pvalue === '_add' ?
                                                (<label>State:</label>) : null}</td>
                                            <td>{this.state.pvalue === '_add' ?
                                                (<select className="form-control" onChange={this.changeStateHandler} value={this.state.state}>
                                                    <optgroup label="select state">
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
                                                </select>) : null}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>{this.state.pvalue === '_add' ?
                                                <label>YearOpen:</label> : null}</td>
                                            <td>{this.state.pvalue === '_add' ?
                                                <input type="number" min={1990} max={2021} id="yearOpen" placeholder="Enter Year of Opening" size="10" className="form-control" onChange={this.changeYearOpenHandler} value={this.state.yearOpen} />
                                                : null}
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>Telephone:</td>
                                            <td><input type="tel" pattern="[6-9]{1}[0-9]{9}" id="telephone" placeholder="Enter your institute phone no" className="form-control" onChange={this.changeTelephoneHandler} value={this.state.telephone} /></td>
                                        </tr>
                                        <tr>
                                            <td>Principal:</td>
                                            <td><input type="text" placeholder="Enter Principal Name" id="principal" className="form-control" onChange={this.changePrincipalHandler} value={this.state.principal} /></td>
                                        </tr>
                                        <tr>
                                            <td><button type="submit" className="btn btn-outline-success button-round" >Save</button></td>
                                            <td><button type="button" id="hov" className="btn btn-danger button-round" onClick={this.cancel.bind(this)}>Cancel</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </form>

                        </div>
                        {/* <div className="card-footer text-right bg-primary text-white">
                            <small> © National Scholarship App</small>
                        </div> */}
                    </div>
                </div>
            </div >
        );
    }
}

export default InstituteRegistrationComponent;