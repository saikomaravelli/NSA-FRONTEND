import axios from 'axios';




class ScholarshipService {

   
    createScholarship(scholarship){
        return axios.post("http://localhost:10002/createScholarship", scholarship);
    }

    viewScholarshipStatusUpdate(studentUserId)
    {
        return axios.get("http://localhost:10002/viewScholarshipStatusUpdate/"+studentUserId)
    }
}

export default new ScholarshipService()