import axios from 'axios';



class MinisterService {

    getMinister(){
        return axios.put("http://localhost:10002/grantScholarship");
    }
    ViewAllScholarships(){
        return axios.get("http://localhost:10002/viewAllScholarships");
    }
    
    
}

export default new MinisterService()