import axios from "axios";

const OFFICER_BASE_URL  = "http://localhost:10002"


class OfficerService{

    addOfficer(officer)
    {
        return axios.post(OFFICER_BASE_URL+"/createofficerprofile",officer)
    }

    editOfficer(officerId,officer)
    {
        return axios.put(OFFICER_BASE_URL+"/editofficerprofile/"+officerId,officer)
    }


    getOfficerByState(officerState)
    {
        return axios.get(OFFICER_BASE_URL+"/viewofficerbystate/"+officerState)
    }

    getAllOfficers()
    {
        return axios.get(OFFICER_BASE_URL+"/viewallofficers")
    }
    reviewInstitute(officerName,officerState)
    {
        return axios.put(OFFICER_BASE_URL+"/reviewInstitute/"+officerName+","+officerState)
    }

    reviewScholarship(officerName,officerState)
    {
        return axios.put(OFFICER_BASE_URL+"/reviewScholarship/"+officerName+","+officerState)
    }

    viewInstitutesByState(state)
    {
        return axios.get(OFFICER_BASE_URL+"/viewInstitutesByState/"+state)
    }

    viewScholarshipByState(state)
    {
        return axios.get(OFFICER_BASE_URL+"/viewScholarshipsByState/"+state)
    }
}


export default new OfficerService()