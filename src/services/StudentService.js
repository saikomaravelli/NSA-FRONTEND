import axios from 'axios';

class StudentService {

    
    addStudent(student){
        return axios.post("http://localhost:10002/createStudent",student);
    }
    getStudentbyUserId(userId){
        return axios.get("http://localhost:10002/getStudentbyUserId/"+userId);
    }
    editStudent(student){
        return axios.put("http://localhost:10002/editStudent",student);
    }
    
}

export default new StudentService()