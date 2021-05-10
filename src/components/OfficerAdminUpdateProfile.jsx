import { Component } from "react";
import OfficerService from "../services/OfficerService";

class OfficerAdminUpdateProfile extends Component {
    constructor()
    {   
        super();
        this.state={

            
            state:'all',
            role:'officer'

        }
        this.cancel=this.cancel.bind(this);
    }

    componentDidMount()
    {
        OfficerService.getOfficerByState(this.state.state).then( (res) =>{
            let officer = res.data;
            this.setState({

            userId:officer.userId,
            fuserId:officer.userId,
            name: officer.name,
            password:officer.password,
            confirmPassword:officer.password,
            state:officer.state
            });

        });
    }

    changePasswordHandler= (event) => {                     //displays messsage based on password length
        this.setState({password: event.target.value});
        if(!event.target.value)
        {
            this.setState({displayMessage:""});
        }
        else if(event.target.value.length<=3)
        {
            this.setState({displayMessage:"weak password"});
        }
        else if(event.target.value.length<=5)
        {
            this.setState({displayMessage:"medium password"});
        }
        else if(event.target.value.length<=8)
        {
            this.setState({displayMessage:"strong password"});
        }
    }

    changeConfirmPasswordHandler= (event) => {
        this.setState({confirmPassword: event.target.value});
    }

    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
        
    }


    validatePassword=()=>
      {
          if(this.state.password!==this.state.confirmPassword)
          {
              alert("Password doesn't match");
              this.setState({confirmPassword:"",});
          }
      }

      save=(e)=>
      {
          e.preventDefault();

          let officer=
                {
                    userId:this.state.userId , 
                    password:this.state.password,
                    role:this.state.role,
                    name:this.state.name,
                    state:this.state.state
                };
          OfficerService.editOfficer(this.state.fuserId,officer).then(res=>{
            this.props.history.push(`/officerAdminPage/${this.state.state}`);
        })  


      }
      cancel()
      {
        this.props.history.push(`/officerAdminPage/all`);
      }
    render() { 
        return ( 
            <div className="container">

                
            <div className="row col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-header text-center">
                        <h1>Officer Update Form</h1>
                    </div>
                    <div className="card-body col-md-offset-1">

                        <form onSubmit={this.save}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>USER ID:</td>
                                        <td>
                                            <div className="input-group">
                                                <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                                
                                                  <input type="text" value={this.state.userId} className="form-control" readOnly />
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>NEW PASSWORD:</td>
                                        <td>
                                            <div className="input-group">
                                                <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                                                <input type="password" placeholder="Enter New Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"  className="form-control"
                                                    value={this.state.password} onChange={this.changePasswordHandler} />

                                            </div>
                                        </td>
                                        <td>
                                            {this.state.displayMessage==="weak password"?(<div style={{color:"red"}}>{this.state.displayMessage}</div>):null}
                                            {this.state.displayMessage==="medium password"?(<div style={{color:"orange"}}>{this.state.displayMessage}</div>):null}
                                            {this.state.displayMessage==="strong password"?(<div style={{color:"green"}}>{this.state.displayMessage}</div>):null}
                                            
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>CONFIRM PASSWORD:</td>
                                        <td>
                                            <div className="input-group">
                                                <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                                                <input type="password" placeholder="Re-enter Password"  className="form-control" title="Please enter confirm password"
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
                                            <td><input type="text" placeholder="Enter Your Name"  className="form-control"
                                            value={this.state.name} onChange={this.changeNameHandler} pattern="[A-Za-z ]{2,30}"title="Enter officer name"/>
                                            </td>
                                            </tr>
                                        <tr>
                                            <td>OFFICER STATE:</td>
                                            <td>
                                                <input type="text"  className="form-control" value={this.state.state} readOnly onChange={this.changeStateHandler}/>

                                             </td>
                                        </tr>
                                        <tr>
                                            <td><button type="submit"  className="btn btn-outline-success button-round">Save</button></td>
                                            <td><button  className="btn btn-outline-danger button-round"  type="button"  onClick={this.cancel}>Cancel</button></td>

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
 
export default OfficerAdminUpdateProfile;