import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'2a053f111f094f36a74f6cdadb3e4bac'
    }
})

