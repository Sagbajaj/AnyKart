import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:7171/customers';
class ApiAdminService{

deleteSupplier(userId){
    return axios.delete(USER_API_BASE_URL + userId);
}
}
export default new ApiAdminService();