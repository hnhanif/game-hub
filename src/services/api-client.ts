import axios from 'axios';

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"a88d61fe3a8147f9bf3cc46658d3f517"
    }
})