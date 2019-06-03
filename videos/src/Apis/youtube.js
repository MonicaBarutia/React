import axios from 'axios';

const KEY = 'AIzaSyCnHC6C8gJRn1hzDgtEWt6ZWc47ZLPlE-I';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});