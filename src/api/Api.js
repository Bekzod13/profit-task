import axios from 'axios';

const sort = 'products';

const baseURL = 'https://api.escuelajs.co/api/v1/'
const Api = axios.create({
    baseURL: `${baseURL}${sort}`,
    
})

export default Api