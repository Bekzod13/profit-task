import axios from 'axios';

const userApiKey = '09ce9fffc3d44e99b6bf8b84c6b2c635';

const Api = axios.create({
    baseURL: `https://newsapi.org/v2/everything?q=tesla&from=2022-09-18&sortBy=publishedAt&apiKey=${userApiKey}`,
    
})

export default Api