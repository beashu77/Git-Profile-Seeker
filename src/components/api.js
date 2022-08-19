import axios from "axios";

export function getData (query="github",page=1){
    return axios.get(`https://api.github.com/search/users?&page=${page}&per_page=10`,
    {
        params:{
            q:query
        }
    })
}

// https://api.github.com/search/users/&page=1&per_page=10?q=github

// https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc&page=1&per_page=10