import axios from "axios";


const INSTITUTION_BASE_URL = "http://localhost:10002";


class InstitutionService{

    addInstitute(institute){
        return axios.post(INSTITUTION_BASE_URL+"/createInstitute",institute);
    }
    editInstitute(instituteUserId, institute){
        return axios.put(INSTITUTION_BASE_URL+"/editInstitute/"+instituteUserId,institute);
    }
    statusUpdate(instituteUserId){
        return axios.get(INSTITUTION_BASE_URL+"/viewInstituteStatusUpdate/"+instituteUserId);
    }
    getInstitute(instituteCode){
        return axios.get(INSTITUTION_BASE_URL+"/viewInstituteByCode/"+instituteCode);
    }
    getAllInstitutes(){
        return axios.get(INSTITUTION_BASE_URL+"/viewAllInstitutes");
    }
    getInstitutesBySate(stateName){
        return axios.get(INSTITUTION_BASE_URL+"/viewInstitutesByState/"+stateName);
    }

}
export default new InstitutionService()