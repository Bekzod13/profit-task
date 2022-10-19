import axios from 'axios';

const userApiKey = '09ce9fffc3d44e99b6bf8b84c6b2c635';
const baseURL = 'https://newsapi.org/v2/everything?q=tesla&from=2022-09-19&sortBy=publishedAt&apiKey='
const Api = axios.create({
    baseURL: `${baseURL}${userApiKey}`,
    
})

export default Api