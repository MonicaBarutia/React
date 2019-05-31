import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID a246712260dc7830f5679b5f9c090ffa472324646c23f0f53d717844e42b3e73'
    }
});