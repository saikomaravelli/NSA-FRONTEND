import React, { Component } from 'react'
// import LoginService from './LoginService';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.css'
import LoginService from '../services/LoginService';


class Login extends Component {

  constructor(props) {
    super(props)

    this.state = {

      student: '',
      id: '',
      password: '',
      loginresult: [],
      choice: 'std',

    };
    this.LoginUser= this.LoginUser.bind(this)
  }
  
  LoginUser(e)  {
    e.preventDefault();
    console.log("LoginUser")
    
    let logindetails = {
      userId: this.state.id, password: this.state.password
    }
    LoginService.login(logindetails).then((res) => {
      let loginsuccess = res.data
      this.setState({ loginresult: loginsuccess });
      
      if (loginsuccess && loginsuccess.role === 'student' ) {
        console.log("I'm in student")
        this.props.history.push(`/StudentHomePage/${loginsuccess.userId}`);
      }
      else {
        if (loginsuccess && loginsuccess.role === 'institution') {
          console.log("I'm in institution")
          this.props.history.push(`/instituteWelcomePage/${loginsuccess.userId}`);
        }
        else {
          if (loginsuccess && loginsuccess.role === 'officer') {
            if (loginsuccess.userId ==='officeradmin') {
              console.log("I'm in officeradmin")
              this.props.history.push(`/OfficerAdminPage/${loginsuccess.state}`);
              
            } else {
              console.log("I'm in officer")
              this.props.history.push(`/officerwelcomepage/${loginsuccess.state}`);

            }
          }
          else {
            if (loginsuccess && loginsuccess.role === 'ministry') {
              console.log("I'm in minister")
              this.props.history.push(`/MinistryWelcomePage/${loginsuccess.userId}`);
            }
            else {
              alert("Invalid login credentials");
            }
            
          }
        }
      }
    });
    
     
  }

  register = (event) => {
    event.preventDefault();
    if (this.state.choice === 'std') {
      this.props.history.push('/createstudent');
    }
    if (this.state.choice === 'ins') {
      this.props.history.push('/instituteRegistration/_add');
    }

  };

  componentDidMount() { }
  changeIdHandler = (event) => {
    this.setState({ id: event.target.value });
  };

  changePasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  };

  changeChoiceHandler = (event) => {
    this.setState({ choice: event.target.value });
  };



  render() {
    return (
      <div>
        <div className="container">
          <div className="row ">
            <div style={{ backgroundColor: '#F2FEFF' }} className="card col-md-6 offset-md-3 offset-md-3 p-3 mb-2 text-dark " >
              <h2 className="text-center font-weight-bold">Login</h2>
              <hr></hr>
              <div className="card-body">
                <form name="form" onSubmit={this.LoginUser}>

                  <div className="form-group">
                    <label className="font-weight-bold">Id</label>
                    <input type="text" placeholder="Id" className="form-control " name="id" value={this.state.id} onChange={this.changeIdHandler} required />
                  </div>
                  <div className="form-group">
                    <label className="font-weight-bold">Password</label>
                    <input type="password" placeholder="Password" className="form-control" name="password" value={this.state.password} onChange={this.changePasswordHandler} required />
                  </div>

                  <button className="btn btn-outline-primary btn btn-lg btn-block" type="submit" >Login</button>


                  

                  <br></br>
                  <div className="form-group">

                    <label className="font-weight-bold">Register as a&nbsp;&nbsp;&nbsp;</label>
                    <select id="users" name="users" value={this.state.choice} onChange={this.changeChoiceHandler}>
                      <option value="std">Student</option>
                      <option value="ins">Institution</option>

                    </select>

                  </div>

                  <div className="form-group">
                    <p className="text-primary">
                      Not a Member?&nbsp;&nbsp;
                      <button className="btn btn-outline-success" onClick={this.register}>
                        Register
                      </button>
                    </p>


                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;