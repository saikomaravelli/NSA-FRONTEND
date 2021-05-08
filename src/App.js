
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import InstituteRegistrationComponent from './components/InstituteRegistrationComponent';
import InstituteWelcomePageComponent from './components/InstituteWelcomePageComponent';
import Header from './components/Header';
import Footer from './components/Footer';
import ViewInstituteProfile from './components/ViewInstituteProfileComponent';
import ViewInstituteApprovalStatus from './components/ViewInstituteApprovalStatusComponent';
import Login from './components/Login';
import ChangeInstitutePassword from './components/ChangeInstitutePassword';
import MinistryWelcomePage from './components/MinistryWelcomePage';
import ViewAllScholarships from './components/ViewAllScholarships';
import GrantScholarships from './components/GrantScholarships';
import OfficerRegistrationComponent from './components/OfficerRegistrationComponent';
import ViewOfficerProfileComponent from './components/ViewOfficerProfileComponent';
import OfficerWelcomePage from './components/OfficerWelcomePage';
import OfficerAdminPage from './components/OfficerAdminPage';
import ReviewInstituteByOfficer from './components/ReviewInstituteByOfficer';
import ReviewScholarshipByOfficer from './components/ReviewScholarshipByOfficer';
import OfficerAdminUpdateProfile from './components/OfficerAdminUpdateProfile';
import ViewStateScholarships from './components/ViewStateScholarships';
import ViewStateInstitutes from './components/ViewStateInstitutes';
import ChangeOfficerPassword from './components/ChangeOfficerPassword';
import StudentHomePage from './components/StudentHomePage';
import StudentRegistrationComponent from './components/StudentRegistrationComponent';
import UpdateStudentComponent from './components/UpdateStudentComponent';
import ViewStudentProfile from './components/ViewStudentProfile';
import ChangeStudentPassword from './components/changeStudentPassword';
import CreateScholarship from './components/CreateScholarship';
import ViewStudentScholarship from './components/ViewStudentScholarship';
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          
        {/* <Route path="/" exact component={InstituteWelcomePageComponent}></Route> */}
        <Route path="/" exact component={Login}></Route>
        <Route path = "/login" component={Login}></Route>

        {/* institution  paths */}
          <Route path="/instituteWelcomePage/:userId" component={InstituteWelcomePageComponent}></Route>
          <Route path="/instituteRegistration/:id" component={InstituteRegistrationComponent}></Route>
          <Route path="/changeInstitutePassword/:instituteCode" exact component={ChangeInstitutePassword}></Route>
          <Route path="/viewInstituteProfile/:instituteCode" component={ViewInstituteProfile}></Route>
          <Route path="/viewInstituteStatus/:userId" component={ViewInstituteApprovalStatus}></Route>

          {/* Minister  paths */}
          <Route path="/MinistryWelcomePage/:userId" component={MinistryWelcomePage}></Route>
          <Route path="/viewAllScholarships/:userId" component={ViewAllScholarships}></Route>
          <Route path="/grantScholarships/:userId" component={GrantScholarships}></Route>

          {/* Officer  paths */}
          <Route path='/officerRegistrationPage/:id' component={OfficerRegistrationComponent}></Route>
          <Route path='/viewOfficerProfile/:state' component={ViewOfficerProfileComponent}></Route>
          <Route path='/officerWelcomePage/:state' component={OfficerWelcomePage}></Route>
          <Route path='/officerAdminPage/:state' component={OfficerAdminPage}></Route>
          <Route path='/reviewInstituteByOfficer/:name/:state' component={ReviewInstituteByOfficer}></Route>
          <Route path='/reviewScholarshipByOfficer/:name/:state' component={ReviewScholarshipByOfficer}></Route>
          <Route path='/officerAdminUpdate/:state' component={OfficerAdminUpdateProfile}></Route>
          <Route path='/viewStateInstitutes/:state' component={ViewStateInstitutes}></Route>
          <Route path='/viewStateScholarships/:state' component={ViewStateScholarships}></Route>
          <Route path='/changeOfficerPassword/:state' component={ChangeOfficerPassword}></Route>

          {/* student paths */}
          <Route path = "/StudentHomePage/:userId"  component = {StudentHomePage}></Route>
            <Route path = "/createstudent" component = {StudentRegistrationComponent}></Route>
            <Route path = "/updatestudent/:uid1" component = {UpdateStudentComponent}></Route>
            <Route path = "/viewstudentprofile/:uid1" component = {ViewStudentProfile}></Route>
            <Route path = "/changepassword/:uid1" component = {ChangeStudentPassword}></Route>

            {/* Scholarship paths */}
            <Route path="/createscholarship/:studUserId" component={CreateScholarship}></Route>
            <Route path="/viewStudentScholarship/:userId" component={ViewStudentScholarship}></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
