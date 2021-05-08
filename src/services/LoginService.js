import axios from "axios";


const LOGIN_BASE_URL = "http://localhost:10002";


class LoginService{

    login(login){
        return axios.put(LOGIN_BASE_URL+"/userLogin",login);
    }

}
export default new LoginService()