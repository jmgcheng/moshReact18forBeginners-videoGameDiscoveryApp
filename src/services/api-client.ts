import axios from "axios";

// https://rawg.io/@jmgcheng/apikey
export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '533858131d544230bbac4b558904c62d' 
    }
})