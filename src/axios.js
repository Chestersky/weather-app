import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://api.openweathermap.org'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN';

export default instance