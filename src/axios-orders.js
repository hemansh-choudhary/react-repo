import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://database-1.cluster-crkbag9rnjf2.us-east-2.rds.amazonaws.com'
});

export default instance;